import { Button } from "@/components/ui/button";
import React from "react";
import NavMenu from "./NavMenu";
import { Link, NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "../Logo";

const Header = () => {
    const navItems = [
      {
        name: "Home",
        slug: "/",
        active: true,
        css: "",
      },
      {
        name: "About",
        slug: "#",
        active: true,
        css: " underline",
      },
      {
        name: "Services",
        slug: "#",
        active: true,
        css: " underline",
      },
      {
        name: "Team",
        slug: "#",
        active: true,
        css: " underline",
      },
      {
        name: "Psychology",
        slug: "#",
        active: true,
        css: " underline",
      },
      // {
      //   name: "CBT Cohorts",
      //   slug: "#",
      //   active: true,
      //   css: " underline",
      // },
      // {
      //   name: "Join our team",
      //   slug: "#",
      //   active: true,
      //   css: " underline",
      // },
      {
        name: "Contact",
        slug: "#",
        active: true,
        css: " underline",
      },
    ];

  
  return (
    <Card className="shadow sticky z-50 top-0 max-[480px]:m-0 max-[480px]:p-0 border-gray-200 rounded-none dark:bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="md:order-1 max-[767px]:order-1">
          <Link to="/">
            <div>
              <Logo />
            </div>
          </Link>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="md:order-3 max-[767px]:order-2 flex flex-row">
          <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse max-[767px]:mr-4 md:order-3 max-[767px]:order-2">
            {/* <span className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"> */}
            {/* <UserMenu /> */}
            <Button>Book Therapy</Button>
            {/* </span> */}
          </div>
          {/* ----------------------------------------------------------- */}
          <div className="items-center justify-between hidden w-full max-[767px]:flex max-[767px]:w-auto  max-[767px]:order-3">
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

        <div className="hidden w-full md:flex md:w-auto md:order-2">
          <CardContent className="p-0">
            <ul className="flex flex-col items-center justify-between font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className="">
                    <NavLink
                      to={item.slug}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? `${item.css}` : ""
                      }>
                      {item.name}
                    </NavLink>
                  </li>
                ) : null
              )}
            </ul>
          </CardContent>
        </div>
      </div>
      <hr />
    </Card>
  );
};

export default Header;
