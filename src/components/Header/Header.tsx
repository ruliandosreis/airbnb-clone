import React, { FC } from "react";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import UserMenu from "./UserMenu/UserMenu";

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
    </div>
  );
};

export default Header;
