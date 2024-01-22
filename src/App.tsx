import React, {FC, useState} from 'react';
import {Accordion} from "./components/Accordion/Accordion";

const RatingULStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "150px",
}

interface RatingProps {
    value: number
}

interface StarPropsType {
    selected?: boolean
}
interface AppTitleType {
    title: string
}

let verIdFirst = "1";
let verIdSecond = "2";

function App() {

    let[collapse, changeCollapse] = useState({
        [verIdFirst]: {id: 1, title: "Menu students", isDone: true},
        [verIdSecond]: {id: 2, title: "Menu teacher", isDone: true},
     })
    return (
        <div className="App">
            <AppTitle title = "This is App Component"/>
            <Rating value = {1}/>
            <Accordion id = {verIdFirst} title = {collapse[verIdFirst].title} changeCollapse = {changeCollapse} collapse = {collapse}/>
            <Accordion id = {verIdSecond} title = {collapse[verIdSecond].title} changeCollapse = {changeCollapse} collapse = {collapse}/>
        </div>
    );
}

export default App;

let Rating:FC<RatingProps> = ({value}) => {
    let stars = [1,2,3,4,5].map((el, index) => {
       return (++index <= value ) ? <Star selected = {true}/>: <Star selected = {false}/>
    })
  return <ul style = {RatingULStyle} >
      {stars}
  </ul>
}

let Star:FC<StarPropsType> = ({selected}) => {
    return (selected) ? <li style = {{fontWeight: "200"}}>star</li>: <li>star</li>
}



let AppTitle:FC<AppTitleType> = ({title}) => {
    return <>{title}</>
}
