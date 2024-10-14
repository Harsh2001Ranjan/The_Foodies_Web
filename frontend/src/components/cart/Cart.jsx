// import React from "react";
// // import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import burger1 from "../../assets/burger1.png";
// // import burger2 from "../../assets/burger2.png";
// // import burger3 from "../../assets/burger3.png";

// // const CartItem = ({ value, title, img, increment, decrement }) => (
// //   <div className="cartItem">
// //     <div>
// //       <h4>{title}</h4>
// //       <img src={img} alt="Item" />
// //     </div>

// //     <div>
// //       <button onClick={decrement}>-</button>
// //       <input type="number" readOnly value={value} />
// //       <button onClick={increment}>+</button>
// //     </div>
// //   </div>
// // );

// // const Cart = () => {
// //   const {
// //     cartItems: {
// //       cheeseBurger: { quantity: cheeseBurger },
// //       vegCheeseBurger: { quantity: vegCheeseBurger },
// //       burgerWithFries: { quantity: burgerWithFries },
// //     },
// //     subTotal,
// //     tax,
// //     shippingCharges,
// //     total,
// //   } = useSelector((state) => state.cart);
// //   const dispatch = useDispatch();

// //   const increment = (item) => {
// //     switch (item) {
// //       case 1:
// //         dispatch({ type: "cheeseBurgerIncrement" });
// //         dispatch({ type: "calculatePrice" });
// //         break;
// //       case 2:
// //         dispatch({ type: "vegCheeseBurgerIncrement" });
// //         dispatch({ type: "calculatePrice" });
// //         break;
// //       case 3:
// //         dispatch({ type: "burgerWithFriesIncrement" });
// //         dispatch({ type: "calculatePrice" });
// //         break;

// //       default:
// //         dispatch({ type: "cheeseBurgerIncrement" });
// //         dispatch({ type: "calculatePrice" });
// //         break;
// //     }
// //   };

// //   const decrement = (item) => {
// //     switch (item) {
// //       case 1:
// //         if (cheeseBurger === 0) break;
// //         dispatch({ type: "cheeseBurgerDecrement" });
// //         dispatch({ type: "calculatePrice" });
// //         break;
// //       case 2:
// //         if (vegCheeseBurger === 0) break;
// //         dispatch({ type: "vegCheeseBurgerDecrement" });
// //         dispatch({ type: "calculatePrice" });
// //         break;
// //       case 3:
// //         if (burgerWithFries === 0) break;
// //         dispatch({ type: "burgerWithFriesDecrement" });
// //         dispatch({ type: "calculatePrice" });
// //         break;

// //       default:
// //         if (cheeseBurger === 0) break;
// //         dispatch({ type: "cheeseBurgerDecrement" });
// //         dispatch({ type: "calculatePrice" });
// //         break;
// //     }
// //   };

// //   return (
// //     <section className="cart">
// //       <main>
// //         <CartItem
// //           title={"Cheese Burger"}
// //           img={burger1}
// //           value={cheeseBurger}
// //           increment={() => increment(1)}
// //           decrement={() => decrement(1)}
// //         />
// //         <CartItem
// //           title={"Veg Cheese Burger"}
// //           img={burger2}
// //           value={vegCheeseBurger}
// //           increment={() => increment(2)}
// //           decrement={() => decrement(2)}
// //         />
// //         <CartItem
// //           title={"Cheese Burger with French Fries"}
// //           img={burger3}
// //           value={burgerWithFries}
// //           increment={() => increment(3)}
// //           decrement={() => decrement(3)}
// //         />

// //         <article>
// //           <div>
// //             <h4>Sub Total</h4>
// //             <p>₹{subTotal}</p>
// //           </div>
// //           <div>
// //             <h4>Tax</h4>
// //             <p>₹{tax}</p>
// //           </div>
// //           <div>
// //             <h4>Shipping Charges</h4>
// //             <p>₹{shippingCharges}</p>
// //           </div>{" "}
// //           <div>
// //             <h4>Total</h4>
// //             <p>₹{total}</p>
// //           </div>
// //           <Link to="/shipping">Checkout</Link>
// //         </article>
// //       </main>
// //     </section>
// //   );
// // };

// // export default Cart;
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////new code according to chat gpt to support new version of redux
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   cheeseBurgerIncrement,
//   vegCheeseBurgerIncrement,
//   burgerWithFriesIncrement,
//   cheeseBurgerDecrement,
//   vegCheeseBurgerDecrement,
//   burgerWithFriesDecrement,
//   calculatePrice,
// } from "../../redux/reducers/cartReducer";
// import burger1 from "../../assets/burger1.png";
// import burger2 from "../../assets/burger2.png";
// import burger3 from "../../assets/burger3.png";

// const CartItem = ({ value, title, img, increment, decrement }) => (
//   <div className="cartItem">
//     <div>
//       <h4>{title}</h4>
//       <img src={img} alt="Item" />
//     </div>

//     <div>
//       <button onClick={decrement}>-</button>
//       <input type="number" readOnly value={value} />
//       <button onClick={increment}>+</button>
//     </div>
//   </div>
// );

// const Cart = () => {
//   const {
//     cartItems: {
//       cheeseBurger: { quantity: cheeseBurger },
//       vegCheeseBurger: { quantity: vegCheeseBurger },
//       burgerWithFries: { quantity: burgerWithFries },
//     },
//     subTotal,
//     tax,
//     shippingCharges,
//     total,
//   } = useSelector((state) => state.cart);
//   //////////////////////////////////////adding a line here 1:45////////////////////////////////////////////
//   const { cartItems: orderItems } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const increment = (item) => {
//     switch (item) {
//       case 1:
//         dispatch(cheeseBurgerIncrement());
//         break;
//       case 2:
//         dispatch(vegCheeseBurgerIncrement());
//         break;
//       case 3:
//         dispatch(burgerWithFriesIncrement());
//         break;
//       default:
//         dispatch(cheeseBurgerIncrement());
//     }
//     dispatch(calculatePrice()); // Calculate the price after increment
//   };

//   const decrement = (item) => {
//     switch (item) {
//       case 1:
//         if (cheeseBurger === 0) return;
//         dispatch(cheeseBurgerDecrement());
//         break;
//       case 2:
//         if (vegCheeseBurger === 0) return;
//         dispatch(vegCheeseBurgerDecrement());
//         break;
//       case 3:
//         if (burgerWithFries === 0) return;
//         dispatch(burgerWithFriesDecrement());
//         break;
//       default:
//         if (cheeseBurger === 0) return;
//         dispatch(cheeseBurgerDecrement());
//     }
//     dispatch(calculatePrice()); // Calculate the price after decrement
//   };
//   ////////////////////////////////////////////////////added 1:46
//   useEffect(() => {
//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify({ cheeseBurger, vegCheeseBurger, burgerWithFries })
//     );
//     localStorage.setItem(
//       "cartPrices",
//       JSON.stringify({ subTotal, tax, shippingCharges, total })
//     );
//   }, [
//     cheeseBurger,
//     vegCheeseBurger,
//     burgerWithFries,
//     subTotal,
//     tax,
//     shippingCharges,
//     total,
//   ]);
//   /////////////////////////////////////////
//   return (
//     <section className="cart">
//       <main>
//         <CartItem
//           title={"Cheese Burger"}
//           img={burger1}
//           value={cheeseBurger}
//           increment={() => increment(1)}
//           decrement={() => decrement(1)}
//         />
//         <CartItem
//           title={"Veg Cheese Burger"}
//           img={burger2}
//           value={vegCheeseBurger}
//           increment={() => increment(2)}
//           decrement={() => decrement(2)}
//         />
//         <CartItem
//           title={"Cheese Burger with French Fries"}
//           img={burger3}
//           value={burgerWithFries}
//           increment={() => increment(3)}
//           decrement={() => decrement(3)}
//         />

//         <article>
//           <div>
//             <h4>Sub Total</h4>
//             <p>₹{subTotal}</p>
//           </div>
//           <div>
//             <h4>Tax</h4>
//             <p>₹{tax}</p>
//           </div>
//           <div>
//             <h4>Shipping Charges</h4>
//             <p>₹{shippingCharges}</p>
//           </div>
//           <div>
//             <h4>Total</h4>
//             <p>₹{total}</p>
//           </div>
//           <Link to="/shipping">Checkout</Link>
//         </article>
//       </main>
//     </section>
//   );
// };

// export default Cart;

/////////////////////////////////////////changed code is below
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cheeseBurgerIncrement,
  vegCheeseBurgerIncrement,
  burgerWithFriesIncrement,
  cheeseBurgerDecrement,
  vegCheeseBurgerDecrement,
  burgerWithFriesDecrement,
  calculatePrice,
} from "../../redux/reducers/cartReducer";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const {
    cartItems: {
      cheeseBurger: { quantity: cheeseBurger },
      vegCheeseBurger: { quantity: vegCheeseBurger },
      burgerWithFries: { quantity: burgerWithFries },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const burgerActions = {
    1: {
      increment: cheeseBurgerIncrement,
      decrement: cheeseBurgerDecrement,
    },
    2: {
      increment: vegCheeseBurgerIncrement,
      decrement: vegCheeseBurgerDecrement,
    },
    3: {
      increment: burgerWithFriesIncrement,
      decrement: burgerWithFriesDecrement,
    },
  };

  const increment = (item) => {
    dispatch(burgerActions[item].increment());
    dispatch(calculatePrice());
  };

  const decrement = (item) => {
    const currentQuantity =
      item === 1
        ? cheeseBurger
        : item === 2
        ? vegCheeseBurger
        : burgerWithFries;
    if (currentQuantity === 0) return;
    dispatch(burgerActions[item].decrement());
    dispatch(calculatePrice());
  };

  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify({ cheeseBurger, vegCheeseBurger, burgerWithFries })
    );
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({ subTotal, tax, shippingCharges, total })
    );
  }, [
    cheeseBurger,
    vegCheeseBurger,
    burgerWithFries,
    subTotal,
    tax,
    shippingCharges,
    total,
  ]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={cheeseBurger}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={vegCheeseBurger}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={burgerWithFries}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
