import BorderBox from "@/components/BorderBox";
import { Typography } from "@/components/Typography";
import React from "react";

const Title: React.FC = () => {
  return (
    <BorderBox>
      <Typography className="text-xl">RESUME</Typography>
      <Typography className="text-xs">Last updated</Typography>
    </BorderBox>
  );
};

export default Title;
