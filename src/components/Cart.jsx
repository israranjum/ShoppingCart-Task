import { useCart } from "../context/CartContext";
const Cart = () => {
  const {Item, setItem} = useCart() 

  const total = Item.reduce((a, b)=>a+b.price,0);
  return (
    <div>
      <h2>Cart</h2>
      {
        Item.length === 0 ?(
          <p>Cart Is Empty</p>
        ):(
          Item.map((item,index)=> <Item key={index} {...item}/>)
        )
      }
      
      {/* {
          Item.map((item,index)=> <li key={index}>{item.name}</li>)

      } */}
      <h4>Total Amount: $ {total}</h4>
      <button>Checkout</button>
      <button>Clear</button>
    </div>
  );
};

export default Cart;
