import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({displayAlert, selected, SetFavoriteNavBar}) {
  const [isFavorite,setIsFavorite] = useState(selected)
  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
    SetFavoriteNavBar(true);
  }
  return (
    <div className="photo-list__fav-icon" onClick={handleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={displayAlert} selected={isFavorite}  />
      </div>
    </div>
  );
}

export default PhotoFavButton;