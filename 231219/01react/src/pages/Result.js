import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ResultData } from "../assets/data/resultdata";
import { Button } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;

const Header = styled.div`
  font-size: 35px;
  color: #fff;
  width: 100%;
  height: 15vh;
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
  height: 85vh;
  margin-top: 70px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 550;
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 20px 0;
`;

const Desc = styled.div`
  width: 40%;
  font-size: 35px;
  font-weight: 550;
  text-align: center;
  margin: 15px 0;
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);
  return (
    <Container>
      <Header>예비집사 판별기</Header>
      <Wrapper>
        <Title>결과보기</Title>
        <LogoImage>
          <img
            src={resultData.image}
            width={350}
            height={350}
            className="rounded-circle"
          />
        </LogoImage>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는 {resultData.best}형 고양이{" "}
          {resultData.name} 입니다.
        </Desc>
        <Desc>{resultData.desc}</Desc>
        <Button onClick={handleClickButton}>테스트 다시하기</Button>
      </Wrapper>
    </Container>
  );
};

export default Result;
