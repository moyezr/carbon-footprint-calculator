"use client";
import Members from "@/components/tabs/Members";
import Size from "@/components/tabs/Size";
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
  "FOODS",
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
    console.log(currentTab);
  };

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-1 text-black w-[80%] md:w-[60%] lg:w-[40%] ">
        <Progress size="md" aria-label="Loading..." value={progress} />
        {currentTab == Tabs.MEMBERS && (
          <Members next={next} setCurrentTab={setCurrentTab} />
        )}
        {currentTab == Tabs.SIZE && (
          <Size next={next} setCurrentTab={setCurrentTab} />
        )}
        {currentTab == Tabs.FOODS && (
          <Size next={next} setCurrentTab={setCurrentTab} />
        )}
        {currentTab == Tabs.WATER && (
          <Size next={next} setCurrentTab={setCurrentTab} />
        )}
        {currentTab == Tabs.PURCHASES && (
          <Size next={next} setCurrentTab={setCurrentTab} />
        )}
        {currentTab == Tabs.WASTE && (
          <Size next={next} setCurrentTab={setCurrentTab} />
        )}
        {currentTab == Tabs.RECYCLE && (
          <Size next={next} setCurrentTab={setCurrentTab} />
        )}
        {currentTab == Tabs.TRANSPORTATION && (
          <Size next={next} setCurrentTab={setCurrentTab} />
        )}
      </div>
    </main>
  );
};

export default CalculatorPage;
