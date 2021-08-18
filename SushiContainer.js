import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis}) {
  console.log(sushis)
  return (
    <div className="belt">
      {/* {sushis.map(sushi => <Sushi sushi={sushi} key={sushi.name} />)} */}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
