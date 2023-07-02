import { SafeUser } from "@/app/types";
import Avatar from "@/components/Header/UserMenu/Avatar/Avatar";
import useCountries from "@/hooks/useCountries";
import { Category } from "@/mocks/categories";
import React, { FC } from "react";
import { IconType } from "react-icons/lib";
import { VscCircleSmallFilled } from "react-icons/vsc";
import ListingCategory from "./ListingCategory/ListingCategory";
import dynamic from "next/dynamic";
import Heading from "@/components/Heading/Heading";
import ListingBooking from "../ListingBooking/ListingBooking";

const Map = dynamic(() => import("@/components/RentModal/Map"), { ssr: false });

interface ListingInfoProps {
  user: SafeUser | null;
  category: Category | undefined;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  locationValue: string;
  price: number;
}

const ListingInfo: FC<ListingInfoProps> = ({
  user,
  category,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  locationValue,
  price,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <section className="flex flex-col gap-8 ">
      <div className="flex justify-between w-full items-center gap-2">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Hospedado por {user?.name}</h3>
          <div className="flex flex-wrap gap-x-2 items-center">
            <span className="text-lg font-light text-neutral-700">
              {`${
                guestCount > 1
                  ? `${guestCount} hóspedes`
                  : `${guestCount} hóspede`
              }`}
            </span>
            <VscCircleSmallFilled />
            <span className="text-lg font-light text-neutral-700">
              {`${
                roomCount > 1 ? `${roomCount} quartos` : `${roomCount} quarto`
              }`}
            </span>
            <VscCircleSmallFilled />
            <span className="text-lg font-light text-neutral-700">
              {`${
                bathroomCount > 1
                  ? `${bathroomCount} banheiros`
                  : `${bathroomCount} banheiro`
              }`}
            </span>
          </div>
        </div>
        <Avatar src={user?.image} size={64} />
      </div>
      <hr />
      <ListingCategory
        icon={category?.icon as IconType}
        label={category?.label as string}
        description={category?.description as string}
      />
      <hr />
      <p className="text-lg font-light">{description}</p>
      <hr />
      <Heading
        title="Onde você estará"
        subtitle="Localização exata após a reserva"
        hierarchy="h3"
      />
      <Map center={coordinates} />
    </section>
  );
};

export default ListingInfo;
