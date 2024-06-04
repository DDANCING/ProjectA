"use client";

import qs from "query-string";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface CategoryItemProps {
  label: string;
  icon: IconType;
  value: string;
}

export const CategoryItem = ({ label, icon: Icon, value }: CategoryItemProps) => {
 
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        title: currentTitle,
        CategoryId: isSelected ? null : value, 
      }
    }, { skipNull: true, skipEmptyString: true });

    router.push(url);
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "py-2 px-3 text-sm border border-muted-foreground rounded-full flex items-center gap-x-1 hover:border-primary hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED] transition select-none",
        isSelected && "border-primary shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#7C3AED,0_0_15px_#7C3AED,0_0_30px_#7C3AED] transition select-none"
      )}
    >
      <button
      onClick={onClick}>
        <div className="flex">
          {Icon && <Icon size={15} />}
          <div className="truncate">{label}</div>
        </div>
      </button>
    </Badge>
  );
};
