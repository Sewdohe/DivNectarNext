import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
//@ts-ignore
import logo from "../images/logo.png" // Tell webpack this JS file uses this image
import { Link } from "gatsby"
import { v4 as uuidv4 } from 'uuid';



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Minecraft Servers",
      route: "/servers"
    },
    {
      name: "Non-Exist",
      route: "/nothing"
    },
  ];

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img className="logo-img" src={logo} alt="Logo" />
          <p className="font-bold text-inherit">&lt;DivNectar/&gt;</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(item => (
          <NavbarItem key={uuidv4()}>
            <Link color="foreground" to={item.route} activeStyle={{
              color: "#de0ee9",
              textDecoration: 'underline',
              fontWeight: 700
            }}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* <NavbarContent justify="end">
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