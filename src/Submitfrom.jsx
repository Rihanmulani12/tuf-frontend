import React, { useState } from "react";
import "./Submit.css";
import { useNavigate } from "react-router-dom";

function SubmitForm() {
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");
  const [stdin, setStdin] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !language || !code) {
      console.error("Missing required fields");
      // You might want to display an error message to the user
      return;
    }

    const formData = {
      username: username,
      language: language,
      stdin: stdin,
      code: code,
    };

    try {
      const response = await fetch(
        "https://tuf-backend-gh8r.onrender.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Submission successful:", data);
      navigate("/page2"); // Redirect to page2 after successful submission
    } catch (error) {
      console.error("Error submitting code snippet:", error);
      // You might want to display an error message to the user
    }
  };

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

      <div className="p-10 pt-15 flex flex-col space-y-4 ml-10 mr-20">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="bg-gray-700 text-white px-3 py-2 rounded-md outline-none h-12 w-full"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <select
                required
                className="bg-gray-700 text-white px-3 py-2 rounded-md outline-none h-12 w-full"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Select a language</option>
                <option value="C">C</option>
                <option value="C++">C++</option>
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div className="bg-gray-700 rounded-md px-3 py-2">
              <textarea
                placeholder="Write your input"
                className="bg-gray-700 text-white outline-none resize-none h-56 w-full"
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="md:h-full">
            <div className="bg-gray-700 rounded-md px-3 py-2">
              <textarea
                placeholder="Write your code"
                className="bg-gray-700 text-gray-300 outline-none resize-none placeholder-placeholder-center h-96 w-full"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              onClick={handleSubmit}
              className="pl-10 pr-10 mb-50 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Submit
            </button>

            <button
              type="button"
              className="mb-50 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Past Code Submission
              <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                2
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SubmitForm;
