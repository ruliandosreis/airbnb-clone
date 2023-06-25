"use client";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

const Search: FC = ({}) => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold pl-4 sm:px-6" tabIndex={0}>
          Qualquer lugar
        </div>
        <div
          className="hidden sm:block text-sm font-bold px-6 border-x-[1px] flex-1 text-center"
          tabIndex={0}
        >
          Qualquer semana
        </div>
        <div
          className="text-sm pl-6 pr-2 text-gray-600 flex items-center gap-3"
          tabIndex={0}
        >
          <div className="hidden sm:block">Hóspedes</div>
          <div className="rounded-full bg-rose-500 p-2 text-white">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
