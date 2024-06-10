import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { CircleAlert, CircleCheck } from "lucide-react";
import { Card } from "./ui/card";

const bannerVariantes = cva(
  "border-white text-center p-2 text-sm flex items-center w-[50%] justify-center fixed top-[92%] left-[25%] z-50", // Added fixed positioning and z-index
  {
    variants: {
      variant: {
        warning: " rounded-none bg-gradient-to-r from-violet-500 to-purple-500 text-white hidden md:flex ",
        success: "rounded-none bg-gradient-to-r from-violet-500 to-purple-500 text-white sm:hidden",
      }
    },
    defaultVariants: {
      variant: "warning",
    }
  }
);

interface BannerProps extends VariantProps<typeof bannerVariantes> {
  label: string;
};

const iconMap = {
  warning: CircleAlert,
  success: CircleCheck,
};

export const Banner = ({
  label,
  variant,
}: BannerProps) => {
  const Icon = iconMap[variant || "warning"]

  return (
    <Card className={cn(bannerVariantes({ variant }))}>
      <Icon className="h-8 w-8 mr-2 "/>
      {label}
    </Card>
  );
}
