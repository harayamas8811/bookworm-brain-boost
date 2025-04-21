
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BookUpload() {
  const [bookText, setBookText] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!bookText.trim()) {
      setError("Please paste book content!");
      return;
    }
    // In real App, persist user's book text or parse it to generate Mind Map.
    // For now, navigate to mindmap page. (Mock)
    navigate("/mindmap");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <ArrowRight className="text-blue-400" /> Upload Book Text
        </h2>
        <p className="mb-4 text-gray-600">
          Paste the text content of your book below. (Table of contents + content recommended.)
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            required
            className="w-full rounded border border-gray-300 p-3 h-40 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Paste your book text here..."
            value={bookText}
            onChange={e => setBookText(e.target.value)}
            spellCheck={false}
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
          >
            Continue to Mind Map
          </button>
        </form>
      </div>
    </div>
  );
}
