"use client";

import { Category } from "@prisma/client";
import { FcMusic } from "react-icons/fc";
import { GiGuitarHead } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import { CategoryItem } from "./category-item";

const iconMap: Record<Category["name"], IconType> = {
  "Music History": FcMusic,
  "Guitar": GiGuitarHead,
};

interface CategoriesProps {
  items: Category[];
}

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex flex-wrap p-6 gap-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
