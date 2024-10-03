import React from "react";
import Greet from "@/components/Greet";
import Welcome from "@/components/Welcome";
import LifeCycleA from "@/components/LifeCycleA";
import UseStateForm from "@/components/UseStateForm";
import UseStateArrayObj from "@/components/UseStateArrayObj";
import StopWatch from "@/components/StopWatch";
import UserReducerEX from "@/components/UserReducerEX";
import UserReducerObjEX from "@/components/UserReducerObjEX";
import UseCallBack from "@/components/UseCallBack";

export default function page() {
  return (
    <div className="App">
      <Greet name="gateway">
        <p>this is Gateway Site</p>
      </Greet>
      <Welcome name="gateway" />
      <LifeCycleA />
      <UseStateForm />
      <UseStateArrayObj />
      <StopWatch />
      {/* <DataFetch /> */}
      <UserReducerEX />
      <UserReducerObjEX />
      <UseCallBack />
    </div>
  );
}
