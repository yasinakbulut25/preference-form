import { useEffect } from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import { INTEREST_OPTIONS } from "@/utils/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ErrorMessage from "@/components/ui/ErrorMessage";
import SelectableCard from "./SelectableCard";
import FootballTeams from "./FootballTeams";

export default function InterestSection() {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selectedInterests = useWatch({ control, name: "interests" }) || [];
  const isFootballSelected = selectedInterests.includes("Football");

  useEffect(() => {
    if (!isFootballSelected) {
      setValue("footballLeague", undefined, { shouldValidate: true });
      setValue("footballTeam", undefined, { shouldValidate: true });
    }
  }, [isFootballSelected, setValue]);

  return (
    <section className="flex flex-col gap-8">
      <SectionTitle
        title="What are your interests?"
        subTitle="(Select all that apply)"
      />

      <p className="text-sm font-bold text-color-primary text-center">
        {selectedInterests.length}/{INTEREST_OPTIONS.length} interests selected
      </p>

      <Controller
        name="interests"
        control={control}
        render={({ field }) => (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {INTEREST_OPTIONS.map((interest) => {
              const isSelected = field.value?.includes(interest.id);
              return (
                <SelectableCard
                  key={interest.id}
                  label={interest.label}
                  icon={interest.icon}
                  isSelected={isSelected}
                  showCheckIcon={true}
                  onClick={() => {
                    const newValue = isSelected
                      ? field.value.filter((val) => val !== interest.id)
                      : [...(field.value || []), interest.id];
                    field.onChange(newValue);
                  }}
                />
              );
            })}
          </div>
        )}
      />
      {errors.interests && (
        <ErrorMessage>{errors.interests.message}</ErrorMessage>
      )}

      {isFootballSelected && <FootballTeams />}
    </section>
  );
}
