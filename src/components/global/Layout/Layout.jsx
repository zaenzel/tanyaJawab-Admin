import React from "react";
import DefaultFooter from "./DefaultFooter/DefaultFooter";
import DefaultNavbar from "./DefaultNavbar/DefaultNavbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center">
      <DefaultNavbar />
      <div className="flex max-w-5xl w-full justify-center p-5 mx-auto min-h-[calc(100vh_-_8rem)]">
        {children}
      </div>
      <DefaultFooter />
    </div>
  );
};

export default Layout;
