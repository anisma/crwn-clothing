import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import { compose } from 'redux';
import { connect } from 'react-redux';

import CollectionPage from './collection.component';
import WithSpinner from '../../component/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
   isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
