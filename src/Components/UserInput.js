import React from "react";
const userInput = (props) => {
  return (
    <div style={{margin: 'auto'}}>
      <input type="text" onChange={props.changed} value={props.value} />
      <p>{props.value.length}</p>
    </div>
  );
};

export default userInput;
