import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Scale,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Ban,
  Users,
} from "lucide-react";

const Terms = () => {
  const navigate = useNavigate();

  const rules = [
    "Sirf agriculture aur farming related advertisements post karen.",
    "Fake, misleading ya incorrect information provide karna mana hai.",
    "Buyer aur seller apni deals ki verification khud karen.",
    "Duplicate ads ya spam content account suspension ka sabab ban sakta hai.",
  ];

  const prohibited = [
    "Fake products ya services promote karna.",
    "Abusive, offensive ya illegal content share karna.",
    "Dusre users ko mislead ya scam karne ki koshish karna.",
    "Platform ko damage ya misuse karne ki koshish karna.",
  ];

  return (
    <div className="min-h-screen bg-[#0a1428] py-12 px-4">
      {" "}
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-all mb-10 group"
        >
          {" "}
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          <span className="text-sm font-semibold uppercase tracking-widest">
            Back{" "}
          </span>{" "}
        </button>
        ```
        {/* Main Container */}
        <div className="bg-slate-900/60 border border-slate-700/50 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex p-5 bg-emerald-500/10 rounded-3xl mb-6">
              <Scale className="text-emerald-500" size={52} strokeWidth={2} />
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Terms of Service
            </h1>

            <p className="text-slate-400 mt-3 text-lg md:text-xl">
              Rules and responsibilities for using AgriConnect
            </p>

            <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-sm">
              <Calendar size={16} />
              <span>Last Updated: June 01, 2026</span>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-6 mb-8 flex gap-4">
            <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={28} />

            <div>
              <h3 className="text-amber-400 font-bold mb-2">
                Please Read Carefully
              </h3>

              <p className="text-slate-300 leading-relaxed">
                AgriConnect use karne se pehle in terms ko parhna zaroori hai.
                Platform use karne ka matlab hai ke aap in tamam rules se
                mutafiq hain.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6">
              <ShieldCheck className="text-emerald-500 mb-4" size={30} />

              <h3 className="text-white font-bold text-xl mb-2">Safe Usage</h3>

              <p className="text-slate-400 text-sm">
                Platform ko responsibly aur lawful purpose ke liye use karen.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6">
              <Users className="text-sky-500 mb-4" size={30} />

              <h3 className="text-white font-bold text-xl mb-2">
                User Responsibility
              </h3>

              <p className="text-slate-400 text-sm">
                Har user apni listings aur transactions ka khud zimmedar hai.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6">
              <Ban className="text-red-500 mb-4" size={30} />

              <h3 className="text-white font-bold text-xl mb-2">Violations</h3>

              <p className="text-slate-400 text-sm">
                Rules ki khilaf warzi par account suspend ya remove kiya ja
                sakta hai.
              </p>
            </div>
          </div>

          {/* Platform Rules */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">
              Platform Rules
            </h2>

            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl"
                >
                  <CheckCircle2
                    className="text-emerald-500 shrink-0 mt-1"
                    size={24}
                  />

                  <p className="text-slate-300">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prohibited Activities */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">
              Prohibited Activities
            </h2>

            <div className="space-y-4">
              {prohibited.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl"
                >
                  <Ban className="text-red-500 shrink-0 mt-1" size={22} />

                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-slate-800/40 border border-slate-700 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Important Notice
            </h2>

            <p className="text-slate-400 leading-relaxed">
              AgriConnect sirf ek digital marketplace provide karta hai. Buyers
              aur sellers ke darmiyan hone wali deals, payments, deliveries ya
              disputes ki direct responsibility platform ki nahi hogi. Har
              transaction apni verification ke baad hi complete karen.
            </p>
          </div>
        </div>
        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-10">
          By using AgriConnect, you agree to these Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Terms;
