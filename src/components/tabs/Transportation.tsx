import React, { Dispatch, SetStateAction } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { sizeData } from "@/app/data/size";
import NextButton from "../NextButton";
import { Tabs } from "@/app/calculate/page";
import { TabProps } from "@/types/tabs";
import { transportationData } from "@/app/data/transportationData";

const MembersSchema = z.object({
  members: z.enum(["1", "2", "3", "4", "5", "6", "6+"]),
});

const Transportation = ({}: TabProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof MembersSchema>>({
    resolver: zodResolver(MembersSchema),
  });

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
