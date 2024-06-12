"use client";
import { useEffect } from "react";
import { useOrganization, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const addPath = (basePath: string, additionalPath?: string) =>
  typeof additionalPath !== "undefined"
    ? `/${basePath}/${additionalPath}`
    : `/${basePath}`;

export default function OrganizationRedirect(props: {
  additionalPathname?: string;
}) {
  const { isLoaded: isUserLoaded, user } = useUser();
  const { isLoaded: isOrganizationLoaded, organization } = useOrganization();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (organization?.name && isOrganizationLoaded && pathname !== "/") {
      router.push(addPath(organization.name, props?.additionalPathname));
    }
  }, [
    isOrganizationLoaded,
    organization,
    router,
    pathname,
    props?.additionalPathname,
  ]);
  useEffect(() => {
    if (user?.username && !organization && isUserLoaded && pathname !== "/") {
      router.push(addPath(user.username, props?.additionalPathname));
    }
  }, [
    isUserLoaded,
    organization,
    router,
    user,
    pathname,
    props?.additionalPathname,
  ]);
  return null;
}
