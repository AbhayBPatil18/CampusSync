import React, { useState, useEffect, useRef } from 'react';

const Icon = ({ name, size = 20, className = "" }) => {
  const icons = {
    home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z" />,
    bell: <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />,
    user: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    alert: <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />,
    checkCircle: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />,
    camera: <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
    chevronLeft: <path d="M15 18l-6-6 6-6" />,
    chevronRight: <path d="M9 18l6-6-6-6" />,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </>
    ),
    trendingUp: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
    download: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </>
    ),
    play: <polygon points="5 3 19 12 5 21 5 3" />,
    fileText: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </>
    ),
    plus: (
      <>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </>
    ),
    graduationCap: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
    messageSquare: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    send: (
      <>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </>
    )
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name] || <circle cx="12" cy="12" r="10" />}
    </svg>
  );
};

const App = () => {
  const [role, setRole] = useState(null); // 'student', 'faculty', 'admin'
  const [currentView, setCurrentView] = useState('login'); // 'login', 'dashboard', 'report', 'notifications', 'timetable', 'attendance', 'notes', 'pdf-previewer', 'exams', 'rules', 'chatbot'
  const [activeTab, setActiveTab] = useState('batches'); // student dashboard tab
  const [facultyStatus, setFacultyStatus] = useState('Available');
  const [currentSubjectFilter, setCurrentSubjectFilter] = useState('All');
  const [activePdf, setActivePdf] = useState(null);
  const [attendanceChecked, setAttendanceChecked] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Today');
  
  // Custom non-alert stateful Toast system
  const [toasts, setToasts] = useState([]);
  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // State arrays matching current syllabus and academic records
  const [batches] = useState([
    { id: 'b1', name: 'B.Tech CSE - 2nd Year (Semester 4)', code: 'CS-SEM4', progress: 68, nextClass: 'Data Structures & Algorithms' },
    { id: 'b2', name: 'B.Tech ECE - 1st Year (Semester 2)', code: 'EC-SEM2', progress: 84, nextClass: 'Advanced Engineering Mathematics' }
  ]);

  const [subjects] = useState([
    { id: 'sub1', name: 'Data Structures & Algorithms', teacher: 'Dr. R. Prasad', activeDoubts: 2, room: 'LH-102 (CS Lab)' },
    { id: 'sub2', name: 'Engineering Physics', teacher: 'Prof. A. K. Sharma', activeDoubts: 3, room: 'Physics Lab A' },
    { id: 'sub3', name: 'Advanced Engineering Mathematics', teacher: 'Dr. S. Nair', activeDoubts: 1, room: 'Seminar Hall 2' },
    { id: 'sub4', name: 'Object-Oriented Programming', teacher: 'Prof. Priya Sen', activeDoubts: 0, room: 'Lab 4 (IT Block)' }
  ]);

  const [timetable, setTimetable] = useState([
    { id: 1, day: 'Mon', time: '09:00 AM', subject: 'Data Structures & Algorithms', topic: 'Red-Black Trees & Heap Sorting', room: 'LH-102', faculty: 'Dr. R. Prasad' },
    { id: 2, day: 'Mon', time: '11:30 AM', subject: 'Advanced Engineering Mathematics', topic: 'Fourier Series & Hermite Polynomials', room: 'Seminar Hall 2', faculty: 'Dr. S. Nair' },
    { id: 3, day: 'Tue', time: '10:00 AM', subject: 'Engineering Physics', topic: 'Quantum Tunneling & Maxwell Equations', room: 'Physics Lab A', faculty: 'Prof. A. K. Sharma' },
    { id: 4, day: 'Tue', time: '02:00 PM', subject: 'Object-Oriented Programming', topic: 'C++ Virtual Functions & Abstract Classes', room: 'Lab 4', faculty: 'Prof. Priya Sen' },
    { id: 5, day: 'Wed', time: '09:00 AM', subject: 'Data Structures & Algorithms', topic: 'Dijkstra & Prim Network Optimization Algorithms', room: 'LH-102', faculty: 'Dr. R. Prasad' },
    { id: 6, day: 'Wed', time: '01:00 PM', subject: 'Advanced Engineering Mathematics', topic: 'Laplace Transforms & Differential Equations', room: 'Seminar Hall 2', faculty: 'Dr. S. Nair' }
  ]);

  const [sharedNotes, setSharedNotes] = useState([
    { id: 'n1', subject: 'Data Structures & Algorithms', title: 'Unit II - Tree Data Structures & Graph Traversal Guide.pdf', category: 'Handwritten Lecture Notes', uploader: 'Dr. R. Prasad', downloads: 189, size: '3.8 MB', date: 'May 18, 2026' },
    { id: 'n2', subject: 'Advanced Engineering Mathematics', title: 'Laplace Transforms, Fourier Series & PyQs.pdf', category: 'Exam Reference Notes', uploader: 'Dr. S. Nair', downloads: 215, size: '5.2 MB', date: 'May 19, 2026' },
    { id: 'n3', subject: 'Engineering Physics', title: 'Quantum Mechanics & Semiconductor Band Structure.pdf', category: 'Syllabus Core Notes', uploader: 'Prof. A. K. Sharma', downloads: 142, size: '4.6 MB', date: 'Yesterday' },
    { id: 'n4', subject: 'Object-Oriented Programming', title: 'Dynamic Memory Allocation & Polymorphism in C++.pdf', category: 'Lab Manual DPP', uploader: 'Prof. Priya Sen', downloads: 98, size: '2.1 MB', date: 'Just Now' }
  ]);

  const [attendanceData, setAttendanceData] = useState([
    { subject: 'Data Structures & Algorithms', present: 21, total: 24, percent: 87 },
    { subject: 'Engineering Physics', present: 18, total: 24, percent: 75 },
    { subject: 'Advanced Engineering Mathematics', present: 22, total: 24, percent: 91 },
    { subject: 'Object-Oriented Programming', present: 24, total: 24, percent: 100 }
  ]);

  const [doubts, setDoubts] = useState([
    { id: 1, student: 'Rohit Verma', subject: 'Data Structures & Algorithms', question: 'How do we calculate amortized complexity in red-black tree rotations?', replies: 2, status: 'Solved' },
    { id: 2, student: 'Ananya Roy', subject: 'Advanced Engineering Mathematics', question: 'What is the physical interpretation of Dirichlet conditions in Fourier transform?', replies: 0, status: 'Pending' }
  ]);

  const [issues, setIssues] = useState([
    { id: 1, type: 'Water Leakage', location: 'CSE Block, 1st Floor Restrooms', status: 'Pending', date: '11:15 AM' },
    { id: 2, type: 'Cleanliness', location: 'Server Room Lab C', status: 'In Progress', date: 'Yesterday' },
    { id: 3, type: 'Projector Issue', location: 'LH-102 Lecture Hall', status: 'Resolved', date: 'Mon, 18th' },
  ]);

  const [meetings, setMeetings] = useState([
    { id: 1, student: 'Rohit Verma', topic: 'B.Tech Project Review', time: 'Today, 2:30 PM', status: 'Pending' },
    { id: 2, student: 'Ananya Roy', topic: 'Syllabus Backlog Doubts', time: 'Tomorrow, 11:00 AM', status: 'Pending' },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Advanced Mathematics PDF Guide "Laplace Transforms" uploaded by Dr. S. Nair', time: '12 mins ago', type: 'info', icon: 'book' },
    { id: 2, text: 'Advisory: Project submission portal is now open for Semester 4 CSE.', time: '2 hours ago', type: 'success', icon: 'checkCircle' },
    { id: 3, text: 'Maintenance update: CSE Block Lab Wi-Fi router issues resolved.', time: 'Yesterday', type: 'warning', icon: 'settings' },
  ]);

  const [exams] = useState([
    {
      id: 'gate',
      title: 'GATE (Graduate Aptitude Test in Engineering)',
      eligibility: 'B.E./B.Tech/B.Arch/B.Pharm or equivalent 3rd/4th-year undergraduate students.',
      subjects: 'Computer Science, Electrical, Electronics, Mechanical, Civil Engineering, Mathematics, Physics.',
      deadlines: 'Online application starts August 2026. Main exam in February 2027.',
      importance: 'Essential for Public Sector Undertakings (PSUs) recruitment and securing M.Tech/Ph.D. admissions at IITs and IISc.'
    },
    {
      id: 'jee-advanced',
      title: 'JEE Advanced',
      eligibility: 'Top 250,000 qualifiers of JEE Main, conforming to age restrictions and board thresholds.',
      subjects: 'Physics, Chemistry, Mathematics (Highly analytical engineering core syllabus).',
      deadlines: 'Registration opens April/May 2027. Exam in late May 2027.',
      importance: 'Sole gateway to undergraduate studies across premier Indian Institutes of Technology (IITs).'
    },
    {
      id: 'gre',
      title: 'GRE (Graduate Record Examinations)',
      eligibility: 'Open to all graduates/undergraduates seeking Master MS programs globally.',
      subjects: 'Analytical Writing, Quantitative Reasoning, Verbal Reasoning.',
      deadlines: 'Flexible scheduling throughout the year, recommended taking 6 months before overseas application closures.',
      importance: 'Widely accepted by top global universities for engineering and science graduates targeting research fellowships.'
    }
  ]);

  const [rulesCategory, setRulesCategory] = useState('academic');
  const [rulesSearch, setRulesSearch] = useState('');
  const [rules] = useState([
    { category: 'academic', title: '75% Mandatory Attendance Rule', desc: 'Students are strictly required to secure at least 75% attendance in both core theories and laboratory exercises to be eligible for end-semester assessments.' },
    { category: 'academic', title: 'Credit & Grading Protocol', desc: 'Minimum passing score is Letter Grade E (40%). CGPA calculation incorporates credit factors per module. Backlogs must be updated during next active semesters.' },
    { category: 'conduct', title: 'Campus Code of Integrity', desc: 'Any form of plagiarism in computer lab codes, practical files, or final project theses will trigger direct disciplinary board review, potentially nullifying term credits.' },
    { category: 'conduct', title: 'Zero Tolerance Anti-Ragging Policy', desc: 'Aligned with nationwide anti-harassment regulations. Ragging inside halls, computer blocks, or private circles results in immediate suspension and criminal logging.' },
    { category: 'safety', title: 'Chemical & Electrical Lab Safety Protocols', desc: 'No students are permitted inside high-voltage engineering labs or chemical chambers without wearing structural safety gear, thermal wear, and direct supervisor presence.' },
    { category: 'safety', title: 'Asset and Network Security', desc: 'Utilizing laboratory computers for unauthorized non-academic portals or running server configurations that impact local campus networks is strictly penalizable.' }
  ]);

  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! I am your AI-Powered Engineering Study Assistant. Ask me anything about Data Structures, advanced formulas, campus schedules, or rules & regulations!' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    const userQuery = userInput;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userQuery }]);
    setUserInput('');
    setIsTyping(true);

    try {
      const apiKey = ""; // Canvas provides API key at runtime if empty
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      
      const payload = {
        contents: [{ parts: [{ text: `You are an AI-powered academic assistant for CampusSync+ engineering platform. Answer this query professionally in 2-3 concise sentences: "${userQuery}"` }] }],
        systemInstruction: {
          parts: [{ text: "Act as an expert engineering college tutor. Be direct, clear, helpful, and reference standard university practices like the 75% attendance rule or DSA concepts if relevant." }]
        }
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("API Limit / Offline");

      const result = await response.json();
      const botResponse = result.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (botResponse) {
        setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      } else {
        throw new Error("No response body");
      }
    } catch (error) {
      // Robust logical fallback if api is unreachable or key is not active
      setTimeout(() => {
        let fallbackMsg = "Understood. Our engineering faculty guides advise exploring Section II of our Study Vault PDF resources to find precise curriculum calculations.";
        
        const q = userQuery.toLowerCase();
        if (q.includes('dsa') || q.includes('tree') || q.includes('algorithm')) {
          fallbackMsg = "For Data Structures, Red-Black Trees guarantee O(log N) worst-case time complexity. You can check 'Unit II Guide.pdf' in the Study Vault for step-by-step tree rotation steps!";
        } else if (q.includes('attendance') || q.includes('rule') || q.includes('75')) {
          fallbackMsg = "Our University Regulations mandate a minimum of 75% attendance. Falling below this threshold triggers evaluation barriers unless backed by certified medical clearance.";
        } else if (q.includes('gate') || q.includes('exam')) {
          fallbackMsg = "GATE is vital for pursuing higher studies (IITs) and PSUs. The GATE section in our Sidebar provides registration guidelines, core syllabus coverage, and deadlines!";
        } else if (q.includes('math') || q.includes('laplace') || q.includes('fourier')) {
          fallbackMsg = "Advanced Engineering Mathematics covers Fourier Series & Laplace Transforms. You can review and download Dr. S. Nair's formula reference sheets inside our PDF Reader!";
        } else if (q.includes('physics') || q.includes('quantum')) {
          fallbackMsg = "Engineering Physics covers Quantum Mechanics & semiconductor boundaries. Check Professor Sharma's Quantum Band Structure PDF under our notes hub!";
        }

        setChatMessages((prev) => [...prev, { sender: 'bot', text: fallbackMsg }]);
      }, 1000);
    } finally {
      setIsTyping(false);
    }
  };

  const Card = ({ children, className = "", onClick }) => (
    <div 
      onClick={onClick}
      className={`bg-[#0d1527] rounded-2xl shadow-lg border border-[#1e2e4f] p-5 transition-all hover:border-[#3b82f6] ${onClick ? 'cursor-pointer active:scale-[0.99]' : ''} ${className}`}
    >
      {children}
    </div>
  );

  const Badge = ({ children, type = 'default' }) => {
    const colors = {
      default: 'bg-gray-850 text-gray-300 border border-gray-750',
      success: 'bg-green-500/10 text-green-400 border border-green-500/30',
      warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
      danger: 'bg-red-500/10 text-red-400 border border-red-500/30',
      primary: 'bg-blue-500/20 text-blue-300 border border-blue-500/40',
      gold: 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
    };
    return (
      <span className={`text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-md ${colors[type]}`}>
        {children}
      </span>
    );
  };

  const Sidebar = () => (
    <aside className="w-72 bg-[#0b1120] border-r border-[#15233c] flex flex-col justify-between h-screen sticky top-0 shrink-0 z-30">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => { if(role) setCurrentView('dashboard'); }}>
          <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <Icon name="zap" size={24} className="text-yellow-400 fill-yellow-400" />
          </div>
          <div>
            <h1 className="text-xl font-black text-white tracking-tight leading-none">CampusSync<span className="text-blue-500">+</span></h1>
            <p className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mt-1">CS Engine Suite</p>
          </div>
        </div>

        <nav className="space-y-1">
          <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest px-3 mb-2">Main Console</p>
          
          <SidebarButton icon="home" label="Dashboard" active={currentView === 'dashboard'} onClick={() => { if(!role) return; setCurrentView('dashboard'); }} />
          <SidebarButton icon="book" label="Study Vault" active={currentView === 'notes'} onClick={() => { if(!role) return; setCurrentView('notes'); }} />
          <SidebarButton icon="calendar" label="Timetable" active={currentView === 'timetable'} onClick={() => { if(!role) return; setCurrentView('timetable'); }} />
          <SidebarButton icon="award" label="Attendance" active={currentView === 'attendance'} onClick={() => { if(!role) return; setCurrentView('attendance'); }} />
          
          <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest px-3 pt-6 mb-2">Academic Pillars</p>
          
          <SidebarButton icon="graduationCap" label="Entrance Exams" active={currentView === 'exams'} onClick={() => { if(!role) return; setCurrentView('exams'); }} />
          <SidebarButton icon="shield" label="Rules & Conduct" active={currentView === 'rules'} onClick={() => { if(!role) return; setCurrentView('rules'); }} />
          <SidebarButton icon="messageSquare" label="AI Support Chat" active={currentView === 'chatbot'} onClick={() => { if(!role) return; setCurrentView('chatbot'); }} />
        </nav>
      </div>

      <div className="p-6 border-t border-[#15233c] bg-[#070b14]/50">
        {role ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-extrabold">
                {role.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-xs font-black text-white capitalize">{role} Account</p>
                <p className="text-[10px] text-gray-500 font-semibold uppercase">Authorized Session</p>
              </div>
            </div>
            <button 
              onClick={() => {
                setRole(null);
                setCurrentView('login');
                setAttendanceChecked(false);
                showToast("Logged out from academic portal.", "info");
              }}
              className="w-full bg-[#16223b] hover:bg-red-500/20 text-xs py-2.5 font-bold text-gray-300 hover:text-red-400 rounded-xl border border-[#213254] hover:border-red-500/30 transition-all uppercase tracking-wide"
            >
              Log Out / Switch Role
            </button>
          </div>
        ) : (
          <p className="text-[10px] text-gray-500 font-bold text-center uppercase tracking-widest">Select user role to begin</p>
        )}
      </div>
    </aside>
  );

  const SidebarButton = ({ icon, label, active, onClick }) => (
    <button 
      onClick={onClick} 
      className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all ${
        active 
          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/15 font-extrabold' 
          : 'text-gray-400 hover:text-gray-200 hover:bg-[#0f172a] font-medium'
      }`}
    >
      <Icon name={icon} size={20} className={active ? 'text-white' : 'text-gray-400'} />
      <span className="text-sm tracking-wide">{label}</span>
    </button>
  );

  const TopBar = ({ title }) => (
    <header className="bg-[#070b13]/85 backdrop-blur-md py-4 px-8 border-b border-[#111928] sticky top-0 z-20 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-black text-white tracking-tight">{title}</h2>
        <p className="text-xs text-blue-400 font-bold tracking-wider uppercase mt-0.5">★ SDG 4: Quality & Accessible Engineering Education</p>
      </div>

      <div className="flex items-center gap-4">
        {role && (
          <span className="text-[10px] uppercase font-black text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full tracking-wider shadow-sm">
            🎓 ACTIVE: {role} suite
          </span>
        )}

        <button 
          onClick={() => setCurrentView('notifications')}
          className="relative p-2.5 rounded-xl bg-[#0e1726] hover:bg-[#16223a] text-blue-400 border border-[#1e2e4f] transition-all"
          title="Campus Alerts"
        >
          <Icon name="bell" size={18} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-[#070b13] rounded-full animate-pulse"></span>
        </button>
      </div>
    </header>
  );

  const ToastContainer = () => (
    <div className="fixed top-5 right-5 z-50 space-y-3 pointer-events-none">
      {toasts.map((t) => (
        <div 
          key={t.id} 
          className={`px-5 py-4 rounded-xl shadow-2xl border flex items-center gap-3 transition-all animate-bounce max-w-sm pointer-events-auto ${
            t.type === 'info' ? 'bg-[#121c33] border-blue-500/50 text-blue-300' :
            t.type === 'danger' ? 'bg-red-500/10 border-red-500/50 text-red-400' :
            'bg-[#0b1c1e] border-green-500/50 text-green-400'
          }`}
        >
          <Icon name={t.type === 'danger' ? 'alert' : 'checkCircle'} size={18} />
          <span className="text-xs font-bold leading-relaxed">{t.message}</span>
        </div>
      ))}
    </div>
  );

  const LoginScreen = () => (
    <div className="min-h-screen bg-[#070b13] text-white flex items-center justify-center relative overflow-hidden px-6 py-12">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl shadow-lg flex items-center justify-center border border-blue-400/30">
            <Icon name="zap" size={36} className="text-yellow-400 fill-yellow-400" />
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full">
              ⚡ Aligned with UN SDG 4: Accessible Learning
            </span>
            <h1 className="text-5xl font-black text-white tracking-tight mt-4">CampusSync<span className="text-blue-500">+</span></h1>
            <p className="text-lg text-gray-300 font-semibold mt-1">Smart Learning, Simplified.</p>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Centralizing academic materials, daily dynamic schedules, geofenced tracking modules, and AI learning support inside one robust, highly structured engineering platform.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-black uppercase text-gray-500 tracking-wider">
            <span>● Real-time support</span>
            <span>● Structured modules</span>
            <span>● Open education</span>
          </div>
        </div>

        <div className="bg-[#0b111e] p-8 rounded-3xl border border-[#1e2e4f] shadow-2xl space-y-6">
          <div>
            <h3 className="text-xl font-black tracking-tight text-white">Select Academic Portal</h3>
            <p className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-wide">Enter your authorized session role</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => { setRole('student'); setCurrentView('dashboard'); showToast("Logged in as Alex (B.Tech Student)"); }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl py-4 font-extrabold shadow-md active:scale-98 transition-all flex items-center justify-between px-6 border border-blue-400/20"
            >
              <div className="flex items-center gap-3">
                <Icon name="user" size={20} />
                <span className="tracking-wide">Student Entrance</span>
              </div>
              <Icon name="chevronRight" size={16} />
            </button>

            <button 
              onClick={() => { setRole('faculty'); setCurrentView('dashboard'); showToast("Welcome, Professor Dr. R. Prasad"); }}
              className="w-full bg-[#121c32] hover:bg-[#182645] text-gray-100 border border-[#1e2e4f] rounded-2xl py-4 font-extrabold shadow-sm active:scale-98 transition-all flex items-center justify-between px-6"
            >
              <div className="flex items-center gap-3">
                <Icon name="book" size={20} className="text-blue-400" />
                <span className="tracking-wide">Faculty Suite</span>
              </div>
              <Icon name="chevronRight" size={16} />
            </button>

            <button 
              onClick={() => { setRole('admin'); setCurrentView('dashboard'); showToast("Admin dashboard unlocked."); }}
              className="w-full bg-[#0a0e1a] hover:bg-[#10172c] text-gray-400 border border-[#1a253e] rounded-2xl py-4 font-extrabold active:scale-98 transition-all flex items-center justify-between px-6 text-sm"
            >
              <div className="flex items-center gap-3">
                <Icon name="settings" size={20} className="text-blue-500" />
                <span className="tracking-wide text-gray-300">Admin Portal</span>
              </div>
              <Icon name="chevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const StudentDashboard = () => (
    <div className="p-8 space-y-8">
      {/* AI Assistant Section */}
      <div className="bg-gradient-to-r from-[#121c33] via-[#0b162f] to-[#1e104c] rounded-3xl p-6 text-white border border-blue-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Icon name="zap" size={180} />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-[10px] font-black px-3 py-1.5 rounded-md inline-flex items-center gap-1.5 shadow-md">
              <Icon name="zap" size={12} className="fill-black" /> AI-POWERED LEARNING ASSISTANT
            </span>
            <h3 className="text-2xl font-black">Target: B.Tech Sem 4 Core Syllabus</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              Next Live Lecture: <span className="text-blue-400 font-bold">Data Structures (Red-Black Trees)</span> at 09:00 AM. Study Vault prep handouts and Laplace transforms notes have been updated!
            </p>
          </div>
          
          <div className="flex gap-3 shrink-0">
            <button onClick={() => setCurrentView('notes')} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black py-3 px-5 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all">
              Access Vault Notes
            </button>
            <button onClick={() => setCurrentView('chatbot')} className="bg-[#1a253e] hover:bg-[#243355] text-blue-300 text-xs font-black py-3 px-5 rounded-xl border border-blue-500/20 transition-colors">
              Chat with AI
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex bg-[#0d1425] p-2 rounded-2xl border border-[#1e2e4f] max-w-md">
        {['batches', 'doubts', 'analytics'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 text-xs font-black rounded-xl transition-all uppercase tracking-wide ${
              activeTab === tab 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === 'batches' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-black text-white uppercase tracking-wider">Engineering Batches</h3>
            <Badge type="gold">2 ACTIVE BATCHES</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {batches.map(batch => (
              <Card key={batch.id} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" style={{ width: `${batch.progress}%` }}></div>
                <div className="flex justify-between items-start pt-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-amber-400 font-extrabold uppercase bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded">
                        {batch.code}
                      </span>
                      <h4 className="font-extrabold text-white text-base">{batch.name}</h4>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Next Module: <span className="text-blue-400 font-semibold">{batch.nextClass}</span></p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-blue-400">{batch.progress}%</span>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Syllabus Complete</p>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button 
                    onClick={() => {
                      setCurrentView('notes');
                      setCurrentSubjectFilter('Data Structures & Algorithms');
                    }} 
                    className="flex-1 bg-[#10192e] text-blue-400 border border-blue-500/20 py-2.5 rounded-xl text-xs font-extrabold hover:bg-blue-500/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="book" size={14} /> Subject Vault
                  </button>
                  <button 
                    onClick={() => setCurrentView('timetable')} 
                    className="flex-1 bg-[#131e35] text-gray-300 py-2.5 rounded-xl text-xs font-bold hover:bg-[#1c2c4d] transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="calendar" size={14} /> Schedule
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'doubts' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-black text-white uppercase tracking-wider">CS Expert Doubt Forums</h3>
            <Badge type="primary">Active Forum Support</Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0f182e] border border-blue-500/20 rounded-2xl p-6 h-fit space-y-4">
              <h4 className="text-sm font-black text-white uppercase tracking-wide">Raise an Academic Doubt</h4>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Engineering Subject (e.g. Data Structures)"
                  id="doubt-sub"
                  className="w-full bg-[#080c16] text-white border border-[#1e2e4f] rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-blue-500"
                />
                <textarea 
                  placeholder="Describe your conceptual/numerical problem details..."
                  id="doubt-txt"
                  rows="3"
                  className="w-full bg-[#080c16] text-white border border-[#1e2e4f] rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-blue-500"
                />
                <button 
                  onClick={() => {
                    const subEl = document.getElementById('doubt-sub');
                    const txtEl = document.getElementById('doubt-txt');
                    if (subEl?.value && txtEl?.value) {
                      setDoubts([{
                        id: doubts.length + 1,
                        student: 'Alex Vance',
                        subject: subEl.value,
                        question: txtEl.value,
                        replies: 0,
                        status: 'Pending'
                      }, ...doubts]);
                      subEl.value = '';
                      txtEl.value = '';
                      showToast("Doubt logged. Campus faculty will review soon!", "success");
                    } else {
                      showToast("Please fill all academic doubt fields.", "danger");
                    }
                  }}
                  className="w-full bg-blue-600 text-white text-xs font-extrabold py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Post Doubt to Faculty
                </button>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              {doubts.map(d => (
                <Card key={d.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">{d.subject}</span>
                      <span className="text-xs text-gray-400 font-bold">{d.student}</span>
                    </div>
                    <Badge type={d.status === 'Solved' ? 'success' : 'warning'}>{d.status}</Badge>
                  </div>
                  <p className="text-sm font-bold text-gray-200">{d.question}</p>
                  <div className="mt-4 pt-3 border-t border-[#1a253e] flex justify-between items-center text-xs text-gray-500 font-bold">
                    <span>💬 {d.replies} engineering faculty replies</span>
                    <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => setCurrentView('chatbot')}>Ask AI for instant answer →</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-black text-white uppercase tracking-wider">Attendance Statistics</h3>
            <span className="text-sm text-blue-400 font-extrabold hover:underline cursor-pointer" onClick={() => setCurrentView('attendance')}>View Attendance Portal</span>
          </div>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {attendanceData.map(stat => (
              <Card key={stat.subject} className="flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider block mb-2">{stat.subject}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">{stat.percent}%</span>
                    <span className="text-xs font-bold text-gray-500">{stat.present}/{stat.total} slots</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-[#111a2d] h-2 rounded-full overflow-hidden">
                    <div className={`h-full ${stat.percent >= 85 ? 'bg-green-500' : stat.percent >= 75 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${stat.percent}%` }}></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Support & Support Suite actions */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-white uppercase tracking-wider">Support Suite</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="cursor-pointer hover:bg-blue-900/10 flex items-center gap-4" onClick={() => setCurrentView('attendance')}>
            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl text-green-400">
              <Icon name="checkCircle" size={28} />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Quick Geofenced Check-In</h4>
              <p className="text-xs text-gray-400 mt-1">Submit current lecture code to certify classroom attendance</p>
            </div>
          </Card>

          <Card className="cursor-pointer hover:bg-amber-900/10 flex items-center gap-4" onClick={() => setCurrentView('report')}>
            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl text-amber-400">
              <Icon name="alert" size={28} />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base">Report Campus Anomaly</h4>
              <p className="text-xs text-gray-400 mt-1">Log equipment, lab network, or environmental maintenance requirements</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const FacultyDashboard = () => {
    const [selectedNotesSubject, setSelectedNotesSubject] = useState('Data Structures & Algorithms');
    
    return (
      <div className="p-8 space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-blue-500 md:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Availability Status Toggle</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">Set your availability status for the student dashboard lookup.</p>
            </div>
            <div className="flex bg-[#080d16] p-1.5 rounded-xl border border-[#1e2e4f]">
              {['Available', 'Busy', 'In Class'].map(s => (
                <button 
                  key={s}
                  onClick={() => { setFacultyStatus(s); showToast(`Status changed to ${s}`, "info"); }}
                  className={`flex-1 py-2 text-xs font-black rounded-lg transition-all uppercase ${
                    facultyStatus === s 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </Card>

          <div className="bg-[#0f172a] border border-[#1e2e4f] rounded-3xl p-6 shadow-xl md:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-base font-black text-white uppercase tracking-wider">Active Lecture Attendance code</h4>
                <p className="text-xs text-gray-400 mt-1">Project this PIN code onto the lecture hall screen for classroom check-ins.</p>
              </div>
              <span className="text-[10px] bg-blue-500/20 text-blue-300 font-extrabold px-3 py-1 rounded border border-blue-500/30">MODULE CS</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#090d16] border border-dashed border-[#1f2a45] rounded-2xl p-4">
              <div className="bg-white p-2.5 rounded-xl">
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-black">
                  <rect x="0" y="0" width="30" height="30" fill="currentColor" />
                  <rect x="70" y="0" width="30" height="30" fill="currentColor" />
                  <rect x="0" y="70" width="30" height="30" fill="currentColor" />
                  <rect x="35" y="35" width="30" height="30" fill="currentColor" />
                  <rect x="80" y="80" width="20" height="20" fill="currentColor" />
                </svg>
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-lg font-black text-white tracking-widest bg-[#15233c] px-4 py-2 rounded-xl border border-blue-500/30">
                  CODE: CS-DSA-402
                </span>
                <p className="text-[11px] text-gray-500 font-bold mt-1">Resets dynamically upon lecture termination</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes uploader section */}
        <div className="bg-[#0c1322] border border-[#1e2e4f] rounded-3xl p-6">
          <h4 className="text-base font-black text-white uppercase tracking-wider mb-4">Publish Syllabus Resources & Handouts</h4>
          
          <div className="grid md:grid-cols-3 gap-6 items-end">
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-gray-400 mb-2">Target Course / Core Subject</label>
              <select 
                value={selectedNotesSubject} 
                onChange={(e) => setSelectedNotesSubject(e.target.value)}
                className="w-full bg-[#080d16] text-white border border-[#1e2e4f] rounded-xl px-4 py-3 text-xs font-bold focus:outline-none"
              >
                <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
                <option value="Engineering Physics">Engineering Physics</option>
                <option value="Advanced Engineering Mathematics">Advanced Engineering Mathematics</option>
                <option value="Object-Oriented Programming">Object-Oriented Programming</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-gray-400 mb-2">Reference PDF File Title</label>
              <input 
                type="text" 
                id="faculty-note-title"
                placeholder="e.g. Tree Rotations & Balanced AVL Trees.pdf"
                className="w-full bg-[#080d16] text-white border border-[#1e2e4f] rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-gray-400 mb-2">Resource Category Type</label>
              <input 
                type="text" 
                id="faculty-note-cat"
                placeholder="e.g. Lecture Notes, Practice Sheets"
                className="w-full bg-[#080d16] text-white border border-[#1e2e4f] rounded-xl px-4 py-3 text-xs font-bold focus:outline-none"
              />
            </div>
          </div>

          <button 
            onClick={() => {
              const titleEl = document.getElementById('faculty-note-title');
              const catEl = document.getElementById('faculty-note-cat');
              if (titleEl?.value && catEl?.value) {
                const newNote = {
                  id: `n${sharedNotes.length + 1}`,
                  subject: selectedNotesSubject,
                  title: titleEl.value.endsWith('.pdf') ? titleEl.value : `${titleEl.value}.pdf`,
                  category: catEl.value,
                  uploader: 'Dr. R. Prasad',
                  downloads: 0,
                  size: '4.1 MB',
                  date: 'Just Now'
                };
                setSharedNotes([newNote, ...sharedNotes]);
                setNotifications([{
                  id: notifications.length + 1,
                  text: `New syllabus PDF note "${titleEl.value}" posted successfully by Professor Prasad.`,
                  time: 'Just now',
                  type: 'success',
                  icon: 'book'
                }, ...notifications]);
                titleEl.value = '';
                catEl.value = '';
                showToast("Syllabus resource published to Study Vault!", "success");
              } else {
                showToast("Provide both the title and syllabus category first.", "danger");
              }
            }}
            className="mt-6 w-full bg-blue-600 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10"
          >
            Publish To Study Vault
          </button>
        </div>

        {/* support requests pending list */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-black text-white uppercase tracking-wider">Academic Support Requests</h3>
            <Badge type="primary">{meetings.length} PENDING SESSIONS</Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {meetings.map(m => (
              <Card key={m.id} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-500"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-extrabold text-white text-base">{m.student}</h4>
                    <p className="text-xs text-blue-400 mt-1 font-semibold">{m.topic}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 bg-[#121c32] px-3 py-1.5 rounded-lg border border-[#1e2e4f]">
                    <Icon name="clock" size={12} /> {m.time}
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button 
                    onClick={() => {
                      setMeetings(meetings.filter(mt => mt.id !== m.id));
                      setNotifications([{
                        id: notifications.length + 1,
                        text: `Your Academic Support Review on ${m.topic} was Approved.`,
                        time: 'Just now',
                        type: 'success',
                        icon: 'checkCircle'
                      }, ...notifications]);
                      showToast("Academic support request approved.", "success");
                    }}
                    className="flex-1 bg-green-500/15 border border-green-500/30 text-green-400 py-2.5 rounded-xl text-xs font-extrabold hover:bg-green-500/25 transition-all"
                  >
                    Approve Request
                  </button>
                  <button 
                    onClick={() => {
                      setMeetings(meetings.filter(mt => mt.id !== m.id));
                      showToast("Academic request declined.", "danger");
                    }}
                    className="flex-1 bg-[#1c1c28] text-gray-400 py-2.5 rounded-xl text-xs font-bold hover:bg-[#252538] border border-[#2c2c3e] transition-all"
                  >
                    Reject
                  </button>
                </div>
              </Card>
            ))}
            {meetings.length === 0 && (
              <div className="md:col-span-2 text-center py-12 border border-dashed border-[#1f2a45] rounded-3xl text-gray-500">
                <Icon name="checkCircle" size={44} className="mx-auto mb-3 text-gray-600" />
                <p className="text-sm font-bold">No pending academic meeting notifications</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const AdminDashboard = () => (
    <div className="p-8 space-y-8">
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-tr from-blue-600/20 to-indigo-600/10 border-blue-500/30">
          <div className="flex items-center gap-1.5 mb-2 opacity-80 text-blue-400">
            <Icon name="alert" size={14} />
            <span className="text-[10px] font-black uppercase tracking-wider">Campus Anomalies</span>
          </div>
          <h2 className="text-4xl font-black text-white">{issues.length}</h2>
          <p className="text-[10px] text-gray-500 font-bold mt-2 uppercase tracking-wide">Total Logged Pipeline</p>
        </Card>

        <Card className="bg-gradient-to-tr from-green-600/20 to-emerald-600/10 border-green-500/30">
          <div className="flex items-center gap-1.5 mb-2 opacity-80 text-green-400">
            <Icon name="checkCircle" size={14} />
            <span className="text-[10px] font-black uppercase tracking-wider">Resolved Today</span>
          </div>
          <h2 className="text-4xl font-black text-white">
            {issues.filter(i => i.status === 'Resolved').length}
          </h2>
          <p className="text-[10px] text-gray-500 font-bold mt-2 uppercase tracking-wide">Certified Campus Fixes</p>
        </Card>
      </div>

      <div>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-black uppercase tracking-wider text-white">Maintenance Pipeline</h3>
          <span className="text-[10px] text-gray-500 font-extrabold uppercase">Live Telemetry</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {issues.map(issue => (
            <Card key={issue.id} className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-extrabold text-white text-base">{issue.type}</h4>
                  <Badge type={issue.status === 'Resolved' ? 'success' : issue.status === 'Pending' ? 'warning' : 'primary'}>
                    {issue.status}
                  </Badge>
                </div>
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <Icon name="home" size={14} className="text-blue-500" /> Location: {issue.location}
                </p>
              </div>

              {issue.status !== 'Resolved' && (
                <div className="pt-4 mt-4 border-t border-[#1e2e4f] flex justify-end">
                  <button 
                    onClick={() => {
                      const updated = issues.map(i => i.id === issue.id ? {...i, status: i.status === 'Pending' ? 'In Progress' : 'Resolved'} : i);
                      setIssues(updated);
                      if (issue.status === 'In Progress') {
                        setNotifications([{
                          id: notifications.length + 1,
                          text: `Campus Service certified reported issue: ${issue.type} at ${issue.location}`,
                          time: 'Just now',
                          type: 'success',
                          icon: 'settings'
                        }, ...notifications]);
                        showToast(`Certified resolved: ${issue.type}`, "success");
                      } else {
                        showToast(`Maintenance pipeline initialized for ${issue.type}`, "info");
                      }
                    }}
                    className="text-[10px] font-black text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2.5 rounded-lg hover:bg-blue-500/20 transition-all uppercase tracking-wider"
                  >
                    {issue.status === 'Pending' ? 'Assign Lab Work Team' : 'Certify Resolved'}
                  </button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const NotesHubView = () => (
    <div className="p-8 space-y-8">
      <div className="bg-[#0f172a] p-6 rounded-3xl border border-blue-500/20 flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-lg font-black text-white uppercase tracking-wider">Engineering Study Vault</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Gain open access to official lecture notes, practical program guides, worksheets, and syllabus resources managed and published directly by your department professors.
          </p>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
          {['All', 'Data Structures & Algorithms', 'Engineering Physics', 'Advanced Engineering Mathematics', 'Object-Oriented Programming'].map(sub => (
            <button 
              key={sub}
              onClick={() => setCurrentSubjectFilter(sub)}
              className={`flex-shrink-0 px-4 py-2 text-xs font-black rounded-lg uppercase tracking-wide border transition-all ${
                currentSubjectFilter === sub 
                  ? 'bg-blue-600 text-white border-blue-500' 
                  : 'bg-[#090d16] text-gray-400 border-[#1e2e4f] hover:text-gray-200'
              }`}
            >
              {sub === 'All' ? 'All Modules' : sub.split(' & ')[0].split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-black uppercase tracking-wider text-gray-400">Published Learning PDFs</h4>
          <span className="text-xs text-blue-400 font-extrabold uppercase">SDG 4: Shared Education Commons</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sharedNotes
            .filter(n => currentSubjectFilter === 'All' || n.subject === currentSubjectFilter)
            .map(note => (
              <Card key={note.id} className="flex justify-between items-center p-5">
                <div className="flex items-start gap-4">
                  <div className="bg-[#121f37] border border-blue-500/30 p-3.5 rounded-2xl text-blue-400 flex-shrink-0">
                    <Icon name="fileText" size={24} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {note.subject}
                      </span>
                      <span className="text-[9px] font-extrabold text-amber-400 uppercase bg-amber-500/10 px-2 py-0.5 rounded">
                        {note.category}
                      </span>
                    </div>
                    <h5 className="font-extrabold text-white text-sm pt-1 leading-snug">{note.title}</h5>
                    <p className="text-[10px] text-gray-400">Faculty: {note.uploader} ● {note.date}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between h-full gap-4 shrink-0 pl-4">
                  <button 
                    onClick={() => {
                      setActivePdf(note);
                      setCurrentView('pdf-previewer');
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-xl transition-all shadow-md flex items-center justify-center border border-blue-400/20 active:scale-95"
                    title="View PDF"
                  >
                    <Icon name="play" size={14} className="fill-white text-white" />
                  </button>
                  <span className="text-[10px] font-black text-gray-500">{note.size}</span>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );

  const PdfPreviewerView = () => {
    const [mockPage, setMockPage] = useState(1);
    
    return (
      <div className="p-8 space-y-6 flex flex-col min-h-[calc(100vh-120px)] bg-[#0a0f1d]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase px-3 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {activePdf?.subject}
            </span>
            <span className="text-sm text-gray-400 font-bold">PDF Reader Screen</span>
          </div>
          <button 
            onClick={() => setCurrentView('notes')} 
            className="px-4 py-2 bg-[#121a2f] hover:bg-[#1a253e] rounded-xl border border-[#1e2e4f] text-xs font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
          >
            Exit Reader
          </button>
        </div>

        <div>
          <h4 className="font-black text-xl text-white">{activePdf?.title}</h4>
          <p className="text-xs text-gray-400 mt-1">Distributed under open academic commons license</p>
        </div>

        {/* Real simulated paper viewer */}
        <div className="flex-1 bg-[#1c2436] rounded-3xl p-8 border border-blue-500/30 overflow-y-auto shadow-2xl flex flex-col justify-between max-w-4xl mx-auto w-full">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-[#29354e] pb-4 mb-4">
              <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase">
                ★ STUDY VAULT SECURED BY CAMPUS_SYNC+
              </span>
              <span className="text-xs text-gray-400 font-bold">PAGE {mockPage} OF 4</span>
            </div>

            {/* Simulated Textbook content based on engineering curriculum */}
            {mockPage === 1 && (
              <div className="space-y-4">
                <h3 className="text-base font-black text-blue-300">Section 1: Theoretical Formulations & Engineering Equations</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Under the standard present engineering university syllabus, complex boundary criteria are structured mathematically as:</p>
                
                {activePdf?.subject.includes('Algorithms') ? (
                  <>
                    <p className="text-sm text-gray-405">For balanced AVL and Red-Black Trees, the maximum height of a node with key balance factor is constrained to:</p>
                    <div className="bg-[#0e1422] p-5 rounded-2xl border border-blue-500/20 text-center font-mono text-xs sm:text-sm text-yellow-300">
                      Height(T) ≤ 2 * log_2(N + 1)
                    </div>
                  </>
                ) : activePdf?.subject.includes('Mathematics') ? (
                  <>
                    <p className="text-sm text-gray-405">The bilateral Laplace Transform of a continuous-time system function is expressed as:</p>
                    <div className="bg-[#0e1422] p-5 rounded-2xl border border-blue-500/20 text-center font-mono text-xs sm:text-sm text-yellow-300">
                      L{"{"}f(t){"}"} = ∫_[-∞]^[+∞] f(t) * e^(-s•t) dt
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-405">The 1D Time-Independent Schrödinger equation for quantum band boundaries in semiconductors is modeled as:</p>
                    <div className="bg-[#0e1422] p-5 rounded-2xl border border-blue-500/20 text-center font-mono text-xs sm:text-sm text-yellow-300">
                      -[h² / 2m] * (d²Ψ/dx²) + V(x)•Ψ = E•Ψ
                    </div>
                  </>
                )}
                
                <h4 className="text-xs font-black text-white uppercase mt-6">Key Syllabus Guidelines:</h4>
                <ul className="text-sm text-gray-400 space-y-2 pl-4 list-disc">
                  <li>Verify terminal and initial conditions prior to evaluation.</li>
                  <li>Incorporate worst-case complexity structures in your coding submissions.</li>
                  <li>Refer to chapter exercises in the prescribed standard textbook to complete weekly DPP assignments.</li>
                </ul>
              </div>
            )}

            {mockPage === 2 && (
              <div className="space-y-4">
                <h3 className="text-base font-black text-blue-300">Section 2: Practical & Laboratory Exercises</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Complete the following conceptual numerical problems to ensure laboratory compliance and exam readiness.</p>
                <div className="bg-[#0e1422] p-5 rounded-2xl border border-[#1e2e4f] text-left">
                  <p className="text-[11px] font-black text-amber-400 tracking-wider">LABORATORY EXERCISE 4.2 • SYSTEM VALIDATION</p>
                  <p className="text-sm text-gray-300 mt-2">Design a system structure and implement boundary criteria with logarithmic efficiency. Compile and run your tests inside the B.Tech computer labs.</p>
                </div>
              </div>
            )}

            {mockPage >= 3 && (
              <div className="space-y-4 text-center py-12">
                <Icon name="checkCircle" size={56} className="mx-auto text-green-400" />
                <h3 className="text-lg font-black text-white">Engineering Syllabus Module Complete!</h3>
                <p className="text-xs text-gray-400 font-semibold max-w-sm mx-auto">Outstanding effort! Verify any conceptual queries in our active Student Doubt forums or check guidelines in our AI chat.</p>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-[#29354e]">
            <button 
              disabled={mockPage === 1}
              onClick={() => setMockPage(prev => Math.max(1, prev - 1))}
              className="px-5 py-2 text-xs font-black bg-[#131b2e] hover:bg-blue-600 text-white rounded-xl border border-[#212d45] disabled:opacity-30 transition-all uppercase tracking-wide"
            >
              Previous Page
            </button>
            <button 
              disabled={mockPage === 4}
              onClick={() => setMockPage(prev => Math.min(4, prev + 1))}
              className="px-5 py-2 text-xs font-black bg-[#131b2e] hover:bg-blue-600 text-white rounded-xl border border-[#212d45] disabled:opacity-30 transition-all uppercase tracking-wide"
            >
              Next Page
            </button>
          </div>
        </div>

        <div className="flex gap-4 max-w-4xl mx-auto w-full">
          <button 
            onClick={() => {
              showToast("PDF document downloaded to device.", "success");
            }}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs py-4 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          >
            <Icon name="download" size={16} /> Download Offline Copy
          </button>
          <button 
            onClick={() => {
              showToast("Academic document share link copied!", "info");
            }}
            className="bg-[#121c32] hover:bg-[#1c2c4f] border border-[#1e2e4f] px-5 rounded-xl text-blue-400 transition-colors"
          >
            <Icon name="share" size={18} />
          </button>
        </div>
      </div>
    );
  };

  const TimetableView = () => (
    <div className="p-8 space-y-8">
      <div className="bg-[#0f172a] p-6 rounded-3xl border border-blue-500/20 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-black text-white uppercase tracking-wider">Engineering Calendar Schedule</h3>
          <p className="text-xs text-gray-400 mt-1">Review lecture halls, labs, and professor roster schedules.</p>
        </div>
        <Badge type="primary">B.Tech Sem-4 Active</Badge>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {['Today', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <button 
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`flex-shrink-0 px-5 py-2.5 text-xs font-black rounded-xl uppercase tracking-wide border transition-all ${
              selectedDay === day 
                ? 'bg-blue-600 text-white border-blue-500 shadow-md' 
                : 'bg-[#090d16] text-gray-400 border-[#1e2e4f] hover:text-gray-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-black uppercase tracking-wider text-gray-400">Assigned Core Lectures</h4>
        <div className="grid gap-4">
          {timetable
            .filter(t => selectedDay === 'Today' || t.day === selectedDay)
            .map(item => (
              <Card key={item.id} className="flex flex-col sm:flex-row gap-6 items-center justify-between p-5">
                <div className="flex items-center gap-5">
                  <div className="text-center bg-[#131e35] p-3 rounded-xl border border-blue-500/20 min-w-[85px]">
                    <span className="text-[10px] font-black uppercase text-blue-400 block tracking-wider">{item.day}</span>
                    <span className="text-sm font-black text-white block mt-1 leading-none">{item.time.split(' ')[0]}</span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.time.split(' ')[1]}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {item.subject}
                      </span>
                      <span className="text-xs text-gray-500 font-extrabold uppercase">
                        🚪 Classroom: {item.room}
                      </span>
                    </div>
                    <h5 className="font-extrabold text-white text-sm mt-1">{item.topic}</h5>
                    <p className="text-[10px] text-gray-400">Faculty Coordinator: {item.faculty}</p>
                  </div>
                </div>
                <div>
                  <button 
                    onClick={() => {
                      showToast(`Lab environment pipeline initialized for ${item.topic}`, "success");
                    }}
                    className="bg-blue-600 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl hover:bg-blue-700 transition-all uppercase tracking-wide"
                  >
                    Open Lab Portal
                  </button>
                </div>
              </Card>
            ))}

          {timetable.filter(t => selectedDay === 'Today' || t.day === selectedDay).length === 0 && (
            <div className="text-center py-12 border border-dashed border-[#1f2a45] rounded-3xl text-gray-500">
              <Icon name="calendar" size={44} className="mx-auto mb-3 text-gray-600" />
              <p className="text-sm font-bold">No academic lectures scheduled for this selected day</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const AttendanceView = () => (
    <div className="p-8 space-y-8">
      <div className="bg-[#0f172a] p-6 rounded-3xl border border-blue-500/20 flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-black text-white uppercase tracking-wider">Attendance Verification Command</h3>
          <p className="text-xs text-gray-400">Maintain over 75% attendance to qualify for terminal exams.</p>
        </div>
        <Badge type="gold">75% MANDATE RULE</Badge>
      </div>

      <Card className="bg-gradient-to-tr from-blue-900/30 via-[#0d1425] to-[#121c32] border-blue-500/30">
        <div className="flex items-center gap-2 mb-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-black text-green-400 uppercase tracking-widest leading-none">
            LECTURE HALL BEACON ONLINE
          </span>
        </div>
        <h4 className="text-base font-black text-white">Geofenced Interactive Check-In</h4>
        <p className="text-xs text-gray-300 leading-relaxed mt-2 max-w-xl">
          Classroom beacon detects active presence in CSE LH-102. Retrieve today's verification pin code projected onto the board by Dr. Prasad.
        </p>
        
        {attendanceChecked ? (
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 mt-6 text-center text-green-400 font-extrabold text-sm flex items-center justify-center gap-2">
            <Icon name="checkCircle" size={18} /> GEOFENCE ATTENDANCE LOGGED SUCCESSFULLY!
          </div>
        ) : (
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">
            <input 
              type="text" 
              placeholder="Enter Projected Verification PIN (e.g. CS-DSA-402)"
              id="faculty-pin-input"
              className="flex-1 bg-[#080c16] text-white border border-[#1e2e4f] rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-blue-500"
            />
            <button 
              onClick={() => {
                const pinInput = document.getElementById('faculty-pin-input');
                if (pinInput && pinInput.value.toUpperCase() === 'CS-DSA-402') {
                  setAttendanceChecked(true);
                  const updatedData = attendanceData.map(stat => 
                    stat.subject.includes('Data Structures') ? { ...stat, present: stat.present + 1, percent: Math.round(((stat.present + 1) / stat.total) * 100) } : stat
                  );
                  setAttendanceData(updatedData);
                  showToast("Attendance logged successfully!", "success");
                } else {
                  showToast("Invalid security PIN code entered.", "danger");
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-3 px-6 rounded-xl uppercase tracking-wider transition-all"
            >
              Verify Geofence Check-in
            </button>
          </div>
        )}
      </Card>

      <div className="space-y-4">
        <h4 className="text-sm font-black uppercase tracking-wider text-gray-400">Current Course Breakdown</h4>
        <div className="grid gap-4">
          {attendanceData.map(stat => (
            <Card key={stat.subject} className="flex justify-between items-center p-5">
              <div className="space-y-1">
                <h5 className="font-extrabold text-white text-sm">{stat.subject}</h5>
                <p className="text-xs text-gray-400">{stat.present} attended out of {stat.total} logged hours</p>
              </div>
              <div className="text-right">
                <span className={`text-base font-black ${stat.percent >= 85 ? 'text-green-400' : stat.percent >= 75 ? 'text-amber-400' : 'text-red-400'}`}>
                  {stat.percent}%
                </span>
                <p className="text-[9px] text-gray-500 font-bold uppercase mt-1">Attendance Status</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const EntranceExamsView = () => (
    <div className="p-8 space-y-8">
      <div className="bg-[#0f172a] p-6 rounded-3xl border border-blue-500/20">
        <h3 className="text-lg font-black text-white uppercase tracking-wider">Eligible Entrance Exams Center</h3>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
          Prepare for core national and global qualifying examinations with comprehensive eligibility criteria, syllabus benchmarks, and resource details.
        </p>
      </div>

      <div className="grid gap-6">
        {exams.map(exam => (
          <Card key={exam.id} className="space-y-4">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h4 className="text-base font-black text-white flex items-center gap-2">
                <Icon name="graduationCap" className="text-blue-500" size={20} /> {exam.title}
              </h4>
              <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
                Qualifying Exam
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2 text-xs leading-relaxed text-gray-300">
              <div className="space-y-2">
                <p><strong className="text-white block uppercase tracking-wider text-[10px] text-blue-400">Eligibility Criteria:</strong> {exam.eligibility}</p>
                <p><strong className="text-white block uppercase tracking-wider text-[10px] text-blue-400">Syllabus Overview:</strong> {exam.subjects}</p>
              </div>
              <div className="space-y-2">
                <p><strong className="text-white block uppercase tracking-wider text-[10px] text-blue-400">Registration Deadlines:</strong> {exam.deadlines}</p>
                <p><strong className="text-white block uppercase tracking-wider text-[10px] text-blue-400">Admissions Impact:</strong> {exam.importance}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e2e4f] flex justify-end">
              <button 
                onClick={() => {
                  showToast(`Preparation resources unlocked for ${exam.id.toUpperCase()}`, "success");
                  setCurrentView('notes');
                }}
                className="bg-[#121c32] hover:bg-[#1c2c4d] border border-[#1e2e4f] text-blue-400 text-xs font-black py-2.5 px-4 rounded-xl uppercase tracking-wider transition-all"
              >
                Access Study Materials
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const RulesView = () => {
    const filteredRules = rules.filter(r => 
      (rulesCategory === 'all' || r.category === rulesCategory) &&
      (r.title.toLowerCase().includes(rulesSearch.toLowerCase()) || r.desc.toLowerCase().includes(rulesSearch.toLowerCase()))
    );

    return (
      <div className="p-8 space-y-8">
        <div className="bg-[#0f172a] p-6 rounded-3xl border border-blue-500/20">
          <h3 className="text-lg font-black text-white uppercase tracking-wider">University Rules & Regulations</h3>
          <p className="text-xs text-gray-400 mt-1">Search the official university handbook and academic directives.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#0d1425] p-4 rounded-2xl border border-[#1e2e4f]">
          <div className="flex bg-[#080d16] p-1 rounded-xl border border-[#1e2e4f] shrink-0">
            {['academic', 'conduct', 'safety', 'all'].map(cat => (
              <button 
                key={cat}
                onClick={() => setRulesCategory(cat)}
                className={`px-4 py-2 text-xs font-black rounded-lg uppercase tracking-wide transition-all ${
                  rulesCategory === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:max-w-md">
            <input 
              type="text" 
              placeholder="Search regulations (e.g. attendance, lab)..."
              value={rulesSearch}
              onChange={(e) => setRulesSearch(e.target.value)}
              className="w-full bg-[#080c16] text-white border border-[#1e2e4f] rounded-xl pl-10 pr-4 py-3 text-xs font-bold focus:outline-none focus:border-blue-500"
            />
            <div className="absolute left-3.5 top-3.5 text-gray-500">
              <Icon name="search" size={16} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredRules.map((rule, idx) => (
            <Card key={idx} className="relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-black uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Category: {rule.category}
                  </span>
                  <Icon name="shield" size={18} className="text-blue-500" />
                </div>
                <h4 className="font-extrabold text-white text-base leading-snug">{rule.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{rule.desc}</p>
              </div>
            </Card>
          ))}
          {filteredRules.length === 0 && (
            <div className="md:col-span-2 text-center py-12 text-gray-500">
              <Icon name="shield" size={44} className="mx-auto mb-3 text-gray-600" />
              <p className="text-sm font-bold">No university rules matched your search query</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const ChatbotView = () => (
    <div className="p-8 flex flex-col min-h-[calc(100vh-120px)] max-w-5xl mx-auto w-full">
      <div className="bg-[#0f172a] p-5 rounded-t-3xl border-t border-x border-blue-500/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center border border-blue-400/20 text-yellow-400 shadow-md">
            <Icon name="zap" size={20} className="fill-current" />
          </div>
          <div>
            <h3 className="text-base font-black text-white leading-none">AI Study Assistant</h3>
            <span className="text-[10px] text-green-400 font-bold tracking-wider uppercase mt-1 inline-block">● Real-time Learning Support</span>
          </div>
        </div>
        <button 
          onClick={() => {
            setChatMessages([{ sender: 'bot', text: 'Conversational memory reset successfully! Ask me about syllabus guidelines or math formulas.' }]);
            showToast("Conversation memory cleared.", "info");
          }}
          className="text-xs font-extrabold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
        >
          Reset Chat
        </button>
      </div>

      <div className="flex-1 bg-[#090e1a]/80 border-x border-b border-blue-500/20 p-6 overflow-y-auto space-y-4 max-h-[500px] min-h-[400px]">
        {chatMessages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xl rounded-2xl p-4 border text-xs leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 border-blue-500 text-white font-semibold' 
                  : 'bg-[#0d1527] border-[#1e2e4f] text-gray-200'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#0d1527] border-[#1e2e4f] text-gray-400 rounded-2xl px-4 py-3 text-xs font-semibold animate-pulse">
              AI Study Assistant is writing...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Suggested quick prompt buttons */}
      <div className="bg-[#0b1120] px-6 py-3 border-x border-blue-500/20 flex gap-2 flex-wrap text-[10px] font-black uppercase text-gray-400 tracking-wider">
        <button 
          onClick={() => setUserInput("What is the time complexity of Red-Black Tree rotation?")} 
          className="bg-[#0f172a] hover:bg-blue-900/20 hover:text-blue-300 border border-[#1e2e4f] px-3.5 py-1.5 rounded-lg transition-colors"
        >
          ⏱️ Red-Black Tree Complexity
        </button>
        <button 
          onClick={() => setUserInput("Explain the 75% attendance criteria rule.")} 
          className="bg-[#0f172a] hover:bg-blue-900/20 hover:text-blue-300 border border-[#1e2e4f] px-3.5 py-1.5 rounded-lg transition-colors"
        >
          📜 75% Attendance policy
        </button>
        <button 
          onClick={() => setUserInput("How to prepare effectively for the GATE Computer Science exam?")} 
          className="bg-[#0f172a] hover:bg-blue-900/20 hover:text-blue-300 border border-[#1e2e4f] px-3.5 py-1.5 rounded-lg transition-colors"
        >
          🎓 GATE CS Strategy
        </button>
      </div>

      <div className="bg-[#0d1425] p-4 rounded-b-3xl border-x border-b border-blue-500/20 flex gap-3">
        <input 
          type="text" 
          placeholder="Ask your engineering course or university rule question..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
          className="flex-1 bg-[#080d16] text-white border border-[#1e2e4f] rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-blue-500"
        />
        <button 
          onClick={handleSendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl transition-all flex items-center justify-center shrink-0 shadow-lg"
        >
          <Icon name="send" size={16} />
        </button>
      </div>
    </div>
  );

  const ReportIssueScreen = () => {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
      return (
        <div className="p-8 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center">
          <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full flex items-center justify-center mb-6">
            <Icon name="checkCircle" size={36} />
          </div>
          <h2 className="text-2xl font-black text-white mb-2">Campus Anomaly Logged Securely</h2>
          <p className="text-gray-400 text-xs leading-relaxed mb-8 max-w-sm">
            University maintenance planners have been notified of your report. Work team tracking updates will compile inside the Admin Portal list.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setCurrentView('dashboard');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-3.5 px-6 rounded-xl uppercase tracking-wider shadow-lg transition-all"
          >
            Return to Dashboard
          </button>
        </div>
      );
    }

    return (
      <div className="p-8 space-y-6 max-w-2xl mx-auto w-full">
        <div className="bg-[#0f172a] p-5 rounded-3xl border border-blue-500/20">
          <h3 className="text-lg font-black text-white uppercase tracking-wider">Improve Academic Facilities</h3>
          <p className="text-xs text-gray-400 mt-1">In compliance with SDG 4, log any facility environment anomalies for rapid intervention.</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-extrabold uppercase text-gray-400 mb-2">Attach Anomaly Photo (Optional)</label>
            <div 
              onClick={() => showToast("Simulated device camera capture triggered.", "info")}
              className="h-36 bg-[#080d16] border-2 border-dashed border-[#1e2e4f] rounded-2xl flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-blue-900/10 hover:border-blue-500/30 transition-all"
            >
              <Icon name="camera" size={32} className="mb-2 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-wider">Upload anomaly snapshot</span>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold uppercase text-gray-400 mb-2">Anomalous Category</label>
            <select id="issue-category-sel" className="w-full bg-[#080d16] text-white border border-[#1e2e4f] rounded-xl px-4 py-3.5 text-xs font-bold focus:outline-none focus:border-blue-500">
              <option value="">Choose category...</option>
              <option value="Water Leakage">Water Leakage / HVAC Outage</option>
              <option value="Cleanliness">Cleanliness & Hygiene Issues</option>
              <option value="Broken Equipment">Faulty Lab Computers & Projectors</option>
              <option value="IT / Network Issue">Wi-Fi & Network Issues</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold uppercase text-gray-400 mb-2">Exact Block / Lecture Room Location</label>
            <input 
              type="text" 
              id="issue-loc-input"
              placeholder="e.g. CSE Block, Seminar Room 104"
              className="w-full bg-[#080d16] text-white border border-[#1e2e4f] rounded-xl px-4 py-3.5 text-xs font-bold focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <button 
          onClick={() => {
            const catEl = document.getElementById('issue-category-sel');
            const locEl = document.getElementById('issue-loc-input');
            if (catEl?.value && locEl?.value) {
              setIssues([{
                id: issues.length + 1,
                type: catEl.value,
                location: locEl.value,
                status: 'Pending',
                date: 'Just now'
              }, ...issues]);
              setSubmitted(true);
              showToast("Campus anomaly submitted.", "success");
            } else {
              showToast("Fill in all facility reporting requirements first.", "danger");
            }
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-extrabold shadow-md uppercase tracking-wider text-xs transition-all"
        >
          Submit Issue
        </button>
      </div>
    );
  };

  const NotificationScreen = () => (
    <div className="p-8 space-y-4 max-w-3xl mx-auto w-full">
      <div className="bg-[#0f172a] p-5 rounded-3xl border border-blue-500/20 mb-4">
        <h3 className="text-lg font-black text-white uppercase tracking-wider">Live Campus Alerts</h3>
        <p className="text-xs text-gray-400 mt-1">Real-time alerts, verified maintenance updates, and support review approvals.</p>
      </div>

      <div className="space-y-4">
        {notifications.map(n => (
          <div key={n.id} className="flex gap-4 items-start p-4 border-b border-[#162136] last:border-0 bg-[#0d1425] rounded-2xl">
            <div className={`p-3 rounded-xl shrink-0 ${
              n.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
              n.type === 'warning' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
              'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}>
              <Icon name={n.icon} size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-200 font-bold leading-relaxed">{n.text}</p>
              <span className="text-[10px] text-gray-500 mt-2 block font-semibold">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const getHeaderTitle = () => {
    if (currentView === 'report') return 'Report Campus Anomaly';
    if (currentView === 'notifications') return 'Live Campus Alerts';
    if (currentView === 'timetable') return 'Syllabus Timetable';
    if (currentView === 'attendance') return 'Geofenced Check-In';
    if (currentView === 'notes') return 'Engineering Vault';
    if (currentView === 'pdf-previewer') return 'PDF Viewer';
    if (currentView === 'exams') return 'Eligible Entrance Exams';
    if (currentView === 'rules') return 'Rules & Guidelines';
    if (currentView === 'chatbot') return 'AI Study Support';
    if (role === 'student') return 'Hi, Alex 👋';
    if (role === 'faculty') return 'Faculty Suite';
    if (role === 'admin') return 'Admin Dashboard';
    return '';
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-gray-100 font-sans selection:bg-blue-500 selection:text-white flex flex-col md:flex-row relative">
      <ToastContainer />

      {/* Global Exit/Log out top button */}
      {currentView !== 'login' && (
        <button 
          onClick={() => {
            setCurrentView('login');
            setRole(null);
            setAttendanceChecked(false);
            showToast("Role session terminated successfully.", "info");
          }} 
          className="absolute top-4 right-24 z-40 bg-red-600/15 hover:bg-red-600 text-red-400 hover:text-white text-[11px] px-3.5 py-2 font-black rounded-xl border border-red-500/20 transition-all uppercase tracking-wider"
        >
          Exit Role
        </button>
      )}

      {currentView === 'login' ? (
        <LoginScreen />
      ) : (
        <>
          <Sidebar />

          <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden bg-[#070b12]">
            <TopBar title={getHeaderTitle()} />
            
            <main className="flex-1 pb-16">
              {currentView === 'dashboard' && role === 'student' && <StudentDashboard />}
              {currentView === 'dashboard' && role === 'faculty' && <FacultyDashboard />}
              {currentView === 'dashboard' && role === 'admin' && <AdminDashboard />}
              {currentView === 'notes' && <NotesHubView />}
              {currentView === 'pdf-previewer' && <PdfPreviewerView />}
              {currentView === 'timetable' && <TimetableView />}
              {currentView === 'attendance' && <AttendanceView />}
              {currentView === 'report' && <ReportIssueScreen />}
              {currentView === 'notifications' && <NotificationScreen />}
              {currentView === 'exams' && <EntranceExamsView />}
              {currentView === 'rules' && <RulesView />}
              {currentView === 'chatbot' && <ChatbotView />}
            </main>
          </div>
        </>
      )}

      {/* Radial backdrop glows */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-radial from-[#0d162d] via-[#05080e] to-black">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[160px]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[160px]"></div>
      </div>
    </div>
  );
};

export default App;

