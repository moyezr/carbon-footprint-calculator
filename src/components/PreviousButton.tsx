import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@nextui-org/button";

type Props = {
  onClick: () => void;
};

const PreviousButton = ({ onClick }: Props) => {
  return (
    <Button color="default" onClick={onClick} className="flex-1 w-full items-center gap-2 text-white text-xl font-semibold tracking-tight rounded-full">
      <ArrowLeft /> Prev
    </Button>
  );
};

export default PreviousButton;
