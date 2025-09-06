import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbCheckupList } from "react-icons/tb";

import styles from './BasketSidebar.module.css'
function BasketSidebar({ state, clickHandler }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbCheckupList />
        <p>Total:</p>
        <span>{state.total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>

      </div>
      <div>
        <BsPatchCheck />
        <p>status:</p>
        <span>{!state.checkout && "Pending..."}</span>

      </div>
      <button onClick={()=> clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
}

export default BasketSidebar;
