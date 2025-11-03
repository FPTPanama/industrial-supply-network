"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../styles/header.scss";
import Menu from "./Menu";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <div className={classNames("headerWrapper")}>
      <Link href={"/"}>
        <Image
          src={"/img/industrial_supply_network_logo.svg"}
          alt={"Industrial Supply Network logo"}
          width={140}
          height={30}
          className="z-40"
        />
      </Link>
      <BurgerMenu />
      <Menu className="desBotBox" />
    </div>
  );
};

export default Header;
