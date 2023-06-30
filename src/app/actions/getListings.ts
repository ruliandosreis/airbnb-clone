import prisma from "@/lib/prismadb";

export default async function getListings() {
  try {
    const currentListings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return currentListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
