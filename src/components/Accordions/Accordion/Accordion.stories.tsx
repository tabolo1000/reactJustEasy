import {StoryObj} from "@storybook/react";
import {Accordion} from "./Accordion";
import {useState} from "react";
import type {Meta} from "@storybook/react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
}

export default meta;

export const CollapsedAccordion = () => {
    let verIdFirst = "1";


    let [collapse, changeCollapse] = useState({
        [verIdFirst]: { id: 1, title: "List Serials", isDone: false, movies: ["Stargate", "Spartacus", "The Punisher"] }
    })


    return <Accordion id={verIdFirst} title={collapse[verIdFirst].title} changeCollapse={() => {
    }}
                      collapse={collapse}
                      movies={collapse[verIdFirst].movies}/>
}


export const OpenedAccordion = () => {


    let verIdFirst = "1";
    let [collapse, changeCollapse] = useState({
        [verIdFirst]: {id: 1, title: "List Serials", isDone: true, movies: ["Stargate", "Spartacus", "The Punisher"]}
    })


    return <Accordion id={verIdFirst} title={collapse[verIdFirst].title} changeCollapse={() => {
    }}
                      collapse={collapse}
                      movies={collapse[verIdFirst].movies}/>
}

export const BurgerAccordion = () => {


    let verIdFirst = "1";
    let [collapse, changeCollapse] = useState({
        [verIdFirst]: {id: 1, title: "List Serials", isDone: true, movies: ["Stargate", "Spartacus", "The Punisher"]}
    })


    return <Accordion id={verIdFirst} title={collapse[verIdFirst].title} changeCollapse={changeCollapse}
                      collapse={collapse}
                      movies={collapse[verIdFirst].movies}/>
}


