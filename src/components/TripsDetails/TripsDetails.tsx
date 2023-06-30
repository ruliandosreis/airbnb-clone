"use client";
import { SafeBooking, SafeUser } from "@/app/types";
import React, { FC, useState, useCallback } from "react";
import Heading from "../Heading/Heading";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../ListingCard/ListingCard";

interface TripsDetailsProps {
  bookings?: Array<SafeBooking>;
  currentUser?: SafeUser | null;
}

const TripsDetails: FC<TripsDetailsProps> = ({ bookings, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string>("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/bookings/${id}`)
        .then(() => {
          toast.success("Reserva cancelada com sucesso!");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <div>
      <Heading
        title="Viagens"
        subtitle="Veja os locais que você já visitou e irá visitar!"
        hierarchy="h2"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {bookings?.map((booking: SafeBooking) => (
          <ListingCard
            booking={booking}
            data={booking.listing}
            key={booking.id}
            onAction={onCancel}
            actionLabel="Cancelar reserva"
          />
        ))}
      </div>
    </div>
  );
};

export default TripsDetails;
