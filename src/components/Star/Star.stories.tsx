import {Meta} from "@storybook/react";
import {Star} from "./Star";

/*<Star id={index} selected={(index <= countStar)} setCountStar={setCountStar}/>*/


let meta: Meta<typeof Star> = {
    title: "Star",
    component: Star,
}

export default meta;


export let oneStar = () => {
    return <Star  id={1} selected={(1 <= 1)} setCountStar={() => {}}/>
}