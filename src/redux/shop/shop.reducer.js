import ShopActionTypes from './shop.types';

const INITIAL_DATA = {
   collections: null,
   isFetching: false,
};

const shopReducer = (state = INITIAL_DATA, action) => {
   switch (action.type) {
      case ShopActionTypes.FETCH_COLLECTIONS_START:
         return {
            ...state,
            isFetching: true,
            errorMessage: undefined,
         };

      case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS: {
         return {
            ...state,
            isFetching: false,
            collections: action.payload,
         };
      }

      case ShopActionTypes.FETCH_COLLECTIONS_FAILURE: {
         return {
            ...state,
            isFetching: false,
            error: action.payload,
         };
      }
      default:
         return state;
   }
};

export default shopReducer;
