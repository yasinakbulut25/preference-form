import { useFormContext } from "react-hook-form";
import SectionTitle from "@/components/ui/SectionTitle";
import InputField from "@/components/form/InputField";
import DateOfBirthFields from "./DateOfBirthFields";

function PersonalSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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

        <DateOfBirthFields />
      </div>
    </section>
  );
}

export default PersonalSection;
