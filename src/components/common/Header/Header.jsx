import { Button } from "@/components/ui/button";
import React from "react";
import NavMenu from "./NavMenu";
import { Link, NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "../Logo";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import AnchorLink from "react-anchor-link-smooth-scroll";

// ###########################################################
const Header = () => {
  const navItems = [
    {
      name: "Home",
      slug: "#hero",
      active: true,
      css: "",
    },
    {
      name: "About",
      slug: "#about-us",
      active: true,
      css: " underline",
    },
    {
      name: "Services",
      slug: "#services",
      active: true,
      css: " underline",
    },
    {
      name: "Team",
      slug: "#team",
      active: true,
      css: " underline",
    },
    {
      name: "Contact",
      slug: "#contact",
      active: true,
      css: " underline",
    },
  ];

  const triggeredNavMenu = [
    {
      menuBarName: "Psychology",
      menuBarItems: [
        { name: "CBT Cohorts", slug: "https://psychology.hugg.co.in" },
        { name: "Join our team", slug: "mailto:careers@hugg.co.in" },
      ],
    },
    // {
    //   menuBarName: "Psychology2",
    //   menuBarItems: [
    //     { name: "link1", slug: "#", active: true, css: " underline" },
    //     { name: "link2", slug: "#", active: true, css: " underline" },
    //   ],
    // },
  ];
  return (
    <Card className="shadow sticky z-50 top-0 max-[480px]:m-0 max-[480px]:p-0 border-none rounded-none dark:bg-black bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="min-[901px]:order-1 max-[900px]:order-1">
          <Link to="/">
            <div>
              <Logo />
            </div>
          </Link>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="min-[901px]:order-3 max-[900px]:order-2 flex flex-row">
          <div className="flex items-center space-x-3 min-[901px]:space-x-0 rtl:space-x-reverse max-[900px]:mr-4 min-[901px]:order-3 max-[900px]:order-2">
            {/* <span className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"> */}
            {/* <UserMenu /> */}
            <Link to="/booking">
              <Button className="border-[#17AD94] border-2 bg-none bg-transparent">
                Book Therapy
              </Button>
            </Link>
            {/* </span> */}
          </div>
          {/* ----------------------------------------------------------- */}
          <div className="items-center justify-between hidden w-full max-[900px]:flex max-[900px]:w-auto  max-[900px]:order-3">
            {/* <span className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"> */}
            <NavMenu />
            {/* </span> */}
          </div>
          {/* ------------------------------------------------------------- */}
          {/* <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse max-[767px]:ml-4 md:order-4 max-[767px]:order-4">
            <Link to="/cart">
              <ShoppingCart />
            </Link>
          </div> */}
        </div>
        {/* ------------------------------------ */}

        <div className="hidden w-full min-[901px]:flex min-[901px]:w-auto min-[901px]:order-2">
          <CardContent className="p-0">
            <NavigationMenu>
              <NavigationMenuList>
                {/* ------------------A------------------ */}
                {navItems.map((item) =>
                  item.active ? (
                    <NavigationMenuItem key={item.name}>
                      <AnchorLink
                        href={item.slug}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? `${item.css}`
                            : "bg-black"
                        }
                        legacyBehavior
                        passHref>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} bg-black text-white`}>
                          {item.name}
                        </NavigationMenuLink>
                      </AnchorLink>
                    </NavigationMenuItem>
                  ) : null
                )}
                {/* ------------------ C --------------------. */}

                <Menubar className="border-none bg-black text-white">
                  {triggeredNavMenu.map((item) => (
                    <MenubarMenu key={item.menuBarName}>
                      <MenubarTrigger>
                        {item.menuBarName}
                        <ChevronDown />
                      </MenubarTrigger>
                      <MenubarContent>
                        {/* ------ 1 ----- */}
                        {item.menuBarItems.map((i) => (
                          <a href={i.slug}>
                            <MenubarItem
                              key={i.name}
                              className="cursor-pointer">
                              {i.name}
                              <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                          </a>
                        ))}
                      </MenubarContent>
                    </MenubarMenu>
                  ))}
                </Menubar>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default Header;
