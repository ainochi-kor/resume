import BorderBox from "@/components/BorderBox";
import { Typography } from "@/components/Typography";
import dayjs from "dayjs";
import React from "react";

const Title: React.FC = () => {
  const date = dayjs().format("YYYY.MM.DD hh:mm:ss");
  return (
    <BorderBox>
      <Typography className="text-xl">RESUME</Typography>
      <Typography className="text-xs">Last updated: {date}</Typography>
    </BorderBox>
  );
};

export default Title;
