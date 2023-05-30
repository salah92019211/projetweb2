import {ADD_ARTICLES , DELETE_ARTICLE , TOGGLE_VIEW , EDIT_ARTICLE , I_LIKE } from '../Actions/type'




const initState = {
    articles : []
}


const articleReducers = (state = initState , {type , payload}) => {
    
    switch (type) {
        case ADD_ARTICLES:
            return {
                ...state ,
                articles : [...state.articles , payload ]
            }

        case DELETE_ARTICLE : 
            return {
                ...state , 
                articles : state.articles.filter(elm => elm.id !== payload)
            }

        case TOGGLE_VIEW :
            return {
                ...state ,
                articles : state.articles.map(el=> el.id === payload ? {...el , view : !el.view} : el)
            }

        case EDIT_ARTICLE :
            return {
                ...state ,
                articles : state.articles.map(el => el.id === payload.id ? payload : el)
            }

        case I_LIKE : 
            return {
                ...state , 
                articles : state.articles.map(el => el.id === payload ? {...el , iLike : !el.iLike} : el)
            }
            
    
        default:
            return state
    }
    
    
    
    
    
    

}

export default articleReducers