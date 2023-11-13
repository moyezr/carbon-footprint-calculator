"use client";

import Wrapper from "@/components/Wrapper";
import { useScoreContext } from "@/context/score";
import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useMemo } from "react";

type Props = {};

const ScorePage = (props: Props) => {
  const { score } = useScoreContext();

  const totalScore = useMemo(() => {
    const arr = Object.values(score);
    let sum: number = 0;
    for (var num in arr) {
      sum += Number(num);
    }

    return sum;
  }, [score]);

  let gradient = "";

  if (totalScore < 20) {
    gradient = "bg-gradient-to-br from-green-300 to-green-600";
  } else if (totalScore >= 20 && totalScore < 30) {
    gradient = "bg-gradient-to-br from-yellow-300 to-yellow-600";
  } else if (totalScore >= 30 && totalScore < 40) {
    gradient = "bg-gradient-to-br from-yellow-600 to-red-400";
  } else {
    gradient = "bg-gradient-to-br from-red-500 to-red-800";
  }

  return (
    <Wrapper classNames="h-screen w-screen flex items-center justify-center">
      <main className="w-full h-[80%] flex flex-col lg:flex-row  gap-8 pt-8">
        <div className="flex flex-[0.75] w-full flex-col gap-4">
          <Card
            className={cn(
              "flex w-full flex-col gap-2 items-center justify-center h-fit py-12",
              gradient
            )}
          >
            <p className="text-gray-200 text-2xl tracking-wide">SCORE</p>
            <p className="text-gray-100 text-7xl tracking-tight font-bold drop-shadow-md">
              {totalScore}
            </p>
          </Card>
          <Card className="h-full p-8">
            <CardHeader className="text-gray-700 font-semibold text-lg">
              Know your score
            </CardHeader>
            <CardBody>
              <ul className="flex flex-col gap-4 p-0 list-disc">
                <li className="text-gray-600">{`Greater than 0 and less than 20 -> Great`}</li>
                <li className="text-gray-600">{`Greater than 20 and less than 30 -> Ok`}</li>
                <li className="text-gray-600">{`Greater than 30 and less than 40 -> Average`}</li>
                <li className="text-gray-600">{`Greater than 40 -> Bad`}</li>
              </ul>
            </CardBody>
          </Card>
        </div>
        <Card className="flex-1 w-full"></Card>
      </main>
    </Wrapper>
  );
};

export default ScorePage;
