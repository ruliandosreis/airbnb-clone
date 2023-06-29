"use client";
import React, { FC, useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploaderProps {
  value: string;
  onChange: (value: string) => void;
}

const ImageUploader: FC<ImageUploaderProps> = ({ value, onChange }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="rgf2nftw"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 border-neutral-30 p-20 flex flex-col items-center jusitfy-center gap-4 text-neutral-600"
          >
            <TbPhotoPlus size={50} />
            <span className="font-semibold text-lg">Clique para adicionar</span>
            {value && (
              <div className="absolute inset-0 w-full h-full lg:static lg:h-[15vw]">
                <Image
                  alt="Imagem adicionada pelo usuário"
                  fill
                  style={{ objectFit: "cover", aspectRatio: "1/1" }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUploader;
