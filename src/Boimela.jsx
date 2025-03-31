import { useState } from "react";

import BookList from "./BookList"
import Header from "./Header"
import Search from "./Search"

function Boimela() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for books
  const BOOKS = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      featured: false,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      featured: false,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      featured: false,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      featured: false,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      featured: false,
    },
  ];

  return (
    <div className="mx-auto p-8">
      <Header />
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      <BookList searchTerm={searchTerm} books={BOOKS} />
    </div>
  )
}

export default Boimela
