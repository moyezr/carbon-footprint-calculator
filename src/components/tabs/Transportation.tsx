import React, { useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import { Select, SelectItem } from "@nextui-org/react";

import { TabProps } from "@/types/tabs";
import {
  privateTransportationData,
  publicTransportationData,
  transportationData,
} from "@/data/transportationData";
import { useScoreContext } from "@/context/score";

const Transportation = ({ setIsDisabled }: TabProps) => {
  const { dispatch } = useScoreContext();

  useEffect(() => {
    setIsDisabled(true);
  }, []);

  const handlePublicTransportChange = (e: any) => {
    setIsDisabled(false);
    dispatch({ type: "PUBLICTRANSPORTATION", value: e.target.value });
  };

  const handlePrivateTransportChange = (e: any) => {
    setIsDisabled(false);
    dispatch({ type: "PRIVATETRANSPORTATION", value: e.target.value });
  };
  return (
    <Card className="w-full flex">
      <CardHeader>Tally up your annual transportation scores.</CardHeader>
      <CardBody>
        <form className="flex flex-col items-center gap-6">
          <Select
            label="Public Transportation"
            placeholder="Select an option"
            className="max-w-xs text-black"
            onChange={handlePublicTransportChange}
          >
            {publicTransportationData.map((data) => (
              <SelectItem
                className="text-black"
                key={data.value}
                value={data.value}
              >
                {data.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="Private Transportation"
            placeholder="Select an option"
            className="max-w-xs text-black"
            onChange={handlePrivateTransportChange}
          >
            {privateTransportationData.map((data) => (
              <SelectItem
                className="text-black"
                key={data.value}
                value={data.value}
              >
                {data.label}
              </SelectItem>
            ))}
          </Select>
        </form>
      </CardBody>
    </Card>
  );
};

export default Transportation;
