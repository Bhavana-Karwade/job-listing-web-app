import React from "react";

type TagProps = {
  label: string;
};

const Tag = ({ label }: TagProps) => {
  return (
    <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
      {label}
    </span>
  );
};

export default Tag;
