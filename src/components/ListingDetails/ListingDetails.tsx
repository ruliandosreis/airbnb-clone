"use client";
import { SafeListing, SafeUser } from "@/app/types";
import { categories } from "@/mocks/categories";
import switchCategoryLanguage from "@/utils/switchCategoryLanguage";
import { Booking } from "@prisma/client";
import React, { FC, useMemo } from "react";
import ListingHead from "./ListingHead/ListingHead";
import ListingInfo from "./ListingInfo/ListingInfo";

interface ListingDetailsProps {
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
  bookings?: Array<Booking>;
}

const ListingDetails: FC<ListingDetailsProps> = ({
  listing,
  currentUser,
  bookings,
}) => {
  const category = useMemo(() => {
    return categories.find((category) => category.value === listing.category);
  }, [listing.category]);

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-6">
        <ListingHead
          title={listing.title}
          imageSrc={listing.imageSrc}
          locationValue={listing.locationValue}
          id={listing.id}
          currentUser={currentUser}
        />
        <ListingInfo
          user={listing.user}
          category={category}
          description={listing.description}
          guestCount={listing.guestCount}
          roomCount={listing.roomCount}
          bathroomCount={listing.bathroomCount}
          locationValue={listing.locationValue}
        />
      </div>
    </div>
  );
};

export default ListingDetails;
