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
import whatsappIcon from "@/assets/icons/whatsapp.svg";
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
          <div className="flex items-center max-[480px]:space-x-1 space-x-3 min-[901px]:space-x-4 rtl:space-x-reverse max-[900px]:mr-4 max-[480px]:mr-2 min-[901px]:order-3 max-[900px]:order-2">
            <div>
              <a
                href="https://chat.whatsapp.com/GxM1U1YXKNFFwsFGIKlflB"
                target="_blank">
                <Button className="border-[#17AD94] border-2 bg-none bg-transparent max-[900px]:p-1">
                  Join our&nbsp;
                  <img src={whatsappIcon} className=" w-4" alt="" />
                  &nbsp;community
                </Button>
              </a>
            </div>
            <div className="max-[640px]:hidden">
              <NavLink to="/booking">
                <Button className="border-[#17AD94] border-2 bg-none bg-transparent">
                  Book Therapy
                </Button>
              </NavLink>
            </div>
          </div>
          {/* ----------------------------------------------------------- */}
          <div className="items-center justify-between hidden w-full max-[900px]:flex max-[900px]:w-auto  max-[900px]:order-3">
            <NavMenu />
          </div>
        </div>
        {/* ------------------------------------ */}

        <div className="hidden w-full min-[901px]:flex min-[901px]:w-auto min-[901px]:order-2">
          <CardContent className="p-0">
            <NavigationMenu>
              <NavigationMenuList>
                {/* ------------------A------------------ */}
                {navItems.map((item, index) =>
                  item.active ? (
                    <NavigationMenuItem key={index}>
                      <AnchorLink href={item.slug}>
                        <span className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-black text-white">
                          {item.name}
                        </span>
                      </AnchorLink>
                    </NavigationMenuItem>
                  ) : null
                )}
                {/* ------------------ C --------------------. */}

                <Menubar className="border-none bg-black text-white">
                  {triggeredNavMenu.map((item, index) => (
                    <MenubarMenu key={index}>
                      <MenubarTrigger>
                        {item.menuBarName}
                        <ChevronDown />
                      </MenubarTrigger>
                      <MenubarContent>
                        {/* ------ 1 ----- */}
                        {item.menuBarItems.map((i, index) => (
                          <a href={i.slug} key={index}>
                            <MenubarItem className="cursor-pointer">
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
