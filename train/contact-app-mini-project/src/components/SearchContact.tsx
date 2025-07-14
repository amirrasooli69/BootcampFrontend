import styles from './SearchContact.module.css'
function SearchContact({ searchHandler, search, setSearch }) {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <input
                    type="text"
                    name="search"
                    placeholder="Enter Name"
                    value={search}
                    onChange={e => setSearch(e.target.value)} />
                <button onClick={searchHandler}></button>
            </div>
        </div>
    )
}

export default SearchContact
