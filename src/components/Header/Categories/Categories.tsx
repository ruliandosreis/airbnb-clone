"use client";
import React, { FC } from "react";

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

import Container from "@/components/Container/Container";
import CategoryBox from "./CategoryBox/CategoryBox";

import { usePathname, useSearchParams } from "next/navigation";
import { IconType } from "react-icons/lib";

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
    description: "Essa propriedade está localizada próxima à praia!",
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
    description: "Curta shows ao vivo e festivais de música em todo o mundo.",
  },
  {
    icon: GiIsland,
    value: "islands",
    label: "Ilhas",
    description: "Visite as ilhas mais bem avaliadas do mundo!",
  },
  {
    icon: FaFire,
    value: "popular",
    label: "Em alta",
    description: "Confira as propriedades mais procuradas!",
  },
  {
    icon: FaRegSnowflake,
    value: "artic",
    label: "Ártico",
    description: "Procurando fugir do calor? As melhores opções estão aqui!",
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
    description:
      "Conforto e aconchego, os melhores lugares para você repousar.",
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
    description: "Propriedades próximas à lagos.",
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
    label: "Luxe",
    description:
      "Acomodações sofisticadas e luxuosas para uma estadia excepcional.",
  },
];

const Categories: FC = ({}) => {
  const params = useSearchParams();
  const category = params?.get("category");

  const pathName = usePathname();

  const isHomePage = pathName === "/";

  // only renders in Home
  if (!isHomePage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((item: Category, index: number) => (
          <CategoryBox
            key={`${index}-${item.label}`}
            icon={item.icon}
            value={item.value}
            label={item.label}
            description={item.description}
            selected={category === item.value}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
