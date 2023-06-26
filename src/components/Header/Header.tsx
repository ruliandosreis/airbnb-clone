"use client";
import React, { FC } from "react";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import UserMenu from "./UserMenu/UserMenu";
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";

import { SafeUser } from "@/app/types";

interface HeaderProps {
  currentUser?: SafeUser | null;
}

const Header: FC<HeaderProps> = ({ currentUser }) => {
  return (
    <header className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <nav className="flex flex-row items-center justify-between gap-3 md:gap-4">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </nav>
        </Container>
      </div>
      <RegisterModal />
      <LoginModal />
    </header>
  );
};

export default Header;
