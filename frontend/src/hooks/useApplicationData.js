import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

const initialState = {
  favPhotoIds: [],
  selectedPhoto: null,
  isPhotoDetailsModalOpen: false,
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotoIds: [...state.favPhotoIds, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotoIds: state.favPhotoIds.filter((id) => id !== action.payload),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isPhotoDetailsModalOpen: action.payload };
    // Handle other actions...
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (newFavPhotoIds) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: newFavPhotoIds });
  };

  const removeFromFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
  };

  const setPhotoSelected = (selectedPhoto) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: selectedPhoto });
  };

  const onOpenPhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
  };

  return {
    state,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    setPhotoSelected,
    onOpenPhotoDetailsModal,
    onClosePhotoDetailsModal,
    // Other actions...
  };
};

export default useApplicationData;
