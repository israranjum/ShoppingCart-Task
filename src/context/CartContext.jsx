import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);


export const useCart = ()=>{
    return useContext(CartContext)
}


// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  return <CartContext.Provider value={{item, setItem}}>{children}</CartContext.Provider>;
};
