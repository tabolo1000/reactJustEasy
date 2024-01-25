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

interface OnOffType {
    on: boolean,
    setOn: (on: boolean) => void
}

export function OnOff({on, setOn}: OnOffType) {


    let styleOnOff = {
         onButtonExtensionStyle: {...buttonStyle, backgroundColor: (on) ? "green" : ""},
         offButtonExtensionStyle: {...buttonStyle, backgroundColor: (!on) ? "red" : ""},
         singLightExtensionStyle: {
            ...singLiteStyle,
            backgroundColor: (on) ? "green" : "red",
            borderColor: (on) ? "green" : "red"
        },
    }


    const setOnHandler = (lightGreen: boolean) => {
        setOn(lightGreen)
    }
    return <div>
        <ul style={{listStyle: "none", display: "flex", justifyContent: "space-around", width: "150px"}}>
            <li style={{...styleOnOff.onButtonExtensionStyle, borderColor: "green"}} onClick={() => {
                setOnHandler(true)
            }}>ON
            </li>
            <li style={styleOnOff.offButtonExtensionStyle} onClick={() => {
                setOnHandler(false)
            }}>OFF
            </li>
            <li style={styleOnOff.singLightExtensionStyle}>Light</li>
        </ul>
    </div>
}