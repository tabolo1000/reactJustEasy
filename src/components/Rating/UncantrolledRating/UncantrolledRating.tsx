import {RatingULStyle} from "../../../App";
import {useState} from "react";
import {Star} from "../../Star/Star";

export let UncontrolledRating = () => {
    let [countStar, setCountStar] = useState(0)
    let stars = [1, 2, 3, 4, 5].map((el, index) => {
        return <Star id = {index} selected={(index <= countStar)} setCountStar = {setCountStar}/>
    })
    return <ul style={RatingULStyle}>
        {stars}
    </ul>
}