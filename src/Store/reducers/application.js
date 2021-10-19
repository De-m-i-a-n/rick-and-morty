import {
    SET_ACTIVE_FILTER_TYPE,
    SET_ACTIVE_TAB,
    SET_SPECIES_FILTER_TYPE,
    SET_STATUS_FILTER_TYPE,
    SET_GENDER_FILTER_TYPE

} from '../types/types';

const initialState = {
    activeTab: 0,
    activeFilterType: '',
    activeFilter: ['Male'],
    SET_SPECIES_FILTER_TYPE: '',
    SET_STATUS_FILTER_TYPE: '',
    SET_GENDER_FILTER_TYPE: ''    
};
console.log(initialState)

export default function applicationReducer (state = initialState, action) {
    switch (action.type) {
    case SET_ACTIVE_TAB:
        return { ...state, activeTab: action.payload };
    case SET_ACTIVE_FILTER_TYPE:
        return { ...state, activeFilterType: action.payload };
    case SET_SPECIES_FILTER_TYPE:
        return { ...state, activeFilter: action.payload };
    case SET_STATUS_FILTER_TYPE:
        return { ...state, statusFilterType: action.payload };
    case SET_GENDER_FILTER_TYPE:
        return { ...state, genderFilterType: action.payload };                
    default:
        return state;
    }
}

