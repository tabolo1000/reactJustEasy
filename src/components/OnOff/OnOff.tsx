import {useState} from "react";


const singLiteStyle = {
    borderRadius: "30px",
    border: "2px solid red",
    padding: "5px",
    backgroundColor: "red",
    cursor: "default"
}

const buttonStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "10px",
    cursor: "pointer"
}
export function OnOff(){

    let [on, setOn] = useState(false)
    const onButtonExtensionStyle = {...buttonStyle, backgroundColor: (on) ? "green" : ""}
    const offButtonExtensionStyle = {...buttonStyle, backgroundColor: (!on) ? "red" : ""}
    const singLightExtensionStyle = {...singLiteStyle, backgroundColor: (on) ? "green" : "red" }

    const setOnHandler = (lightGreen: boolean) => {
        setOn(lightGreen)
    }
    return <div>
        <ul style = {{listStyle: "none", display: "flex", justifyContent: "space-around", width: "150px"}}>
            <li style = {onButtonExtensionStyle} onClick = {()=>{ setOnHandler(true)} }>ON</li>
            <li style = {offButtonExtensionStyle} onClick = { () => {setOnHandler(false)}}>OFF</li>
            <li style = {singLightExtensionStyle}>Light</li>
        </ul>
    </div>
}