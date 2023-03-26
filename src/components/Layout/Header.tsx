import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const router = useRouter();
  const [pageName, setPageName] = useState<string>("");

  console.log("router", router.asPath);

  useEffect(() => {
    if (router.asPath !== "/") {
    }
    setPageName("Home");
  }, [router.asPath]);

  return (
    <div
      className="border-b w-full h-3"
      style={{
        backgroundImage: "linear-gradient(to right,#cd9cf2 0%, #f6f3ff 100%)",
      }}
    ></div>
  );
};

export default Header;
