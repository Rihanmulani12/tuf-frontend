import React from "react";
import { useState, useEffect } from "react";
import UsernameSearch from "./UsernameSearch";

function SubmissionList() {
  const [snippets, setSnippets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // Function to handle page change
  const handlePageChange = async (page) => {
    setCurrentPage(page);
    try {
      const response = await fetch(
        `https://tuf-backend-gh8r.onrender.com/snippets?page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSnippets(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async (searchQuery) => {
    // Implement logic to fetch data based on search query
    console.log("Search query:", searchQuery);
  };

  // Function to render pagination links
  const renderPaginationLinks = () => {
    const paginationLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationLinks.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
              currentPage === i
                ? "text-blue-600 bg-blue-50"
                : "hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            {i}
          </button>
        </li>
      );
    }
    return paginationLinks;
  };

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await fetch(
          "https://tuf-backend-gh8r.onrender.com/snippets"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSnippets(data);
      } catch (error) {
        console.error("Error fetching code snippets:", error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <>
      <div className="pt-10 pl-10 pb-5">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            TUF
          </span>{" "}
          code Snipper.
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          "Don’t cry in a corner, if you want something, mehnat kar, best ban,
          aur cheen le" ~ Striver
        </p>
      </div>
      <div className="border border-gray-300 shadow-md rounded-md overflow-hidden ml-20 mr-20 p-0 pt-0">
        <table className="ml-20 mt-10 w-10/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse mt-10 mb-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-300">
            <tr>
              <th className="px-6 py-3 border-r border-gray-300">Username</th>
              <th className="px-6 py-3 border-r border-gray-300">Language</th>
              <th className="px-6 py-3 border-r border-gray-300">stdin</th>
              <th className="px-6 py-3 border-r border-gray-300">sourceCode</th>
              <th className="px-6 py-3">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {snippets.map((snippet, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 border-b border-gray-300">
                  {snippet.username}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {snippet.language}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <textarea
                    className="w-full h-20 px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    readOnly
                    value={snippet.stdin}
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  <textarea
                    className="w-full h-20 px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    readOnly
                    value={snippet.code}
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {snippet.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ;
      <div>
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm ml-20">
            <li>
              <button
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                }
                disabled={currentPage === 1}
                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                Previous
              </button>
            </li>
            {renderPaginationLinks()}
            <li>
              <button
                onClick={() =>
                  handlePageChange(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>


      <div className="mb-5 mw-2 ml-10 p-0 mt-10">
        {/* Render the UsernameSearch component */}
        <UsernameSearch onSearch={handleSearch} />
      </div>
      
    </>
  );
}

export default SubmissionList;
