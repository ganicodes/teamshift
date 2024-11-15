import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppNavbar from "~/components/navigation/AppNavbar";
import { ThemeProvider } from "~/components/themes/theme-provider";
import { Providers } from "~/components/wrappers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeamShift",
  description:
    "TeamShift - Employee Shift Scheduling & Management SaaS Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <AppNavbar />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
