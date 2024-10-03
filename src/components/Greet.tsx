
import React from "react";

const Greet = (props:any) =>  {
    return (
    <div>
    <h1 style={{ color: "green", fontSize: "44px" } }>Hello {props.name}</h1>
    {props.children}
    </div>
)
}

export default Greet;