import React from "react";

const StylizedH1 = (props) => {
  const title = props.etablissement;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default StylizedH1;
