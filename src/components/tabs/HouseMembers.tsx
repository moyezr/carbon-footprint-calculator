import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { houseMemberData } from "@/app/data/houseMember";
type Props = {};

const HouseMemberSchema = z.object({
  members: z.enum(["1", "2", "3", "4", "5", "6", "6+"]),
});

const HouseMembers = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof HouseMemberSchema>>({
    resolver: zodResolver(HouseMemberSchema),
  });

  return (
    <Card className="w-full flex">
      <CardHeader>How many members do you have in your house?</CardHeader>
      <CardBody>
        <form>
          <Select
            label="Favorite Animal"
            placeholder="Select an animal"
            className="max-w-xs text-black"

          >
            {houseMemberData.map((animal) => (
              <SelectItem className="text-black" key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </form>
      </CardBody>
    </Card>
  );
};

export default HouseMembers;
