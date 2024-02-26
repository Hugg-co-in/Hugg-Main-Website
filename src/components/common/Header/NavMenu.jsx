import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import React from "react";
const NavMenu = () => {
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
      css: "",
    },
    {
      name: "About",
      slug: "/about-us",
      active: true,
      css: " underline",
    },
    {
      name: "Services",
      slug: "/services",
      active: true,
      css: " underline",
    },
    {
      name: "Team",
      slug: "/team",
      active: true,
      css: " underline",
    },
    {
      name: "Contact",
      slug: "/contact",
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Menu className="text-white" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 mt-5">
        <DropdownMenuGroup>
          {navItems.map((nav) => (
            <DropdownMenuItem key={nav.name}>
              <NavLink to={nav.slug}>{nav.name}</NavLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
