import React from "react";
import { HEADER_HEIGHT } from "./constants";
import BorderBox from "@/components/BorderBox";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full pt-1 px-1">
      <BorderBox
        className={`w-full ${HEADER_HEIGHT} text-2xl flex justify-between items-center`}
      >
        <span>Header</span>
        <span>Theme</span>
      </BorderBox>
    </header>
  );
};

export default Header;
