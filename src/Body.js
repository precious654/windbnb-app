import React from "react";
import Card from "./Card";
import stay from "./stays.json";

function Body() {

  let data = stay.map( (item) => <Card item={item} />)

  return (
    <div className="body">
      <div className="top">
        <h1>Stays in Finland</h1>
        <p>12+ stays</p>
      </div>
      <div className="content">
        {data}
      </div>
    </div>
  )
}

export default Body;
