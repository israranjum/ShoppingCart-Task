import Item from "./components/Item";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div style={{display:"flex",  justifyContent: "space-between"}}>
       <div style={{display:"flex",  justifyContent: "space-between", flexWrap: "wrap"}}>
      <Item name="T-shirt" price="20"/>
      <Item name="T-shirt 2" price="22"/>
      <Item name="T-shirt 3" price="23"/>
      <Item name="T-shirt 4"  price="26"/>
      <Item name="T-shirt 5" price="12"/>
      <Item name="T-shirt 6" price="10"/>
 
    </div>
    <div>
      <Cart />
    </div>
    </div>
   
  );
};

export default App;
