import React, { useEffect, useState } from 'react';


import './App.scss';
import HomeRoute from './components/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import photos from 'mocks/photos';
import topics from 'mocks/topics';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    removeFromFavPhotoIds,
    setPhotoSelected,
    updateToFavPhotoIds,
    onOpenPhotoDetailsModal,
    onClosePhotoDetailsModal,
    setPhotoData,
    setTopicData,

  } = useApplicationData();

  useEffect(() => {
    setPhotoData(photos)
    setTopicData(topics)
  }, [])

  

  return (
    <div className="App">
     <HomeRoute photos={state.photoData} topics={state.topicData} onOpenPhotoDetailsModal={onOpenPhotoDetailsModal} onClosePhotoDetailsModal={onClosePhotoDetailsModal} setPhotoSelected={setPhotoSelected} state={state} updateToFavPhotoIds={updateToFavPhotoIds} removeFromFavPhotoIds={removeFromFavPhotoIds} />
    </div>
  );
};

export default App;
