import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import styles from "./Sidebar.module.css";
import { categories } from "../constant/list";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    if (tagName !== "LI") return;

    const category = event.target.innerHTML.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
  };



  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map(item => <li key={item.id} className={item.type.toLowerCase() === query.category ? styles.selected : null}>{item.type}</li>)}
      </ul>
    </div>
  );
}

export default Sidebar;
