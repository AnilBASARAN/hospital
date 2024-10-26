import { Button, Input, Select } from "antd";
import { useState } from "react";
const options = [
  {label: "America", value: "America"},
  {label: "Nigeria", value: "Nigeria"},
  {label: "Canada", value: "Canada"},
  
]

export default function HomePage() {



  return (
   
      <div className="p-5 flex flex-col gap-5 w-max ">
        <h1  >Hospital</h1>

        <Button>Default Button</Button>
        <Button
       
         type="primary">Primary Button</Button>
        <Input placeholder="Basic Input" />

        <Select 
         options={options} />

      </div>
  );
}
