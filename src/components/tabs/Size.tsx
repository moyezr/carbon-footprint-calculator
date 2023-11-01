import React, { Dispatch, SetStateAction } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { sizeData } from "@/app/data/size";
import NextButton from "../NextButton";
import { Tabs } from "@/app/calculate/page";
type Props = {
  setCurrentTab: Dispatch<SetStateAction<Tabs>>;
  next: () => void;
};

const MembersSchema = z.object({
  members: z.enum(["1", "2", "3", "4", "5", "6", "6+"]),
});

const Size = ({ setCurrentTab }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof MembersSchema>>({
    resolver: zodResolver(MembersSchema),
  });

  const onClick = () => {
    setCurrentTab(Tabs.SIZE)
  }

  return (
    <Card className="w-full flex">
      <CardHeader>Consider the size of your home.</CardHeader>
      <CardBody>
        <form className="flex flex-col items-center ">
          <Select
            label="Members in House"
            placeholder="Select an option"
            className="max-w-xs text-black"
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

      <NextButton onClick={onClick} />
    </Card>
  );
};

export default Size;
