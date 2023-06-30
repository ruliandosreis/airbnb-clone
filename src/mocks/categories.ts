import { IconType } from "react-icons/lib";
import { FaRegSnowflake, FaUmbrellaBeach, FaFire } from "react-icons/fa";
import { MdOutlineFestival, MdPool } from "react-icons/md";
import { TbDisabled } from "react-icons/tb";
import {
  GiIsland,
  GiCactus,
  GiMountainRoad,
  GiCoffeeCup,
  GiCampingTent,
  GiCastle,
  GiBoatFishing,
  GiCaveEntrance,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";

export interface Category {
  icon: IconType;
  value: string;
  label: string;
  description?: string;
  selected?: boolean;
}

export const categories: Array<Category> = [
  {
    icon: FaUmbrellaBeach,
    value: "beach",
    label: "Em frente à praia",
    description: "Aproveite tudo que o litoral tem a oferecer!",
  },
  {
    icon: GiCampingTent,
    value: "camping",
    label: "Acampamentos",
    description: "Contato direto com a natureza!",
  },
  {
    icon: MdOutlineFestival,
    value: "festival",
    label: "Festivais",
    description: "Curta shows ao vivo e festivais de música!",
  },
  {
    icon: GiIsland,
    value: "islands",
    label: "Ilhas",
    description: "Aventura e diversão em uma ilha paradisíaca!",
  },
  {
    icon: FaFire,
    value: "popular",
    label: "Em alta",
    description: "Essa propriedade está muito popular no momento!",
  },
  {
    icon: FaRegSnowflake,
    value: "artic",
    label: "Ártico",
    description: "Procurando fugir do calor? Escolheu o lugar certo!",
  },
  {
    icon: GiCactus,
    value: "desert",
    label: "Desertos",
    description: "A aventura que você estava planejando.",
  },
  {
    icon: GiMountainRoad,
    value: "mountain",
    label: "Montanhas",
    description: "A aventura que você estava planejando.",
  },
  {
    icon: MdPool,
    value: "pool",
    label: "Piscinas",
    description: "Procurando fugir do calor? As melhores opções estão aqui!",
  },
  {
    icon: GiCoffeeCup,
    value: "inn",
    label: "Pousadas",
    description: "Conforto e aconchego, o melhor lugar para você repousar.",
  },
  {
    icon: TbDisabled,
    value: "refinedPath",
    label: "Espaços Adaptados",
    description: "Acessibilidade à todos(as)!",
  },
  {
    icon: GiCastle,
    value: "castle",
    label: "Castelos",
    description: "Tenha a experiência de conhecer um castelo!",
  },
  {
    icon: GiBoatFishing,
    value: "lake",
    label: "Lagos",
    description: "Aproveite a vista de um lindo lago!",
  },
  {
    icon: GiCaveEntrance,
    value: "cave",
    label: "Cavernas",
    description: "Explore os interiores das cavernas.",
  },
  {
    icon: IoDiamond,
    value: "lux",
    label: "Luxuoso",
    description:
      "Acomodação sofisticada e luxuosa para uma experiência excepcional.",
  },
];
