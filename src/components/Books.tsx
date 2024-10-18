import axios from "axios";
import { useState, useEffect } from "react";
import { Book } from "../types/Book";
import "../App.css";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full p-15 mt-5">
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

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
                    {book.title}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    {book.author}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300">
                    <button
                      onClick={() => alert(`Delete book with ID: ${book.id}`)}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => alert(`Delete book with ID: ${book.id}`)}
                      style={{ marginLeft: "10px", backgroundColor: "red" }}
                    >
                      Delete
                    </button>
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
