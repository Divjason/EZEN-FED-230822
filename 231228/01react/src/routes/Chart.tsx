import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

interface ChartProps {
  coinId: string | undefined;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: number;
  volume: string;
  market_cap: number;
}

const Chart = ({ coinId }: ChartProps) => {
  const isDark = useRecoilValue(isDarkAtom);
  const params = useParams();
  console.log(params);
  const { isLoading, data } = useQuery<IHistorical[] | any>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "coins",
              data: data?.map((price: any) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              width: 500,
              height: 500,
              toolbar: {
                show: false,
              },
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            grid: {
              show: false,
            },
            xaxis: {
              labels: { show: true },
            },
            yaxis: {
              labels: { show: true },
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
