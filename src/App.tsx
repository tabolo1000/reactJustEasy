import React, {FC} from 'react';
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


function App() {
    return (
        <div className="App">
            <AppTitle title = "This is App Component"/>
            <Rating value = {2}/>
            <Accordion title = "Menu"/>
        </div>
    );
}

export default App;

let Rating:FC<RatingProps> = ({value}) => {
    let stars = []
    let ChangeStar = (bold: number) => {
        return (bold <= value ) ? <Star selected = {true}/>: <Star selected = {false}/>
    }
    for(let i = 1; i <= 5; i++){
        stars.push(ChangeStar(i))
    }
  return <ul style = {RatingULStyle} >
      {stars}
  </ul>
}

let Star:FC<StarPropsType> = (props) => {
    return (props.selected) ? <li style = {{fontWeight: "200"}}>star</li>: <li>star</li>
}



let AppTitle:FC<AppTitleType> = ({title}) => {
    return <>{title}</>
}
