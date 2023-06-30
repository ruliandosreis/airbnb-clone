"use client";
import React, { FC, useCallback, useMemo } from "react";
import useCountries from "@/hooks/useCountries";

import { SafeListing, SafeUser } from "@/app/types";

import { Booking } from "@prisma/client";
import { useRouter } from "next/navigation";

import { format } from "date-fns";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface ListingCardProps {
  data: SafeListing;
  booking?: Booking;
  disabled?: boolean;
  currentUser?: SafeUser | null;
}

const ListingCard: FC<ListingCardProps> = ({
  data,
  booking,
  disabled,
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;
    },
    [disabled]
  );

  const price = useMemo(() => {
    if (booking) {
      return booking.totalPrice;
    } else {
      return data.price;
    }
  }, [booking, data.price]);

  const bookingDate = useMemo(() => {
    if (!booking) {
      return null;
    }
    const startDate = new Date(booking.startDate);
    const endDate = new Date(booking.endDate);

    return `${
      format(startDate, "dd/MMM/yyyy") + " - " + format(endDate, "dd/MM/yyyy")
    }`;
  }, [booking]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="Imagem do espaço"
            src={data.imageSrc}
            className="object-cover w-full h-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <FavoriteButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <p className="font-semibold text-lg">
          {location?.region}, {location?.label}
        </p>
        {bookingDate && (
          <p className="font-light text-md text-neutral-500">{bookingDate}</p>
        )}
        <div className="flex items-center gap-1">
          <p className="font-semibold text-base">
            R$
            {price
              .toString()
              .replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/gm, "$1$2.")}
          </p>
          {!booking && <span className="font-light text-sm">noite</span>}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
