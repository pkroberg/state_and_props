import React from "react";
//large tweet component

const Tweet = (props) => (
  <div>
    <h1>{props.name}</h1>
    <h2>{props.tweet}</h2>
  </div>
);

export default Tweet;
