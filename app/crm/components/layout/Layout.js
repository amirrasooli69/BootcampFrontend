import Link from "next/link";

function Layout({children}) {
    return (
        <>
            <header className="header">
                <h2>Papiloo CRM</h2>
                <Link href="/add-customer">Add Customer</Link>
            </header>
            <div className="main">{children}</div>
            <footer className="footer">
                <a href="https://papiloo.ir" target="_blank" rel="noreferrer">Papiloo</a>{" "}
                Develop papiloo | CRM project &copy;
            </footer>
        </>
    );
}

export default Layout;