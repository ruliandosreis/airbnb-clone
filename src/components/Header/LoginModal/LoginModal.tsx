import Button from "@/components/Button/Button";
import React from "react";

const LoginModal = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Bem vindo ao Airbnb</h3>
      <Button variant="primary">Continuar</Button>
      <span className="">
        Ligaremos ou enviaremos uma mensagem para confirmar seu número. Podem
        ser aplicadas tarifas padrão de dados e mensagens.
        <a
          className="font-bold underline ml-[0.5ch]"
          href="https://www.airbnb.com.br/help/article/2855"
        >
          Política de privacidade
        </a>
      </span>
      <Button variant="ghost">Sair</Button>
    </div>
  );
};

export default LoginModal;
