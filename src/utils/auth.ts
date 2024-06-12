import { clerkClient } from "@clerk/nextjs/server";

export async function fetchUserOrganizationMemberships(userId?: string) {
  if (!userId) {
    throw new Error("User is not authenticated");
  }

  const memberships = await clerkClient.users.getOrganizationMembershipList({
    userId,
  });
  return memberships?.data || [];
}
