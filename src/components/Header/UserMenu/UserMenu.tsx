"use client";
import React, { FC, useCallback, useState } from "react";

import { BiGlobe, BiMenu } from "react-icons/bi";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useRentModal from "@/hooks/useRentModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import Avatar from "./Avatar/Avatar";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu: () => void = () => setIsOpen(!isOpen);
  const router = useRouter();

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
          className="rounded-full p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-0 md:gap-3 shadow-md"
          onClick={toggleMenu}
          role="button"
        >
          <BiMenu
            size={"1.25rem"}
            title="User Menu"
            className="hidden md:block"
          />
          <Avatar src={currentUser?.image} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[50vw] md:w-[35vw] bg-white overflow-hidden right-0 top-14 md:top-16 text-sm">
          {currentUser ? (
            <div className="flex flex-col">
              <button
                className="text-start p-4 font-bold text-zinc-800 hover:bg-zinc-100"
                onClick={() => router.push("/trips")}
                role="button"
                tabIndex={0}
              >
                Minhas viagens
              </button>
              <button
                className="text-start p-4 font-bold text-zinc-800 hover:bg-zinc-100"
                onClick={() => router.push("/bookings")}
                role="button"
                tabIndex={0}
              >
                Meus espaços
              </button>
              <button
                className="text-start p-4 font-bold text-zinc-800 hover:bg-zinc-100 lg:hidden"
                onClick={rentModal.onOpen}
                role="button"
                tabIndex={0}
              >
                Anuncie seu espaço
              </button>
              <button
                className="md:hidden text-start p-4 font-bold text-zinc-800 hover:bg-zinc-100 flex gap-2"
                onClick={rentModal.onOpen}
                role="button"
                tabIndex={0}
              >
                <BiGlobe size={"1.25rem"} title="Language Menu" />
                PT-BR
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
