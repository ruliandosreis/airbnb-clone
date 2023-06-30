"use client";
import { SafeUser } from "@/app/types";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import Heading from "@/components/Heading/Heading";
import useCountries from "@/hooks/useCountries";
import Image from "next/image";
import React, { FC } from "react";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: FC<ListingHeadProps> = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full h-[40vh] overflow-hidden rounded-xl relative">
        <Image
          alt="Imagem do espaço"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <FavoriteButton listingId={id} currentUser={currentUser} size={36} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
