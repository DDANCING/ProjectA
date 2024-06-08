import { auth } from "@/auth";

export async function useUser(req: Request) {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return session.user;
}
