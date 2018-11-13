import { connect } from 'react-redux';
import { ItemsFormComponent } from '../components/ItemsFormComponent';
import { addItemWithAPICall } from '../actions/items';

export const ItemsForm = connect(
    null,
    dispatch => ({
        addItem: (item) => dispatch(addItemWithAPICall(item))
    })
)(ItemsFormComponent);