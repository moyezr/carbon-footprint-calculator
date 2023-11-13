import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { TabProps } from "@/types/tabs";
import { Checkbox } from "@nextui-org/react";
import { recycleData } from "@/data/recycleData";
import { useEffect } from "react";
import { useScoreContext } from "@/context/score";


const Recycle = ({ setIsDisabled }: TabProps) => {

  const { dispatch } = useScoreContext();

  useEffect(() => {
    setIsDisabled(true);
  }, []);

  const handleChange = (e: any) => {
    setIsDisabled(false);
    dispatch({ type: "RECYCLE", value: e.target.value });
  };

  return (
    <Card className="w-full flex">
      <CardHeader>Select which type of materials you recycle on regular basis.</CardHeader>
      <CardBody>
        <form className="flex flex-col items-start">
     
            {recycleData.map((item, i) => (
              <Checkbox key={i} value={item.value.toString()}>{item.label}</Checkbox>
            ))}
    
        </form>
      </CardBody>
    </Card>
  );
};

export default Recycle;
