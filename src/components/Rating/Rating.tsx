import React, {Dispatch, SetStateAction} from "react";
import {RatingULStyle, Star} from "../../App";

interface RatingProps {
    countStar: number,
    setCountStar: Dispatch<SetStateAction<number>>
}

export let Rating: React.FC<RatingProps> = ({countStar, setCountStar}) => {

    let stars = [1, 2, 3, 4, 5].map((el, index) => {
        return <Star id={index} selected={(index <= countStar)} setCountStar={setCountStar}/>
    })
    return <ul style={RatingULStyle}>
        {stars}
    </ul>
}