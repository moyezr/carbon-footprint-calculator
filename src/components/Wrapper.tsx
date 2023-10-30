import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  classNames?: string;
};

const Wrapper = ({ children, classNames }: Props) => {
  return (
    <div className={cn("px-8 md:px-20 lg:px-40", classNames)}>{children}</div>
  );
};

export default Wrapper;
