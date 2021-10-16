import { SET_GENDER_FILTER_TYPE } from '../types/types';

const setGenderFilterType = payload => ({
  type: SET_GENDER_FILTER_TYPE,
  payload
});

export default setGenderFilterType;