import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";


const PhotoList = ({photos, selected, SetFavoriteNavBar}) => {
  return (
    <ul className="photo-list">
      { photos.map((data) => {
        return (<li key={data.id}><PhotoListItem  data={data} selected={selected} SetFavoriteNavBar={SetFavoriteNavBar}  /></li>)
      }) }
      
    </ul>
  );
};

export default PhotoList;
