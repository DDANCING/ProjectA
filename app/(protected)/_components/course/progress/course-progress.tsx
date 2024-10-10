import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "text-primary/70",
  success: "text-emerald-500/90",
};

const sizeByVariant = {
  default: "text-xs",
  sm: "text-xs",
};

export const CourseProgress = ({
  value,
  variant = "default",  // Definindo valor padrão
  size = "default",      // Definindo valor padrão
}: CourseProgressProps) => {
  return (
    <div>
      <Progress
        className="h-2"
        value={value}
        // Ajustando para aplicar a variante de estilo (se necessário)
      />
      <p
        className={cn(
          "font-medium mt-2 text-primary text-left",
          colorByVariant[variant],
          sizeByVariant[size]
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};
