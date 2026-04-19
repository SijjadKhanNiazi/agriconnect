import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  HelpCircle,
  MessageCircle,
  Mail,
  PhoneCall,
} from "lucide-react";

const Help = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-slate-800/30 border border-slate-700/50 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl shadow-2xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors mb-8 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-xs font-bold uppercase tracking-widest">
            Back
          </span>
        </button>

        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-emerald-500/10 rounded-3xl text-emerald-500 mb-4">
            <HelpCircle size={40} />
          </div>
          <h1 className="text-3xl font-black text-white">Help Center</h1>
          <p className="text-slate-400 mt-2">
            Hum aapki madad ke liye hazir hain
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <a
            href="https://wa.me/03144919624"
            className="group flex items-center justify-between p-6 bg-slate-900/50 rounded-[2.5rem] border border-slate-700/50 hover:border-emerald-500/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500 rounded-2xl text-slate-950 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold">WhatsApp Support</h3>
                <p className="text-xs text-slate-500">For instant help</p>
              </div>
            </div>
            <span className="text-emerald-500 font-black text-xs">CHAT</span>
          </a>

          <div className="flex items-center gap-4 p-6 bg-slate-900/50 rounded-[2.5rem] border border-slate-700/50">
            <div className="p-3 bg-slate-800 rounded-2xl text-emerald-500">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold italic text-sm">
                sijjadkhan603@gmail.com
              </h3>
              <p className="text-xs text-slate-500">Email us anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
