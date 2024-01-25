import React, {Dispatch, FC, SetStateAction} from "react";


interface AccordionType {
    id: string
    title: string,
    changeCollapse: Dispatch<SetStateAction<any>>,
    collapse: any,
}

export let AccordionTitle: FC<AccordionType> = ({id, title, changeCollapse, collapse}) => {
    return <h3 onClick={() => changeCollapse({
        ...collapse,
        [id]: {...collapse[id], isDone: !collapse[id].isDone}
    })}>{`${(collapse[id].isDone) ? title + "⇓" : title + "⇑"}`}</h3>
}