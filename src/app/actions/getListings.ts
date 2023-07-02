import prisma from "@/lib/prismadb";

export default async function getListings() {
  try {
    const currentListings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = currentListings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
