import Navbar from "@/components/Navbar";
import { currentUser } from "@clerk/nextjs/server";
import { Protect } from "@clerk/nextjs";
import type { Metadata } from "next";
import OrganizationRedirect from "@/components/OrganizationRedirect";
import type { OrganizationMembership } from "@/lib/utils/additional-types";
import { fetchUserOrganizationMemberships } from "@/lib/utils/auth";

export const metadata: Metadata = {
  title: "vertature.com",
  description: "Automagic apps for all your content needs.",
};

export default async function Layout({
  params: { userOrTeam, project },
  children,
}: Readonly<{
  params: { userOrTeam: string; project: string };
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  if (!user) return;
  let memberships: [] | OrganizationMembership[];
  if (user.username !== userOrTeam) {
    memberships = await fetchUserOrganizationMemberships(user.id);
  }

  const navigation = [
    { name: "🗂️ Project", href: `/${userOrTeam}/${project}` },
    /*{ name: "📚️ Docs", href: "/docs" },*/
    {
      name: "📈 Analytics",
      href: `/${userOrTeam}/${project}/analytics`,
    },
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
      <OrganizationRedirect additionalPathname={`${project}/settings`} />
    </>
  );
}
