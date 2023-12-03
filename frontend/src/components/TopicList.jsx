import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, handlePhotosTopics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      { topics && topics.map((data) => {
        return <TopicListItem key={data.id} title={data.title} topicId={data.id} handlePhotosTopics={handlePhotosTopics}/>
      }) }
        
    </div>
  );
};

export default TopicList;
