import { FC, ReactElement } from "react";
import "./styles.css";
import ProjectArea from "../components/layout/Project";
import AboutMe from "../components/layout/About";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import Experience from "../components/layout/Experience";
//Check folder structure
const Homepage: FC = (): ReactElement => {
  return (
    <main className="flex  flex-col max-w-5xl mx-auto p-5  ">
      <Main />
      <Experience />
      <ProjectArea />
      <AboutMe />
      <Footer />
    </main>
  );
};

export default Homepage;
