import BasketSidebar from "../components/BasketSidebar";
import BasketCard from "../components/BasletCard";
import { useCart } from "../context/CartContext";

import styles from "./Checkout.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return <h1 className={styles.container}>Empty</h1>;
  }

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
