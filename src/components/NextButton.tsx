import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@nextui-org/button";

type Props = {
  onClick: () => void;
};

const NextButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick} className="flex items-center gap-2 text-white bg-green-400 text-xl font-semibold tracking-tight">
      Next <ArrowRight />
    </Button>
  );
};

export default NextButton;
