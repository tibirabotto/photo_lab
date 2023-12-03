import React, {  useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({updateToFavPhotoIds, photoId, favPhotoIds, removeFromFavPhotoIds}) {
  const [isFavorite, setIsFavorite] = useState(favPhotoIds.includes(photoId))
   const handleFav = () => {
    if (favPhotoIds.includes(photoId)) {
      removeFromFavPhotoIds(photoId)
      setIsFavorite(false);
    } else {
      updateToFavPhotoIds(photoId)
      setIsFavorite(true)
    }

  }


 
  return (
    <div className="photo-list__fav-icon" onClick={handleFav} >
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={isFavorite}  />
      </div>
    </div>
  );
}

export default PhotoFavButton;