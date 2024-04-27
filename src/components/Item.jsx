import { useCart } from "../context/CartContext";
// eslint-disable-next-line react/prop-types
const Item = ({ name, price }) => {
  const {Item, setItem} = useCart() 
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid black",
        margin: "10px",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      <h3>{name}</h3>
      <h3>Price: ${price}</h3>
      <button
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "seaGreen",
          borderRadius: "5px",
          color: "white",
          border: "none",
          margin: "10px",
          cursor: "pointer",
        }}
        onClick={() => setItem([...Item, { name:name, price:price } ])}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
