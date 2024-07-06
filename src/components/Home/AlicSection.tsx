import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
export default function AlicSection() {
    const navigate = useNavigate();
    function push_alec_console() {
        // Navigate to the desired route
        navigate('/alec_console');
    }
    return (
        <div>
            <section className="lg:w-[100vw]" id="feature">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md m-auto  mb-8 lg:mb-16">
                        <h2 className="mb-4 lg:text-7xl text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            {" "}
                            <h2 className="mb-4  tracking-tight  font-extrabold lg:text-7xl  text-purple-500">
                                {" "}
                                Alec AI
                            </h2>{" "}
                            Capabilities
                        </h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-400 font-bold lg:mt-8">
                            Let’s Explore what Alec can do for you
                        </p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center m-auto  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 3v4a1 1 0 0 1-1 1H5m5 4-2 2 2 2m4-4 2 2-2 2m5-12v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Comprehensive Code Review and Feedback
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Comprehensive Code Review and Feedback Alec AI
                                meticulously reviews your code, highlighting
                                areas for improvement and providing actionable
                                feedback. It checks for best practices, coding
                                standards, and potential issues, ensuring your
                                code is clean and efficient.
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center  m-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                {" "}
                                Testing Requirements and Requirement Analysis
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Alec AI dives deep into your project
                                requirements, analyzing and understanding them
                                to design precise testing strategies. It ensures
                                that every aspect of your software meets the
                                desired specifications and quality standards.
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center  m-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                {" "}
                                Test Case Design, Development, and Scheduling
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Alec AI excels in generating detailed and
                                effective test cases. It prioritizes tests,
                                designs comprehensive test schedules, and
                                ensures thorough coverage of your software’s
                                functionalities, catching issues before they
                                reach your users.
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center  m-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m14 9.006h-.335a1.647 1.647 0 0 1-1.647-1.647v-1.706a1.647 1.647 0 0 1 1.647-1.647L19 12M5 12v5h1.375A1.626 1.626 0 0 0 8 15.375v-1.75A1.626 1.626 0 0 0 6.375 12H5Zm9 1.5v2a1.5 1.5 0 0 1-1.5 1.5v0a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5Z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Code Use Cases and Documentation
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Alec AI documents every aspect of the testing
                                process, from requirement analysis to final test
                                case results. It creates detailed reports that
                                include testing strategies, objectives,
                                resources, deliverables, and more, providing a
                                clear roadmap of your software’s quality
                                journey.
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center  m-auto mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                {" "}
                                Basic Bug Detection and Feedback
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Alec AI employs advanced techniques to detect
                                and report bugs efficiently. It provides
                                in-depth feedback on each bug, helping your team
                                understand and resolve issues quickly, reducing
                                time to market and improving user satisfaction.
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4  m-auto w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">
                                Robust Test Planning
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Alec AI excels in creating detailed test plans
                                that outline testing strategies, objectives,
                                resources, and deliverables. Ensure your testing
                                efforts are well-organized and aligned with
                                project goals.
                            </p>
                        </div>
                    </div>
                </div>
                <Button className="lg:mt-20 lg:h-10  lg:w-60 w-40 mt-10 lg:text-xl" onClick={push_alec_console}>
                    Try Alec
                </Button>
            </section>
            <section className="w-[100vw] mt-40 mb-40" id="alecwork">
                <h2 className="mb-4 lg:text-7xl text-4xl font-extrabold text-gray-900 dark:text-white">
                    How <span className="text-purple-500">Alec</span> Works
                </h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 font-bold lg:mt-8">
                    Let’s Take a Sneak Peek: How Alec Completes Your Tasks
                </p>
                <ol className="text-gray-500 lg:ml-[33rem] mt-10 lg:mt-20">
                    <li className="mb-10 flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 lg:mr-10 mr-5 dark:text-white bg-purple-400 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-purple-500">
                            1
                        </span>
                        <div className="ms-4">
                            <h3 className="font-medium leading-tight">
                                Provide Input to Alec
                            </h3>
                            <p className="text-sm">
                                Enter your task details and relevant information
                                into Alec’s interface.
                            </p>
                        </div>
                    </li>
                    <li className="mb-10 flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 lg:mr-10 mr-5 dark:text-white bg-purple-400 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-purple-500">
                            2
                        </span>
                        <div className="ms-4">
                            <h3 className="font-medium leading-tight">
                                Confirmation Email
                            </h3>
                            <p className="text-sm">
                                Receive a confirmation email from Alec
                                acknowledging receipt of your task.
                            </p>
                        </div>
                    </li>
                    <li className="mb-10 flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 lg:mr-10 mr-5 dark:text-white bg-purple-400 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-purple-500">
                            3
                        </span>
                        <div className="ms-4">
                            <h3 className="font-medium leading-tight">
                                Processing Initiates
                            </h3>
                            <p className="text-sm">
                                Alec starts processing your request among the
                                queued tasks.
                            </p>
                        </div>
                    </li>
                    <li className="mb-10 flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 lg:mr-10 mr-5 dark:text-white bg-purple-400 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-purple-500">
                            4
                        </span>
                        <div className="ms-4">
                            <h3 className="font-medium leading-tight">
                                Task Progress Updates
                            </h3>
                            <p className="text-sm">
                                Receive periodic updates as Alec works through
                                each stage of your task.
                            </p>
                        </div>
                    </li>
                    <li className="mb-10 flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 lg:mr-10 mr-5 dark:text-white bg-purple-400 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-purple-500">
                            5
                        </span>
                        <div className="ms-4">
                            <h3 className="font-medium leading-tight">
                                Completion Notifications
                            </h3>
                            <p className="text-sm">
                                Get notified via email when each task is
                                completed successfully.
                            </p>
                        </div>
                    </li>
                    <li className="mb-10 flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 lg:mr-10 mr-5 dark:text-white bg-purple-400 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-purple-500">
                            6
                        </span>
                        <div className="ms-4">
                            <h3 className="font-medium leading-tight">
                                Final Output Delivery
                            </h3>
                            <p className="text-sm">
                                Receive the final output or results of your task
                                delivered by Alec.
                            </p>
                        </div>
                    </li>
                </ol>
                <Button className="lg:mt-20 lg:h-10  lg:w-60 w-40 mt-10 lg:text-xl" onClick={push_alec_console}>
                    Try Alec
                </Button>
            </section>
        </div>
    );
}
