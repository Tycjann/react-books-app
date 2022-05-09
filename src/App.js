import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BooksList/BooksList";

const App = () => {

  return (
    <div>
      <h1>Books App</h1>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;