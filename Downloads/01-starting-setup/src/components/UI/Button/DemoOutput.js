import React from "react";

const DemoOutput = (props) => {
    console.log("inside demo applicatin")
  return (
    <div>
      <p>{props.show ? "this is a new Demo component" : ""}</p>
    </div>
  );
};

export default React.memo(DemoOutput);
