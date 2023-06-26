"use client";
import React, { FC, useState, useMemo } from "react";
import Modal from "../Modal/Modal";
import useRentModal from "@/hooks/useRentModal";
import Button from "../Button/Button";
import { FieldValues, useForm } from "react-hook-form";
import Heading from "../Heading/Heading";
import { Category, categories } from "../Header/Categories/Categories";
import CategoryInput from "./CategoryInput";
import CountrySelect from "./CountrySelect";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal: FC = ({}) => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    if (step === STEPS.CATEGORY) {
      return rentModal.onClose();
    } else {
      setStep((value) => value - 1);
    }
  };

  const onNext = () => {
    if (step === STEPS.PRICE) {
      return rentModal.onClose();
    } else {
      setStep((value) => value + 1);
    }
  };

  const handleButtonLabel: string = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Criar reserva";
    }
    return "Avançar";
  }, [step]);

  const handleSecondaryButtonLabel: string = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return "Desistir";
    }
    return "Voltar";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Qual destes descreve melhor o seu espaço?"
        subtitle="Escolha uma categoria"
        hierarquy="h2"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item: Category, index: number) => (
          <div key={`${index}-${item.value}`} className="col-span-1">
            <CategoryInput
              onClick={(category: string) =>
                setCustomValue("category", category)
              }
              value={item.value}
              icon={item.icon}
              label={item.label}
              selected={category === item.value}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8 z-50 overflow-visible">
        <Heading
          title="Onde seu espaço está localizado?"
          hierarquy="h2"
          subtitle="Ajudaremos os hóspedes a encontrarem seu espaço"
        />
        <CountrySelect
          value={location}
          onChange={(location) => setCustomValue("location", location)}
        />
      </div>
    );
  }

  return (
    <Modal
      title="Seu espaço no Aribnb!"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
    >
      {bodyContent}
      <div className="flex gap-4 mt-8">
        <Button variant="ghost" onClick={onBack}>
          {handleSecondaryButtonLabel}
        </Button>
        <Button variant="primary" onClick={onNext}>
          {handleButtonLabel}
        </Button>
      </div>
    </Modal>
  );
};

export default RentModal;
