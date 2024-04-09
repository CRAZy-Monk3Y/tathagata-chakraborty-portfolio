import Header from "./sections/Header";
import Home from "./sections/Home";
import Footer from "./sections/Footer";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Qualification from "./sections/Qualification/Qualification";
import { BiSolidUpArrow } from "react-icons/bi";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="bg-[#FBFBFE] dark:bg-[#191627] dark:text-white font-poppins">
      <div className="max-w-4xl w-full mx-auto min-h-[95vh] font-poppins ">
        <Header />
        {/* Home Section */}
        <Home />
        {/* About Section */}
        <About />
        {/* Skills Section */}
        <Skills />
        {/* Qualification Section */}
        <Qualification />
        {/* Projects Scetion */}
        <Projects />
        {/* Contact Me Section */}
        <ContactMe />
      </div>
      <Footer />
      <ScrollToTop
        smooth
        className="p-1 flex items-center justify-center"
        style={{ backgroundColor: "#5A43CB" }}
        component={<BiSolidUpArrow />}
        height="20"
        width="20"
      />
    </div>
  );
}

export default App;
