import { CheckmarkCircle16Filled } from "@fluentui/react-icons";
import { Card, CardBody } from "@heroui/react";

export default function SelectableCard({
  label,
  isSelected,
  onClick,
  icon: Icon,
  labelClass = "",
  showCheckIcon = false,
}) {
  return (
    <Card
      isPressable
      disableRipple
      onClick={onClick}
      className={`w-full border-2 shadow-none rounded-lg transition-all duration-200 ${
        isSelected
          ? "bg-color-primary border-color-primary text-white"
          : "bg-white border-border-default text-color-primary hover:border-color-primary"
      }`}
    >
      <CardBody className="flex flex-row items-center justify-center p-4 relative min-h-16">
        {Icon && (
          <div className="absolute left-4">
            <Icon
              size={20}
              className={isSelected ? "text-white" : "text-color-primary"}
            />
          </div>
        )}

        <span className={`font-medium text-sm sm:text-base ${labelClass}`}>
          {label}
        </span>

        {showCheckIcon && isSelected && (
          <div className="absolute top-0 right-1">
            <CheckmarkCircle16Filled size={16} className="text-white" />
          </div>
        )}
      </CardBody>
    </Card>
  );
}
