import BorderBox from "@/components/BorderBox";
import { Typography } from "@/components/Typography";
import React from "react";

const Greeting: React.FC = () => {
  return (
    <BorderBox className="pt-4 pb-1">
      <Typography className="text-sm">안녕하세요.</Typography>
    </BorderBox>
  );
};

export default Greeting;
