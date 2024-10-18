/** @format */

import React from "react";
import Link from "next/link";

interface CustomButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean; // Add the disabled prop type here
}

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  onClick,
  children,
  className = "",
  disabled = false, // Set default disabled value to false
  type = "button",
}) => {
  const baseClasses =
    "px-4 py-3 rounded-md font-semibold transition-colors duration-300 text-[20px]";
  const combinedClasses = `${baseClasses} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled} // Allow the button to be disabled conditionally
      type={type}
      onClick={onClick}
      className={combinedClasses}>
      {children}
    </button>
  );
};

export default CustomButton;
