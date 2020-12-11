import React from "react";

function Coin() {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
          <div className="coin-data">
            <p className="coin-price">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coin;
