import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@nextui-org/button";

type Props = {
  onClick: () => void;
};

const NextButton = ({ onClick }: Props) => {
  return (
    <Button color="primary" onClick={onClick} className="flex-1 w-full items-center gap-2 text-white text-xl font-semibold tracking-tight rounded-none rounded-full">
      Next <ArrowRight />
    </Button>
  );
};

export default NextButton;
