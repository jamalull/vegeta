"use client";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import {
  IconBeans,
  IconFruit,
  IconFungi,
  IconGinger,
  IconOnion,
  IconVegetable,
} from "@/components/icons";

// utils
import { cn } from "@/lib/utils";
import { hover } from "@/lib/hover";

interface CategoryProps {
  id: string;
  icon: string;
  color: string;
  title: string;
}

const _renderIcon = (identifier: string) => {
  const iconDimension = "size-20";

  switch (identifier) {
    case "IconFungi":
      return (
        <IconFungi
          className={cn(iconDimension)}
          fill="carrot"
        />
      );
    case "IconFruit":
      return (
        <IconFruit
          className={cn(iconDimension)}
          fill="carrot"
        />
      );
    case "IconVegetable":
      return (
        <IconVegetable
          className={cn(iconDimension)}
          fill="carrot"
        />
      );
    case "IconOnion":
      return (
        <IconOnion
          className={cn(iconDimension)}
          fill="carrot"
        />
      );
    case "IconBeans":
      return (
        <IconBeans
          className={cn(iconDimension)}
          fill="carrot"
        />
      );
    case "IconGinger":
      return (
        <IconGinger
          className={cn(iconDimension)}
          fill="carrot"
        />
      );
    default:
      return (
        <IconFungi
          className={cn(iconDimension)}
          fill="carrot"
        />
      );
  }
};

const ProductCategory: React.FC<CategoryProps> = ({
  id,
  icon,
  color,
  title,
}: CategoryProps) => {
  return (
    <Link
      href={`/product?category=${id}`}
      legacyBehavior
    >
      <div
        className={cn(
          "h-auto rounded-xl cursor-pointer border-2 hover:border-leaf-hover",
          color,
          hover.shadow
        )}
      >
        <div className="flex flex-1 items-center rounded-xl p-4 gap-4">
          {_renderIcon(icon)}
          <div className="flex flex-1 text-gray-600 text-xl font-semibold">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCategory;
