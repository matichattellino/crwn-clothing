import ShopActionsTypes from './shop.types';

const INITIAL_SATATE = {
    collections: null
};

const shopReducer = (state = INITIAL_SATATE, action) => {
    switch (action.type) {
        case ShopActionsTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default: 
            return state;
    }
};

export default shopReducer;