import styles from './Layout.module.css'

function Layout({children}) {
  return (
<>
<header className={styles.header}>
    <h1>Crypto App</h1>
    <p>Design by <a href="papiloo.ir">Papiloo </a></p>
</header>
{children}
<footer className={styles.footer}>Developer Amir with ❤️</footer>

</>
  )
}

export default Layout
