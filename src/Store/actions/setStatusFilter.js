import { SET_STATUS_FILTER_TYPE } from '../types/types';

const setStatusFilterType = payload => ({
  type: SET_STATUS_FILTER_TYPE,
  payload
});

export default setStatusFilterType;