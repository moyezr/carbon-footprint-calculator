import React from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@nextui-org/button";

type Props = {
  onClick: () => void;
  isDisabled: boolean;
  isLoading: boolean
};

const NextButton = ({ onClick, isDisabled, isLoading }: Props) => {
  return (
    <Button disabled={isDisabled} color="primary" onClick={onClick} className="flex-1 w-full items-center gap-2 text-white text-xl font-semibold tracking-tight disabled:cursor-not-allowed disabled:opacity-40 rounded-full">
      Next {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <ArrowRight />}
    </Button>
  );
};

export default NextButton;
