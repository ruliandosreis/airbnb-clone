import React, { FC } from "react";
import { IconType } from "react-icons/lib";

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

const ListingCategory: FC<ListingCategoryProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="flex gap-8 items-center">
      <Icon size={36} />
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold">{label}</h4>
        <p className="text-neutral-500">{description}</p>
      </div>
    </div>
  );
};

export default ListingCategory;
