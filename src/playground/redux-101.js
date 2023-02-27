import { createStore } from "redux";

//Action generators - functions that return action objects
//A paramenter called payload is used to get variables from actions to use as necessary
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

//destructured
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = -1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'    
});

//reducers
//1. Reducers are pure functions
//2. Never change state or action
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
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

//subscribe and unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

store.dispatch(resetCount());

// to unsubscribe the dispatch
// unsubscribe();