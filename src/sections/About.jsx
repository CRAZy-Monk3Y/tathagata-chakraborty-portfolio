import { BiNews } from "react-icons/bi";
import about_me_img from "../assets/img/about-img-animate.png";
import Button from "../components/Button";
// import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="w-full h-screen flex flex-col justify-center items-center"
      id="about"
    >
      <h2 className="text-4xl text-center">About Me</h2>
      <span className="pb-6 text-center text-[#B8B6C1]">My introduction</span>
      <div className="flex flex-row items-center justify-between gap-4 max-w-3xl">
        {/* <motion.div className="w-full"> */}
        <img
          src={about_me_img}
          alt="headshot image"
          className="rounded-lg h-[20rem] object-cover"
          data-tilt
        />
        {/* </motion.div> */}
        <div className="flex flex-col gap-4">
          <p className="text-justify">
            I’m a Full-Stack AI Engineer with 3+ years of experience building
            production-ready automation platforms that combine LLMs, retrieval
            workflows, and scalable full-stack systems. I design and deploy
            end-to-end AI products across enterprise environments, covering
            multi-agent orchestration, RAG pipelines, vector search
            (FAISS/Chroma/VertexAI Search), and cloud-native deployments on
            GCP/AWS using Docker and CI/CD. My engineering background spans
            React, Next.js, FastAPI, Python, and TypeScript, enabling me to
            deliver full-stack interfaces backed by intelligent automation. I’ve
            shipped multi-agent AI systems that reduced SME effort by 45%–65%
            and deployed backend+frontend services with 99.9% uptime in
            production. I focus on practical AI that automates workflows,
            amplifies teams, and drives measurable business outcomes.
          </p>
          <div className="">
            <Button
              icon={<BiNews size={20} />}
              className="hover:shadow-xl transition duration-150 ease-in"
            >
              <a
                href="https://drive.google.com/drive/folders/146aTOEjTiIh7Z3uG7WibDTwbCv1BcM87?usp=sharing"
                className="button button--flex"
                target="_blank"
              >
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
