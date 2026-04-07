import { Controller, useFormContext } from "react-hook-form";
import SelectField from "@/components/form/SelectField";
import { days, months, years } from "@/utils/dateOptions";

function DateOfBirthFields() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid sm:grid-cols-3 gap-4 items-end">
      <Controller
        name="dobDay"
        control={control}
        render={({ field }) => (
          <SelectField
            label="Date of Birth"
            placeholder="Days"
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
  );
}

export default DateOfBirthFields;
