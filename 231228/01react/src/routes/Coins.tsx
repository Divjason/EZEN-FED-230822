import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "../atom";
import { useSetRecoilState } from "recoil";

const Container = styled.div`
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

const CoinList = styled.ul``;

const Coin = styled.li`
  background: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 15px;
  font-size: 25px;
  a {
    padding: 15px;
    transition: 0.2s color ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 18px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 15px;
  background: ${(props) => props.theme.textColor};
  border: none;
  border-radius: 15px;
  color: ${(props) => props.theme.accentColor};
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface ICoinProps {
  toggleDark: () => void;
}

const Coins = () => {
  const setterFn = useSetRecoilState(isDarkAtom);
  const { isLoading, data } = useQuery<CoinInterface[] | undefined>(
    "allCoins",
    fetchCoins
  );

  return (
    <Container>
      <Helmet>
        <title>Coin List</title>
      </Helmet>
      <Header>
        <Title>Virtual Money / Coin List</Title>
        <Button onClick={() => setterFn((prev) => !prev)}>Toggle Mode</Button>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                Coin Ranking: {coin.rank}. {coin.name} &rarr; [Click] detail
                Coin info{" "}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
