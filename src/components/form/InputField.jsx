"use client";

import { Input } from "@heroui/react";

function InputField({ label = "", type = "text", classNames, ...rest }) {
  return (
    <Input
      label={label}
      type={type}
      radius="sm"
      labelPlacement="outside-top"
      classNames={{
        label: "font-medium text-color-secondary pb-1",
        input: [
          "bg-white text-base text-slate-900 font-medium",
          "placeholder:text-base placeholder:text-color-light font-medium",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "p-3 h-auto rounded-xl",
          "bg-white border-2 border-border-default shadow-none",
          "data-[hover=true]:bg-white",
          "group-data-[focus=true]:bg-white",
        ],
        ...classNames,
      }}
      {...rest}
    />
  );
}

export default InputField;
