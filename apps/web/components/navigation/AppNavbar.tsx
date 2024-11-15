import { MainNav } from "~/components/navigation/main-nav";
import TeamSwitcher from "~/components/navigation/team-switcher";
import { UserNav } from "~/components/navigation/user-nav";
import { ModeToggle } from "../themes/mode-toggle";

import { getServerSession } from "next-auth";
import { authOptions } from "~/lib/authOptions";
import { LoginButton } from "./AuthButtons";
import { Search } from "./search";

export default async function AppNavbar() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="ml-auto flex items-center space-x-4">
            <LoginButton />
            <ModeToggle />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
