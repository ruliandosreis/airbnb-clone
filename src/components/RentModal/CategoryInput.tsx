"use client";
import React, { FC } from "react";
import { Category } from "../Header/Categories/Categories";

interface CategoryInputProps extends Category {
  onClick: (value: string) => void;
}

const CategoryInput: FC<CategoryInputProps> = ({
  icon: Icon,
  value,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`rounded-xl border-2 p-4 flex flex-col md:flex-row items-center gap-3 hover:border-zinc-800 transition cursor-pointer ${
        selected ? "border-zinc-800" : "border-neutral-200"
      }`}
      onClick={() => onClick(value)}
    >
      <Icon size={30} />
      <p className="font-semibold">{label}</p>
    </div>
  );
};

export default CategoryInput;
