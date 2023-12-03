import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({title, topicId, handlePhotosTopics}) => {
  
  const handleClick = () => {
    handlePhotosTopics(topicId)
  }

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
