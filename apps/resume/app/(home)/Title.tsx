import BorderBox from "@/components/BorderBox";
import { Typography } from "@/components/Typography";
import dayjs from "dayjs";
import React from "react";

const Title: React.FC = () => {
  //* Server Component에서 선언하면 SSG 처리가 됨.
  const date = dayjs().format("YYYY.MM.DD hh:mm:ss");
  return (
    <BorderBox className="py-2">
      <Typography as="p" className="text-xl">
        RESUME
      </Typography>
      <Typography as="p" className="text-xs pt-0 text-gray-500">
        Last updated: {date}
      </Typography>
    </BorderBox>
  );
};

export default Title;
