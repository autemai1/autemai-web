import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
export default function HeroSection() {
    const navigate = useNavigate();
    function push_alec_console() {
        // Navigate to the desired route
        navigate('/alec_console');
    }
    return (
        <div className="md:ml-1 " id="home">
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="  lg:ml-0  text-2xl mb-2 ml-2 lg:text-7xl font-bold text-neutral-700 dark:text-white  lg:leading-snug lg:
        text-center lg:mx-auto "
                >
                    Autem AI
                  
                </motion.h1>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="  lg:ml-0  text-xl  lg:text-7xl font-bold text-neutral-700 dark:text-white  lg:leading-snug lg:
        text-center lg:mx-auto "
                >
                       <Highlight className="text-black ml-7  lg:ml-6  dark:text-white">
                        Your Autonomous AI Employee
                    </Highlight>
                  
                </motion.h1>
             
                <p className="  md:text-5xl text-lg  md:mt-10 mt-6 dark:text-neutral-200 ">
                    {" "}
                    Automate your tasks with Autem AI
                </p>
                <Button className="lg:mt-20 lg:h-10  lg:w-60 w-40 mt-10 lg:text-xl"
                onClick={push_alec_console}>
                    Get Started
                </Button>
            </HeroHighlight>
            <div className="  py-20 md:py-40  w-[100vw]  bg-transparent " id="aboutalec">
                <h1 className="text-4xl md:text-7xl font-bold mb-12  dark:text-white">
                    Meet <h1 className="  text-purple-500 "> Alec AI </h1> by
                    AuTeM <br />
                </h1>
                <Highlight className="  text-sm   md:text-4xl md:font-bold dark:text-neutral-200">
                    Your Autonomous AI Quality Assurance Analyst
                </Highlight>

                <div className="container mx-auto py-12">
                    <div className="text-center  lg:text-3xl  font-sans  md:text-3xl lg:mt-20  dark:text-white">
                        <span className="text-purple-500 ">Alec AI</span>, your{" "}
                        <span className="text-purple-500">Autonomous</span>{" "}
                        Quality Assurance{" "}
                        <span className="text-purple-500">QA</span> analyst
                        revolutionizing software testing. Just upload your Code
                        Snippet and provide your Email –{" "}
                        <span className="text-purple-500">Alec AI</span> takes
                        care of the rest. With advanced capabilities in
                        insightful analysis, meticulous test case generation,
                        and cutting-edge bug detection, Alec AI transforms your
                        development process. Designed to adapt to your unique
                        workflow, Alec AI ensures your software is impeccable
                        and market-ready. Experience the magic of effortless QA
                        with a tool that not only meets but anticipates your
                        testing needs.
                    </div>
                    <Button  className="lg:mt-20 lg:h-10  lg:w-60 w-40 mt-10  lg:text-xl" onClick={push_alec_console}>
                    Try Alec
                </Button>
                </div>
            </div>
        </div>
    );
}
