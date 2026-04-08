import { useMemo, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useCities } from "@/hooks/useCities";
import { useDebounce } from "@/hooks/useDebounce";
import SelectField from "@/components/form/SelectField";
import InputField from "@/components/form/InputField";

function CitySelectField() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { cities, loading } = useCities();

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredOptions = useMemo(() => {
    if (!cities) return [];

    const filtered = debouncedSearchTerm
      ? cities.filter((city) =>
          city.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
        )
      : cities;

    return filtered.map((city) => ({
      label: city,
      value: city,
    }));
  }, [cities, debouncedSearchTerm]);

  return (
    <Controller
      name="cities"
      control={control}
      render={({ field }) => (
        <SelectField
          isVirtualized
          label="Cities of interest?"
          placeholder="Max 3 Cities"
          selectionMode="multiple"
          options={filteredOptions}
          selectedKeys={new Set(field.value || [])}
          onSelectionChange={(keys) => {
            const selectedValues = Array.from(keys);
            if (selectedValues.length > 3) return;
            field.onChange(selectedValues);
          }}
          isLoading={loading}
          isInvalid={!!errors.cities}
          errorMessage={errors.cities?.message}
          className="sm:col-span-2 data-[invalid=true]:mt-0!"
          onClose={() => setSearchTerm("")}
          listboxProps={{
            emptyContent: "No city found.",
            topContent: (
              <div className="flex px-1 py-1 sticky top-0 z-10">
                <InputField
                  autoFocus
                  placeholder="Search a city..."
                  value={searchTerm}
                  onValueChange={setSearchTerm}
                  size="sm"
                />
              </div>
            ),
          }}
        />
      )}
    />
  );
}

export default CitySelectField;
