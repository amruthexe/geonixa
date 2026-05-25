"use client";

import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Trash2,
  ExternalLink,
  GraduationCap,
  Code,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";

interface Course {
  id: string;
  name: string;
  dur: string;
  price: string;
  category: "Career" | "Academic" | "Technical";
  desc: string;
}

interface Message {
  from: "bot" | "user";
  text: string;
  time: string;
  suggestions?: string[];
  courseCard?: Course;
  courseList?: Course[];
}

const COURSES: Course[] = [
  {
    id: "mern",
    name: "MERN Stack",
    dur: "6 Months",
    price: "12,999",
    category: "Technical",
    desc: "MongoDB, Express, React, Node.js",
  },
  {
    id: "python",
    name: "Python & AI",
    dur: "4 Months",
    price: "8,999",
    category: "Technical",
    desc: "Python, AI & ML",
  },
  {
    id: "career",
    name: "Career Pro",
    dur: "6 Months",
    price: "30,000",
    category: "Career",
    desc: "Placement assistance + soft skills",
  },
];

export default function ResponsiveChatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo({
        top: bodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [msgs, isTyping]);

  const addBotMessage = (
    text: string,
    suggestions: string[] = [],
    courseList?: Course[]
  ) => {
    setMsgs((prev) => [
      ...prev,
      {
        from: "bot",
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        suggestions,
        courseList,
      },
    ]);

    setSuggestions(suggestions);
  };

  const startChat = () => {
    if (msgs.length > 0) return;

    setIsTyping(true);

    setTimeout(() => {
      addBotMessage(
        "Welcome to Geonixa 🚀\nHow can I help you today?",
        ["View Courses", "Placement Support", "Talk to Advisor"]
      );

      setIsTyping(false);
    }, 700);
  };

  useEffect(() => {
    if (open) startChat();
  }, [open]);

  const handleSend = (value?: string) => {
    const text = value || input;

    if (!text.trim()) return;

    setMsgs((prev) => [
      ...prev,
      {
        from: "user",
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setInput("");
    setSuggestions([]);
    setIsTyping(true);

    setTimeout(() => {
      if (text.toLowerCase().includes("course")) {
        addBotMessage(
          "Here are our popular courses 👇",
          ["MERN", "Python", "Placement"],
          COURSES
        );
      } else if (text.toLowerCase().includes("placement")) {
        addBotMessage(
          "We provide 100% placement assistance 💼",
          ["Talk to Advisor", "View Courses"]
        );
      } else {
        addBotMessage(
          "I can help with courses, placements & projects.",
          ["View Courses", "Placement Support"]
        );
      }

      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#eb4917] hover:bg-[#ff5a26] text-white rounded-2xl shadow-2xl p-4 flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:block font-bold">
            Career Help
          </span>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="
          fixed z-50 bg-white shadow-2xl overflow-hidden flex flex-col

          bottom-0 right-0
          w-full h-[100dvh]
          rounded-none

          sm:bottom-6 sm:right-6
          sm:w-[420px]
          sm:h-[720px]
          sm:rounded-[2rem]
          border border-gray-200
        "
        >
          {/* Header */}
          <div className="bg-[#eb4917] text-white p-4 sm:p-6 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold">
                  G
                </div>

                <div>
                  <h2 className="font-bold text-sm sm:text-base">
                    Geonixa Assistant
                  </h2>

                  <p className="text-xs text-orange-100">
                    Experts Online
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMsgs([])}
                  className="p-2 hover:bg-white/10 rounded-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Quick Buttons */}
            <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
              {["Courses", "Placement", "Advisor"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleSend(item)}
                  className="whitespace-nowrap bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-xs font-bold"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div
            ref={bodyRef}
            className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-5 space-y-5"
          >
            {msgs.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Sparkles className="text-[#eb4917] w-10 h-10" />
                </div>

                <h3 className="font-bold text-lg">
                  Welcome 👋
                </h3>

                <p className="text-sm text-gray-500 mt-2 max-w-xs">
                  Ask anything about courses, projects &
                  placements.
                </p>
              </div>
            )}

            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  m.from === "user"
                    ? "items-end"
                    : "items-start"
                }`}
              >
                <div
                  className={`
                  max-w-[90%] sm:max-w-[85%]
                  px-4 py-3 rounded-2xl text-sm shadow-sm whitespace-pre-line

                  ${
                    m.from === "user"
                      ? "bg-[#eb4917] text-white rounded-br-md"
                      : "bg-white text-gray-800 rounded-bl-md border"
                  }
                `}
                >
                  {m.text}
                </div>

                {/* Course Cards */}
                {m.courseList && (
                  <div className="mt-4 w-full grid gap-4">
                    {m.courseList.map((course) => (
                      <div
                        key={course.id}
                        className="bg-white border rounded-3xl p-4 shadow-sm"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] uppercase font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-lg">
                            {course.category}
                          </span>

                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Code className="w-3 h-3" />
                            {course.dur}
                          </span>
                        </div>

                        <h3 className="font-bold text-lg mt-3">
                          {course.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {course.desc}
                        </p>

                        <div className="flex items-center justify-between mt-5">
                          <div>
                            <p className="text-xs text-gray-400">
                              Starting From
                            </p>

                            <h4 className="font-black text-lg">
                              ₹{course.price}
                            </h4>
                          </div>

                          <button className="bg-[#eb4917] hover:bg-black text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
                            Details
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <span className="text-[10px] text-gray-400 mt-1 px-1">
                  {m.time}
                </span>
              </div>
            ))}

            {/* Typing */}
            {isTyping && (
              <div className="bg-white border rounded-2xl px-4 py-3 w-fit flex gap-1">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-200"></span>
              </div>
            )}

            {/* Suggestions */}
            {suggestions.length > 0 && !isTyping && (
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s)}
                    className="bg-white border px-4 py-2 rounded-2xl text-xs font-bold hover:border-[#eb4917] hover:text-[#eb4917] transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-white border-t shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 border bg-gray-50 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#eb4917]"
              />

              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-[#eb4917] hover:bg-black disabled:opacity-40 text-white p-3 rounded-2xl transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}