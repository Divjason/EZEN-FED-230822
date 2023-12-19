import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import PangImage from "../assets/ggompang.jpeg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;

const Header = styled.div`
  font-size: 40px;
  width: 100%;
  height: 10vh;
  background: #ffa07a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 550;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 550;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Container>
      <Header>😻예비집사 판별기😻</Header>
      <Wrapper>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img
            src={PangImage}
            alt="catmain"
            width={350}
            height={350}
            className="rounded-circle"
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
        <Desc>내가 집사가 되어서 고양이를 키운다면...?</Desc>
        <Button
          onClick={handleClickButton}
          className="btn-danger"
          style={{
            fontSize: 25,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          테스트 시작하기
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Home;
