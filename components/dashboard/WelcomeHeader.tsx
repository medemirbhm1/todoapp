"use client";

import { useUser } from "@/providers/UserProvider";

function WelcomeHeader() {
  const { user } = useUser();
  return (
    <div className="container text-6xl text-center font-semibold">
      Welcome {user?.name} !
    </div>
  );
}

export default WelcomeHeader;
