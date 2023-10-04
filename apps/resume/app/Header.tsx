import React from "react";
import { HEADER_HEIGHT } from "./constants";
import BorderBox from "@/components/BorderBox";

const Header: React.FC = () => {
  return (
    <header className="max-w-3xl fixed w-full pt-1 px-1">
      <div className="grid place-items-center">
        <BorderBox
          className={`w-full ${HEADER_HEIGHT} text-2xl flex justify-between items-center`}
        >
          <span>Header</span>
          <span>Theme</span>
        </BorderBox>
      </div>
    </header>
  );
};

export default Header;
