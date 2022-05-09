import { useState } from "react";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BooksList/BooksList";
import { nanoid } from 'nanoid';

const App = () => {
  
  const [books, setBooks] = useState([
    {id: 1, title: 'Krzyżacy', author: 'Henryk Sieńkiewicz'},
    {id: 2, title: 'Pan Tadeusz', author: 'Adam Mickiewicz'},
  ])

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const addBook = newBook => {
    setBooks([...books, { id: nanoid(), title: newBook.title, author: newBook.author}]);
  };

  return (
    <div>
      <h1>Books App</h1>
      <BookList books={books} removeBook={removeBook} />
      <BookForm addBook={addBook} />
    </div>
  );
}

export default App;