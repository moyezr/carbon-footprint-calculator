"use client";
import NextButton from "@/components/NextButton";
import PreviousButton from "@/components/PreviousButton";
import Food from "@/components/tabs/Food";
import Members from "@/components/tabs/Members";
import Purchases from "@/components/tabs/Purchases";
import Recycle from "@/components/tabs/Recycle";
import Size from "@/components/tabs/Size";
import Transportation from "@/components/tabs/Transportation";
import Waste from "@/components/tabs/Waste";
import Water from "@/components/tabs/Water";
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

export enum Tabs {
  "MEMBERS",
  "SIZE",
  "FOOD",
  "WATER",
  "PURCHASES",
  "WASTE",
  "RECYCLE",
  "TRANSPORTATION",
}

const CalculatorPage = (props: Props) => {
  const [progress, setProgress] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.MEMBERS);

  const next = () => {
    // @ts-ignore
    setCurrentTab((prev) => prev + 1);
    setProgress((prev) =>  prev + 10)
    console.log(currentTab);
  };
  const prev = () => {
    // @ts-ignore
    setCurrentTab((prev) => prev - 1);
    // setProgress((prev) =>  prev + 10)
    console.log(currentTab);
  };

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-1 text-black w-[80%] md:w-[60%] lg:w-[40%] ">
        <Progress size="md" aria-label="Loading..." value={progress} />
        {currentTab == Tabs.MEMBERS && (
          <Members next={next} />
        )}
        {currentTab == Tabs.SIZE && (
          <Size next={next} />
        )}
        {currentTab == Tabs.FOOD && (
          <Food next={next} />
        )}
        {currentTab == Tabs.WATER && (
          <Water next={next} />
        )}
        {currentTab == Tabs.PURCHASES && (
          <Purchases next={next} />
        )}
        {currentTab == Tabs.WASTE && (
          <Waste next={next} />
        )}
        {currentTab == Tabs.RECYCLE && (
          <Recycle next={next} />
        )}
        {currentTab == Tabs.TRANSPORTATION && (
          <Transportation next={next} />
        )}
        
        <div className="w-full flex flex-row gap-8 justify-between">
        {currentTab != Tabs.MEMBERS && <PreviousButton onClick={prev} />}
        <NextButton onClick={next} /> 
        </div>
      </div>
    </main>
  );
};

export default CalculatorPage;
