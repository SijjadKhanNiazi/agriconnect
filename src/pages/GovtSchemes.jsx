import React from "react";
import { Landmark, CreditCard, Sun, Tractor, CheckCircle2 } from "lucide-react";

const GovtSchemes = () => {
  const schemes = [
    {
      title: "Nawaz Sharif Kissan Card",
      icon: <CreditCard size={32} className="text-emerald-500" />,
      status: "Active",
      description: "Punjab hukoomat ki janib se kisanon ke liye Kissan Card. Is card ke zariye aap khaad, beej aur spray par direct subsidy hasil kar sakte hain.",
      requirements: [
        "Zameen ka malkiyat record (Fard)",
        "Valid CNIC",
        "Mobile Number registered on CNIC",
        "Bank of Punjab (BOP) account"
      ],
      action: "Register at BOP Branch or Agriculture Office"
    },
    {
      title: "Chief Minister Green Tractor Scheme",
      icon: <Tractor size={32} className="text-rose-500" />,
      status: "Upcoming",
      description: "Punjab mein 10 lakh rupay tak ki subsidy ke sath naye tractors ki farahmi. Yeh scheme chotay kisanon ki asani ke liye muta'arif karwayi gayi hai.",
      requirements: [
        "Zameen 1 se 50 acre tak ho",
        "Computerized Fard",
        "Pichlay 5 saal mein koi tractor scheme na li ho"
      ],
      action: "Apply via Punjab Agriculture App"
    },
    {
      title: "Solar Tube Well Scheme",
      icon: <Sun size={32} className="text-amber-500" />,
      status: "Active",
      description: "Bijli ke billon se nijaat ke liye hukoomat 50% se 60% tak subsidy par solar tube wells faraham kar rahi hai.",
      requirements: [
        "Apna Tube well / Boring mojood ho",
        "Irrigation department se NOC",
        "Zameen ki milkiyat"
      ],
      action: "Contact District Agriculture Engineer"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-12 w-full">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-flex items-center justify-center bg-sky-500/10 p-4 rounded-full mb-2 border border-sky-500/20">
          <Landmark size={40} className="text-sky-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Hukoomati <span className="text-sky-500">Schemes</span>
        </h1>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg">
          Punjab hukoomat ki janib se kisanon ke liye jooda sahooliyaat, subsidies aur schemes ki mukammal maloomat.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {schemes.map((scheme, index) => (
          <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-[2rem] p-6 md:p-8 hover:bg-slate-800/50 hover:border-sky-500/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-slate-900/80 px-4 py-2 rounded-bl-2xl rounded-tr-[2rem] border-b border-l border-slate-700/50 font-bold text-xs uppercase tracking-widest text-slate-300 z-10">
              Status: <span className={scheme.status === 'Active' ? 'text-emerald-400' : 'text-amber-400'}>{scheme.status}</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
              <div className="shrink-0 bg-slate-900 p-6 rounded-2xl border border-slate-700/50 group-hover:scale-105 transition-transform flex items-center justify-center h-24 w-24">
                {scheme.icon}
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{scheme.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{scheme.description}</p>
                </div>
                
                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700/30">
                  <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Zaroori Kagzat / Sharaait:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {scheme.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 bg-sky-500/10 px-4 py-2 rounded-lg border border-sky-500/20">
                  Action: {scheme.action}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-slate-500 text-sm font-medium max-w-2xl mx-auto">
        <p>* Note: Yeh maloomat rahnumai ke liye hain. Kisi bhi scheme ki hatmi tasdeeq ke liye mutaliqa mehkamay se rabta karen.</p>
      </div>
    </div>
  );
};

export default GovtSchemes;
