import {useState} from "react";

function Item({ name, category }) {
  const [cartItem, setCartItem] = useState("")
  
  function handleClick(){
    cartItem === "" ? setCartItem("in-cart") : setCartItem("")
  }
  
  return (
    <li className={cartItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartItem === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
