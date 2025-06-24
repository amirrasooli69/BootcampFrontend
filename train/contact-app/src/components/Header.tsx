import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://papiloo.ir">Papiloo</a> | Web Development Company
        </p>
    </div>
  )
}

export default Header