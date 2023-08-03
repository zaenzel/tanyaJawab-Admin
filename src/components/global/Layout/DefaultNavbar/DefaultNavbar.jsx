import { Button, Navbar } from "flowbite-react";
import React from "react";

const DefaultNavbar = () => {
  return (
    <div className="bg-primary flex justify-center">
      <Navbar fluid className="bg-primary max-w-5xl w-full">
        <Navbar.Brand href="/">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/images/logo.png"
          />
        </Navbar.Brand>
        <Button color="light" className="flex text-white hover:text-primary">
          Logout
        </Button>
        {/* <Navbar.Toggle className="hidden text-white hover:text-primary" />
      <Navbar.Collapse className="hidden">
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p>About</p>
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default DefaultNavbar;
