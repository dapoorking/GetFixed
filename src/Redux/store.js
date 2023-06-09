import {createStore} from 'redux';
import Reducer from './Reducers/Reducer';

const store = createStore(Reducer);
export default store;
