"use client";
import React, { FC, useState } from "react";

import { BiGlobe, BiMenu, BiSolidUser } from "react-icons/bi";
import Image from "next/image";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import Avatar from "./Avatar/Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu: () => void = () => setIsOpen(!isOpen);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <a
          href="/host/homes"
          className="hidden lg:block text-sm text-zinc-800 font-bold transition py-3 px-4 rounded full"
          tabIndex={0}
        >
          Anuncie seu espaço no Airbnb
        </a>
        <button className="hidden md:block" role="button">
          <BiGlobe size={"1.25rem"} title="Language Menu" />
        </button>
        <button
          className="rounded-full p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 shadow-md"
          onClick={toggleMenu}
          role="button"
        >
          <BiMenu size={"1.25rem"} title="User Menu" />
          <Avatar src={currentUser?.image} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[50vw] md:w-[35vw] bg-white overflow-hidden right-0 top-14 md:top-16 text-sm">
          {currentUser ? (
            <div className="flex flex-col">
              <button
                className="text-start p-4 font-bold text-zinc-800"
                onClick={() => console.log("Minhas Viagens")}
                role="button"
                tabIndex={0}
              >
                Minhas Viagens
              </button>
              <button
                className="text-start p-4 font-bold text-zinc-800"
                onClick={() => console.log("Reservas")}
                role="button"
                tabIndex={0}
              >
                Reservas
              </button>
              <button
                className="text-start p-4 font-bold text-zinc-800"
                onClick={() => console.log("Favoritos")}
                role="button"
                tabIndex={0}
              >
                Favoritos
              </button>
              <button
                className="text-start p-4 font-bold text-rose-600 border-t-[1px]"
                onClick={() => signOut()}
                role="button"
                tabIndex={0}
              >
                Encerrar Sessão
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <button
                className="text-start p-4 font-bold text-zinc-800"
                onClick={registerModal.onOpen}
                role="button"
                tabIndex={0}
              >
                Cadastrar-se
              </button>
              <button
                className="text-start p-4 border-b-[1px] text-zinc-800"
                onClick={loginModal.onOpen}
                role="button"
                tabIndex={0}
              >
                Entrar
              </button>
              <button
                className="text-start p-4 text-zinc-800"
                role="button"
                tabIndex={0}
              >
                Anuncie seu espaço no Airbnb
              </button>
              <button
                className="text-start p-4 text-zinc-800"
                role="button"
                tabIndex={0}
              >
                Ajuda
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
