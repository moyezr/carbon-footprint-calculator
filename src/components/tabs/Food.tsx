import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, useDisclosure } from "@nextui-org/react";
import * as z from "zod";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { foodData } from "@/data/food";

import { TabProps } from "@/types/tabs";
import { useScoreContext } from "@/context/score";


const Food = ({ setIsDisabled }: TabProps) => {

  const { dispatch } = useScoreContext();

  useEffect(() => {
    setIsDisabled(true);
  }, []);

  const handleChange = (e: any) => {
    setIsDisabled(false);
    dispatch({ type: "FOOD", value: e.target.value });
  };
  return (
    <Card className="w-full flex">
      <CardHeader>How often do you eat meat? 🥩</CardHeader>
      <CardBody>
        <form className="flex flex-col items-center ">
          <Select
            label="Select Frequency"
            placeholder="Select an option"
            className="max-w-xs text-black"
            onChange={handleChange}
          >
            {foodData.map((food) => (
              <SelectItem
                className="text-black"
                key={food.value}
                value={food.value}
              >
                {food.label}
              </SelectItem>
            ))}
          </Select>
        </form>
      </CardBody>
    </Card>
  );
};

export default Food;
