import { Link } from "react-router-dom";
import { shortenTitle } from "../helper/helper";
import styles from "./Card.module.css";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";

function Card({ data }) {
  const { id, image, price, title } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenTitle(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
