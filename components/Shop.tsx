"use client";

import { useState, useEffect } from "react";
import { popularBooks, recentlyBooks } from "../constants/books";
import BookList from "../components/BookList";

const LibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  const allBooks = [...popularBooks, ...recentlyBooks].map((book) => ({
    ...book,
    id: book.id.toString(),
  }));
  const categories = ["All", ...new Set(allBooks.map((book) => book.kategori))];
  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch = book.judulBuku
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.kategori === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (!isClient) return null;

  return (
    <div className="px-8 sm:px-12 md:px-24 mx-auto pt-32 pb-16">
      <div className="text-center md:w-3/4 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Explore the <br /> DecentraRead Library
        </h1>
        <p className="md:text-xl">
          Explore a wide selection of books directly from authors worldwide.
          Enjoy secure, transparent transactions powered by Web3, and support
          your favorite creators without intermediaries.
        </p>
      </div>

      {/* Filter dan Pencarian */}
      <div className="mt-8 rounded-full">
        <div className="flex md:justify-between justify-center items-center gap-4 bg-black px-4 py-6 sm:px-8 sm:py-3 rounded-full">
          <h1 className="text-white font-bold  text-2xl hidden lg:block">
            Search Result
          </h1>
          <div className="flex flex-col justify-center sm:flex-row items-center gap-4">
            <div className="mb-4 sm:mb-0">
              <label
                htmlFor="category"
                className="text-white text-sm hidden sm:inline-block"
              >
                Filter by Category:
              </label>
              <select
                id="category"
                className="text-sm outline-none bg-black text-white cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="text-sm">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            
            <div className="flex items-center bg-[#332C2C] px-3 md:w-72 py-1 text-white rounded-full">
              <input
                type="text"
                placeholder="Search Your Books"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`text-sm ml-2 bg-[#332C2C]  outline-none w-full`}
              />
              <button
                className="p-2 bg-white w-fit rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar Buku */}
      <h2 className="text-xl font-bold mt-6">
        {selectedCategory === "All" ? "All Books" : selectedCategory}
      </h2>
      {filteredBooks.length > 0 ? (
        <BookList books={filteredBooks} />
      ) : (
        <p className="text-gray-500 mt-4">No books found in this category.</p>
      )}
    </div>
  );
};

export default LibraryPage;
