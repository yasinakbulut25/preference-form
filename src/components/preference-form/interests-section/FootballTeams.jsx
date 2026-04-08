import { useFormContext, Controller } from "react-hook-form";
import SectionTitle from "@/components/ui/SectionTitle";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { FOOTBALL_DATA } from "@/utils/constants";
import SelectableCard from "./SelectableCard";

function FootballTeams() {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col items-center mt-4 animate-appearance-in">
      <SectionTitle title="What's your favourite football team?" />

      <Controller
        name="footballLeague"
        control={control}
        defaultValue="Premier League"
        render={({ field }) => (
          <>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {Object.keys(FOOTBALL_DATA).map((league) => {
                const isSelected = field.value === league;

                return (
                  <button
                    key={league}
                    type="button"
                    onClick={() => {
                      if (!isSelected) {
                        field.onChange(league);
                        setValue("footballTeam", undefined, {
                          shouldValidate: true,
                        });
                      }
                    }}
                    className={`px-6 py-3 rounded-full border-none font-bold text-sm cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-color-primary text-white shadow-none"
                        : "bg-slate-100 text-color-primary"
                    }`}
                  >
                    {league}
                  </button>
                );
              })}
            </div>

            {errors.footballLeague && (
              <ErrorMessage>{errors.footballLeague.message}</ErrorMessage>
            )}

            <Controller
              name="footballTeam"
              control={control}
              render={({ field: teamField }) => {
                const currentTeams = FOOTBALL_DATA[field.value] || [];

                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mt-6">
                    {currentTeams.map((team) => (
                      <SelectableCard
                        key={team.id}
                        label={team.label}
                        isSelected={teamField.value === team.id}
                        onClick={() => teamField.onChange(team.id)}
                        labelClass="py-6 font-medium!"
                      />
                    ))}
                  </div>
                );
              }}
            />

            {errors.footballTeam && (
              <ErrorMessage>{errors.footballTeam.message}</ErrorMessage>
            )}
          </>
        )}
      />
    </div>
  );
}

export default FootballTeams;
