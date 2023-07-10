"use client";
import React, { FC, useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

import { SafeBooking, SafeUser } from "@/app/types";

import Heading from "../Heading/Heading";
import ListingCard from "../ListingCard/ListingCard";

interface BookingsClientProps {
  bookings?: Array<SafeBooking>;
  currentUser?: SafeUser | null;
}

const BookingsClient: FC<BookingsClientProps> = ({ bookings, currentUser }) => {
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
        .catch(() => {
          toast.error("Erro ao cancelar reserva! Tente novamente.");
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
        title="Suas propriedades"
        subtitle="Veja as reservas dos clientes nos seus espaços"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {bookings?.map((booking: SafeBooking, index: number) => (
          <ListingCard
            key={booking.id}
            data={booking.listing}
            booking={booking}
            actionId={booking.id}
            onAction={onCancel}
            actionLabel="Cancelar reserva do hóspede"
            disabled={deletingId === booking.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingsClient;
