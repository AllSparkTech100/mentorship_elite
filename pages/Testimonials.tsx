import React, { useState } from 'react';
import { Quote, ThumbsUp, ThumbsDown, Star } from 'lucide-react';

const testimonials = [
  {
    text: "The strategic insights I gained from my mentor at Goldman Sachs were instrumental. I secured a Summer Associate position in the M&A group within 3 months of starting the program.",
    name: "Sarah Jenkins",
    role: "IB Analyst @ Goldman Sachs",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    text: "Navigating the technical interviews at Meta seemed impossible until I was paired with a Senior Engineer who had been through the process. Their roadmap was my secret weapon.",
    name: "Marcus Thorne",
    role: "Software Engineer @ Meta",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    text: "A truly elite network. The mentorship wasn't just about my resume; it was about professional presence and learning how to communicate like a partner at a Magic Circle firm.",
    name: "Elena Rodriguez",
    role: "Associate @ Clifford Chance",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    text: "Elite Mentors gave me access to leaders I could never reach on LinkedIn. The precision-focused guidance for my MBA application was the reason I got into Harvard.",
    name: "David Chen",
    role: "MBA Candidate @ HBS",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    text: "Switching from engineering to strategy consulting was daunting. My mentor broke down the case study method in a way that finally clicked. I start at BCG next month.",
    name: "Sophie Alpert",
    role: "Consultant @ BCG",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    text: "The networking opportunities alone are worth 10x the investment. I was introduced to my current firm's VP through an Elite Mentors private dinner event.",
    name: "James Wilson",
    role: "Private Equity Associate",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop"
  }
];

const categories = [
  "All Stories", "Investment Banking", "Big Tech", "Management Consulting", "Venture Capital", "Corporate Law"
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("All Stories");

  return (
    <div className="bg-[#fcfcfd] animate-in min-h-screen pt-12">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#e8efff] text-[#2b63d9] text-[10px] font-bold tracking-widest uppercase mb-6">
            Trusted by 5,000+ Professionals
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-8 leading-tight tracking-tight">
            Stories of Success from the Next Generation of Leaders
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Join a global community of high-achievers who accelerated their careers through our elite mentorship network and personalized guidance.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="max-w-7xl mx-auto overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex justify-center items-center space-x-3 whitespace-nowrap px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 border ${
                  activeTab === cat 
                    ? "bg-[#2b63d9] text-white border-transparent" 
                    : "bg-[#f1f4f9] text-slate-500 border-transparent hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div>
                <Quote className="text-[#2b63d9] fill-[#2b63d9] opacity-20 mb-6" size={28} />
                <p className="text-[#4b5563] text-[15px] leading-relaxed mb-10 font-medium">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-[#2b63d9] font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Feedback Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-16">Verified Community Feedback</h2>
          <div className="space-y-12">
            {[
              {
                name: "Ambitious Mentee",
                date: "2 weeks ago",
                text: "The level of detail provided by my mentor was exceptional. The platform itself feels premium and well-curated. Every interaction adds value.",
                likes: 24
              },
              {
                name: "Ivy League Candidate",
                date: "1 month ago",
                text: "Successfully navigated the application process with the help of my mentor. A high-trust environment where privacy and ambition are prioritized equally.",
                likes: 18
              }
            ].map((feedback, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                    <div>
                      <h4 className="text-[14px] font-bold text-slate-900">{feedback.name}</h4>
                      <p className="text-[11px] text-slate-400 font-medium">{feedback.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                </div>
                <p className="text-[#4b5563] text-[14px] leading-relaxed">
                  {feedback.text}
                </p>
                <div className="flex items-center space-x-6 text-slate-400">
                  <button className="flex items-center space-x-2 text-[12px] font-bold hover:text-blue-600 transition-colors">
                    <ThumbsUp size={14} /> <span>{feedback.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-[12px] font-bold hover:text-red-500 transition-colors">
                    <ThumbsDown size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1e51c8] rounded-[2rem] py-20 px-8 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Ready to Write Your Own Success Story?
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">
                Our spots are limited and application-based. Start your journey toward excellence today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-12 py-4 bg-white text-[#1e51c8] font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-all duration-200">
                  Apply Now
                </button>
                <button className="w-full sm:w-auto px-12 py-4 bg-[#3b6fe9] text-white font-bold rounded-xl border border-white/20 hover:bg-[#3262d4] transition-all duration-200">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;