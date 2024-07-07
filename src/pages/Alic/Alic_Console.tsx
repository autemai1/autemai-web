import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import {
    Drawer,
    DrawerContent,

    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
export default function Alic_Console() {
    return (
        <div className="antialiased ">
            <nav className="  px-6 py-10 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
           
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center ">
                    <Drawer >
                    <DrawerTrigger className="md:hidden   lg:hidden  mr-5">
                    <Menu />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Alec</DrawerTitle>

                        </DrawerHeader>
                        <div
                className="h-[30rem]"
                aria-label="Sidenav"
                id="drawer-navigation"
            >
                <Button className="w-56 justify-start ml-20 rounded-[20rem] h-12  font-semibold  mt-14">
                    <svg
                        className="w-5 mr-5 h-5  text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="5"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14m-7 7V5"
                        />
                    </svg>
                    New Task
                </Button>
                <div className="text-left flex mt-8 ml-20  ">
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                        />
                    </svg>
                    <p className="font-semibold ml-5 mr-7 text-[1rem]">Previous Tasks</p>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
</svg>

                </div>
                <div className="text-left flex mt-8 ml-20  ">
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                        />
                    </svg>

                    <p className="font-semibold ml-5 mr-[5.7rem] text-[1rem]"> Saved</p>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
</svg>

                </div>
                <div className="text-left flex mt-8 ml-20  ">
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
                            d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd"
                              strokeWidth="2"
                        />
                    </svg>

                    <p className="font-semibold ml-5 mr-20 text-[1rem]">Reports</p>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
</svg>

                </div>
                <div className="text-left flex mt-8 ml-20 ">
                    <svg
                        className="w-5 h-5 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
                        />
                    </svg>

                    <p className="font-semibold ml-5 mr-20 text-[1rem]">Support</p>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
</svg>

                </div>
                <div className="text-left ml-20 mt-10 text-gray-400">
                    <p >Pinned</p>
                    <Button className="justify-start bg-[#2b2b2f] h-14  text-white w-48 mt-5" variant="outline">Eye Cream</Button>
                    {/* <Button className="justify-start bg-[#19191e] h-14 text-white w-48 mt-5" variant="outline">Talking with steve</Button>
                    <Button className="justify-start bg-[#19191e] h-14 text-white w-48 mt-5" variant="outline">Check Grammar</Button> */}
                </div>
                <div className="overflow-y-auto mt-20"></div>
            </div>

                        <DrawerFooter>
                          
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                        <a
                            href="https://flowbite.com"
                            className="flex items-center justify-between mr-4"
                        >
                            <img
                                src="logo.jpg"
                                className="mr-3 h-8 w-8 rounded-full"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Alec
                            </span>
                        </a>

                        <button
                            type="button"
                            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 lg:ml-[80rem] ml-28"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://github.com/shadcn.png"
                                alt="user photo"
                            />
                        </button>
                    </div>
                </div>
            </nav>

            <aside
                className="fixed top-0 left-0 z-40 w-72 h-screen pt-14 transition-transform -translate-x-full  md:translate-x-0   dark:border-gray-700 dark:bg-[#101015] hidden lg:block"
                aria-label="Sidenav"
                id="drawer-navigation"
            >
                <Button className="w-56 justify-start rounded-[20rem] h-12  font-semibold  mt-14">
                    <svg
                        className="w-5 mr-5 h-5  text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="5"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14m-7 7V5"
                        />
                    </svg>
                    New Task
                </Button>
                <div className="text-left flex mt-8 ml-12  ">
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                        />
                    </svg>
                    <p className="font-semibold ml-5 mr-7 text-[1rem]">Previous Tasks</p>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
</svg>

                </div>
                <div className="text-left flex mt-8 ml-12  ">
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                        />
                    </svg>

                    <p className="font-semibold ml-5 mr-[5.7rem] text-[1rem]"> Saved</p>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
</svg>

                </div>
                <div className="text-left flex mt-8 ml-12  ">
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
                            d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd"
                              strokeWidth="2"
                        />
                    </svg>

                    <p className="font-semibold ml-5 mr-20 text-[1rem]">Reports</p>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
</svg>

                </div>
                <div className="text-left flex mt-8 ml-12  ">
                    <svg
                        className="w-5 h-5 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
                        />
                    </svg>

                    <p className="font-semibold ml-5 mr-20 text-[1rem]">Support</p>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7"/>
</svg>

                </div>
                <div className="text-left ml-12 mt-10 text-gray-400">
                    <p >Pinned</p>
                    <Button className="justify-start bg-[#2b2b2f] h-14  text-white w-48 mt-5" variant="outline">Eye Cream</Button>
                    <Button className="justify-start bg-[#19191e] h-14 text-white w-48 mt-5" variant="outline">Talking with steve</Button>
                    <Button className="justify-start bg-[#19191e] h-14 text-white w-48 mt-5" variant="outline">Check Grammar</Button>
                </div>
                <div className="overflow-y-auto mt-20"></div>
            </aside>
            <aside
                className="lg:fixed  lg:top-0 lg:left-72 lg:z-40 lg:w-[100vw] h-screen pt-14 transition-transform -translate-x-full   md:translate-x-0  dark:border-gray-700 dark:bg-[#15151b]"
                aria-label="Sidenav"
                id="drawer-navigation"
            >
                <div className="lg:w-2/4 lg:h-3/4 w-full ml-[22rem]  mt-10 lg:ml-[14.5rem] lg:mt-20  rounded-2xl ">
                    <div className="flex ml-4  pt-5">
                        <div>
                            <img
                                className="lg:w-12 lg:h-12 w-8 h-8 rounded-full mr-4 "
                                src="logo.jpg"
                                alt="user photo"
                            />
                        </div>
                        <div className="text-left">
                            <span className="text-xl font-semibold   dark:text-white">
                            Alec says Hi👋
                            </span>
                            <p className=" text-sm  mt-1   text-[#aaaaab]">
                            Hey User, Let’s Start Alec Magic for your Tasks
                            </p>
                        </div>
                    </div>

                    <div className="text-left mt-10 ml-20">
                        <span className="  text-xl  ">
                           Please Provide The  Details
                        </span>
                    </div>
                    <div className="text-left mt-10">
                        <label htmlFor="task" className="ml-20">
                        Task for Alec

                        </label>
                        <Input
                            placeholder="Enter your task"
                            id="task"
                            className="w-1/2 ml-20 mt-2 mb-5"
                        />
                        <label htmlFor="email" className="ml-20">
                        Email for Details and Reports
                        </label>
                        <Input
                            placeholder="Enter your email"
                            id="email"
                            className="w-1/2 ml-20 mt-2"
                        />
                        <Button className="mt-20 ml-64 lg:ml-[23rem]">Alec Magic</Button>
                    </div>
                </div>
            </aside>
        </div>
    );
}
