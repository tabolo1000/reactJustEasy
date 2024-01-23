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


    return <div>
        <ul style = {{listStyle: "none", display: "flex", justifyContent: "space-around", width: "150px"}}>
            <li style = {{...buttonStyle, backgroundColor: (on) ? "green" : ""}} onClick = {()=>{ setOn(true)} }>ON</li>
            <li style = {{...buttonStyle, backgroundColor: (!on) ? "red" : ""}} onClick = { () => {setOn(false)}}>OFF</li>
            <li style = {{...singLiteStyle, backgroundColor: (on) ? "green" : "red" }}>Light</li>
        </ul>
    </div>
}