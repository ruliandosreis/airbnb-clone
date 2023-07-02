"use client";

import Calendar from "@/components/Calendar/Calendar";
import { Range } from "react-date-range";
import React, { FC, useState } from "react";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Modal from "@/components/Modal/Modal";

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
  const [bookingModal, setBookingModal] = useState(false);
  return (
    <>
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
      <div className="fixed w-full bg-white z-10 md:hidden bottom-0 left-0 border-t-[1px]">
        <Container>
          <div className="flex justify-between items-center py-4">
            <div>
              <p className="text-base font-bold">
                {`R$ ${price
                  .toString()
                  .replace(
                    /(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/gm,
                    "$1$2."
                  )}`}
                <span className="font-light ml-1">noite</span>
              </p>
              <button
                role="button"
                onClick={() => {
                  setBookingModal(true);
                }}
                className="group"
              >
                <p className="text-sm underline group-hover:text-rose-500">
                  Escolher datas
                </p>
              </button>
            </div>
            <Button
              variant="primary"
              disabled={disabled}
              onClick={onSubmit}
              className="text-xs py-2 px-4 max-w-[30vw]"
            >
              Reservar
            </Button>
          </div>
        </Container>
      </div>
      <Modal
        isOpen={bookingModal}
        onClose={() => setBookingModal(false)}
        title="Escolha as datas"
      >
        <Calendar
          value={dateRange}
          onChange={(value: any) => onChangeDate(value.selection)}
          disabledDates={disabledDates}
        />
        <hr />
        <Button variant="primary" disabled={disabled} onClick={onSubmit}>
          Reservar
        </Button>
      </Modal>
    </>
  );
};

export default ListingBooking;
