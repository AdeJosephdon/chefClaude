import React from "react";
import pads from "./pads";
import Pad from "./Pad";

function SampleMain() {
  
  const [boxes, setBoxes] = React.useState(pads)

  const individualBoxes = boxes.map(box => 
  <Pad key={box.id} color= {box.color}
  on={box.on}
  toggle={toggle}
  id={box.id}
  />)

  

    function toggle(id) {
      setBoxes(prevBoxes => prevBoxes.map(item => {
        return item.id === id ? {...item, on: !item.on} : item
      }))
    }


  return (
    <main className="pad-container">
        {individualBoxes}
    </main>
  );
}

export default SampleMain;