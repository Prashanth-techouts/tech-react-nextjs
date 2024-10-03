import React, { Component }  from "react";

interface WelcomeProps {
    name: string;
  }

class Welcome extends Component<WelcomeProps>{

render(){
    return <h1>Welcome {this.props.name}</h1>
}
}

export default Welcome;