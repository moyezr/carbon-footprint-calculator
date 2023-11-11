import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { membersData } from "@/data/members";
import { TabProps } from "@/types/tabs";
import { Checkbox } from "@nextui-org/react";
import { recycleData } from "@/data/recycleData";
// const MembersSchema = z.object({
//   members: z.enum(["1", "2", "3", "4", "5", "6", "6+"]),
// });

const Recycle = ({}: TabProps) => {
  return (
    <Card className="w-full flex">
      <CardHeader>Select which type of materials you recycle on regular basis.</CardHeader>
      <CardBody>
        <form className="flex flex-col items-start">
     
            {recycleData.map((item, i) => (
              <Checkbox value={item.value.toString()}>{item.label}</Checkbox>
            ))}
    
        </form>
      </CardBody>
    </Card>
  );
};

export default Recycle;
