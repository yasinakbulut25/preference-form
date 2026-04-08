import { useFormContext } from "react-hook-form";
import SectionTitle from "@/components/ui/SectionTitle";
import InputField from "@/components/form/InputField";
import DateOfBirthFields from "./DateOfBirthFields";
import CitySelectField from "./CitySelectField";
import SectionLine from "@/components/ui/SectionLine";

function PersonalSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="flex flex-col gap-6">
      <SectionTitle title="Personal Information" />

      <div className="grid md:grid-cols-2 gap-4 items-start">
        <InputField
          label="Email Address"
          {...register("email")}
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />

        <DateOfBirthFields />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField
            label="First Name"
            {...register("firstName")}
            isInvalid={!!errors.firstName}
            errorMessage={errors.firstName?.message}
          />

          <InputField
            label="Last Name"
            {...register("lastName")}
            isInvalid={!!errors.lastName}
            errorMessage={errors.lastName?.message}
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-4 items-start">
          <InputField
            label="Postcode:*"
            {...register("postcode")}
            isInvalid={!!errors.postcode}
            errorMessage={errors.postcode?.message}
            className="sm:col-span-1"
          />

          <CitySelectField />
        </div>
      </div>

      <SectionLine />
    </section>
  );
}

export default PersonalSection;
