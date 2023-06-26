import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import React, { FC } from "react";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return src ? (
    <Image
      src={src}
      alt="Imagem do usuário"
      width={30}
      height={30}
      className="rounded-full"
    />
  ) : (
    <RxAvatar size={30} className="text-zinc-800" />
  );
};

export default Avatar;
