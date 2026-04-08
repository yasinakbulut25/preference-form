"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { preferenceFormSchema } from "@/lib/formSchema";
import SubmitButton from "@/components/form/SubmitButton";
import PersonalSection from "./personal-section/PersonalSection";
import FrequencySection from "./frequency-section/FrequencySection";
import InterestSection from "./interests-section/InterestsSection";

function PreferenceForm() {
  const methods = useForm({
    resolver: zodResolver(preferenceFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      dobDay: undefined,
      dobMonth: undefined,
      dobYear: undefined,
      postcode: "",
      cities: [],
      interests: [],
      emailFrequency: "REGULARLY",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full flex flex-col"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <PersonalSection />

        <FrequencySection />

        <InterestSection />

        <SubmitButton>Submit Preferences</SubmitButton>
      </form>
    </FormProvider>
  );
}

export default PreferenceForm;
