import React from "react";


function Sushi(sushis) {
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushis.img_url}
            alt={"Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushis.name} - ${sushis.price}
      </h4>
    </div>
  );
}

export default Sushi;
