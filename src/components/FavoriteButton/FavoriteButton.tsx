"use client";

import React, { FC } from "react";
import { SafeUser } from "@/app/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorite from "@/hooks/useFavorite";

interface FavoriteButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });
  return (
    <button
      onClick={toggleFavorite}
      className="hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px] z-10"
      />
      <AiFillHeart
        size={28}
        className={`${
          hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"
        } absolute -top-[2px] -right-[2px] transition`}
      />
    </button>
  );
};

export default FavoriteButton;