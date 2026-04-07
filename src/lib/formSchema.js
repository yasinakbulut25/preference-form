import { z } from "zod";

export const EmailFrequencyEnum = z.enum([
  "RARELY",
  "OCCASIONALLY",
  "REGULARLY",
  "ALWAYS",
]);

const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/i;

export const preferenceFormSchema = z
  .object({
    email: z.email("Please enter a valid email address."),

    dobDay: z
      .number({ invalid_type_error: "Day is required" })
      .min(1, "Day must be between 1 and 31")
      .max(31, "Day must be between 1 and 31"),

    dobMonth: z
      .number({ invalid_type_error: "Month is required" })
      .min(1, "Month must be between 1 and 12")
      .max(12, "Month must be between 1 and 12"),

    dobYear: z
      .number({ invalid_type_error: "Year is required" })
      .min(1900, "Year must be valid")
      .max(new Date().getFullYear(), "Year cannot be in the future"),

    firstName: z.string().min(2, "First name must be at least 2 characters"),

    lastName: z.string().min(2, "Last name must be at least 2 characters"),

    postcode: z
      .string()
      .regex(UK_POSTCODE_REGEX, "Please enter a valid UK postcode"),

    cities: z
      .array(z.string())
      .min(1, "Please select at least 1 city")
      .max(3, "You can select up to 3 cities only"),

    emailFrequency: EmailFrequencyEnum,

    interests: z
      .array(z.string())
      .min(1, "Please select at least one interest"),

    footballLeague: z.string().optional(),
    footballTeam: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const isFootballSelected = data.interests?.includes("Football");

    if (isFootballSelected) {
      if (!data.footballLeague) {
        ctx.addIssue({
          code: "custom",
          path: ["footballLeague"],
          message: "Please select a football league",
        });
      }

      if (!data.footballTeam) {
        ctx.addIssue({
          code: "custom",
          path: ["footballTeam"],
          message: "Please select a football team",
        });
      }
    }
  });
