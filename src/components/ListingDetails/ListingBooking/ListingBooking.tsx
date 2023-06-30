"use client";

import Calendar from "@/components/Calendar/Calendar";
import { Range } from "react-date-range";
import React, { FC } from "react";
import Button from "@/components/Button/Button";

interface ListingBookingProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingBooking: FC<ListingBookingProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="hidden md:flex p-6 w-[330px] border-[1px] shadow-lg rounded-xl flex-col gap-2">
      <p className="text-2xl font-bold">
        {`R$ ${price
          .toString()
          .replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/gm, "$1$2.")}`}
        <span className="font-light ml-1">noite</span>
      </p>
      <hr />
      <Calendar
        value={dateRange}
        onChange={(value: any) => onChangeDate(value.selection)}
        disabledDates={disabledDates}
      />
      <hr />
      <Button variant="primary" disabled={disabled} onClick={onSubmit}>
        Reservar
      </Button>
      <div className="flex justify-between items-center">
        <p className="font-bold">Valor total:</p>
        <p className="font-semibold">{`R$ ${totalPrice
          .toString()
          .replace(
            /(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/gm,
            "$1$2."
          )}`}</p>
      </div>
    </div>
  );
};

export default ListingBooking;
