import React, {Dispatch, FC, SetStateAction} from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";




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

export let Accordion:FC<AccordionType> = (props) => {
    return <div>
        <AccordionTitle {...props}/>
        <AccordionBody collapse = {props.collapse} id = {props.id}/>
    </div>
}