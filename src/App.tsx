import React from 'react';



function App() {
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;

let Rating = () => {
  return <ul>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
  </ul>
}

let Star = () => {
    return <li>star</li>
}

let AccordionTitle = () => {
  return <h3>Menu</h3>
}
let AccordionBody = () => {
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}
let Accordion = () => {
    return <div>
        <AccordionTitle/>
        <AccordionBody />
    </div>
}
