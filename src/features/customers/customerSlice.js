import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  aadharNo: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  // one reducer for each action
  reducers: {
    //requires 2 arg, need to prepare
    createCustomer: {
      prepare(fullName, aadharNo) {
        return {
          payload: { fullName, aadharNo, createdAt: new Date().toISOString() },
        };
      },

      reducer(state, action) {
        // mutate state
        state.fullName = action.payload.fullName;
        state.aadharNo = action.payload.aadharNo;
        state.createdAt = action.payload.createdAt;
      },
    },

    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName, payLoan } = customerSlice.actions;
export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         aadharNo: action.payload.aadharNo,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// //action creators for customer
// export function createCustomer(fullName, aadharNo) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       aadharNo,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
