import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@nextui-org/button";

type Props = {
  onClick: () => void;
  isDisabled: boolean;
};

const NextButton = ({ onClick, isDisabled }: Props) => {
  return (
    <Button disabled={isDisabled} color="primary" onClick={onClick} className="flex-1 w-full items-center gap-2 text-white text-xl font-semibold tracking-tight disabled:cursor-not-allowed disabled:opacity-40 rounded-full">
      Next <ArrowRight />
    </Button>
  );
};

export default NextButton;
