"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo: FC = ({}) => {
  const router = useRouter();
  return (
    <Image
      className="block cursor-pointer"
      alt="Airbnb Logo"
      height={100}
      width={100}
      src={`/images/logo.png`}
      onClick={() => router.push("/")}
      tabIndex={0}
    />
  );
};

export default Logo;
