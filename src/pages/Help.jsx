import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  HelpCircle,
  MessageCircle,
  Mail,
  PhoneCall,
  Clock,
  Users,
} from "lucide-react";

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a1428] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-all mb-10 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Back
          </span>
        </button>

        {/* Main Container */}
        <div className="bg-slate-900/60 border border-slate-700/50 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex p-5 bg-emerald-500/10 rounded-3xl mb-6">
              <HelpCircle
                className="text-emerald-500"
                size={52}
                strokeWidth={2}
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Help Center
            </h1>

            <p className="text-slate-400 mt-3 text-lg md:text-xl">
              Hum aapki madad ke liye hazir hain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Side */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Support
              </h2>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923144919624"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-8 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 rounded-3xl transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-emerald-500 rounded-2xl text-slate-950 group-hover:scale-110 transition-transform">
                    <MessageCircle size={32} />
                  </div>

                  <div>
                    <h3 className="text-white text-2xl font-bold">
                      WhatsApp Support
                    </h3>

                    <p className="text-emerald-400 text-sm mt-1">
                      Instant help • Recommended
                    </p>
                  </div>
                </div>

                <div className="hidden md:block text-emerald-500 font-black text-lg tracking-widest">
                  CHAT →
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center justify-between p-8 bg-slate-800/60 border border-slate-700 rounded-3xl">
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-slate-700 rounded-2xl text-emerald-500">
                    <Mail size={32} />
                  </div>

                  <div>
                    <h3 className="text-white text-2xl font-bold">
                      Email Support
                    </h3>

                    <a
                      href="mailto:sijjadkhan603@gmail.com"
                      className="text-emerald-400 hover:underline block mt-1"
                    >
                      sijjadkhan603@gmail.com
                    </a>

                    <p className="text-slate-400 text-sm mt-1">
                      Reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-8 bg-slate-800/60 border border-slate-700 rounded-3xl">
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-slate-700 rounded-2xl text-emerald-500">
                    <PhoneCall size={32} />
                  </div>

                  <div>
                    <h3 className="text-white text-2xl font-bold">
                      Phone Support
                    </h3>

                    <p className="text-emerald-400 text-xl font-medium">
                      0314-4919624
                    </p>

                    <p className="text-slate-400 text-sm mt-1">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Support Info */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-6">
                  Support Info
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <Clock className="text-emerald-500 mt-1" size={26} />

                    <div>
                      <p className="font-medium text-white">Response Time</p>

                      <p className="text-slate-400 text-sm">
                        WhatsApp: Instant
                        <br />
                        Email & Call: 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Users className="text-emerald-500 mt-1" size={26} />

                    <div>
                      <p className="font-medium text-white">Available For</p>

                      <p className="text-slate-400 text-sm">
                        Farmers, Buyers & Sellers in Mianwali Region
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 mt-6 flex-1 flex flex-col justify-end">
                <div>
                  <h2 className="text-xl font-bold text-white mb-6">
                    Quick Tips
                  </h2>

                  <ul className="space-y-5 text-sm text-slate-300">
                    <li className="flex gap-3">
                      <span className="text-emerald-500 text-xl">•</span>
                      Ad post karte waqt clear photos aur complete details add
                      karen
                    </li>

                    <li className="flex gap-3">
                      <span className="text-emerald-500 text-xl">•</span>
                      Deal final karne se pehle personally confirm karen
                    </li>

                    <li className="flex gap-3">
                      <span className="text-emerald-500 text-xl">•</span>
                      Koi problem ho to screenshot ke sath WhatsApp karen
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-10">
          AgriConnect — Connecting Farmers of Mianwali
        </p>
      </div>
    </div>
  );
};

export default Help;
