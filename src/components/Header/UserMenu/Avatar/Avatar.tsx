import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import React, { FC } from "react";

interface AvatarProps {
  src?: string | null | undefined;
  size?: number;
}

const Avatar: FC<AvatarProps> = ({ src, size }) => {
  return src ? (
    <Image
      src={src}
      alt="Imagem do usuário"
      width={size || 30}
      height={size || 30}
      className="rounded-full"
    />
  ) : (
    <RxAvatar size={size || 30} className="text-zinc-800" />
  );
};

export default Avatar;
