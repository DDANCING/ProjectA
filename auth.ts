
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"
import { UserRole } from "@prisma/client"

export const { 
  handlers,
  auth, 
  signIn,
  signOut 
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
   async linkAccount({ user }) {
     await db.user.update({
      where: {id: user.id},
      data: {emailVerified: new Date()}
     })
   }
  },
  callbacks: {
    async signIn({ user, account }) {
      
      // Permite autenticação OAuth sem verificação de email
      if (account?.provider !== "credentials") return true;
    
      // Busca o usuário existente pelo ID
      const existingUser = await getUserById(user.id);
    
      // Se o email do usuário existente não estiver verificado, retorna false
      if(!existingUser?.emailVerified) return false;
    
      // Se o email do usuário existente estiver verificado, retorna true
      return true;
    },
    async session({token, session}) {
     if (token.sub && session.user) {
      session.user.id = token.sub
     }
     if (token.role  && session.user) {
      session.user.role = token.role as UserRole;
     }
      return session;
    },
    async jwt({token}) {
      if (!token.sub) return token;
    
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})