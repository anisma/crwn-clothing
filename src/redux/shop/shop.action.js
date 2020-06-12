import ShopActionTypes from './shop.types';
import {
   firestore,
   convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

// declare fetchCollectionsStart action
const fetchCollectionsStart = () => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

// declare fetchCollectionsSucces action
const fetchCollectionsSucces = (collectionsMap) => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
   payload: collectionsMap,
});

// declare fetchCollectionsFailure action
const fetchCollectionsFailure = (errorMessage) => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
   payload: errorMessage,
});

//implements redux-thunk (dispatch method)
export const fetchCollectionsStartAsync = () => {
   return (dispatch) => {
      // start fetchind data
      dispatch(fetchCollectionsStart());

      const collectionRef = firestore.collection('collections');

      collectionRef
         .get()
         .then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            //actual fetching data process
            dispatch(fetchCollectionsSucces(collectionsMap));
         })
         .catch((error) =>
            //if fetch data is failed get the error message
            dispatch(fetchCollectionsFailure(error.message))
         );
   };
};
