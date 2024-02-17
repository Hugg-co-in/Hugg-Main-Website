import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
    },
    {
      name: "About",
      slug: "/about-us",
      active: true,
    },
    {
      name: "Contact",
      slug: "/contact-us",
      active: true,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Menu />
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
