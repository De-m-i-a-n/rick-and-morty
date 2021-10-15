import {
  SET_ACTIVE_FILTER_TYPE
} from '../types/types';

const initialState = {
  activeFilterType: 0
};

export default function typesFilterReducer (state = initialState, action) {
  switch (action.type) {
  case SET_ACTIVE_FILTER_TYPE:
      return { ...state, activeFilterType: action.payload };
  default:
      return state;
  }
}