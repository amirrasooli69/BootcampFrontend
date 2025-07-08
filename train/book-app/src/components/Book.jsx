import { useState } from "react";
import { books as BookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import styles from "./books.module.css";
import SearchBox from "./SearchBox";

function Book() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState(BookData);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikeList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikeList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = BookData.filter(
        (book) => book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(BookData);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        <div>
          {!!liked.length && (
            <div className={styles.favorite}>
              <h4>Favorite</h4>
              {liked.map((book) => (
                <SideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Book;
