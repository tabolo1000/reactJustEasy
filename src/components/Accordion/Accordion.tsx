import React, {Dispatch, FC, SetStateAction} from "react";


interface AccordingTitleType {
    title: string,
}

interface AccordionBodyType {
    collapse: boolean
}

interface AccordionType {
    title: string,
    changeCollapse: Dispatch<SetStateAction<boolean>>,
    collapse: boolean,
}
let AccordionTitle:FC<AccordionType> = ({title, changeCollapse, collapse}) => {
    return <h3 onClick = {() => changeCollapse(!collapse)}>{title}</h3>
}
let AccordionBody:FC<AccordionBodyType> = ({collapse}) => {
    return (collapse)?<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>: <></>
}
export let Accordion:FC<AccordionType> = (props) => {
    return <div>
        <AccordionTitle {...props}/>
        <AccordionBody collapse = {props.collapse}/>
    </div>
}