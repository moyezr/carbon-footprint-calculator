import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { purchaseData } from "@/data/purchase";
import { TabProps } from "@/types/tabs";

const Purchases = ({ next }: TabProps) => {
  return (
    <Card className="w-full flex">
      <CardHeader>How many household purchases you make each year?</CardHeader>
      <CardBody>
        <form className="flex flex-col items-center ">
          <Select
            label="How rich are you"
            placeholder="Select an option"
            className="max-w-xs text-black"
          >
            {purchaseData.map((purchase) => (
              <SelectItem
                className="text-black"
                key={purchase.value}
                value={purchase.value}
              >
                {purchase.label}
              </SelectItem>
            ))}
          </Select>
        </form>
      </CardBody>
    </Card>
  );
};

export default Purchases;
