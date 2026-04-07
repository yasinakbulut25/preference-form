import { Controller, useFormContext } from "react-hook-form";
import SectionTitle from "@/components/ui/SectionTitle";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";

function PersonalSection() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  // Generate options format compatible with HeroUI component
  const days = Array.from({ length: 31 }, (_, i) => ({
    label: String(i + 1),
    value: String(i + 1),
  }));

  const months = Array.from({ length: 12 }, (_, i) => ({
    label: String(i + 1),
    value: String(i + 1),
  }));

  const years = Array.from({ length: 100 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { label: String(year), value: String(year) };
  });

  return (
    <section>
      <SectionTitle title="Personal Information" />

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <InputField
          label="Email Address"
          {...register("email")}
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />

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
      </div>
    </section>
  );
}

export default PersonalSection;
