"use client";

import qs from "query-string";
import { IconType } from "react-icons";
import { 
  usePathname, 
  useRouter, 
  useSearchParams
} from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface CategoryItemProps {
  label: string;
  value?: string;
  icon?: IconType;
};

export const CategoryItem = ({
  label,
  value,
  icon: Icon,
}: CategoryItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        title: currentTitle,
        categoryId: isSelected ? null : value,
      }
    }, { skipNull: true, skipEmptyString: true });

    router.push(url);
  };
  
  return (
    <Button
      variant="outline"
      onClick={isSelected ? () => {} : onClick }
      className={cn(
        "py-2 px-3 text-sm border border-primary rounded-full flex items-center gap-x-1 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED] transition",
        isSelected && "border-primary bg-foreground text-background"
      )}
      type="button"
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">
        {label}
      </div>
    </Button>
  )
}