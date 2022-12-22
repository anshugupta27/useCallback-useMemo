import {createStore } from 'redux';

const initialState = {counter:0, showCounter: true};

//creating the store and the reducer function 
const counterReducer = (state =initialState, action) => { // initializing 
    //the state with initial value where counter = 0 
    if ( action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if ( action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if ( action.type === 'increasebyx') {
        return {
            counter: state.counter+action.amount,
            showCounter: state.showCounter
        }
    }

    if ( action.type === 'toggle' ){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
};

const store = createStore(counterReducer); // this creates the redux 
//store

export default store;