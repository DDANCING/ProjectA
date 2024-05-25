import { auth } from "@/auth";

export async function useUserId(req: Request) {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return session.user.id;
}
