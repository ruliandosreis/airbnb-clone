"use client";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/Input/Input";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginModal: React.FC = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success("Boas Vindas!");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <Modal
      title="Faça seu login!"
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
    >
      <div className="flex flex-col gap-4">
        <Heading
          title={"Que bom te ver de novo!"}
          hierarquy="h3"
          subtitle="Entre na sua conta informando suas credenciais nos campos abaixo."
        />
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
              id="password"
              type="password"
              label="Senha"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Button type="submit" variant="primary">
              Entrar
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
          className="text-zinc-800 focus:border-zinc-500 focus:ring-zinc-500"
          onClick={() => signIn("github")}
        >
          Continuar com Github
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;
