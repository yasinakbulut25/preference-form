import { Controller, useFormContext } from "react-hook-form";
import SelectField from "@/components/form/SelectField";

const cityOptions = [
  { label: "Istanbul", value: "istanbul" },
  { label: "Ankara", value: "ankara" },
  { label: "Izmir", value: "izmir" },
  { label: "Bursa", value: "bursa" },
];

function CitySelectField() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="cities"
      control={control}
      render={({ field }) => (
        <SelectField
          label="Cities of interest?"
          placeholder="Max 3 Cities"
          selectionMode="multiple"
          options={cityOptions}
          selectedKeys={new Set(field.value || [])}
          onSelectionChange={(keys) => {
            const selectedValues = Array.from(keys);
            field.onChange(selectedValues);
          }}
          onBlur={field.onBlur}
          isInvalid={!!errors.cities}
          errorMessage={errors.cities?.message}
          className="sm:col-span-2 data-[invalid=true]:mt-0!"
        />
      )}
    />
  );
}

export default CitySelectField;
