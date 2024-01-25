import React, {Dispatch, SetStateAction, useState} from "react";
import {AccordionTitle} from "../Accordion/AccordionTitle/AccordionTitle";
import {AccordionBody} from "../Accordion/AccordionBody/AccordionBody";


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