import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {Accordion} from "./components/Accordions/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordions/Uncontrolled/UncontrolledAccordion";
import styled from "styled-components";
import {UncontrolledRating} from "./components/Rating/UncantrolledRating/UncantrolledRating";

export const RatingULStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "150px",
}

interface RatingProps {
    countStar: number,
    setCountStar: Dispatch<SetStateAction<number>>
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
        [verIdFirst]: {id: 1, title: "Menu students", isDone: true},
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
            <TaskStyled >
                <AppTitle title="This is App Component"/>
                <OnOff on = {on} setOn = {setOn} />
                <Rating countStar = {countStar} setCountStar = {setCountStar}/>
                <Accordion id={verIdFirst} title={collapse[verIdFirst].title} changeCollapse={changeCollapse}
                           collapse={collapse}/>
                <UncontrolledRating/>
                <UncontrolledAccordion />
            </TaskStyled>
        </div>
    );
}

export default App;

let Rating: React.FC<RatingProps> = ({countStar, setCountStar}) => {

    let stars = [1, 2, 3, 4, 5].map((el, index) => {
        return (++index <= countStar) ? <Star id = {index} selected={true} setCountStar = {setCountStar}/> : <Star id = {index} selected={false} setCountStar = {setCountStar}/>
    })
    return <ul style={RatingULStyle}>
        {stars}
    </ul>
}

export let Star: FC<any> = ({selected, id, setCountStar}) => {
    let  changeStarHandler = (newCountStar: number) =>{
        setCountStar(newCountStar)
    }
    return (selected) ? <StarListStyle onClick = {() => {changeStarHandler(id)} } style={{fontWeight: "200"}}>★</StarListStyle> : <StarListStyle onClick = {() => {changeStarHandler(id)}}>☆</StarListStyle>
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
