"use client";

import { Button } from "@repo/ui/components/ui/button";
import { DropdownMenuItem } from "@repo/ui/components/ui/dropdown-menu";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        await signOut();
        router.push("/");
      }}
    >
      Log out
    </DropdownMenuItem>
  );
};

export const LoginButton = () => {
  return <Button onClick={() => signIn()}>Sign in</Button>;
};

export default LogoutButton;
