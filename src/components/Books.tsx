import axios from "axios";
import { useState, useEffect } from "react";
import { Book } from "../types/Book";
import "../App.css";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedAuthor, setEditedAuthor] = useState<string>("");
  const [editedDescription, setEditedDescription] = useState<string>("");
  const [showAddBookModal, setShowAddBookModal] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newAuthor, setNewAuthor] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");


  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get<Book[]>(
        "https://library.thedevinsider.com/books"
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  const deleteBook = async (id: number) => {
    try {
      await axios.delete(`https://library.thedevinsider.com/books/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleEditClick = (book: Book) => {
    setEditingBook(book);
    setEditedTitle(book.title);
    setEditedAuthor(book.author);
    setEditedDescription(book.description);
  };

  const handleEditSave = async () => {
    if (editingBook) {
      try {
        const updatedBook = { ...editingBook, title: editedTitle, author: editedAuthor,description:editedDescription };
        await axios.put(`https://library.thedevinsider.com/books/${editingBook.id}`, updatedBook);
        
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === editingBook.id ? updatedBook : book
          )
        );
        setEditingBook(null);
      } catch (error) {
        console.error("Error updating book", error);
      }
    }
  };

  const handleEditCancel = () => {
    setEditingBook(null);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBookClick = () => {
    setShowAddBookModal(true);
  };

  const handleAddBookSave = async () => {
    try {
      const newBook = {
        title: newTitle,
        author: newAuthor,
        description: newDescription,
      };
      const response = await axios.post(
        `https://library.thedevinsider.com/books`,
        newBook
      );
      setBooks((prevBooks) => [...prevBooks, response.data]);
      setShowAddBookModal(false);
      setNewTitle("");
      setNewAuthor("");
      setNewDescription("");
    } catch (error) {
      console.error("Error adding new book", error);
    }
  };

  const handleAddBookCancel = () => {
    setShowAddBookModal(false);
    setNewTitle("");
    setNewAuthor("");
    setNewDescription("");
  };


  return (
    <div className="w-full mt-5">
    
    <div className="flex justify-between items-center mb-5">
    <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

    <button onClick={handleAddBookClick} className="add-book-button">
        Add New Book
      </button>
    </div>

    {showAddBookModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Book</h2>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Author"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              className="input-field"
            />
            <textarea
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="input-field"
            />
            <div className="modal-actions">
              <button onClick={handleAddBookSave} className="save-button">
                Save
              </button>
              <button onClick={handleAddBookCancel} className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white box-border border border-black-800">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left border-b border-gray-300">
                ID
              </th>
              <th className="py-3 px-4 text-left border-b border-gray-300">
                Title
              </th>
              <th className="py-3 px-4 text-left border-b border-gray-300">
                Author
              </th>
              <th className="py-3 px-4 text-left border-b border-gray-300">
                Description
              </th>
              <th className="py-3 px-4 text-left border-b border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr key={book.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-b border-gray-300">
                    {book.id}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {editingBook?.id === book.id ? (
                      <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                      />
                    ) : (
                      book.title
                    )}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {editingBook?.id === book.id ? (
                      <input
                        type="text"
                        value={editedAuthor}
                        onChange={(e) => setEditedAuthor(e.target.value)}
                      />
                    ) : (
                      book.author
                    )}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {editingBook?.id === book.id ? (
                      <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                      />
                    ) : (
                      book.description
                    )}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {editingBook?.id === book.id ? (
                      <>
                        <button onClick={handleEditSave} style={{ marginRight: "10px" }}>
                          Save
                        </button>
                        <button onClick={handleEditCancel}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditClick(book)}
                          style={{ marginRight: "10px" }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteBook(book.id)}
                          style={{ backgroundColor: "red" }}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No books found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;