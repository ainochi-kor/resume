import BorderBox from "@/components/BorderBox";
import { Typography } from "@/components/Typography";
import Link from "next/link";
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-4 space-x-1">
      <BorderBox className="col-span-3 bg-gray-800 justify-center flex">
        <div className="w-full">
          <div className="w-full flex justify-between">
            <Link
              href="https://www.linkedin.com/in/%EB%AF%BC%EC%84%9D-%EA%B0%95-508191248/"
              target="_blank"
              className="text-white hover:text-sky-400"
            >
              Linkedin
            </Link>
            <Link
              href="https://github.com/ainochi-kor"
              target="_blank"
              className="text-white hover:animate-spin "
            >
              Github
            </Link>
            <div></div>
          </div>
          <div className="w-full flex justify-around">
            <Link
              href="https://velog.io/@ainochi95"
              target="_blank"
              className="text-white hover:text-green-400 text-sm"
            >
              Velog
            </Link>
            <Link
              href="https://www.notion.so/ainochi-kor/Nochi-Blog-e29a3084e085490b905f468d7eda92d9?pvs=4"
              target="_blank"
              className="text-white hover:animate-bounce"
            >
              Notion
            </Link>
          </div>
        </div>
      </BorderBox>
      <BorderBox className="col-span-1 bg-purple-500"></BorderBox>
      <div></div>
    </div>
  );
};

export default Profile;
