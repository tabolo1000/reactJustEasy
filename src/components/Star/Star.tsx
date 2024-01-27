import React, {FC} from "react";
import styled from "styled-components";

export let Star: FC<any> = ({selected, id, setCountStar}) => {
    let changeStarHandler = (newCountStar: number) => {
        setCountStar(newCountStar)
    }
    return <StarListStyle onClick={() => {
        changeStarHandler(id)
    }}>
        {(selected) ? "★" : "☆"}
    </StarListStyle>
}

let StarListStyle = styled.li`
  cursor: pointer;
`