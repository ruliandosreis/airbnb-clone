import { Category } from "@/mocks/categories";

export default function switchCategoryLanguage(category: string) {
  switch (category) {
    case "beach":
      return "Em frente à praia";
    case "camping":
      return "Acampamentos";
    case "festival":
      return "Festivais";
    case "islands":
      return "Ilhas";
    case "popular":
      return "Em alta";
    case "artic":
      return "Ártico";
    case "desert":
      return "Deserto";
    case "mountain":
      return "Montanhas";
    case "pool":
      return "Piscinas";
    case "inn":
      return "Pousadas";
    case "refinedPath":
      return "Espaços Adaptados";
    case "castle":
      return "Castelos";
    case "lake":
      return "Lagos";
    case "cave":
      return "Cavernas";
    case "Lux":
      return "Luxuoso";
    default:
      return "Sem categoria definida";
  }
}
