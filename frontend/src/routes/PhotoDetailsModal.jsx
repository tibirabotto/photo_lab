import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({onClosePhotoDetailsModal, selectedPhoto, favPhotoIds, updateToFavPhotoIds, removeFromFavPhotoIds}) => {
  return (
    <><div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal} >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className='photo-details-modal__image'>
        <img src={selectedPhoto.urls.regular} />
      </div>
      <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} alt="Photographer" />
            <div className="photo-details-modal__photographer-info">
                <div>{selectedPhoto.user.username}</div>
                <div className="photo-details-modal__photographer-location">{selectedPhoto.location.city}</div>
            </div>
        </div>  
        <hr/>    
        <span>Related Photos</span>
        <PhotoList photos={Object.values(selectedPhoto.similar_photos)} 
          favPhotoIds={favPhotoIds} 
          selectedPhoto={selectedPhoto} 
          removeFromFavPhotoIds={removeFromFavPhotoIds}
          updateToFavPhotoIds={updateToFavPhotoIds}/>    
    </div>
   

    </>
    
  )
};

export default PhotoDetailsModal;


