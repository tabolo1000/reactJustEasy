import {Meta} from "@storybook/react";
import {OnOff} from "./OnOff";
import {useState} from "react";


let meta: Meta<typeof OnOff> = {
    title: "OnOff",
    component: OnOff
}

export default meta;


// <OnOff on={on} setOn={setOn}/>
export let ButtonOn = () => {
    return <OnOff on= {true} setOn={() => {}}/>
}

export let ButtonOff = () => {
    return <OnOff on= {false} setOn={() => {}}/>
}

export let ChangeButton = () => {
   let [on, setOn] = useState(true)
   return <OnOff on = {on} setOn={setOn}/>
}
