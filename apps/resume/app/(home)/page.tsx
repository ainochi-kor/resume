import { NextPage } from "next";
import Title from "./Title";
import TOC from "./TOC";
import Greeting from "./Greeting";
import Profile from "./Profile";
import Inroduce from "./Inroduce";

const HomePage: NextPage = () => {
  return (
    <main className="space-y-1">
      <Title />
      <TOC />
      <Greeting />
      <Profile />
      <Inroduce />
    </main>
  );
};

export default HomePage;
