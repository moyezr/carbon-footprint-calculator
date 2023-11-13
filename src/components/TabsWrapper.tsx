import { TabProps } from "@/types/tabs";
import React, { ReactNode } from "react";

interface Props extends TabProps {
  children: ReactNode;
}

const TabsWrapper = ({ children, next }: Props) => {
  return <>{children}</>;
};

export default TabsWrapper;
