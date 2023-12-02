import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({data, selected, SetFavoriteNavBar}) => {
  const { urls, user, location} = data;
  
  return <div className="photo-list__item">
    <PhotoFavButton  displayAlert={false} selected={selected} SetFavoriteNavBar={SetFavoriteNavBar}  />
    <img  src={urls.regular} className="photo-list__image" alt="image-source" />
    <div className="photo-list__user-details">
      <img  src={user.profile} className="photo-list__user-profile" alt="image-source" />
        <div className="photo-list__user-info">
          <span>{user.username}</span><br/>
          <span className="photo-list__user-location">{location.city}</span>
        </div>    
    </div>
    </div>
      

    
};

export default PhotoListItem;
