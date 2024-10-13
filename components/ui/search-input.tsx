"use client"

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/data/hooks/use-debounce";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import qs from "query-string";

export const SearchImput = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const searcHParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const currentCategoryID = searcHParams.get("categoryId");

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        categoryId: currentCategoryID,
        title: debouncedValue,

      }
    }, {
      skipEmptyString: true, skipNull: true
    });

    router.push(url)
  }, [debouncedValue, currentCategoryID, router, pathname])

  return (
    <div className="relative mt-4">
       
       <Input
       onChange={(e) => setValue(e.target.value)}
       value={value}
       className="pl-9 bg-background/30 backdrop-blur-md rounded-full focus:border-primary w-[30%]"
       />
       <Search 
       className="h-4 w-4 absolute top-3 left-3 text-primary "
       />
    </div>
  )
}