const initialStateCustomer = {
  fullName: "",
  aadharNo: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
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

//action creators for customer
export function createCustomer(fullName, aadharNo) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      aadharNo,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

// store.dispatch(createCustomer("Aishwarya J", "12345678"));
// console.log(store.getState());
// store.dispatch(updateName("Deepika"));
// console.log(store.getState());
