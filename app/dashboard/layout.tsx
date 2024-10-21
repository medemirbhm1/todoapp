import { getUser } from "@/lib/getters";
import { UserProvider } from "@/providers/UserProvider";
import { redirect, RedirectType } from "next/navigation";

async function Layout({ children }: { children: React.ReactNode }) {
  const user = await getUser();
  if (!user) {
    return redirect("/login", RedirectType.replace);
  }
  return <UserProvider initialUser={user}>{children}</UserProvider>;
}

export default Layout;
