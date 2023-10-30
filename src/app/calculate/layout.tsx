import { ChildProcess } from "child_process";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CalculateLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default CalculateLayout;
