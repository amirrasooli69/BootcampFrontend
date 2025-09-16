import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";

function SearchBar() {
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const router = useRouter()
    const searchHandler = () => {
        if(min && max){
            router.push(`filter/${min}/${max}`)
        } else {
            alert("please Inter price min and max")
        }
    }

  return (
    <div className={styles.container}>
      <div>
        <input type="text" placeholder="Inter min price" onChange={ e => setMin(e.target.value)}/>
        <input type="text" placeholder="Inter max price" onChange={e => setMax(e.target.value)}/>
      </div>
        <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
