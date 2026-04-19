import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, ShieldCheck, EyeOff, Database } from "lucide-react";

const Privacy = () => {
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
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-black text-white">Privacy Policy</h1>
        </div>

        <div className="space-y-6">
          <p className="text-slate-400 leading-relaxed">
            AgriConnect par aapki privacy hamari awwalen tarjih hai. Hum aapka
            data bechte nahi hain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-900/50 rounded-3xl border border-slate-700/50">
              <EyeOff className="text-emerald-500 mb-3" size={24} />
              <h3 className="text-white font-bold mb-1">Secret Data</h3>
              <p className="text-xs text-slate-400">
                Aapka password encrypted hai jo koi nahi parh sakta.
              </p>
            </div>
            <div className="p-5 bg-slate-900/50 rounded-3xl border border-slate-700/50">
              <Database className="text-sky-500 mb-3" size={24} />
              <h3 className="text-white font-bold mb-1">Limited Access</h3>
              <p className="text-xs text-slate-400">
                Aapka phone number sirf ads ke liye use hota hai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
