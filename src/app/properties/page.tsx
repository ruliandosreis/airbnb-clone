import EmptyState from "@/components/EmptyState/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import Container from "@/components/Container/Container";
import getListings from "../actions/getListings";
import PropertiesClient from "@/components/PropertiesClient/PropertiesClient";

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return (
      <EmptyState
        title="Não autorizado"
        subtitle="Realize o login para visualizar a página."
      />
    );

  const listings = await getListings({ userId: currentUser.id });

  if (!listings || listings.length === 0)
    return (
      <EmptyState
        title="Nenhuma propriedade encontrada"
        subtitle="Cadastre um espaço para visualizá-lo aqui!"
      />
    );

  return (
    <Container>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </Container>
  );
}
