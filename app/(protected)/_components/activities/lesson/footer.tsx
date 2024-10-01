import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";
import { useKey, useMedia } from "react-use";

type Props = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonsId?: boolean;
}

export const Footer = ({
  onCheck,
  status,
  disabled,
  lessonsId,
}:  Props) => {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");
  return (
    <footer className={cn(
      "lg:h-[140px] h-[100px] border-t-2 ",
      status === "correct" && "bg-emerald-100 border-transparent",
      status === "wrong" && "bg-rose-100 border-transparent",
    )}>
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="text-emerald-500 font-bold text-base lg:text-2xl flex items-center">
            <CheckCircle className="h-6 w-6 lg:h-10 mr-4"/>
            Nicely done!
          </div>
        )}
          {status === "wrong" && (
          <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
            <XCircle className="h-6 w-6 lg:h-10 mr-4"/>
            Try again.
          </div>
        )}
        {status === "completed" && (
         <Button
         variant="default"
         size={isMobile ? "sm" : "lg"}
         onClick={() => window.location.href = `/activities/lesson/${lessonsId}`}
         >
          PRACTICE AGAIN
         </Button>
        )}
        <Button
        disabled={disabled}
        className="ml-auto"
        onClick={onCheck}
        size={isMobile ?  "sm" : "lg"}
        variant={status === "wrong" ? "destructive" : "default"}
        >
        
          {status === "none" && "check"}
          {status === "correct" && "Next"}
          {status === "wrong" && "Retry"}
          {status === "completed" && "Continue"}
        </Button>
      </div>

    </footer>
  )
}