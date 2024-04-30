import type { NextAuthConfig } from "next-auth"
import Credencials from "next-auth/providers/credentials"

import { LoginSchema } from "@/schemas"
 
export default { 
  providers: [
    Credencials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password} = validatedFields.data;
        }
      }
    })
  ],
} satisfies NextAuthConfig