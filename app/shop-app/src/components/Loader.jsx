
import { GridLoader } from 'react-spinners'
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <GridLoader color='#fe5d42' size={25} speedMultiplier={1}/>
    </div>
  )
}

export default Loader
