import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { MutatingDots } from "react-loader-spinner";
import styles from "./TableCoins.module.css";
import { marketChart } from "../../services/cryptoApi";

function TableCoins({ coins, isLoading, currency, setChart }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <MutatingDots color="#3874ff" secondaryColor="#3874ff" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                currency={currency}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;

const TableRow = ({
  coin: {
    id,
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  },
  currency,
  setChart,
}) => {
  const clickHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      // console.log(json);
      setChart(json)
    } catch (error) {
      setChart(null)
    }
  };
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={clickHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency == "usd" ? "$" : "€"} {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>${total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt="" />
      </td>
    </tr>
  );
};
