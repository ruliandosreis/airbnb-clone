"use client";
import React, { FC } from "react";

import Container from "@/components/Container/Container";
import CategoryBox from "./CategoryBox/CategoryBox";

import { usePathname, useSearchParams } from "next/navigation";

import { categories, Category } from "@/mocks/categories";

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
