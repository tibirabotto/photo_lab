import React, { useState } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({topics, favPhotoIds}) => {
  const [hasFavorite, setHasFavorite] = useState(false);
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge isFavPhotoExist={favPhotoIds.length > 0} selected={favPhotoIds.length > 0} />
    </div>
  )
}

export default TopNavigation;