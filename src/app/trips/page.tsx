import EmptyState from "@/components/EmptyState/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getBookings from "../actions/getBookings";
import Container from "@/components/Container/Container";
import TripsDetails from "@/components/TripsDetails/TripsDetails";

export default async function TripsPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return (
      <EmptyState
        title="Não autorizado"
        subtitle="Realize o login para visualizar a página."
      />
    );

  const bookings = await getBookings({ userId: currentUser.id });

  if (!bookings || bookings.length === 0)
    return (
      <EmptyState
        title="Nenhuma viagem encontrada"
        subtitle="Você ainda não realizou nenhuma viagem."
      />
    );

  return (
    <Container>
      <TripsDetails bookings={bookings} currentUser={currentUser} />
    </Container>
  );
}
