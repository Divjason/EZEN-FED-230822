import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import PangImage from "../assets/ggompang.jpeg";
import Cat01 from "../assets/cat/abyssinian.jpg";
import Cat02 from "../assets/cat/ameshort.png";
import Cat03 from "../assets/cat/bengal.jpg";
import Cat04 from "../assets/cat/british.jpg";
import { type } from "@testing-library/user-event/dist/type";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;

const Title = styled.div`
  margin: 30px 0;
  font-size: 50px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 80px;
`;

const BottomImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  // const handleClickButtonA = (no, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else if (type === "JP") {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };
  // const handleClickButtonB = (no) => {
  //   setQuestionNo(questionNo + 1);
  // };

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setQuestionNo(questionNo + 1);
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>😍{QuestionData[0].title}😲</Title>
      <ButtonGroup>
        <Button
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          style={{
            width: "30%",
            height: "400px",
            fontSize: "36px",
          }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          style={{
            width: "30%",
            height: "400px",
            fontSize: "36px",
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
      <BottomImage>
        <img
          src={PangImage}
          width={200}
          height={200}
          className="rounded-circle"
        />
        <img src={Cat01} width={200} height={200} className="rounded-circle" />
        <img src={Cat02} width={200} height={200} className="rounded-circle" />
        <img src={Cat03} width={200} height={200} className="rounded-circle" />
        <img src={Cat04} width={200} height={200} className="rounded-circle" />
      </BottomImage>
    </Wrapper>
  );
};

export default Question;
