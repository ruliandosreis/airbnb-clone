"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FC, useCallback } from "react";

import qs from "query-string";
import { Category } from "../Categories";

const CategoryBox: FC<Category> = ({
  icon: Icon,
  value,
  label,
  description,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: value,
    };

    if (params?.get("category") === value) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      { url: "/", query: updatedQuery },
      { skipNull: true }
    );

    router.push(url);
  }, [value, params, router]);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 border-transparent hover:border-b-neutral-300 hover:text-neutral-800 transition cursor-pointer
        ${
          selected
            ? "border-b-neutral-800 hover:border-b-neutral-800 text-neutral-800"
            : "transparent text-neutral-500"
        }
      `}
      onClick={handleClick}
    >
      <Icon size={26} />
      <p
        className={`text-sm ${
          selected ? "font-semibold" : "font-medium"
        } text-center`}
      >
        {label}
      </p>
    </div>
  );
};

export default CategoryBox;
