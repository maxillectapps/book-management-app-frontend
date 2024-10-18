// import "./App.css";
import "./index.css";
import AddBookForm from "./components/AddBookForm";
import Books from "./components/Books";

function App() {
  return (
    <>
      <div className="App">
        <h1>Book Management System</h1>
        <Books />
        <AddBookForm />
      </div>
    </>
  );
}

export default App;
