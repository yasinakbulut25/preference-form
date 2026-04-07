"use client";

import { Select, SelectItem } from "@heroui/react";

function SelectField({
  label,
  placeholder = "Select an option",
  options = [],
  selectionMode = "single",
  selectedKeys,
  onSelectionChange,
  isRequired = false,
  isInvalid = false,
  errorMessage,
  classNames,
  coloredPlaceholder = false,
  ...rest
}) {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      labelPlacement="outside"
      selectionMode={selectionMode}
      selectedKeys={selectedKeys}
      onSelectionChange={onSelectionChange}
      isRequired={isRequired}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      classNames={{
        label:
          "font-medium text-color-secondary group-data-[invalid=true]:text-color-secondary! text-sm pb-1",
        trigger: [
          "p-3 h-auto rounded-xl cursor-pointer",
          "bg-white border-2 border-border-default shadow-none",
          "data-[hover=true]:bg-white",
          "group-data-[focus=true]:bg-white",
        ],
        value: [
          `text-base ${coloredPlaceholder ? "text-color-primary" : "text-color-light"} font-medium`,
          "group-data-[has-value=true]:text-slate-900",
        ],
        popoverContent: "bg-white border border-border-default",
        listbox: "p-1",
        ...classNames,
      }}
      {...rest}
    >
      {options.map((item) => (
        <SelectItem key={item.value}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}

export default SelectField;
