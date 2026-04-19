import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";

const Terms = () => {
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

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
            <Scale size={32} />
          </div>
          <h1 className="text-3xl font-black text-white">Terms of Service</h1>
        </div>

        <div className="space-y-4">
          <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl flex gap-3 text-amber-200 text-sm mb-6">
            <AlertTriangle size={20} className="shrink-0" />
            <p>App use karne se pehle hamare rules lazmi parh len.</p>
          </div>

          {[
            "Sirf kheti bari se mutaliq ads lagayen.",
            "Ghalat information dena sakht mana hai.",
            "Deal karte waqt khud ehtiyat barten.",
            "Spamming ya bar bar ek hi ad lagane se account ban ho sakta hai.",
          ].map((rule, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-slate-900/30 rounded-2xl border border-slate-700/30"
            >
              <CheckCircle2 className="text-emerald-500" size={18} />
              <span className="text-slate-300 text-sm">{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
