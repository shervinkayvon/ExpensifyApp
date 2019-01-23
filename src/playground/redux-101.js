import { createStore } from 'redux';

// Action Creator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decremntCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Are pure functions i.e. they don't interact with any outside variables, everything is contained in the function 
// 2. Never change state or action i.e. we return a new object that represents the new state instead of changing state

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

// subscribe runs everytime there is a change to the store 
store.subscribe(() => {
    console.log(store.getState());
});

// Actions - an object that gets sent to the store to cause change 

// Increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

// Decrement the count 
store.dispatch(decremntCount());

store.dispatch(decremntCount({ decrementBy: 10 }));
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(setCount({ count: 101 }));

