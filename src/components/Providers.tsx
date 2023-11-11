"use client"

import { ScoreContextProvider } from "@/context/score";
import { NextUIProvider } from "@nextui-org/system";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <ScoreContextProvider>{children}</ScoreContextProvider>
    </NextUIProvider>
  );
};

export default Providers;
