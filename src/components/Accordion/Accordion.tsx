import React, {Dispatch, FC, SetStateAction} from "react";


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
let AccordionTitle:FC<AccordionType> = ({ id ,title, changeCollapse, collapse}) => {
    return <h3 onClick = {() => changeCollapse({...collapse, [id]: {...collapse[id], isDone: !collapse[id].isDone} })}>{title}</h3>
}
let AccordionBody:FC<any> = ({collapse, id}) => {
    return (collapse[id].isDone)?<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>: <></>
}
export let Accordion:FC<AccordionType> = (props) => {
    return <div>
        <AccordionTitle {...props}/>
        <AccordionBody collapse = {props.collapse} id = {props.id}/>
    </div>
}