import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const imgUrls = [
  "https://images.unsplash.com/photo-1707307006036-22663ea0c88d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk2NQ&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1707760509644-dbcbbea6ef53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk2NQ&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1706211306706-8f36d91c8379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk2Ng&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1704749208961-c18145e82919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk2Ng&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1706606999710-72658165a73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk2Nw&ixlib=rb-4.0.3&q=80&w=1080",
  "https://plus.unsplash.com/premium_photo-1664194584385-b88ad03ee4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk2OA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1705917635809-a53e2ce12f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk2OA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://plus.unsplash.com/premium_photo-1707097186631-741cf74a7bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk2OQ&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1706931723349-3cd3ce9b0e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk2OQ&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1697450267130-81c01e83b520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1705917676092-72ae4a46cab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1704207525603-9961bd5281e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1706526785740-585c21369538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3MQ&ixlib=rb-4.0.3&q=80&w=1080",
  "https://plus.unsplash.com/premium_photo-1706552627475-2617a0495e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3Mg&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1705651460814-abf3af6eefee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3Mw&ixlib=rb-4.0.3&q=80&w=1080",
  "https://plus.unsplash.com/premium_photo-1707674002376-a736b180986d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3Mw&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1706390120538-849ba265d3c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3NA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1698357877700-034b990b7f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3NA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://plus.unsplash.com/premium_photo-1671578325122-9d82eae07a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1705959708017-fa4400b1c8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODI0Mjk3NQ&ixlib=rb-4.0.3&q=80&w=1080"
]

const Context = ({ children }) => {
  const products = [...Array(20)].map((_,idx) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: imgUrls[idx] ,
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
