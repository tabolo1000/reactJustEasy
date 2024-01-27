import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {Accordion} from "./components/Accordions/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordions/Uncontrolled/UncontrolledAccordion";
import styled from "styled-components";
import {UncontrolledRating} from "./components/Rating/UncantrolledRating/UncantrolledRating";
import {Rating} from "./components/Rating/Rating";

export const RatingULStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "150px",
}



interface StarPropsType {
    selected?: boolean,
    id?: number
    setCountStar?: Dispatch<SetStateAction<number>>
}

interface AppTitleType {
    title: string
}

let verIdFirst = "1";

// let verIdSecond = "2";


function App() {
    let [countStar, setCountStar] = useState(0)
    let [collapse, changeCollapse] = useState({
        [verIdFirst]: {id: 1, title: "List Serials", isDone: true, movies: ["Stargate", "Spartacus", "The Punisher"]},
        // [verIdSecond]: {id: 2, title: "Menu teacher", isDone: true},
    })
    let [on, setOn] = useState(false)
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "darkolivegreen"
        }}>
            <TaskStyled>
                <AppTitle title="This is App Component"/>
                <OnOff on={on} setOn={setOn}/>
                <Rating countStar={countStar} setCountStar={setCountStar}/>
                <Accordion id={verIdFirst} title={collapse[verIdFirst].title} changeCollapse={changeCollapse}
                           collapse={collapse}
                           movies={collapse[verIdFirst].movies}
                />
                <UncontrolledRating/>
                <UncontrolledAccordion/>
            </TaskStyled>
        </div>
    );
}

export default App;

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


let AppTitle: FC<AppTitleType> = ({title}) => {
    return <>{title}</>
}


let TaskStyled = styled.div`
  color: rgba(255, 255, 255, 0.73);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 2px solid #29322f;
  width: 300px;
  background-image: linear-gradient(60deg, rgba(41, 50, 50, 0.9), rgba(0, 255, 255, 0.57));
  border-radius: 10px;
`

let StarListStyle = styled.li`
  cursor: pointer;
`
