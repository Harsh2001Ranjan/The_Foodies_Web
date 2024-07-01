// import { createReducer } from "@reduxjs/toolkit";

// export const authReducer = createReducer(
//   {},
//   {
//     loadUserRequest: (state) => {
//       state.loading = true;
//     },
//     loadUserSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     loadUserFail: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },

//     // logoutRequest: (state) => {
//     //   state.loading = true;
//     // },
//     // logoutSuccess: (state, action) => {
//     //   state.loading = false;
//     //   state.isAuthenticated = false;
//     //   state.message = action.payload;
//     //   state.user = null;
//     // },
//     // logoutFail: (state, action) => {
//     //   state.loading = false;
//     //   state.isAuthenticated = true;
//     //   state.error = action.payload;
//     // },
//     clearError: (state) => {
//       state.error = null;
//     },
//     clearMessage: (state) => {
//       state.message = null;
//     },
//   }
// );

///////////////////
/////// I have changed the code
////////////////
import { createReducer } from "@reduxjs/toolkit";

// Initial state definition
const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  message: null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("loadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("loadUserSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("loadUserFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    // Uncomment and define these if you need them
    // .addCase('logoutRequest', (state) => {
    //   state.loading = true;
    // })
    // .addCase('logoutSuccess', (state, action) => {
    //   state.loading = false;
    //   state.isAuthenticated = false;
    //   state.message = action.payload;
    //   state.user = null;
    // })
    // .addCase('logoutFail', (state, action) => {
    //   state.loading = false;
    //   state.isAuthenticated = true;
    //   state.error = action.payload;
    // })
    .addCase("clearError", (state) => {
      state.error = null;
    })
    .addCase("clearMessage", (state) => {
      state.message = null;
    });
});
