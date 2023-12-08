import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../util";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";

const New = () => {
  useEffect(() => {
    setPageTitle("새 일기 쓰기");
  }, []);
  const data = useContext(DiaryStateContext);
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/", { replace: true });
  };
  return (
    <div>
      <Header
        leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
        title={"새 일기 쓰기"}
      />
      <Editor initData={data} onSubmit={onSubmit} />
    </div>
  );
};

export default New;
