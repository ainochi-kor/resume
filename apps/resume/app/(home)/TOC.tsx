import BorderBox from "@/components/BorderBox";
import { Typography } from "@/components/Typography";
import React, { useState } from "react";

const TOC: React.FC = () => {
  const isShow = false;

  if (!isShow) {
    return null;
  }

  return (
    <BorderBox className="py-2">
      <Typography as="p" className="text-xs">
        TOC 추후 구현 예정
      </Typography>{" "}
    </BorderBox>
  );
};

export default TOC;
