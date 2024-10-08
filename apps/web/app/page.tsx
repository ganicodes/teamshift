import { buttonVariants } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="">
      <Link
        className={buttonVariants({ variant: "default" })}
        href={"/dashboard"}
      >
        Go to dashboard
      </Link>
    </main>
  );
}
