import {getNews} from '../../api/api.js'

const SET_INITIALIZED = "SET_INITIALIZED";
const GET_NEWS = "GET_NEWS"

let initialState = {
    initialized: false,
    news:[]
};

const AppReducer = (state = initialState, action) =>{
    
    switch (action.type) {    
        case SET_INITIALIZED:{
            return {
                ...state,
                initialized: true
            }
        }
        case GET_NEWS:{
            return {...state, news:action.data}
        }
        default:
            return state;
    }
} 

export const initializedSaccess = () => ({ type: SET_INITIALIZED})
export const getItemNews = (data) => ({ type: GET_NEWS, data})

export const initializeApp = () => (dispatch) =>{
    dispatch(initializedSaccess());
}

export const getAllNews = () => async (dispatch) =>{
    const data = await getNews();
    if(data.articles.length > 0){
        dispatch(getItemNews(data));
        dispatch(initializeApp())
    }
}

export default AppReducer;