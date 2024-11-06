// creating store => store will be created because we can send this store to every page of app 
// and if any changes would be happend then it will be reflected inside to the store =>
import { createStore } from 'redux';
// reducer functions =>
import counterReducer from '../reducer/reducer';

// reducer function send to the store , when any action and payload will be performend then it will
// be sent to store (state management will be performed) =>
const store = createStore(counterReducer);

export default store;
