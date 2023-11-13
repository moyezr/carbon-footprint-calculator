import React, { useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";


import { Select, SelectItem } from "@nextui-org/react";

import { TabProps } from "@/types/tabs";
import { transportationData } from "@/data/transportationData";
import { useScoreContext } from "@/context/score";


const Transportation = ({ setIsDisabled}: TabProps) => {
  const { dispatch } = useScoreContext();

  useEffect(() => {
    setIsDisabled(true);
  }, []);

  const handleChange = (e: any) => {
    setIsDisabled(false);
    dispatch({ type: "TRANSPORTATION", value: e.target.value });
  };
  return (
    <Card className="w-full flex">
      <CardHeader>Tally up your annual transportation scores.</CardHeader>
      <CardBody>
        <form className="flex flex-col items-center gap-6">
          {transportationData.map((item, i) => (
            <Select
              label={item.label}
              placeholder="Select an option"
              className="max-w-xs text-black"
              onChange={handleChange}
            >
              {item.data.map((data) => (
                <SelectItem
                  className="text-black"
                  key={data.value}
                  value={data.value}
                >
                  {data.label}
                </SelectItem>
              ))}
            </Select>
          ))}
        </form>
      </CardBody>
    </Card>
  );
};

export default Transportation;
