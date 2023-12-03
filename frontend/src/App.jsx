import React, { useEffect, useState } from 'react';


import './App.scss';
import HomeRoute from './components/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import photos from 'mocks/photos';
import topics from 'mocks/topics';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const URL_API = "http://localhost:8001"
  const {
    state,
    removeFromFavPhotoIds,
    setPhotoSelected,
    updateToFavPhotoIds,
    onOpenPhotoDetailsModal,
    onClosePhotoDetailsModal,
    setPhotoData,
    setTopicData,
    photosTopicData

  } = useApplicationData();

  useEffect(() => {
    fetch(`${URL_API}/api/photos`)
    .then((response) => response.json())
    .then((data) => setPhotoData(data))
    
    fetch(`${URL_API}/api/topics`)
    .then((response) => response.json())
    .then((data) => setTopicData(data))

  }, [])

  const handlePhotosTopics = (topic_id) => {
    fetch(`${URL_API}/api/topics/photos/${topic_id}`)
    .then((response) => response.json())
    .then((data) => setPhotoData(data))
  }

  return (
    <div className="App">
     <HomeRoute photos={state.photoData} topics={state.topicData} onOpenPhotoDetailsModal={onOpenPhotoDetailsModal} onClosePhotoDetailsModal={onClosePhotoDetailsModal} setPhotoSelected={setPhotoSelected} state={state} updateToFavPhotoIds={updateToFavPhotoIds} removeFromFavPhotoIds={removeFromFavPhotoIds} handlePhotosTopics={handlePhotosTopics} />
    </div>
  );
};

export default App;
