import React, { Fragment } from "react";
import { Navbar } from "./Navbar.js";

export const Layout = (props) => {
  return (
    <Fragment>
      <Navbar/>

      <main class="select-none flex">
        {props.children}
      </main>
    </Fragment>
  )
}