import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
export default function PricingSection() {
    const navigate = useNavigate();
    function push_alec_console() {
        // Navigate to the desired route
        navigate('/alec_console');
    }
    return (
        <section className="lg:w-[100vw] mb-40" id="pricing">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 lg:text-7xl text-4xl font-extrabold text-gray-900 dark:text-white">
                        Work More With{" "}
                        <span className="text-purple-500">Alec</span>
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400 font-bold lg:mt-8">
                        Alec provides a wide range of features to help you work
                        more efficiently.
                    </p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white  ">
                        <h3 className="mb-4 text-2xl font-semibold">
                            Free Tier
                        </h3>
                        <p className="font-light  sm:text-lg  ">
                            Best option for personal use & for your next
                            project.
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">
                                $0
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                                /month
                            </span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-pruple-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>20 Tasks per month</span>
                            </li>
                        </ul>
                        <Button className="text-white  focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900" onClick={push_alec_console}>
                            Get started
                        </Button>
                    </div>

                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8  dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">
                            Developer Pack
                        </h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Relevant for multiple users, extended & premium
                            support.
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">
                                $18
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                                /month
                            </span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>50 Tasks per month</span>
                            </li>
                        </ul>
                        <Button className="text-white  focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900" onClick={push_alec_console}>
                            Get started
                        </Button>
                    </div>

                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900  rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8  dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">
                            Enterprise
                        </h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            Best for large scale uses and extended
                            redistribution rights.
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">
                                $35
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                                /month
                            </span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Unlimited Tasks</span>
                            </li>
                        </ul>
                        <Button className="text-white  focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900" onClick={push_alec_console}>
                            Get started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
