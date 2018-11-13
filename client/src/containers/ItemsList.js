import { connect } from 'react-redux';
import { ItemsListComponent } from '../components/ItemsListComponent';

export const ItemsList = connect(
    state => ({
        items: state.items
    }),
    null
)(ItemsListComponent);