
// Beautiful home page for Bookworm Brain Boost
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="max-w-2xl w-full mx-auto px-8 py-12 bg-white bg-opacity-90 rounded-3xl shadow-xl text-center mt-24">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 text-transparent bg-clip-text">
            📚 Bookworm Brain Boost
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-4">
            Transform book reading and learning — <span className="font-bold text-blue-600">drill down</span> your understanding with mind maps and <span className="font-bold text-purple-600">deep quizzes</span>, all from your own book data!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-4 animate-fade-in">
            <Link
              to="/book"
              className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-xl text-lg font-bold transition hover-scale shadow"
            >
              Get Started
            </Link>
            <Link
              to="/mindmap"
              className="bg-purple-500 hover:bg-purple-600 text-white px-7 py-3 rounded-xl text-lg font-bold transition hover-scale shadow"
            >
              Explore Mind Map (Demo)
            </Link>
            <Link
              to="/quiz"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-7 py-3 rounded-xl text-lg font-bold transition hover-scale shadow"
            >
              Try a Quiz (Demo)
            </Link>
          </div>
        </div>
        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-5 text-blue-700 text-base shadow">
          <h2 className="text-lg mb-2 font-bold">How it works</h2>
          <ol className="list-decimal list-inside text-left space-y-1">
            <li>
              <span className="font-semibold text-blue-800">Upload Your Book:</span> Paste in your book’s text (table of contents + text).
            </li>
            <li>
              <span className="font-semibold text-purple-800">Explore the Mind Map:</span> Drill down through chapters, concepts, and ideas — as deeply as your book requires.
            </li>
            <li>
              <span className="font-semibold text-indigo-800">Quiz Yourself:</span> Master concepts with adaptive, conceptual questions.
            </li>
          </ol>
        </div>
        <p className="text-sm text-gray-500 mt-6">Inspired by NotebookLM, built better for book lovers.</p>
      </div>
    </div>
  );
}
