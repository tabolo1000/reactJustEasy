import {Rating} from "./Rating";
import {Meta} from "@storybook/react";
import {Dispatch, SetStateAction, useState} from "react";


let meta: Meta<typeof Rating> = {
    title: "Rating",
    component: Rating,
}

export default meta;


// <Rating countStar={countStar} setCountStar={setCountStar}/>

export let RatingOneStar = () => {
    return <Rating countStar={0} setCountStar={() => {}}/>
}
export let RatingTwoStar = () => {
    return <Rating countStar={1} setCountStar={() => {}}/>
};
export let RatingThreeStar = () => {
    return <Rating countStar={2} setCountStar={() => {}}/>
};
export let RatingFourStar = () => {
    return <Rating countStar={3} setCountStar={() => {}}/>
};
export let RatingFiveStar = () => {
    return <Rating countStar={4} setCountStar={() => {}}/>
}

export let ChangeCountStar = () => {
    let [countStar, setCountStar] = useState(0)
    return <Rating countStar = {countStar} setCountStar={setCountStar}/>;

}

