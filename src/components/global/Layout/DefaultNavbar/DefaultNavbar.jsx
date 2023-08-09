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
        <Button color="light" className="flex text-white hover:text-primary" onClick={e => localStorage.removeItem("user")}>
          Logout
        </Button>
      </Navbar>
    </div>
  );
};

export default DefaultNavbar;
