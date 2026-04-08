import { Slider } from "@heroui/react";

function SliderField({
  value,
  onChange,
  minValue = 0,
  maxValue = 100,
  step = 1,
  marks,
  isInvalid,
  errorMessage,
  className = "",
  classNames = {},
  ...rest
}) {
  const displayLabel = marks && marks[value] ? marks[value].label : value;

  return (
    <div className={`w-full flex flex-col gap-1 p-1 ${className}`}>
      <Slider
        step={step}
        minValue={minValue}
        maxValue={maxValue}
        marks={marks}
        value={value}
        onChange={onChange}
        className="max-w-lg w-full"
        classNames={{
          base: `mt-12 mb-3 ${classNames?.base || ""}`,
          mark: `absolute -top-12 mt-0 text-sm text-color-primary font-medium opacity-100 ${classNames?.mark || ""}`,
          track: `bg-white h-2 border-transparent! ${classNames?.track || ""}`,
          filler: `bg-transparent ${classNames?.filler || ""}`,
          thumb: `bg-color-primary after:bg-color-primary ${classNames?.thumb || ""}`,
          labelWrapper: `hidden ${classNames?.labelWrapper || ""}`,
        }}
        getValue={(v) => {
          return marks && marks[v] ? marks[v].label : v;
        }}
        {...rest}
      />

      <p className="text-base text-color-primary font-bold">{displayLabel}</p>
      {isInvalid && errorMessage && (
        <span className="text-tiny text-danger">{errorMessage}</span>
      )}
    </div>
  );
}

export default SliderField;
