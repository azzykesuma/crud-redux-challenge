import { 
    GET_POST_DETAILS,
    GET_POST_LIST,
    CREATE_POST,
    PATCH_POST, 
    DELETE_POST
} from "../actions/userAction";

const initialState = {
    getPostList : false,
    getPostDetail : false,
    getRespondData : false,
    errorRespondData : false,
    errorUserDetail : false, 
    errorUser : false
};

const posts = (state = initialState, action) => {
    switch(action.type) {
        case GET_POST_LIST :
            return {
                ...state,
                getPostList : action.payload.data,
                errorUser : action.payload.errorUser
            }
        
            case GET_POST_DETAILS : 
                return {
                    ...state,
                    getPostDetail : action.payload.data,
                    errorUserDetail : action.payload.errorUserDetail
                }

            case CREATE_POST : 
                return {
                    ...state,
                    getRespondData : action.payload.data,
                    errorRespondData : action.payload.errorRespondData
                }

            case PATCH_POST : 
                return {
                    ...state,
                    getRespondData : action.payload.data,
                    errorRespondData : action.payload.errorRespondData
                }

            case DELETE_POST : 
                return {
                    ...state,
                }

            default : 
                return state
    }
}

export default posts