
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const mockQuestions = [
  {
    question: "What is deep work?",
    options: [
      "Checking email regularly.",
      "Concentrated, undistracted work on cognitively demanding tasks.",
      "Attending meetings.",
      "Taking frequent breaks.",
    ],
    answer: 1,
    explanation: "Deep work is focused, undistracted effort on demanding tasks.",
  },
  {
    question: "Why is minimizing distractions important for deep work?",
    options: [
      "It makes work more boring.",
      "It allows more time for social media.",
      "It helps maintain a deep, productive state.",
      "It helps you multitask.",
    ],
    answer: 2,
    explanation:
      "Reducing distractions helps you focus deeply and increases productivity.",
  },
];

export function Quiz({ questions = mockQuestions }: { questions?: typeof mockQuestions }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  if (step >= questions.length) {
    return (
      <div className="max-w-xl mx-auto mt-12 bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
        <div className="text-2xl font-bold mb-2">Quiz Complete!</div>
        <button
          className="mt-4 px-5 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => {
            setStep(0);
            setSelected(null);
            setShowAnswer(false);
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  const { question, options, answer, explanation } = questions[step];

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white rounded-xl shadow-md p-8">
      <div className="flex items-center gap-2 mb-4">
        <ArrowRight size={20} className="text-blue-400" />
        <span className="font-semibold text-lg">
          Quiz {step + 1} of {questions.length}
        </span>
      </div>
      <div className="text-xl mb-4 font-bold">{question}</div>
      <div className="flex flex-col gap-3 mb-6">
        {options.map((opt, i) => (
          <button
            key={opt}
            className={`text-left px-4 py-2 rounded border 
              ${selected === i
                ? i === answer
                  ? "bg-green-100 border-green-400"
                  : "bg-red-100 border-red-400"
                : "border-gray-300 hover:bg-blue-50"
              }
            `}
            onClick={() => {
              if (selected === null) {
                setSelected(i);
                setShowAnswer(true);
              }
            }}
            disabled={showAnswer}
          >
            {opt}
          </button>
        ))}
      </div>
      {showAnswer && (
        <div className="mb-4">
          {selected === answer ? (
            <div className="text-green-600 font-semibold">Correct!</div>
          ) : (
            <div className="text-red-600 font-semibold">Incorrect.</div>
          )}
          <div className="italic text-gray-700 mt-2">{explanation}</div>
        </div>
      )}
      <div className="flex justify-end">
        {showAnswer && (
          <button
            className="mt-2 px-5 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => {
              setStep((s) => s + 1);
              setSelected(null);
              setShowAnswer(false);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
