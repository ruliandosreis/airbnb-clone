import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import Container from "@/components/Container/Container";
import EmptyState from "@/components/EmptyState.tsx/EmptyState";
import ListingDetails from "@/components/ListingDetails/ListingDetails";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) return <EmptyState />;

  return (
    <Container>
      <ListingDetails listing={listing} currentUser={currentUser} />
    </Container>
  );
};

export default ListingPage;
