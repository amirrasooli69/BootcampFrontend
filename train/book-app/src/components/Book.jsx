import {books} from '../constants/mockData'
import BookCard from './BookCard'

function Book() {

  return (
    <>
    {books.map(book => <BookCard key={book.id} data={book}/>)}
    </>
  )
}

export default Book
