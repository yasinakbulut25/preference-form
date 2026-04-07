import { Controller, useFormContext } from "react-hook-form";
import SelectField from "@/components/form/SelectField";
import { days, months, years } from "@/utils/dateOptions";

function DateOfBirthFields() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <span className="font-medium text-color-secondary text-sm pb-1">
        Date of Birth
      </span>
      <div className="grid sm:grid-cols-3 gap-4 items-start">
        <Controller
          name="dobDay"
          control={control}
          render={({ field }) => (
            <SelectField
              placeholder="Days"
              coloredPlaceholder
              options={days}
              selectedKeys={
                field.value ? new Set([String(field.value)]) : new Set()
              }
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0];
                field.onChange(Number(value));
              }}
              isInvalid={!!errors.dobDay}
              errorMessage={errors.dobDay?.message}
            />
          )}
        />

        <Controller
          name="dobMonth"
          control={control}
          render={({ field }) => (
            <SelectField
              placeholder="Month"
              coloredPlaceholder
              options={months}
              selectedKeys={
                field.value ? new Set([String(field.value)]) : new Set()
              }
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0];
                field.onChange(Number(value));
              }}
              isInvalid={!!errors.dobMonth}
              errorMessage={errors.dobMonth?.message}
            />
          )}
        />

        <Controller
          name="dobYear"
          control={control}
          render={({ field }) => (
            <SelectField
              placeholder="Year"
              coloredPlaceholder
              options={years}
              selectedKeys={
                field.value ? new Set([String(field.value)]) : new Set()
              }
              onSelectionChange={(keys) => {
                const value = Array.from(keys)[0];
                field.onChange(Number(value));
              }}
              isInvalid={!!errors.dobYear}
              errorMessage={errors.dobYear?.message}
            />
          )}
        />
      </div>
    </div>
  );
}

export default DateOfBirthFields;
