import BorderBox from "@/components/BorderBox";
import { Typography } from "@/components/Typography";
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-4 space-x-1">
      <BorderBox className="col-span-3 bg-purple-300 justify-center flex">
        <div>
          <Typography as="p">
            Linkedin:
            https://www.linkedin.com/in/%EB%AF%BC%EC%84%9D-%EA%B0%95-508191248/
          </Typography>
          <Typography as="p">Email: kthrkdals@gmail.com</Typography>
          <Typography as="p">a</Typography>
        </div>
      </BorderBox>
      <BorderBox className="col-span-1 bg-purple-500">a</BorderBox>
      <div></div>
    </div>
  );
};

export default Profile;
