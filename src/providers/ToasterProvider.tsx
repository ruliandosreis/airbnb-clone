"use client";

import React, { FC } from "react";
import { Toaster } from "react-hot-toast";

const ToasterProvider: FC = () => {
  return <Toaster position="top-center" reverseOrder={false} />;
};

export default ToasterProvider;
