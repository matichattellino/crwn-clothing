import SHOP_DATA from './shop.data';

const INITIAL_SATATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_SATATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default shopReducer;