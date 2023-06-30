"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: FC<EmptyStateProps> = ({
  title = "Não encontramos nada",
  subtitle = "Tente alterar ou remover alguns filtros para ver mais resultados.",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className="h-[50vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showReset && (
          <Button variant="primary" onClick={() => router.push("/")}>
            Remover filtros
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
