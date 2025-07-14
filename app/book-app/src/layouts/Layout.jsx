import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Book App</h1>
        <p>
            <a href="papiloo.ir">Papiloo</a> | Product and Design Application
        </p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Develop by Amir ❤️</p>
    </footer>
    </>
  )
}

export default Layout
