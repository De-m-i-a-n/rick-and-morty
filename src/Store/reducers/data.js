import {
    SET_ACTIVE_TAB,
    SET_AUTHENTICATED,
    SET_PLAN,
    SET_BOUNDS,
    SET_PAYMENT_DATA,
    SET_POD_DATA,
    SET_SIGNUP_DATA,
    SET_STEP,
    DELETE_COMPARE_POD,
    SET_COMPARE_PODS,
    SET_ACTIVE_COMPARE,
    SET_SEARCH,
    SET_MAP,
    SET_FAV_POD,
    SET_USER_INFO,
    SET_ACTIVE_POD, SET_TIMEFRAME, SET_PARAMS, SET_POD_LOCATION
} from '../types/types';

const initialState = {
    userInfo: null,
    podData: {},
    authenticated: false,
    isActiveCompare: false,
    isActivePod: false,
    bounds: {},
    step: null,
    plan: {
        uuid: '',
        name: '',
        price: '',
        paypal_plan_id: ''
    },
    signUpData: { username: '', email: '', password: '' },
    paymentData: {
        cardNumber: '',
        name: '',
        expirationDate: '',
        securityCode: '',
        address: '',
        city: '',
        state: '',
        postalCode: ''
    },
    pods: [],
    search: '',
    favPods: [],
    coords: {
        lat: '',
        lng: ''
    },
    timeFrame: [],
    params: [],
    podLocation: {}
};

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
    case SET_ACTIVE_TAB:
        return { ...state, setActiveTab: action.payload };

    case SET_USER_INFO:
        return { ...state, userInfo: action.payload };
    case SET_POD_DATA:
        return { ...state, podData: action.payload };
    case SET_AUTHENTICATED:
        return { ...state, authenticated: action.payload };
    case SET_ACTIVE_COMPARE:
        return { ...state, isActiveCompare: action.payload };
    case SET_ACTIVE_POD:
        return { ...state, isActivePod: action.payload };
    case SET_BOUNDS:
        return { ...state, bounds: action.payload };
    case SET_STEP:
        return { ...state, step: action.payload };
    case SET_PLAN:
        return { ...state, plan: action.payload };
    case SET_SIGNUP_DATA:
        return { ...state, signUpData: action.payload };
    case SET_PAYMENT_DATA:
        return { ...state, paymentData: action.payload };
    case SET_COMPARE_PODS:
        return { ...state, pods: [...state.pods, action.payload] };
    case DELETE_COMPARE_POD:
        return { ...state, pods: [...state.pods.filter((pod, idx) => idx !== action.payload)] };
    case SET_SEARCH:
        return { ...state, search: action.payload };
    case SET_FAV_POD:
        return { ...state, favPods: action.payload };
    case SET_MAP:
        return { ...state, coords: action.payload };
    case SET_TIMEFRAME:
        return { ...state, timeFrame: action.payload };
    case SET_PARAMS:
        return { ...state, params: action.payload };
    case SET_POD_LOCATION:
        return { ...state, podLocation: action.payload };
    default:
        return state;
    }
}
