import { MdDeleteOutline } from "react-icons/md";
import { shortenTitle } from "../helper/helper";

import styels from "./BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
  const { image, title, price, quantity } = data;
  return (
    <div className={styels.card}>
      <img src={image} alt={title} />
      <p>{shortenTitle(title)}</p>
      <p>{price} $</p>
      <div className={styels.actions}>
        {quantity == 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
