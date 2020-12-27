import { takeLatest, call, put } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {
  firestore,
  converCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    // Making a service call - call is used to timeout a service call if its taking more time
    const collectionsMap = yield call(converCollectionSnapshotToMap, snapshot);
    // Same as dispatch, puts things back to the redux flow
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // With Redux-thunk
  /*collectionRef
    .get()
    .then((snapshot) => {
      const collMap = converCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collMap));
    })
    .catch((error) => dispatch(fetchCollectionsFailure(error.message))); */
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
