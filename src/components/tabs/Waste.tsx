import React, { useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import { Select, SelectItem } from "@nextui-org/react";

import { TabProps } from "@/types/tabs";
import { useScoreContext } from "@/context/score";
import { wasteData } from "@/data/waste";

const Waste = ({ setIsDisabled }: TabProps) => {

  const { dispatch } = useScoreContext();

  useEffect(() => {
    setIsDisabled(true);
  }, [setIsDisabled]);

  const handleChange = (e: any) => {
    setIsDisabled(false);
    dispatch({ type: "WASTE", value: e.target.value });
  };

  return (
    <Card className="w-full flex">
      <CardHeader>Consider how much waste you produce.</CardHeader>
      <CardBody>
        <form className="flex flex-col items-center ">
          <Select
            label="Number of Trash Can you will in a week."
            placeholder="Select an option"
            className="max-w-xs text-black"
            onChange={handleChange}
          >
            {wasteData.map((waste) => (
              <SelectItem
                className="text-black"
                key={waste.value}
                value={waste.value}
              >
                {waste.label}
              </SelectItem>
            ))}
          </Select>
        </form>
      </CardBody>
    </Card>
  );
};

export default Waste;
