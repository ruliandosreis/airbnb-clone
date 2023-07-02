import getBookings from "@/app/actions/getBookings";
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
  const bookings = await getBookings(params);

  if (!listing) return <EmptyState />;

  return (
    <Container>
      <ListingDetails
        listing={listing}
        currentUser={currentUser}
        bookings={bookings}
      />
    </Container>
  );
};

export default ListingPage;
