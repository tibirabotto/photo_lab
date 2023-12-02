import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({dispatch, photo}) => {
  return (
    <><div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={() => dispatch({ type: 'MODAL' })}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className='photo-details-modal__image'>
        <img src={photo.urls.regular} />
      </div>
      <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={photo.user.profile} alt="Photographer" />
            <div className="photo-details-modal__photographer-info">
                <div>{photo.user.username}</div>
                <div className="photo-details-modal__photographer-location">{photo.location.city}</div>
            </div>
        </div>  
         <hr/>
    
        <div className='photo-details-modal__footer'> 
          <span>Related Photos</span>
          <div>
            <PhotoList photos={Object.values(photo.similar_photos)}/>
          </div>
        </div>  
    </div>
   

    </>
    
  )
};

export default PhotoDetailsModal;


