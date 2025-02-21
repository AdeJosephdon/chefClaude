import React from "react";

function Pad(prop) {

    // const [isOn, setIsOn] = React.useState(prop.on)

  return (
    <button style={{backgroundColor: prop.color}} className={prop.on ? "on": undefined}  onClick={() => prop.toggle(prop.id)}
    
    ></button>
  );
}

export default Pad;