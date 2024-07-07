import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from 'react-router-dom';
import {  scroller } from "react-scroll";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavbarSection() {
    const scrollToSection = (sectionId: string) => {
        scroller.scrollTo(sectionId, {
            duration: 1200,
            delay: 3,
            smooth: "easeInOutQuart",
        });
    };
    const navigate = useNavigate();
    function push_alec_console() {
        // Navigate to the desired route
        navigate('/alec_console');
    }
    return (
        <div className="w-full">
            <div className="flex lg:ml-32 lg:mt-6 items-center lg:justify-between">
                {/* <Avatar className="rounded-lg lg:mr-20 ml-6 lg:ml-0 mt-4 md:mr-10 mr-36 lg:w-20 ">
                <AvatarImage src="/logo.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
                <h1 className="ml-5 lg:ml-0 mt-5 lg:mt-0 whitespace-nowrap">
                    AuTeM AI
                </h1>
                <NavigationMenu className="hidden lg:block md:block ml-60 flex-grow">
                    <NavigationMenuList className="flex justify-end">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                onClick={() => scrollToSection("home")}
                            >
                                Home
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                onClick={() => scrollToSection("feature")}
                            >
                                Features
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                onClick={() => scrollToSection("pricing")}
                            >
                                Pricing
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                onClick={() => scrollToSection("aboutalec")}
                            >
                                About Alec
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                onClick={() => scrollToSection("alecwork")}
                            >
                                How it Works
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                onClick={() => scrollToSection("footer")}
                            >
                                Contact Us
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="hidden md:block ml-40 lg:block">
                    <ModeToggle />
                </div>
                <Button className="ml-4 hidden lg:block" onClick={push_alec_console}>Signup</Button>
                <Button className="ml-4 hidden lg:block" onClick={push_alec_console}>Login</Button>
                <Drawer>
                    <DrawerTrigger className="md:hidden lg:hidden ml-[14rem] mt-4">
                        <Menu />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Get Started With Us</DrawerTitle>

                        </DrawerHeader>
                        <Button className=" w-40 m-auto mb-4  mt-4 lg:block" onClick={push_alec_console}>Signup</Button>
                        <Button className="  w-40 m-auto mb-4    lg:block" onClick={push_alec_console}>Login</Button>
                        <DrawerFooter>
                            <ModeToggle />
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <Separator className="mt-5 lg:mt-4 lg:w-[100vw]" />
        </div>
    );
}
