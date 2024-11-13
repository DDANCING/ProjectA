"use client";

import { redirect, usePathname } from "next/navigation";
import RequestForm from "@/app/(protected)/_components/requests/requests";
import { useCurrentUser } from "@/data/hooks/use-current-user";


const RequestPage = () => {
  const user = useCurrentUser();
  const userName = user?.name;
  const userEmail = user?.email;
  if (!userName || !userEmail) {
    redirect("/auth/login")
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <RequestForm userName={userName} userEmail={userEmail} />
    </div>
  );
};

export default RequestPage;
