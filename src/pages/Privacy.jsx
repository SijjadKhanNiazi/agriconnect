import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Lock,
  EyeOff,
  Database,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const Privacy = () => {
  const navigate = useNavigate();

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
              <Lock className="text-emerald-500" size={52} strokeWidth={2} />
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Privacy Policy
            </h1>

            <p className="text-slate-400 mt-3 text-lg md:text-xl">
              Your privacy and data security matter to us
            </p>
          </div>

          {/* Intro */}
          <div className="bg-slate-800/40 border border-slate-700 rounded-3xl p-8 mb-8">
            <p className="text-slate-300 leading-relaxed text-lg">
              AgriConnect par aapki privacy hamari sab se bari priority hai. Hum
              aapki personal information ko secure rakhne ke liye modern
              security practices use karte hain aur aapka data kisi third party
              ko sell nahi karte.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-3xl">
              <EyeOff className="text-emerald-500 mb-4" size={30} />

              <h3 className="text-white font-bold text-xl mb-2">
                Password Protection
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Aapka password encrypted form mein store kiya jata hai. Kisi bhi
                admin ya user ko aapka original password nazar nahi aata.
              </p>
            </div>

            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-3xl">
              <Database className="text-sky-500 mb-4" size={30} />

              <h3 className="text-white font-bold text-xl mb-2">
                Limited Data Usage
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Aapka phone number aur profile information sirf platform
                functionality aur buyer-seller communication ke liye use ki jati
                hai.
              </p>
            </div>

            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-3xl">
              <ShieldCheck className="text-emerald-500 mb-4" size={30} />

              <h3 className="text-white font-bold text-xl mb-2">
                Secure Platform
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Hum unauthorized access se bachao ke liye security measures
                implement karte hain taake users ka data protected rahe.
              </p>
            </div>

            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-3xl">
              <UserCheck className="text-sky-500 mb-4" size={30} />

              <h3 className="text-white font-bold text-xl mb-2">
                User Control
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Aap apni profile information update ya remove kar sakte hain aur
                platform ke istemal par control rakhte hain.
              </p>
            </div>
          </div>

          {/* Policy Details */}
          <div className="bg-slate-800/40 border border-slate-700 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              What Information We Collect
            </h2>

            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <span className="text-emerald-500">•</span>
                Name, phone number and account information.
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-500">•</span>
                Advertisements and product listings posted on AgriConnect.
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-500">•</span>
                Basic usage information to improve platform performance.
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-500">•</span>
                Communication details required for buyer and seller interaction.
              </li>
            </ul>
          </div>
        </div>
        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-10">
          AgriConnect — Your Data, Your Privacy, Our Responsibility
        </p>
      </div>
    </div>
  );
};

export default Privacy;
