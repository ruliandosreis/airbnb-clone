import EmptyState from "@/components/EmptyState/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import Container from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import ListingCard from "@/components/ListingCard/ListingCard";

export default async function FavoritesPage() {
  const currentUser = await getCurrentUser();
  const favorites = await getFavorites();

  if (!favorites || favorites.length === 0) {
    return (
      <EmptyState
        title="Nenhum favorito encontrado"
        subtitle="Adicione espaços a sua lista de favoritos para encontrá-los mais facilmente aqui!"
      />
    );
  }

  return (
    <Container>
      <Heading
        title="Favoritos"
        subtitle="Aqui estão os espaços que você gostou!"
        hierarchy="h2"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {favorites.map((favorite) => (
          <ListingCard
            key={favorite.id}
            data={favorite}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
