import React from "react";
import { twMerge } from "tailwind-merge";

type CustomBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  icon?: React.ElementType;
  iconType?: "default" | "fill";
  varient?: "default" | "outline";
};

function CustomBtn({
  type = "button",
  text = "Click me!",
  icon: Icon,
  iconType = "default",
  varient = "default",
  className,
  ...props
}: CustomBtnProps) {
  const baseClasses =
    "min-w-[180px] group flex justify-center items-center gap-2 px-4 py-2 font-bold cursor-pointer capitalize transition-all duration-200";

  const variantClasses =
    varient === "outline"
      ? "border border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white"
      : "bg-indigo-700 text-white hover:bg-indigo-600";

  const finalClasses = twMerge(
    baseClasses,
    "rounded-lg",
    variantClasses,
    className
  );

  return (
    <button type={type} {...props} className={finalClasses}>
      {text}
      {Icon && (
        <Icon
          className={twMerge(
            "w-[32px] h-[32px] p-2 -rotate-45 group-hover:rotate-0 transition-all duration-200",
            iconType === "fill"
              ? "rounded-full bg-indigo-700 text-white group-hover:bg-white group-hover:text-indigo-700"
              : "text-indigo-700 group-hover:text-white"
          )}
        />
      )}
    </button>
  );
}

export default CustomBtn;
