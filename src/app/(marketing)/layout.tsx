import type { Metadata } from "next";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Navbar from "@/components/Navbar";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
export const metadata: Metadata = {
  title: "vertature.com",
  description: "Automagic apps for all your content needs.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();

  return (
    <>
      <SignedIn>
        <Navbar
          navigationItems={[{ name: "Dashboard", href: `/${user?.username}` }]}
        />
      </SignedIn>
      <SignedOut>
        <Navbar navigationItems={navigation} />
      </SignedOut>

      <div className="">{children}</div>
    </>
  );
}
