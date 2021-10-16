import { SET_SPECIES_FILTER_TYPE } from '../types/types';

const setSpeciesFilterType = payload => ({
    type: SET_SPECIES_FILTER_TYPE,
    payload
});

export default setSpeciesFilterType;