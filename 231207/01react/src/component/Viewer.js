import React from 'react';
import './Viewer.css';
import { emotionList } from '../util';

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  const emotionImg = [
    'emotion_img_wrapper',
    `emotion_img_wrapper_${emotionId}`,
  ];
  return (
    <div className="Viewer">
      <section>
        <h4>오늘의 감정</h4>
        <div className={emotionImg.join(' ')}>
          <img src={emotionItem.img} alt={emotionItem.name} />
          <div className="emotion_description">{emotionItem.name}</div>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
