import {
  CircleUserRound,
  Cloud,
  CreditCard,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  QrCode,
  SunMoon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logout } from "../../redux/features/auth/authSlice";
import { useTheme } from "@/redux/features/theme/themeProvider";

const UserMenu = () => {
  const { setTheme } = useTheme();

  // -----------------------------------------------
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await axios.post("/api/v1/users/logout").then(() => {
      dispatch(logout());
      alert("Logout Successfully");
    });
  };
  // -------------------------------------------------------
  const userMenuItems = [
    {
      name: "Profile",
      icon: <User className="mr-2 h-4 w-4" />,
      slug: "/",
      active: true,
    },
    {
      name: "Orders",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
      slug: "/my-order",
      active: true,
    },
    {
      name: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      slug: "/setting",
      active: true,
    },

    // {
    //   name: "Billing",
    //   slug: "/my-prfile",
    //   active: true,
    // },
    // {
    //   name: "Billing",
    //   slug: "/my-prfile",
    //   active: true,
    // },
  ];

  const qrSubMenuItems = [
    {
      name: "Qr Profile",
      slug: "/qr-profile",
      active: true,
    },
    {
      name: "Qr ProfileForm",
      slug: "/qr-profile-form",
      active: true,
    },
  ];

  const themeSubMenu = [
    {
      name: "Light",
      Settheme: () => setTheme("light"),
    },
    {
      name: "Dark",
      Settheme: () => setTheme("dark"),
    },
    {
      name: "System",
      Settheme: () => setTheme("system"),
    },
  ];

  const authItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ];
  // -----------------------

  // ---------------------------

  const userMenuList = authStatus ? userMenuItems : authItems;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <CircleUserRound className="w-8 h-8" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 mt-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {authStatus && (
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <QrCode className="mr-2 h-4 w-4" />
              <span>Qr Finder</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {qrSubMenuItems.map((q) => (
                  <DropdownMenuItem key={q.name}>
                    {/* {u.icon} */}
                    <Link to={q.slug}>{q.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        )}
        {authStatus && <DropdownMenuSeparator />}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <DropdownMenuGroup>
          {userMenuList.map((u) => (
            <DropdownMenuItem key={u.name}>
              {u.icon}
              <Link to={u.slug}>{u.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        {authStatus && <DropdownMenuSeparator />}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {authStatus && (
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunMoon className="mr-2 h-4 w-4" />
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {themeSubMenu.map((t) => (
                  <DropdownMenuItem key={t.name} onClick={t.Settheme} className="cursor-pointer">
                    {t.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        )}
        {authStatus && <DropdownMenuSeparator />}
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {authStatus && (
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <button onClick={logoutHandler}>Logout</button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
