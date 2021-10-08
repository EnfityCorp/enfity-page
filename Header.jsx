import React from "react";

function Header() {
  let url ="";
    return (
   <header>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href={url}>EnFiTy</a>
      <button className="btn ms-auto me-2">Get started</button></nav>
   </header>
    )
}

export default Header;