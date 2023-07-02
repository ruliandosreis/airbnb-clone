"use client";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

const Search: FC = ({}) => {
  return (
    <div className="border-[1px] md:w-auto mini:py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center justify-between ">
        <div className="hidden mini:block pl-4 sm:px-6" tabIndex={0}>
          <p className="text-zinc-800 text-sm font-semibold">Qualquer lugar</p>
        </div>
        <div
          className="hidden sm:block px-6 border-x-[1px] flex-1 text-center"
          tabIndex={0}
        >
          <p className="text-zinc-800 text-sm font-semibold">Qualquer semana</p>
        </div>
        <div
          className="p-2 mini:pl-6 mini:pr-2 flex items-center gap-3"
          tabIndex={0}
        >
          <div className="hidden sm:block">
            <p className="text-gray-600 text-sm">Hóspedes?</p>
          </div>
          <div className="rounded-full bg-rose-500 p-2 text-white">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
