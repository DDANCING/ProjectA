import { auth } from "@/auth";

export async function useUser() {
  const session = await auth();

  if (!session || !session.user) {
    return { user: null, userId: null };
  }

  const userId = session.user.id;
  return { user: session.user, userId };
}
