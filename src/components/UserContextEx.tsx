import React from "react";
import { useContext } from "react";
import { UserContext } from "./DataFetch";

function UserContextEx() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>
        <UserContext.Consumer>
          {(user) => {
            return <div>user context value {user}</div>;
          }}
        </UserContext.Consumer>
      </h1>
      <h3>{user}</h3>
    </div>
  );
}

export default UserContextEx;
