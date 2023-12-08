import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFormattedDate, setPageTitle } from "../util";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";

const Diary = () => {
  const { id } = useParams();
  useEffect(() => {
    setPageTitle(`${id}번 일기`);
  }, []);
  const data = useDiary(id);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const diaryDate = new Date(Number(date));
    const title = `${getFormattedDate(diaryDate)} 기록`;
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
          title={title}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer emotionId={emotionId} content={content} />
      </div>
    );
  }
};

export default Diary;
