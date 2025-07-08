import { MdOutlineSearch } from "react-icons/md";
import styles from './SearchBox.module.css'

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Title"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        value={search}
      />
      <button onClick={searchHandler}>
        <MdOutlineSearch />
      </button>
    </div>
  );
}

export default SearchBox;
