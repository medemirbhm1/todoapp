"use client";
import { LogOut, PlusIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import routes from "@/lib/routes";
import { useRouter } from "next/navigation";

function ActionsSection() {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-4 flex-wrap mt-8">
      <Link href={routes.USER}>
        <Button className="flex items-center gap-1">
          <UserIcon /> Edit My info
        </Button>
      </Link>
      <Link href={routes.NEW_TASK}>
        <Button className="flex items-center gap-1" variant="secondary">
          <PlusIcon /> Add task
        </Button>
      </Link>
      <Button
        className="flex items-center gap-1"
        variant="outline"
        onClick={async () => {
          await fetch("/api/auth/logout", {
            method: "POST",
          });
          router.push(routes.LANDING);
        }}
      >
        <LogOut /> Log out
      </Button>
    </div>
  );
}

export default ActionsSection;
