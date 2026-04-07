"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { preferenceFormSchema } from "@/lib/formSchema";
import SectionTitle from "@/components/ui/SectionTitle";
import InputField from "@/components/form/InputField";
import SubmitButton from "../form/SubmitForm";

function PreferenceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(preferenceFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      dobDay: "",
      dobMonth: "",
      dobYear: "",
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
    <form
      className="w-full flex flex-col sm:gap-8 gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section>
        <SectionTitle title="Personal Information" />

        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          <InputField
            label="Email Address"
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />

          <div className="grid lg:grid-cols-3 gap-4 items-end">
            <InputField
              label="Date of Birth"
              {...register("dobDay", { valueAsNumber: true })}
              isInvalid={!!errors.dobDay}
              errorMessage={errors.dobDay?.message}
            />
            <InputField
              {...register("dobYear", { valueAsNumber: true })}
              isInvalid={!!errors.dobYear}
              errorMessage={errors.dobYear?.message}
            />
            <InputField />
          </div>
        </div>
      </section>

      <SubmitButton>Submit Preferences</SubmitButton>
    </form>
  );
}

export default PreferenceForm;
