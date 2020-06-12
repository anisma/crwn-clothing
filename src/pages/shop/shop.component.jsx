import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./shop.styles.scss";

import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../component/with-spinner/with-spinner.component";

import {
   firestore,
   convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.action";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
   state = {
      loading: true,
   };
   unsubscribeFromSnapshot = null;

   componentDidMount() {
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection("collections");
      collectionRef.onSnapshot(async (snapshot) => {
         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
         updateCollections(collectionsMap);
         this.setState({ loading: false });
      });
   }

   render() {
      const { match } = this.props;
      const { isLoading } = this.state;
      return (
         <div className='shop-page'>
            <Route
               exact
               path={`${match.path}`}
               render={(props) => (
                  <CollectionsOverviewWithSpinner
                     isLoading={isLoading}
                     {...props}
                  />
               )}
            />
            <Route
               exact
               path={`${match.path}/:collectionId`}
               render={(props) => (
                  <CollectionPageWithSpinner isLoading={isLoading} {...props} />
               )}
            />
         </div>
      );
   }
}
const mapDispatchToProps = (dispatch) => ({
   updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
