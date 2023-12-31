import React, { FC, InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea: FC<TextareaProps> = ({
  id,
  label,
  formatPrice,
  register,
  errors,
  disabled,
  required,
  ...props
}) => {
  return (
    <div className="w-full relative">
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          formatPrice ? "pl-9" : "pl-4"
        } ${errors[id] ? "border-rose-500" : "border-neutral-300"} ${
          errors[id] ? "focus:border-rose-500" : "focus:border-black"
        }`}
        {...props}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] 
    ${formatPrice ? "left-9" : "left-4"}
    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
    peer-focus:scale-75 peer-focus:-translate-y-4
    ${errors[id] ? "text-rose-500" : "text-zinc-400"}
    `}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
