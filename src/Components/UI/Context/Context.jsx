import { createContext, useReducer } from "react";
import { toast } from "react-toastify";
export const Cartcontext = createContext();
export const Context = (props) => {
  // const loginReducer = (state, action) => {
  //   switch (action.type) {
  //     case "LOGIN":
  //       return {
  //         ...state,
  //         user: action.payload,
  //         isLoggedIn: true,
  //       };
  //     case "LOGOUT":
  //       return {
  //         ...state,
  //         user: null,
  //         isLoggedIn: false,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const filterAdd = state.filter((item) => action.payload.id === item.id);
        const auth = localStorage.getItem("token");
        if (filterAdd.length > 0) {
          return state;
        } else if (auth !== null) {
          return [...state, action.payload];
        } else {
          toast.error("Login Dahulu");
        }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);

  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
  );
};

// import { createContext, useReducer } from "react";
// import { toast } from "react-toastify";
// export const Cartcontext = createContext();
// export const Context = (props) => {
// const loginReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         user: action.payload,
//         isLoggedIn: true,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         user: null,
//         isLoggedIn: false,
//       };
//     default:
//       return state;
//   }
// };
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "ADD":
//         const filterAdd = state.filter((item) => action.payload.id === item.id);
//         const auth = localStorage.getItem("user");
//         if (filterAdd.length > 0) {
//           return state;
//         } else if (auth !== null) {
//           return [...state, action.payload];
//         } else {
//           toast.error("Login Dahulu");
//         }

//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, []);
//   // const [Loginstate, Logindispatch] = useReducer(loginReducer, []);

//   const info = { state, dispatch };
//   return (
//     <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
//   );
// };

// Context.js
// import { createContext, useReducer } from "react";

// export const CartContext = createContext();

// const initialState = {
//   user: null,
//   isLoggedIn: false,
// };

// const loginReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         user: action.payload,
//         isLoggedIn: true,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         user: null,
//         isLoggedIn: false,
//       };
//     default:
//       return state;
//   }
// };

// const CartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       const filterAdd = state.filter((item) => action.payload.id === item.id);
//       if (filterAdd.length > 0) {
//         return state;
//       } else {
//         return [...state, action.payload];
//       }

//     default:
//       return state;
//   }
// };

// export const ContextProvider = ({ children }) => {
//   const [loginState, loginDispatch] = useReducer(loginReducer, initialState);
//   const [cartState, cartDispatch] = useReducer(CartReducer, initialState);

//   return <CartContext.Provider value={{ loginState, loginDispatch, cartState, cartDispatch }}>{children}</CartContext.Provider>;
// };
