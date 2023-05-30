import { legacy_createStore as createStore , applyMiddleware , compose} from "redux";
import rootReducer from './Reducers'
import { persistStore , persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
    key : 'articles-data',
    storage
}


const persisteReducer = persistReducer(persistConfig , rootReducer )



const store = createStore(persisteReducer , compose (applyMiddleware() , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

const persiStore = persistStore(store)

export {persiStore}
export default store

/* export default createStore(persisteReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) */
