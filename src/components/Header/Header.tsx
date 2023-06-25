"use client";
import React, { FC, useState } from "react";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import UserMenu from "./UserMenu/UserMenu";
import LoginModal from "./LoginModal/LoginModal";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-4">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
      <LoginModal />
    </div>
  );
};

export default Header;
