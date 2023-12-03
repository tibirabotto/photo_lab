import React, { useState, useReducer, useEffect } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import PhotoDetailsModal from "routes/PhotoDetailsModal";



const HomeRoute = ({photos, topics, onOpenPhotoDetailsModal, onClosePhotoDetailsModal, state, setPhotoSelected, updateToFavPhotoIds, removeFromFavPhotoIds}) => {
 
  return <div className="home-route">
  <TopNavigation topics={topics} favPhotoIds={state.favPhotoIds} />
  <PhotoList  onOpenPhotoDetailsModal={onOpenPhotoDetailsModal} photos={photos} setPhotoSelected={setPhotoSelected} updateToFavPhotoIds={updateToFavPhotoIds} favPhotoIds={state.favPhotoIds} removeFromFavPhotoIds={removeFromFavPhotoIds} />
  {state.isPhotoDetailsModalOpen && <PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal} selectedPhoto={state.selectedPhoto} favPhotoIds={state.favPhotoIds} /> }
  </div>
};

export default HomeRoute;