import React, { useState } from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";



const PhotoList = ({photos, onOpenPhotoDetailsModal, setPhotoSelected, updateToFavPhotoIds, favPhotoIds, removeFromFavPhotoIds}) => {

  return (
    <>
    <ul className="photo-list">
      { photos && photos.map((data) => {
        return (<li  key={data.id}><PhotoListItem data={data}  onOpenPhotoDetailsModal={onOpenPhotoDetailsModal} setPhotoSelected={setPhotoSelected} updateToFavPhotoIds={updateToFavPhotoIds} favPhotoIds={favPhotoIds} removeFromFavPhotoIds={removeFromFavPhotoIds} /></li>)
      }) }
      
    </ul>
    </>
  );
};

export default PhotoList;
