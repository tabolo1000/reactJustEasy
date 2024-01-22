import React, {FC} from "react";


interface AccordingType {
    title: string,
}
let AccordionTitle:FC<AccordingType> = ({title}) => {
    return <h3>{title}</h3>
}
let AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
export let Accordion:FC<AccordingType> = ({title}) => {
    return <div>
        <AccordionTitle title = {title}/>
        <AccordionBody />
    </div>
}