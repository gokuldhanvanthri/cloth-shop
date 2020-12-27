import ShopActionTypes from "./shop.types";

import {
  firestore,
  converCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (payload) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collMap = converCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
