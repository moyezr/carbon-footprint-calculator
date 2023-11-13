import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { TabProps } from "@/types/tabs";
import { Checkbox } from "@nextui-org/react";
import { recycleData } from "@/data/recycleData";
import { useEffect } from "react";
import { useScoreContext } from "@/context/score";


const Recycle = ({ setIsDisabled }: TabProps) => {


  const { score, dispatch } = useScoreContext();

  useEffect(() => {
    setIsDisabled(true);
  }, [setIsDisabled]);

  const handleCheck = (e: any) => {
    setIsDisabled(false);
    let value: number;
    if(e.target.checked) {
      value = score.recycle - 4;
    } else {
      value = score.recycle + 4;
    }
    dispatch({ type: "RECYCLE", value });
  };

  return (
    <Card className="w-full flex">
      <CardHeader>Select which type of materials you recycle on regular basis.</CardHeader>
      <CardBody>
        <form className="flex flex-col items-start">
     
            {recycleData.map((item, i) => (
              <Checkbox onChange={handleCheck} key={i} value={item.value.toString()}>{item.label}</Checkbox>
            ))}
    
        </form>
      </CardBody>
    </Card>
  );
};

export default Recycle;
