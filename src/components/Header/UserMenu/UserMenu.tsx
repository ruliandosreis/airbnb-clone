"use client";
import Modal from "@/components/Modal/Modal";
import LoginModal from "../LoginModal/LoginModal";
import React, { FC, useState } from "react";
import { BiGlobe, BiMenu, BiSolidUser } from "react-icons/bi";

const UserMenu: FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalChildren, setModalChildren] = useState<React.ReactNode>(() => (
    <></>
  ));

  const openLoginModal = () => {
    toggleMenu();
    setModalTitle("Entrar ou cadastrar-se");
    setModalChildren(LoginModal);
    toggleModal();
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <a
          // href="/host/homes"
          className="hidden lg:block text-sm font-bold transition py-3 px-4 rounded full"
        >
          Anuncie seu espaço no Airbnb
        </a>
        <button className="hidden md:block">
          <BiGlobe size={"1.25rem"} onClick={toggleModal} />
        </button>
        <button
          className="rounded-full p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 shadow-md"
          onClick={toggleMenu}
        >
          <BiMenu size={"1.25rem"} />
          <div className="hidden md:flex md:rounded-full bg-zinc-400 p-1">
            <BiSolidUser
              size={"1.25rem"}
              color="white"
              className="relative border-[1px] border-zinc-400 rounded-full"
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[50vw] md:w-[35vw] bg-white overflow-hidden right-0 top-14 md:top-16 text-sm">
          <div className="flex flex-col">
            <button
              className="text-start p-4 font-bold"
              onClick={openLoginModal}
            >
              Cadastrar-se
            </button>
            <button
              className="text-start p-4 border-b-[1px]"
              onClick={openLoginModal}
            >
              Entrar
            </button>
            <button className="text-start p-4">
              Anuncie seu espaço no Airbnb
            </button>
            <button className="text-start p-4">Ajuda</button>
          </div>
        </div>
      )}
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          title={modalTitle}
        >
          {modalChildren}
        </Modal>
      )}
    </div>
  );
};

export default UserMenu;
