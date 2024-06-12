import OrganizationRedirect from "@/components/OrganizationRedirect";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export default function ProjectsPage({
  params,
}: {
  params: { userOrTeam: string };
}) {
  const navigation = [
    { name: "➕ Create an app", href: "#" },
    /*{ name: "📚️ Docs", href: "/docs" },*/
    { name: "⚙️ Settings", href: `/${params.userOrTeam}/settings` },
  ];

  return (
    <main>
      <Navbar navigationItems={navigation} />
      <OrganizationRedirect />
      <Projects />
    </main>
  );
}
