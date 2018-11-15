import { connect } from 'react-redux';
import { ItemsFormComponent } from '../components/ItemsFormComponent';
import { addItem } from '../actions/items';

export const ItemsForm = connect(
    state => ({
        error: state.error
    }),
    dispatch => ({
        addItem: (item) => dispatch(addItem(item))
    })
)(ItemsFormComponent);