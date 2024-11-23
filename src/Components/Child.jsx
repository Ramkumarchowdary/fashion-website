import React from "react";

const Child = ({ increament, decrement }) => {
  return (
    <div>
      <button style={{ marginRight: "2px" }} onClick={() => increament()}>
        Increment
      </button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};

export default Child;
