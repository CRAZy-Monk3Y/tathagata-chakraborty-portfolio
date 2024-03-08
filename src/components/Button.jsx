import React from "react";

const Button = ({ title, icon, href, className = "", children }) => {
  if (children) {
    return (
      <div
        className={`hover:bg-[#5A43CB] bg-[#6E57E0] text-white flex justify-center items-center w-1/2 gap-2 py-3 rounded-lg ${className}`}
      >
        {children}
        {icon}
      </div>
    );
  } else {
    return (
      <a
        href={href}
        className={`hover:bg-[#5A43CB] bg-[#6E57E0] text-white flex justify-center items-center w-1/2 gap-2 py-3 rounded-lg ${className}`}
      >
        {title}
        {icon}
      </a>
    );
  }
};

export default Button;
