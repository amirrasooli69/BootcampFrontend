import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Papiloo Car</h2>
          <p>Choose and Buy Your Car</p>
        </Link>
      </header>
      <div className={styles.container}>

      {children}
      </div>
      <footer className={styles.footer}>
        Develop with <a href="https://papiloo.ir" target="_blank">Papiloo</a> &copy;
      </footer>
    </>
  );
}

export default Layout;
