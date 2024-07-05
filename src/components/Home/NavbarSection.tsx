import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  scroller } from "react-scroll";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
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
                <div className="hidden md:block ml-60 lg:block">
                    <ModeToggle />
                </div>
                <Button className="ml-4 hidden lg:block">Get Started</Button>
                <Drawer>
                    <DrawerTrigger className="md:hidden lg:hidden ml-[14rem] mt-4">
                        <Menu />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                            <DrawerDescription>
                                This action cannot be undone.
                            </DrawerDescription>
                        </DrawerHeader>
                        <NavigationMenu>
                            <NavigationMenuList className="block ml-3">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className="w-[22rem]"
                                        onClick={() => scrollToSection("home")}
                                    >
                                        Home
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className="w-[22rem]"
                                        onClick={() =>
                                            scrollToSection("feature")
                                        }
                                    >
                                        Features
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className="w-[22rem]"
                                        onClick={() =>
                                            scrollToSection("pricing")
                                        }
                                    >
                                        Pricing
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className="w-[22rem]"
                                        onClick={() =>
                                            scrollToSection("aboutalec")
                                        }
                                    >
                                        About Alec
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className="w-[22rem]"
                                        onClick={() =>
                                            scrollToSection("alecwork")
                                        }
                                    >
                                        How It Works
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className="w-[22rem]"
                                        onClick={() =>
                                            scrollToSection("footer")
                                        }
                                    >
                                        Contact Us
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
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
