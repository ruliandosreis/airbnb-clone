"use client";
import useCountries from "@/hooks/useCountries";
import React, { FC } from "react";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: { ...theme.colors, primary: "black", primary25: "#ffe4e6" },
        })}
        placeholder="Selecione o país"
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex items-center gap-3">
            <div className="w-6">{option.flag}</div>
            <p className="font-semibold">
              {option.label}{" "}
              <span className="text-zinc-500 ml-1 font-light">
                {option.region}
              </span>
            </p>
          </div>
        )}
        isClearable
      />
    </div>
  );
};

export default CountrySelect;
