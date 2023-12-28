import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  useParams,
  useLocation,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { fetchCoinInfo, fetchCoinTickers } from "../api";

const Cointainer = styled.div`
  padding: 20px;
  max-width: 880px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 40px;
  margin-bottom: 20px;
`;

const Loader = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  color: ${(props) => props.theme.accentColor};
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.accentColor};
  background: ${(props) => props.theme.textColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  span:first-child {
    font-size: 24px;
    font-weight: 800;
    text-transform: uppercase;
  }
  span:last-child {
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(props) => props.theme.bgColor};
  }
`;

const Description = styled.p`
  margin: 20px 0;
  text-align: center;
  color: ${(props) => props.theme.bgColor};
  background: ${(props) => props.theme.textColor};
  padding: 30px 20px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 800;
  span {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  gap: 13px;
`;
const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.bgColor};
  background: ${(props) => props.theme.textColor};
  padding: 15px 40px;
  border-radius: 10px;
`;

interface RouteParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface priceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface ICoinProps {
  isDark: boolean;
}

const Coin = () => {
  const { coinId } = useParams<RouteParams | any | undefined>();
  const { state } = useLocation() as LocationState;
  // const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<priceData>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );

  const { isLoading: tickersLoading, data: tickersData } = useQuery<priceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId)
  );

  const loading = infoLoading || tickersLoading;

  return (
    <Cointainer>
      <Helmet>
        <title>{state ? state : loading ? "Loading..." : infoData?.name}</title>
      </Helmet>
      <Header>
        <Title>
          Coin Name / {state ? state : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader> "Loading..."</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Type</span>
              <span>{infoData?.type}</span>
            </OverviewItem>
          </Overview>
          <Description>
            <span>COIN DESCRIPTION : </span> {tickersData?.id}
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Routes>
            <Route path="/chart" element={<Chart coinId={coinId} />} />
            <Route path="/price" element={<Price />} />
          </Routes>
        </>
      )}
    </Cointainer>
  );
};

export default Coin;
