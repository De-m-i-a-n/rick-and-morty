import {
    SET_ACTIVE_TAB
} from '../types/types';

const initialState = {
    activeTab: 0
};

export default function applicationReducer (state = initialState, action) {
    switch (action.type) {
    case SET_ACTIVE_TAB:
        return { ...state, activeTab: action.payload };
    default:
        return state;
    }
}

