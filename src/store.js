import { combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;

// store.dispatch({ type: 'account/deposit', payload: 500 });

// console.log(store.getState());

// store.dispatch({ type: 'account/withdraw', payload: 200 });

// console.log(store.getState());

// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 1000, purpose: 'buy a car' },
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'account/payLoan',
// });

// console.log(store.getState());

// store.dispatch(deposit(500));
// console.log(store.getState());
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(1000, 'buy cheap car'));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());
