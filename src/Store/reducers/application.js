import {
    SET_ACTIVE_TAB
} from '../types/types';

//import { DEFAULT_LOCALE } from '../../constants';

const initialState = {
    activeTab: 'charaсters'
};

export default function applicationReducer (state = initialState, action) {
    switch (action.type) {
    case SET_ACTIVE_TAB:
        return { ...state, activeTab: action.payload };
    default:
        return state;
    }
}


