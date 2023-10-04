import BorderBox from "@/components/BorderBox";
import { Typography } from "@/components/Typography";
import React from "react";

const Inroduce: React.FC = () => {
  return (
    <BorderBox className="py-3">
      <Typography as="h2" className="text-2xl font-bold">
        강민석 입니다.
      </Typography>
    </BorderBox>
  );
};

export default Inroduce;
