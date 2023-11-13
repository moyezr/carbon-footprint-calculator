import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";


import { Select, SelectItem } from "@nextui-org/react";
import { sizeData } from "@/data/size";

import { TabProps } from "@/types/tabs";
import { useScoreContext } from "@/context/score";

const Size = ({ setIsDisabled }: TabProps) => {
  const { dispatch } = useScoreContext();

  useEffect(() => {
    setIsDisabled(true);
  }, []);

  const handleChange = (e: any) => {
    setIsDisabled(false);
    dispatch({ type: "SIZE", value: e.target.value });
  };
  return (
    <Card className="w-full flex">
      <CardHeader>Consider the size of your home.</CardHeader>
      <CardBody>
        <form className="flex flex-col items-center ">
          <Select
            label="Size of Home"
            placeholder="Select an option"
            className="max-w-xs text-black"
            onChange={handleChange}
          >
            {sizeData.map((size) => (
              <SelectItem
                className="text-black"
                key={size.value}
                value={size.value}
              >
                {size.label}
              </SelectItem>
            ))}
          </Select>
        </form>
      </CardBody>
    </Card>
  );
};

export default Size;
