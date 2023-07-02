"use client";
import { SafeListing, SafeUser, SafeBooking } from "@/app/types";
import { categories } from "@/mocks/categories";
import { Booking } from "@prisma/client";
import React, { FC, useMemo, useState, useCallback, useEffect } from "react";
import ListingHead from "./ListingHead/ListingHead";
import ListingInfo from "./ListingInfo/ListingInfo";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import {
  differenceInCalendarDays,
  differenceInDays,
  eachDayOfInterval,
} from "date-fns";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingBooking from "./ListingBooking/ListingBooking";
import { Range } from "react-date-range";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface ListingDetailsProps {
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
  bookings?: Array<SafeBooking>;
}

const ListingDetails: FC<ListingDetailsProps> = ({
  listing,
  currentUser,
  bookings,
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    bookings?.forEach((booking: SafeBooking) => {
      const range = eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
      dates = [...dates, ...range];
    });

    return dates;
  }, [bookings]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateBooking = useCallback(() => {
    if (!currentUser) return loginModal.onOpen();

    setIsLoading(true);

    axios
      .post("/api/bookings", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing?.id,
      })
      .then((response) => {
        toast.success("Reserva criada com sucesso!");
        setDateRange(initialDateRange);
        // redirect to trips page
        router.push("/trips");
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          toast.error("Algo deu errado com sua reserva, tente novamente.");
        }
      })
      .finally(() => setIsLoading(false));
  }, [currentUser, loginModal, dateRange, router, totalPrice, listing?.id]);

  const category = useMemo(() => {
    return categories.find((category) => category.value === listing.category);
  }, [listing.category]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );
      if (dayCount && listing.price) setTotalPrice(dayCount * listing.price);
      else setTotalPrice(listing.price);
    }
  }, [dateRange.endDate, dateRange.startDate, listing.price]);

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
        <div className="flex gap-8">
          <ListingInfo
            user={listing.user}
            category={category}
            description={listing.description}
            guestCount={listing.guestCount}
            roomCount={listing.roomCount}
            bathroomCount={listing.bathroomCount}
            locationValue={listing.locationValue}
            price={listing.price}
          />
          <ListingBooking
            price={listing.price}
            totalPrice={totalPrice}
            onChangeDate={(value) => setDateRange(value)}
            dateRange={dateRange}
            onSubmit={onCreateBooking}
            disabled={isLoading}
            disabledDates={disabledDates}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
