"use client";
import HouseMembers from "@/components/tabs/HouseMembers";
import {
  Progress,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Select,
  SelectSection,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
type Props = {};

const Calcula = (props: Props) => {
  const [progress, setProgress] = useState<number>(0);

  

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-1 text-black w-[80%] md:w-[60%] lg:w-[40%] ">
        <Progress size="md" aria-label="Loading..." value={progress} />
        {progress == 0 && <HouseMembers />}
      </div>
    </main>
  );
};

export default Calcula;
