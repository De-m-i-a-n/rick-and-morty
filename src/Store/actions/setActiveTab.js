import { SET_ACTIVE_TAB } from '../types/types';

const setActiveTab = payload => ({
    type: SET_ACTIVE_TAB,
    payload
});

export default setActiveTab;
