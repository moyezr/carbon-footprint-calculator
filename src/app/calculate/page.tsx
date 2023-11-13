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
import { Progress } from "@nextui-org/react";
import { useRouter } from "next/navigation";
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
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  const next = () => {
    // @ts-ignore
    if (currentTab == 7) {
      router.push("/score");
      setProgress((prev) => prev + 12.5);
      return;
    }
    setProgress((prev) => prev + 12.5);
    setCurrentTab((prev) => prev + 1);
  };
  const prev = () => {
    // @ts-ignore
    setCurrentTab((prev) => prev - 1);
    setProgress((prev) => prev - 12.5);
  };

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-1 text-black w-[80%] md:w-[60%] lg:w-[40%] ">
        <Progress size="md" aria-label="Loading..." value={progress} />
        {currentTab == Tabs.MEMBERS && (
          <Members setIsDisabled={setIsDisabled} next={next} />
        )}
        {currentTab == Tabs.SIZE && (
          <Size setIsDisabled={setIsDisabled} next={next} />
        )}
        {currentTab == Tabs.FOOD && (
          <Food setIsDisabled={setIsDisabled} next={next} />
        )}
        {currentTab == Tabs.WATER && (
          <Water setIsDisabled={setIsDisabled} next={next} />
        )}
        {currentTab == Tabs.PURCHASES && (
          <Purchases setIsDisabled={setIsDisabled} next={next} />
        )}
        {currentTab == Tabs.WASTE && (
          <Waste setIsDisabled={setIsDisabled} next={next} />
        )}
        {currentTab == Tabs.RECYCLE && (
          <Recycle setIsDisabled={setIsDisabled} next={next} />
        )}
        {currentTab == Tabs.TRANSPORTATION && (
          <Transportation setIsDisabled={setIsDisabled} next={next} />
        )}

        <div className="w-full flex flex-row gap-8 justify-between">
          {currentTab != Tabs.MEMBERS && <PreviousButton onClick={prev} />}
          <NextButton isDisabled={isDisabled} onClick={next} />
        </div>
      </div>
    </main>
  );
};

export default CalculatorPage;
