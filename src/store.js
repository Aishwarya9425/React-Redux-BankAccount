import { combineReducers, createStore } from "redux";
// 'createStore' is deprecated
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  aadharNo: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state; //can request loan only if no loan exists
      //LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state; //return original state
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        aadharNo: action.payload.aadharNo,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

//action creators for account

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(100));
console.log(store.getState());
store.dispatch(requestLoan(1000, "buy home"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

//action creators for customer
function createCustomer(fullName, aadharNo) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      aadharNo,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("Aishwarya J", "12345678"));
console.log(store.getState());
// store.dispatch(updateName("Deepika"));
// console.log(store.getState());
