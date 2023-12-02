import React, { useState } from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({photos, topics}) => {
  const [favoriteNavBar, SetFavoriteNavBar] = useState(false);
  return <div className="home-route">
  <TopNavigation topics={topics} favoriteNavBar={favoriteNavBar}/>
  <PhotoList photos={photos} selected={false}  SetFavoriteNavBar={SetFavoriteNavBar}  />
  </div>
};

export default HomeRoute;