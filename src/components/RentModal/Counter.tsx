"use client";
import React, { FC, useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle?: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: FC<CounterProps> = ({ title, subtitle, value, onChange }) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  const onSubtract = useCallback(() => {
    if (value === 1) return;
    else {
      onChange(value - 1);
    }
  }, [value, onChange]);
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h3 className="font-medium">{title}</h3>
        <p className="font-light text-gray-600">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onSubtract}
          className="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition shadow-md"
        >
          <AiOutlineMinus />
        </button>
        <span className="font-semibold text-xl text-neutral-600">{value}</span>
        <button
          onClick={onAdd}
          className="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition shadow-md"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
