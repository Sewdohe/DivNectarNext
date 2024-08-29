import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
//@ts-ignore
import logo from "../images/logo.png" // Tell webpack this JS file uses this image
import { Link } from "gatsby"
import { v4 as uuidv4 } from 'uuid';
import LoginButton from './LoginButton'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile"


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuth0();

  const menuItems = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Minecraft",
      route: "/server/wiki"
    },
    {
      name: "Blog",
      route: "/blog"
    },
  ];

  return (
    <Navbar className="" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <img className="logo-img" src={logo} alt="Logo" />
          <p className="font-bold invisible md:visible text-inherit">&lt;DivNectar/&gt;</p>
        </NavbarBrand>
        <Profile classes="sm:hidden" />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(item => (
          <NavbarItem key={uuidv4()}>
            <Link className="text-sky" color="foreground" to={item.route} activeStyle={{
              color: "#cba6f7",
              textDecoration: 'underline',
              fontWeight: 700
            }}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <Profile classes="md:visible" />
      </NavbarContent>
      {/* <NavbarContent className="" justify="end">
      </NavbarContent> */}
      <NavbarMenu className="dark">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="dark" key={uuidv4()}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              activeStyle={{
                color: "#de0ee9",
                fontWeight: 700
              }}
              className="w-full text-white"
              to={item.route}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}