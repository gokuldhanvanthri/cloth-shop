import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetch } from "../../redux/shop/shop.selector";
import withSpinner from "../withSpinner/withSpinner.component";
import CollectionsOverview from "./collectionsOverview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetch,
});

/* const CollectionsOverviewContainer = connect(mapStateToProps)(
    withSpinner(CollectionsOverview)
  ); */

// Redux compose - currying multiple functions together, equivalen of above line
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
