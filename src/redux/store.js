import { createStore } from 'redux';
import shortid from 'shortid';


// const removeBook = bookId => {
//   setBooks(books.filter(book => book.id !== bookId));
// };

// const addBook = newBook => {
//   setBooks([...books, { id: nanoid(), title: newBook.title, author: newBook.author }]);
// };


const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      return { ...state, books: state.books.filter(book => book.id !== action.payload) } 
    case 'ADD_BOOK':
      return { ...state, books: [...state.books, { id: shortid(), ...action.payload } ] } 
    default:
      return state;
  }
}

const initialState = {
  books: [
    { id: 1, title: 'Krzyżacy', author: 'Henryk Sieńkiewicz' },
    { id: 2, title: 'Pan Tadeusz', author: 'Adam Mickiewicz' },
  ]
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;