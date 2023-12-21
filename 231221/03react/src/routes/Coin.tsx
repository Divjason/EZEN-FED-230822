import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

const Coin = () => {
  const { coinId } = useParams<RouteParams | any>();
  return <div>Coin: {coinId}</div>;
};

export default Coin;
