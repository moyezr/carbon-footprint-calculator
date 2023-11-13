import { Card, CardHeader, CardBody } from "@nextui-org/react";

import { Select, SelectItem } from "@nextui-org/react";
import { membersData } from "@/data/members";
import { TabProps } from "@/types/tabs";
import { useScoreContext } from "@/context/score";

import { useEffect } from "react";



const Members = ({ next, setIsDisabled }: TabProps) => {


  // @ts-ignore
  const { dispatch } = useScoreContext();

  useEffect(() => {
    setIsDisabled(true);
  }, [setIsDisabled]);

  const handleChange = (e: any) => {
    setIsDisabled(false);
    dispatch({ type: "MEMBERS", value: e.target.value });
  };

  return (
    <Card className="w-full flex">
      <CardHeader>How many members do you have in your house?</CardHeader>
      <CardBody>
        <form className="flex flex-col items-center ">
          <Select
            label="Members in House"
            placeholder="Select an option"
            onChange={handleChange}
            className="max-w-xs text-black"
          >
            {membersData.map((animal) => (
              <SelectItem
                className="text-black"
                key={animal.value}
                value={animal.value}
              >
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </form>
      </CardBody>
    </Card>
  );
};

export default Members;
