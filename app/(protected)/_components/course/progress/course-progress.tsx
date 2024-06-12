import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success",
  size?: "default" | "sm";
};

const colorByVariant = {
  default: "text-primary/70",
  success: "text-emerald-500/90",
}

const sizeByVariant = {
  default: "text-xs",
  sm: "text-xs",
}

export const CourseProgress = ({
  value,
  variant,
  size,
}: CourseProgressProps) => {
  return (
    <div>
      <Progress
        className="h-2"
        value={value}
        variant={variant}
      />
      <p className={cn(
        "font-medium mt-2 text-primary text-left",
        colorByVariant[variant || "default"],
        sizeByVariant[size || "default"],
      )}>
        {Math.round(value)}% Complete
      </p>
    </div>
  )
}