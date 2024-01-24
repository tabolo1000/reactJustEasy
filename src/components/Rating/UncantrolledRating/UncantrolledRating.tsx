import {RatingULStyle, Star} from "../../../App";

export let UncontrolledRating = () => {
    let value = 3;
    let stars = [1, 2, 3, 4, 5].map((el, index) => {
        return (++index <= value) ? <Star selected={true}/> : <Star selected={false}/>
    })
    return <ul style={RatingULStyle}>
        {stars}
    </ul>
}