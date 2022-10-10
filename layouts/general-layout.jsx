import React from "react";
import { clx } from "../helpers/clx";
import Header from "../components/header";
import Footer from "../components/footer";

export default function GeneralLayout({ classname, children }) {

  const classes = clx(
    "bg-secondary-300/10 flex flex-col min-h-screen",
    classname
  );
  return (
      <div className={classes}>
        <Header />
        <div className='flex-1'>{children}</div>
        <Footer />
      </div>
  );
}
