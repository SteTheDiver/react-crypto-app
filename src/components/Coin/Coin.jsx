import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  current_price,
  total_volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Eur {current_price.toLocaleString()}</p>
          <p className="coin-volume">Eur {total_volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)} %</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)} %</p>
          )}
          <p className="coin-marketcap">Eur {marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
