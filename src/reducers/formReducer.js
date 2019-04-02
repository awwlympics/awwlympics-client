import{
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from "../actions";


const initialState = {
    userId: "",
    userToken: null,
    registeredUser: {},
    loggingIn: false,
    loggingOut: false,
    signingUp: false,
    error: null
}

const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGNUP_START:
            return {
                ...state,
                registeredUser: null,
                signingUp: true,
            };

            case SIGNUP_SUCCESS:
            return {
                ...state,
                registeredUser: action.payload,
                signingUp: false,
            };

            case SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload
            };

            case LOGIN_START:
            return {
                ...state,
                registeredUser: null,
                loggingIn: true,
            };

            case LOGIN_SUCCESS:
            return {
                ...state,
                userToken: action.payload.token,
                loggingIn: false,
            };

            case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            };

            case LOGOUT_START:
            return {
                ...state,
                loggingOut: true,
            };

            case LOGOUT_SUCCESS:
            return {
                ...state,
                userToken: null,
                loggingOut: false,
            };

            case LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}

export default formReducer;