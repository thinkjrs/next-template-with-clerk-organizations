import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vertature.com",
  description: "Automagic apps for all your content needs.",
};

export default async function Layout({
  params: { project },
  children,
}: Readonly<{
  params: { project: string };
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  if (!user) return;
  // using userId call projects in db
  return (
    <>
      <div className="">{children}</div>
    </>
  );
}
