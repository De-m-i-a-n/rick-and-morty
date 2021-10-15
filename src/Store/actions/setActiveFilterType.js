import { SET_ACTIVE_FILTER_TYPE } from '../types/types';

const setActiveFilterType = payload => ({
    type: SET_ACTIVE_FILTER_TYPE,
    payload
});

export default setActiveFilterType;