import { TabProps } from '@/types/tabs'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { waterData } from '@/app/data/water';

const Water = (props: TabProps) => {
  return (
    <Card className="w-full flex">
    <CardHeader>How often do you use your Washing Machine?</CardHeader>
    <CardBody>
      <form className="flex flex-col items-center ">
        <Select
          label="Frequency of Use"
          placeholder="Select an option"
          className="max-w-xs text-black"
        >
          {waterData.map((water) => (
            <SelectItem
              className="text-black"
              key={water.value}
              value={water.value}
            >
              {water.label}
            </SelectItem>
          ))}
        </Select>
      </form>
    </CardBody>
  </Card>
  )
}

export default Water