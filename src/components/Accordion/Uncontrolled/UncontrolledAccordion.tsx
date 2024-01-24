import React, {Dispatch, SetStateAction, useState} from "react";


interface AccordingTitleType {
    title: string,
}

interface AccordionBodyType {
    collapse: AccordionTaskType[]
}
type AccordionTaskType = {
    title: string,
    id: string
}
interface AccordionType {
    id: string
    title: string,
    changeCollapse: Dispatch<SetStateAction<any>>,
    collapse: any,
}
let AccordionTitle:React.FC<AccordionType> = ({ id ,title, changeCollapse, collapse}) => {
    return <h3 onClick = {() => changeCollapse({...collapse, [id]: {...collapse[id], isDone: !collapse[id].isDone} })}>{title}</h3>
}
let AccordionBody:React.FC<any> = ({collapse, id}) => {
    return (collapse[id].isDone)?<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>: <></>
}
export let UncontrolledAccordion:React.FC = () => {
    let verIdSecond = "2";
    let [collapse, changeCollapse] = useState({
        [verIdSecond]: {id: 2, title: "Menu teacher", isDone: true
        }
    })
    return <div>
        <AccordionTitle id = {verIdSecond} title = {collapse[verIdSecond].title} changeCollapse = {changeCollapse} collapse={collapse}/>
        <AccordionBody collapse = {collapse} id = {verIdSecond}/>
    </div>
}