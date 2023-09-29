import React, { PropsWithChildren } from "react";

interface BorderBoxProps extends PropsWithChildren {
  className?: string;
}

const BorderBox: React.FC<BorderBoxProps> = ({ className, children }) => {
  return (
    <div
      className={`rounded border-2 px-3 border-gray-500 dark:border-purple-500 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default BorderBox;
