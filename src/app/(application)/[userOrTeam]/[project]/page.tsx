import NewsOverview from "@/components/app/NewsOverview";
import Navbar from "@/components/Navbar";

export default function Project({
  params,
}: {
  params: { userOrTeam: string; project: string };
}) {
  const navigation = [
    { name: "🗂️ Dashboard", href: `/${params.userOrTeam}` },
    /*{ name: "📚️ Docs", href: "/docs" },*/
    {
      name: "📈 Analytics",
      href: `/${params.userOrTeam}/${params.project}/analytics`,
    },
    {
      name: "⚙️ Settings",
      href: `/${params.userOrTeam}/${params.project}/settings`,
    },
  ];
  return (
    <main className="">
      <Navbar navigationItems={navigation} />
      <NewsOverview
        title="This is a title"
        description="This is the description of what users can already very obviously see."
        buttonText="More articles"
      />
    </main>
  );
}
