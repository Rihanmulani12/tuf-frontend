import React, { useState, useEffect } from "react";

function SubmissionList() {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSnippets = async () => {
      setLoading(true);
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
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSnippets();
  }, []);

  if (loading) {
    return (
      <div>
        <h2 className="text-xl font-semibold text-blue-600/100 dark:text-blue-500/100">
          " Tab tak ke liye take you forward se sde sheet dekh lo , DSA Lappu sa
          lagne lagega !!"
        </h2>
        <ul className="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
          <li className="flex items-center">
            <svg
              className="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Upload your file to our website
          </li>
          <li className="flex items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            thoda sabar kar lo beta abhi bahut kuch dekhna hai life
          </li>
        </ul>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <div className="pt-10 px-4 md:px-10 pb-5 md:pl-20">
        <h1 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
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

      <div className="border border-gray-300 shadow-md rounded-md overflow-hidden ml-4 mr-4 p-0 pt-0">
        <table className="ml-4 mt-10 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse mt-10 mb-10">
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
    </>
  );
}

export default SubmissionList;
