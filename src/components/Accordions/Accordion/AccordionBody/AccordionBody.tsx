import React from "react";

export let AccordionBody: React.FC<any> = ({collapse, id}) => {
    return (collapse[id].isDone) ? <ul>
        <li>Mark</li>
        <li>Viktor</li>
        <li>Paulo</li>
    </ul> : <></>
}