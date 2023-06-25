"use client";
import Button from "@/components/Button/Button";
import React, { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useLoginModal from "@/hooks/useLoginModal";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Modal from "@/components/Modal/Modal";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/Input/Input";
import { toast } from "react-hot-toast";

const LoginModal: React.FC = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("api/login", data)
      .then(() => {
        console.log("enviou");
        loginModal.onClose();
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          toast.error("Algo deu errado, tente novamente.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Modal
      title="Entre ou cadastre-se"
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
    >
      <div className="flex flex-col gap-4">
        <Heading title={"Bem vindo ao Airbnb"} hierarquy="h3" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          onSubmitCapture={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-4">
            <Input
              id="email"
              type="email"
              inputMode="email"
              label="E-mail"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="name"
              label="Nome completo"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="password"
              type="password"
              label="Senha"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Button type="submit" variant="primary">
              Continuar
            </Button>
          </div>
        </form>
        <div className="flex">
          <hr className="w-3/6 h-[2px] bg-zinc-300 relative top-[12px]" />
          <span className="text-neutral-500 mx-4">ou</span>
          <hr className="w-3/6 h-[2px] bg-zinc-300 relative top-[12px]" />
        </div>
        <Button
          variant="ghost"
          icon={FcGoogle}
          className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-yellow-300 to-blue-600 focus:border-zinc-500 focus:ring-zinc-500"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-yellow-300 to-blue-600">
            Continuar com Google
          </span>
        </Button>
        <Button
          variant="ghost"
          icon={AiFillGithub}
          className="text-black focus:border-zinc-500 focus:ring-zinc-500"
        >
          Continuar com Github
        </Button>
        <p className="text-neutral-500 text-center">
          Já possui uma conta?{" "}
          <a
            className="font-bold text-neutral-800 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600"
            onClick={loginModal.onClose}
            tabIndex={0}
          >
            Entre aqui!
          </a>
        </p>
      </div>
    </Modal>
  );
};

export default LoginModal;
