import React from 'react';
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import '../styles/HomeRoute.scss';

const HomeRoute = ({photos, topics, onOpenPhotoDetailsModal, onClosePhotoDetailsModal, state, setPhotoSelected, updateToFavPhotoIds, removeFromFavPhotoIds, handlePhotosTopics}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotoIds={state.favPhotoIds} handlePhotosTopics={handlePhotosTopics} />
      <PhotoList  onOpenPhotoDetailsModal={onOpenPhotoDetailsModal} photos={photos} setPhotoSelected={setPhotoSelected} updateToFavPhotoIds={updateToFavPhotoIds} favPhotoIds={state.favPhotoIds} removeFromFavPhotoIds={removeFromFavPhotoIds} />
      {state.isPhotoDetailsModalOpen && <PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal} selectedPhoto={state.selectedPhoto} favPhotoIds={state.favPhotoIds} /> }
    </div>
  );
};

export default HomeRoute;
