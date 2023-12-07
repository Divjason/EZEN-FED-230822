import './DiaryItem.css';
import React from 'react';
import { getEmotionImgById } from '../util';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const DiaryItem = ({ id, emotionId, content, date }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  const emotionStyle = ['img_section', `img_section_${emotionId}`];
  // const today = new Date().getTime();
  const diaryDate = new Date(date);
  const editedContent = content.slice(0, 25);
  return (
    <div className="DiaryItem">
      <div className={emotionStyle.join(' ')} onClick={goDetail}>
        <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
      </div>
      <div className="info_section" onClick={goDetail}>
        <div className="date_wrapper">{diaryDate.toLocaleString()}</div>
        <div className="content_wrapper">{editedContent}</div>
      </div>
      <div className="button_section">
        <Button onClick={goEdit} text={'수정하기'} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
