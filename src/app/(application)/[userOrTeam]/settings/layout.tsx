import { currentUser } from "@clerk/nextjs/server";
import { Protect } from "@clerk/nextjs";
import type { Metadata } from "next";
import OrganizationRedirect from "@/components/OrganizationRedirect";
import Navbar from "@/components/Navbar";
import type { OrganizationMembership } from "@/utils/additional-types";
import { fetchUserOrganizationMemberships } from "@/utils/auth";

export const metadata: Metadata = {
  title: "vertature.com",
  description: "Automagic apps for all your content needs.",
};

export default async function Layout({
  params: { userOrTeam },
  children,
}: Readonly<{
  params: { userOrTeam: string };
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  if (!user) return;
  let memberships: [] | OrganizationMembership[];
  if (user.username !== userOrTeam) {
    memberships = await fetchUserOrganizationMemberships(user.id);
  }

  const navigation = [
    { name: "🗂️ Projects", href: `/${userOrTeam}` },
    /*{ name: "📚️ Docs", href: "/docs" },*/
  ];

  return (
    <>
      <Navbar navigationItems={navigation} />
      <Protect
        condition={() => {
          if (user.username === userOrTeam) return true;
          let shouldShow = false;
          memberships.forEach((organization) => {
            if (
              organization?.organization?.name === userOrTeam &&
              organization?.role === "org:admin"
            )
              shouldShow = true;
          });
          return shouldShow;
        }}
        fallback={
          <p className="flex justify-center items-center h-screen dark:text-gray-200 -mt-24">
            🛑 Only a team admin can access this page.
          </p>
        }
      >
        <div className="">{children}</div>
      </Protect>
      <OrganizationRedirect additionalPathname="/settings" />
    </>
  );
}
