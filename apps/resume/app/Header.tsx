"use client";

import React, { useState } from "react";
import { HEADER_HEIGHT } from "./constants";
import BorderBox from "@/components/BorderBox";
import Image from "next/image";

enum Theme {
  LIGHT = "light",
  DAKR = "dark",
}

const Header: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DAKR);

  const handleClickChangeTheme = () => {
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DAKR : Theme.LIGHT));
  };

  return (
    <header className="max-w-3xl fixed w-full pt-1 px-1">
      <div className="grid place-items-center">
        <BorderBox
          className={`w-full ${HEADER_HEIGHT} text-2xl font-bold flex justify-between items-center`}
        >
          <span>FE Dev.</span>

          <button type="button" onClick={handleClickChangeTheme}>
            <Image
              src={`/images/theme/${theme}-mode.svg`}
              alt=""
              width={32}
              height={32}
            />
          </button>
        </BorderBox>
      </div>
    </header>
  );
};

export default Header;
