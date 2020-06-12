import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './shop.styles.scss';

import CollectionsOverviewContainer from '../../component/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import { createStructuredSelector } from 'reselect';

class ShopPage extends React.Component {
   state = {
      loading: true,
   };
   unsubscribeFromSnapshot = null;

   componentDidMount() {
      const { fetchCollectionsStartAsync } = this.props;
      fetchCollectionsStartAsync();
   }

   render() {
      const { match } = this.props;
      return (
         <div className='shop-page'>
            <Route
               exact
               path={`${match.path}`}
               component={CollectionsOverviewContainer}
            />

            <Route
               exact
               path={`${match.path}/:collectionId`}
               component={CollectionPageContainer}
            />
         </div>
      );
   }
}

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
