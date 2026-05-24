"use client";

import { useState, useEffect, useRef } from "react";
import { 
  MessageCircle, X, Send, Phone, ArrowRight, 
  Trash2, ExternalLink, GraduationCap, 
  Briefcase, Code, CheckCircle2, Search, Sparkles
} from "lucide-react";

/* ─────────────────────────────
   TYPES & INTERFACES
   ───────────────────────────── */
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

/* ─────────────────────────────
   EXPANDED DATA CONSTANTS
   ───────────────────────────── */
const COURSES: Course[] = [
  // Career Accelerator
  { id: "fast-track", name: "Fast Track 45", dur: "45 Days", price: "7,999", category: "Career", desc: "Recorded internship project + AWS certificates" },
  { id: "skill-boost", name: "Skill Boost 2", dur: "2 Months", price: "7,999", category: "Career", desc: "Live sessions + 5 projects + LOR & AICTE Certificate" },
  { id: "pro-edge", name: "Pro Edge 3", dur: "3 Months", price: "7,999", category: "Career", desc: "Full training + Soft skills + 100% placement assistance" },
  { id: "career-pro", name: "Career Pro 6", dur: "6 Months", price: "30,000", category: "Career", desc: "Premium transformation + domain expertise + placement support" },
  
  // Technical Tracks
  { id: "mern", name: "MERN Stack Dev", dur: "6 Months", price: "12,999", category: "Technical", desc: "MongoDB, Express, React, Node.js + 3 Live Projects" },
  { id: "python-ai", name: "Python & AI", dur: "4 Months", price: "8,999", category: "Technical", desc: "Python basics to Advanced AI/ML models" },
  { id: "cyber-sec", name: "Cyber Security", dur: "3 Months", price: "7,499", category: "Technical", desc: "Ethical hacking, Network security & VAPT" },
  { id: "data-sci", name: "Data Science Pro", dur: "5 Months", price: "15,000", category: "Technical", desc: "Pandas, NumPy, Tableau & PowerBI Visualization" },

  // Academic Support
  { id: "project-pro", name: "Campus+ ProjectPro", dur: "3-5 Days", price: "15,000", category: "Academic", desc: "Full final year project + Report + PPT" },
  { id: "academic-notes", name: "Subject Mastery", dur: "Flexible", price: "1,499", category: "Academic", desc: "Exam-oriented notes & previous year papers" },
];

const CONTACT_INFO = {
  phone: "+91-9390514374",
  waLink: "https://wa.me/+919390514374?text=Hi Geonixa, I want to talk to a career advisor."
};

/* ─────────────────────────────
   COMPONENT
   ───────────────────────────── */
export default function GeonixaChatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [msgs, isTyping]);

  const startChat = () => {
    if (msgs.length > 0) return;
    setIsTyping(true);
    setTimeout(() => {
      const welcomeMsg: Message = {
        from: "bot",
        text: "Welcome to Geonixa! 🚀\n\nI'm your AI career guide. I can help you find high-paying courses or help with your college projects. What's on your mind?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: ["View All Courses", "Recommend a course", "Talk to advisor"]
      };
      setMsgs([welcomeMsg]);
      setSuggestions(welcomeMsg.suggestions || []);
      setIsTyping(false);
    }, 800);
  };

  useEffect(() => { if (open) startChat(); }, [open]);

  const processResponse = (userInput: string) => {
    const text = userInput.toLowerCase();
    let reply = "";
    let nextSuggestions: string[] = [];
    let courseCard: Course | undefined;
    let courseList: Course[] | undefined;

    // Search Logic
    if (text.includes("search") || (text.length > 2 && !["yes", "no", "hi", "hey", "tell"].includes(text) && !msgs.some(m => m.suggestions?.includes(userInput)))) {
        const query = text.replace("search", "").trim();
        const results = COURSES.filter(c => 
            c.name.toLowerCase().includes(query) || 
            c.desc.toLowerCase().includes(query) ||
            c.category.toLowerCase().includes(query)
        );
        if (results.length > 0) {
            reply = `I found ${results.length} program(s) matching "${query}". Take a look:`;
            courseList = results;
            nextSuggestions = ["View Pricing", "Scholarship Info", "Main Menu"];
            return { reply, nextSuggestions, courseCard, courseList };
        }
    }

    // 1. View All Courses Logic
    if (text.includes("view all") || text.includes("all courses") || text.includes("list")) {
      reply = "Explore our 10+ industry-aligned programs. Which category suits you?";
      courseList = COURSES;
      nextSuggestions = ["Technical Tracks", "Placement support", "Main Menu"];
    } 
    // 2. Recommendations
    else if (text.includes("recommend") || text.includes("best") || text.includes("choose")) {
      reply = "To give you the best advice, what's your current situation?";
      nextSuggestions = ["Non-IT Background", "Final Year Student", "Class 6-12 Student", "Job Seeker"];
    }
    // 3. Technical Specifics
    else if (text.includes("technical") || text.includes("mern") || text.includes("python") || text.includes("coding")) {
      reply = "Our technical tracks focus on 100% hands-on coding. These are our most popular tech programs:";
      courseList = COURSES.filter(c => c.category === "Technical");
      nextSuggestions = ["View Pricing", "Talk to Expert", "Main Menu"];
    }
    // 4. Background specific
    else if (text.includes("non-it") || text.includes("mechanical") || text.includes("civil")) {
      reply = "Non-IT to Tech is our specialty! Many of our success stories come from Mechanical and Civil backgrounds. I recommend the **Pro Edge 3** or **Career Pro 6** packages for a complete transition.";
      courseCard = COURSES.find(c => c.id === "pro-edge");
      nextSuggestions = ["Success Stories", "Talk to Advisor", "Check Career Pro 6"];
    }
    // 5. Academic / Project
    else if (text.includes("academic") || text.includes("project") || text.includes("college")) {
      reply = "We offer premium support for college students, from semester notes to final-year project delivery (3-5 days delivery!)";
      courseList = COURSES.filter(c => c.category === "Academic");
      nextSuggestions = ["Book ProjectPro", "Main Menu"];
    }
    // 6. Placement Info
    else if (text.includes("placement") || text.includes("job") || text.includes("career")) {
        reply = "Geonixa offers **100% placement assistance**. 💼\n\nWe provide:\n• Mock Interviews\n• Resume Review\n• LinkedIn Optimization\n• Direct Hirings with 50+ Partners";
        nextSuggestions = ["View Success Stories", "Talk to Expert", "Main Menu"];
    }
    // 7. Trust Building
    else if (text.includes("why geonixa") || text.includes("about") || text.includes("trust")) {
        reply = "Geonixa is more than just a training institute. We are your career partners. 🤝\n\n✅ MNC Mentors from Google/Amazon\n✅ AICTE Recognized Certificates\n✅ Real-world project experience\n✅ Lifetime LMS access";
        nextSuggestions = ["View Courses", "Placement Proof", "Main Menu"];
    }
    // 8. Advisor / Call
    else if (text.includes("advisor") || text.includes("talk") || text.includes("call") || text.includes("contact")) {
      reply = "Our career advisors can help you map out your roadmap. Would you like to connect on WhatsApp or via a direct call?";
      nextSuggestions = ["Connect on WhatsApp", "Call +91-9390514374", "Main Menu"];
    }
    // 9. Main Menu
    else if (text.includes("main menu") || text.includes("back") || text.includes("reset")) {
        reply = "How else can I assist you today? Choose an option below or type a query.";
        nextSuggestions = ["View All Courses", "Recommend a course", "Placement support", "Talk to advisor"];
    }
    else {
      reply = "I'm here to help! You can ask about our courses, placement support, or switching to IT. You can also try searching for a topic like 'Python' or 'MERN'.";
      nextSuggestions = ["View All Courses", "Placement info", "Talk to Advisor"];
    }

    return { reply, nextSuggestions, courseCard, courseList };
  };

  const handleSend = (txt?: string) => {
    const val = txt || input;
    if (!val.trim()) return;

    // Direct actions for specific buttons
    if (val.includes("WhatsApp")) return window.open(CONTACT_INFO.waLink, "_blank");
    if (val.includes("Call")) return window.location.href = `tel:${CONTACT_INFO.phone}`;

    setMsgs(prev => [...prev, { from: "user", text: val, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInput("");
    setSuggestions([]);
    setIsTyping(true);

    setTimeout(() => {
      const { reply, nextSuggestions, courseCard, courseList } = processResponse(val);
      setMsgs(prev => [...prev, { 
        from: "bot", 
        text: reply, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
        suggestions: nextSuggestions,
        courseCard,
        courseList
      }]);
      setSuggestions(nextSuggestions);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-[#eb4917] hover:bg-[#ff5a26] text-white p-4 rounded-2xl shadow-xl transition-all transform hover:scale-105 z-50 flex items-center gap-3 animate-bounce-slow"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
          </div>
          <span className="font-bold">Career Help</span>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-[420px] h-[720px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#eb4917] p-6 text-white shrink-0 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold text-xl border border-white/30 backdrop-blur-md">G</div>
                <div>
                  <h3 className="font-bold leading-none tracking-tight">Geonixa Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-orange-100 uppercase tracking-widest font-bold">Experts Online</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <button onClick={() => setMsgs([])} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Clear Chat"><Trash2 className="w-5 h-5 opacity-70" /></button>
                <button onClick={() => setOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><X className="w-6 h-6" /></button>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 relative z-10">
              {["Recommended", "Placement Info", "WhatsApp"].map((label) => (
                <button 
                  key={label}
                  onClick={() => handleSend(label)}
                  className="bg-white/10 hover:bg-white/20 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap transition-all active:scale-95"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Body */}
          <div ref={bodyRef} className="flex-1 p-5 overflow-y-auto bg-gray-50/50 space-y-6 scroll-smooth custom-scrollbar">
            {msgs.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                    <div className="w-20 h-20 bg-orange-50 rounded-[2.5rem] flex items-center justify-center text-[#eb4917] animate-pulse">
                        <Sparkles className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-gray-800 text-lg">Hi! I'm your Career Guide</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Ask me about our top-rated technical tracks, project help, or how to switch into IT.</p>
                    </div>
                </div>
            )}

            {msgs.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.from === "user" ? "items-end" : "items-start animate-in fade-in slide-in-from-left-2 duration-300"}`}>
                <div className={`px-4 py-3 rounded-2xl text-[14px] shadow-sm max-w-[85%] leading-relaxed ${
                  m.from === "user" 
                    ? "bg-[#eb4917] text-white rounded-tr-none font-medium" 
                    : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                }`}>
                  {m.text}
                </div>

                {/* Special Course List Component */}
                {m.courseList && (
                  <div className="mt-4 w-full grid gap-4 animate-in fade-in-up duration-500">
                    {m.courseList.slice(0, 4).map(course => (
                      <div key={course.id} className="bg-white p-4 rounded-3xl border border-orange-50 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 group">
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-black text-orange-600 bg-orange-50 px-2 py-1 rounded-lg uppercase tracking-widest">{course.category}</span>
                          <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                            <Code className="w-3 h-3" /> {course.dur}
                          </span>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 leading-tight group-hover:text-[#eb4917] transition-colors">{course.name}</h4>
                            <p className="text-[11px] text-gray-500 line-clamp-2 mt-1">{course.desc}</p>
                        </div>
                        <div className="flex items-center justify-between mt-1 pt-3 border-t border-gray-50">
                          <div className="flex flex-col">
                            <span className="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Start from</span>
                            <span className="font-black text-gray-900 text-base">₹{course.price}</span>
                          </div>
                          <button 
                            onClick={() => handleSend(`Details of ${course.name}`)}
                            className="text-[11px] font-black bg-[#eb4917] text-white px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg shadow-orange-100 hover:bg-black transition-all"
                          >
                            Get Details <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {m.courseList.length > 4 && (
                        <button 
                            onClick={() => handleSend("View all courses")}
                            className="bg-white border border-gray-200 text-gray-600 py-3 rounded-2xl text-xs font-bold hover:bg-gray-50 transition-colors"
                        >
                            View All {m.courseList.length} Programs
                        </button>
                    )}
                  </div>
                )}

                {/* Single Course Card */}
                {m.courseCard && (
                    <div className="mt-4 w-full bg-white p-5 rounded-[2rem] border-2 border-orange-100 shadow-xl shadow-orange-50 animate-in zoom-in-95 duration-300">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="bg-orange-600 p-2 rounded-xl text-white">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Recommended Track</span>
                        </div>
                        <h4 className="text-xl font-black text-gray-900 leading-none mb-2">{m.courseCard.name}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{m.courseCard.desc}</p>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-gray-50 p-2.5 rounded-2xl">
                                <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-widest mb-1">Duration</span>
                                <span className="text-xs font-bold text-gray-800">{m.courseCard.dur}</span>
                            </div>
                            <div className="bg-gray-50 p-2.5 rounded-2xl">
                                <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-widest mb-1">Certification</span>
                                <span className="text-xs font-bold text-gray-800">Verified ✅</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleSend(`Enroll in ${m.courseCard?.name}`)}
                            className="w-full bg-black text-white py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-[#eb4917] transition-all group"
                        >
                            Enroll Now for ₹{m.courseCard.price} <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                )}

                <span className="text-[9px] text-gray-400 mt-2 font-black uppercase tracking-widest px-1">
                  {m.time}
                </span>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-1.5 p-4 bg-white border border-gray-100 rounded-2xl w-16 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#eb4917] rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-[#eb4917] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-[#eb4917] rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            {suggestions.length > 0 && !isTyping && (
              <div className="flex flex-wrap gap-2 animate-in fade-in zoom-in duration-300">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s)}
                    className="bg-white border border-gray-200 text-gray-700 hover:border-[#eb4917] hover:text-[#eb4917] hover:shadow-md text-[11px] font-black py-2.5 px-5 rounded-2xl transition-all active:scale-95"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-5 bg-white border-t border-gray-100 relative group/input">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-4 py-1.5 bg-white border border-gray-100 rounded-t-xl text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover/input:opacity-100 transition-opacity">
                <Search className="w-3 h-3" /> Search "Python" or "Price"
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-orange-50 focus:border-[#eb4917] outline-none transition-all placeholder:text-gray-400 font-medium"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-[#eb4917] text-white p-4 rounded-2xl disabled:opacity-30 shadow-xl shadow-orange-100 transition-all active:scale-90 hover:bg-black group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}