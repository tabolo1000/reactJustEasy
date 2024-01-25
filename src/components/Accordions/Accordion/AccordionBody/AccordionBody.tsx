import React from "react";


interface AccordionBodyStyle {
     id: string
    collapse: any,
    movies: string[],
}
export let AccordionBody: React.FC<AccordionBodyStyle> = ({collapse, id, movies}) => {
    return (collapse[id].isDone) ? <ul>
        {movies.map((el) => <li>{el}</li>)}
    </ul> : <></>
}