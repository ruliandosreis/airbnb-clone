"use client";
import React, { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  hierarquy?: "h1" | "h2" | "h3" | "h4";
}

const Heading: FC<HeadingProps> = ({ title, subtitle, center, hierarquy }) => {
  const returnHeading = (hierarquy: string) => {
    switch (hierarquy) {
      case "h1":
        return (
          <h1
            className={` ${
              center ? "text-center" : "text-start"
            } text-4xl font-bold`}
          >
            {title}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={` ${
              center ? "text-center" : "text-start"
            } text-3xl font-bold`}
          >
            {title}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={` ${
              center ? "text-center" : "text-start"
            } text-2xl font-bold`}
          >
            {title}
          </h3>
        );
      case "h4":
        return (
          <h4
            className={` ${
              center ? "text-center" : "text-start"
            } text-xl font-bold`}
          >
            {title}
          </h4>
        );
    }
  };
  return (
    <div className="flex flex-col gap-2">
      {returnHeading(hierarquy ? hierarquy : "h1")}
      {subtitle && (
        <p
          className={`font-light text-neutral-500 ${
            center ? "text-center" : "text-start"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
