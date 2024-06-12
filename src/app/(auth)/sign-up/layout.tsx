import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up to vertature.com",
  description: "Automagic apps for all your content needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {children}
    </div>
  );
}
