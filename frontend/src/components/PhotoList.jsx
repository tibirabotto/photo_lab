import React, { useState } from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";



const PhotoList = ({photos, selected, SetFavoriteNavBar, dispatch}) => { 
  return (
    <>
    <ul className="photo-list">
      { photos.map((data) => {
        return (<li onClick={() => dispatch({ type: 'MODAL', photo: data } )} key={data.id}><PhotoListItem data={data} selected={selected} SetFavoriteNavBar={SetFavoriteNavBar}  /></li>)
      }) }
      
    </ul>
    </>
  );
};

export default PhotoList;
