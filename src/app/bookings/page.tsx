import EmptyState from "@/components/EmptyState/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getBookings from "@/app/actions/getBookings";
import TripsDetails from "@/components/TripsDetails/TripsDetails";
import BookingsClient from "@/components/BookingsClient/BookingsClient";
import Container from "@/components/Container/Container";

const BookingsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Não autoraizado"
        subtitle="Realize o login para visualizar a página."
      />
    );
  }

  const bookings = await getBookings({ authorId: currentUser.id });

  if (!bookings || bookings.length === 0) {
    return (
      <EmptyState
        title="Sem reservas encontradas"
        subtitle="Você ainda não possui nenhuma reserva em seus espaços."
      />
    );
  }

  return (
    <Container>
      <BookingsClient bookings={bookings} currentUser={currentUser} />
    </Container>
  );
};

export default BookingsPage;
