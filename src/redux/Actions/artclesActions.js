import { ADD_ARTICLES, DELETE_ARTICLE, TOGGLE_VIEW , EDIT_ARTICLE , I_LIKE} from "./type";

export const addArticle = (newArticle) => {
  return {
    type: ADD_ARTICLES,
    payload: { ...newArticle, id: Math.random() },
  };
};

export const deletArticle = (id) => {
  return {
    type: DELETE_ARTICLE,
    payload: id,
  };
};

export const viewArtc = (id) => {
  return {
    type: TOGGLE_VIEW,
    payload: id,
  };
};

export const editArtc = (article) => {
  return {
    type: EDIT_ARTICLE,
    payload: article ,
  };
};

export const favoriteArtc = (id) => {
  return {
    type: I_LIKE ,
    payload : id
  }
}