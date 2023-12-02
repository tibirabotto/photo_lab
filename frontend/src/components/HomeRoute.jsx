import React, { useState, useReducer, useEffect } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const reducerModal = (state, action) => {
  switch(action.type) {
    case 'MODAL':
      return { open: !state.open, photo: action.photo  };
    default:
      return state
  }
 
}

const HomeRoute = ({photos, topics}) => {
  const [favoriteNavBar, SetFavoriteNavBar] = useState(false);
  const initialState = { open: false, photo: "" };
  const [state, dispatch] = useReducer(reducerModal, initialState);
  return <div className="home-route">
  <TopNavigation topics={topics} favoriteNavBar={favoriteNavBar}/>
  <PhotoList photos={photos} selected={false}  SetFavoriteNavBar={SetFavoriteNavBar} dispatch={dispatch} />
  {state.open && <PhotoDetailsModal dispatch={dispatch} photo={state.photo} /> }
  </div>
};

export default HomeRoute;