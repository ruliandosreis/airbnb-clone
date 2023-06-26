"use client";
import React, { FC, useCallback, useState } from "react";

import { BiGlobe, BiMenu } from "react-icons/bi";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useRentModal from "@/hooks/useRentModal";

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
  const rentModal = useRentModal();

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    // Open Rent Modal
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <button
          role="button"
          className="hidden lg:block text-sm text-zinc-800 font-bold transition py-3 px-4 rounded full"
          tabIndex={0}
          onClick={onRent}
        >
          Anuncie seu espaço no Airbnb
        </button>
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
                className="text-start p-4 font-bold text-zinc-800 hover:bg-zinc-100"
                onClick={() => console.log("Minhas Viagens")}
                role="button"
                tabIndex={0}
              >
                Minhas Viagens
              </button>
              <button
                className="text-start p-4 font-bold text-zinc-800 hover:bg-zinc-100"
                onClick={rentModal.onOpen}
                role="button"
                tabIndex={0}
              >
                Meu espaço
              </button>
              <button
                className="text-start p-4 font-bold text-zinc-800 hover:bg-zinc-100"
                onClick={() => console.log("Reservas")}
                role="button"
                tabIndex={0}
              >
                Reservas
              </button>
              <button
                className="text-start p-4 font-bold text-zinc-800 hover:bg-zinc-100"
                onClick={() => console.log("Favoritos")}
                role="button"
                tabIndex={0}
              >
                Favoritos
              </button>
              <button
                className="text-start p-4 font-bold text-rose-600 border-t-[1px] hover:bg-rose-100"
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
                className="text-start p-4 font-bold text-zinc-800 hover:bg-zinc-100"
                onClick={registerModal.onOpen}
                role="button"
                tabIndex={0}
              >
                Cadastrar-se
              </button>
              <button
                className="text-start p-4 border-b-[1px] text-zinc-800 hover:bg-zinc-100"
                onClick={loginModal.onOpen}
                role="button"
                tabIndex={0}
              >
                Entrar
              </button>
              <button
                className="text-start p-4 text-zinc-800 hover:bg-zinc-100"
                role="button"
                tabIndex={0}
              >
                Anuncie seu espaço no Airbnb
              </button>
              <button
                className="text-start p-4 text-zinc-800 hover:bg-zinc-100"
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
