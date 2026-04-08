import { Controller, useFormContext } from "react-hook-form";
import SliderField from "@/components/form/SliderField";
import SectionTitle from "@/components/ui/SectionTitle";
import { EmailFrequencyEnum } from "@/lib/formSchema";
import SectionLine from "@/components/ui/SectionLine";

const FREQUENCY_OPTIONS = EmailFrequencyEnum.options;
const FREQUENCY_MARKS = FREQUENCY_OPTIONS.map((option, index) => ({
  value: index,
  label: option.charAt(0) + option.slice(1).toLowerCase(),
}));
const MAX_SLIDER_VALUE = FREQUENCY_OPTIONS.length - 1;

function FrequencySection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2 gap-4 items-center justify-center">
        <SectionTitle
          title="Email Frequency"
          subTitle="How often would you like to hear from us?"
        />
        <Controller
          name="emailFrequency"
          control={control}
          render={({ field }) => {
            const numericValue = FREQUENCY_OPTIONS.indexOf(field.value);
            const sliderValue = numericValue !== -1 ? numericValue : 2;

            return (
              <SliderField
                value={sliderValue}
                onChange={(val) => {
                  field.onChange(FREQUENCY_OPTIONS[val]);
                }}
                minValue={0}
                maxValue={MAX_SLIDER_VALUE}
                step={1}
                marks={FREQUENCY_MARKS}
                isInvalid={!!errors.emailFrequency}
                errorMessage={errors.emailFrequency?.message}
                className="items-center"
              />
            );
          }}
        />
      </div>

      <SectionLine />
    </section>
  );
}

export default FrequencySection;
