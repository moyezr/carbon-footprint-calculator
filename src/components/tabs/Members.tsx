import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { membersData } from "@/data/members";
import { TabProps } from "@/types/tabs";
import { useScoreContext } from "@/context/score";
import { setMaxListeners } from "events";
import { useElementScroll } from "framer-motion";
import { useEffect } from "react";

const MembersSchema = z.object({
  members: z.enum(["1", "2", "3", "4", "5", "6", "6+"]),
});

const Members = ({ next, setIsDisabled }: TabProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof MembersSchema>>({
    resolver: zodResolver(MembersSchema),
  });
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
