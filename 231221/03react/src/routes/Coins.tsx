import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.header``;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const CoinList = styled.ul``;

const Coin = styled.li``;

const Coins = () => {
  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      <CoinList>
        <Coin></Coin>
      </CoinList>
    </Container>
  );
};

export default Coins;
