import React, { Dispatch, SetStateAction } from "react";
import { Card, CardHeader, CardBody, CardFooter, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { foodData } from "@/data/food";
import NextButton from "../NextButton";
import { Tabs } from "@/app/calculate/page";
import { TabProps } from "@/types/tabs";
import { useScoreContext } from "@/context/score";

const MembersSchema = z.object({
  members: z.enum(["1", "2", "3", "4", "5", "6", "6+"]),
});

const Food = (props: TabProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof MembersSchema>>({
    resolver: zodResolver(MembersSchema),
  });
  const x = useScoreContext();


  const handleChange = (e: any) => {
    // dispatch({ type: "FOOD", value: e.target.value })
  };

  return (
    <Card className="w-full flex">
      <CardHeader>How often do you eat meat? 🥩</CardHeader>
      <CardBody>
        <form className="flex flex-col items-center ">
          <Select
            label="Size of Home"
            placeholder="Select an option"
            className="max-w-xs text-black"
            onSelectionChange={handleChange}
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
