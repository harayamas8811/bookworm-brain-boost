
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

type MindMapNode = {
  id: string;
  title: string;
  content?: string;
  children?: MindMapNode[];
};

const sampleBook: MindMapNode = {
  id: "root",
  title: "Understanding Deep Work",
  children: [
    {
      id: "part1",
      title: "Introduction",
      children: [
        {
          id: "what-is",
          title: "What is Deep Work?",
          content:
            "Deep work refers to professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to the limit.",
        },
        {
          id: "why-important",
          title: "Why Deep Work is Important",
          content:
            "Deep Work is valuable, rare, and meaningful. Professionals who cultivate this skill thrive.",
        },
      ],
    },
    {
      id: "part2",
      title: "Rules for Deep Work",
      children: [
        {
          id: "rule1",
          title: "Work Deeply",
          children: [
            {
              id: "rituals",
              title: "Ritualize",
              content: "Adopt rituals to help you enter and maintain deep work states.",
            },
            {
              id: "distractions",
              title: "Minimize Distractions",
              content: "Reduce or eliminate distractions to maximize deep work sessions.",
            },
          ],
        },
        {
          id: "rule2",
          title: "Embrace Boredom",
          content:
            "Take breaks from focus — your ability to concentrate is like a muscle that improves with use and rest.",
        },
      ],
    },
  ],
};

function MindMapNodeView({
  node,
  level = 0,
  activeId,
  setActiveId,
}: {
  node: MindMapNode;
  level?: number;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  const [expanded, setExpanded] = useState(level === 0);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={`relative pl-${level * 6} mb-2`}>
      <div
        className={`flex items-center gap-2 cursor-pointer hover-scale transition rounded p-2 ${
          activeId === node.id ? "bg-blue-50 ring-2 ring-blue-300" : ""
        }`}
        onClick={() => setActiveId(node.id)}
      >
        {hasChildren ? (
          <button
            className="p-0 m-0 bg-transparent border-none outline-none"
            onClick={e => {
              e.stopPropagation();
              setExpanded((ex) => !ex);
            }}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            {expanded ? (
              <ArrowDown size={16} strokeWidth={2} />
            ) : (
              <ArrowRight size={16} strokeWidth={2} />
            )}
          </button>
        ) : (
          <span className="block w-4" />
        )}
        <span className={`font-semibold ${level === 0 ? "text-lg" : ""}`}>
          {node.title}
        </span>
      </div>
      {expanded && (
        <div className="animate-fade-in ml-6">
          {node.content && (
            <div className="text-gray-600 italic text-sm mb-1">{node.content}</div>
          )}
          {hasChildren &&
            node.children!.map((child) => (
              <MindMapNodeView
                key={child.id}
                node={child}
                level={level + 1}
                activeId={activeId}
                setActiveId={setActiveId}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export function MindMap({ bookData }: { bookData?: MindMapNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const data = bookData || sampleBook;
  return (
    <div className="w-full max-w-2xl mx-auto my-8 bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <ArrowRight size={24} className="text-blue-400" />
        Book Mind Map
      </h2>
      <div>
        <MindMapNodeView node={data} level={0} activeId={activeId} setActiveId={setActiveId} />
      </div>
    </div>
  );
}

export default MindMap;
