"use client";
import React, { FC, useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

import { SafeListing, SafeUser } from "@/app/types";

import Heading from "../Heading/Heading";
import ListingCard from "../ListingCard/ListingCard";

interface PropertiesClientProps {
  listings: Array<SafeListing>;
  currentUser?: SafeUser | null;
}

const PropertiesClient: FC<PropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string>("");

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Espaço deletado com sucesso!");
          router.refresh();
        })
        .catch((error: any) => {
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
        title="Suas propriedades"
        subtitle="Esses são os espaços que você oferece"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings?.map((listing: SafeListing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onDelete}
            actionLabel="Remover propriedade"
            disabled={deletingId === listing.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesClient;
