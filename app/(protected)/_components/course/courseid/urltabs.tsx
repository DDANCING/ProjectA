/* eslint-disable react-hooks/exhaustive-deps */
"use client"; // Marca o componente como um componente do cliente

import { ReactNode, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Tabs,

} from "@/components/ui/tabs";

interface UrlTabsProps {
  defaultValue: string;
  children: ReactNode;
}

const UrlTabs: React.FC<UrlTabsProps> = ({ defaultValue, children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentTab = searchParams.get('tab') || defaultValue;

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', value);
    router.push(`${pathname}?${params.toString()}`)
  };

  useEffect(() => {
    handleTabChange(currentTab);
  }, [currentTab]);

  return (
    <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
      {children}
    </Tabs>
  );
};

export default UrlTabs;
