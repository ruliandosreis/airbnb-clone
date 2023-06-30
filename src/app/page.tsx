import Container from "@/components/Container/Container";
import EmptyState from "@/components/EmptyState.tsx/EmptyState";
import getListings from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";
import ListingCard from "@/components/ListingCard/ListingCard";
import { SafeListing } from "./types";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (!listings || listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className="pt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing: SafeListing, index: number) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
