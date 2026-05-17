import React from "react";
import { BookOpen, Leaf, Droplets, Sun, Bug, Info } from "lucide-react";

const CropAdvisory = () => {
  const tips = [
    {
      title: "Gandum ki Katai aur Sambhal (Wheat Harvesting)",
      icon: <Sun size={24} className="text-amber-500" />,
      content: "Gandum ki katai tab shuru karen jab dana bilkul khushk ho jaye (nami 10-12% ho). Katai ke baad jald az jald thresher se nikal len taake barish ya aandhi se bachao ho sake.",
      category: "Harvesting"
    },
    {
      title: "Kapas ki Kasht ka Mausam (Cotton Sowing)",
      icon: <Leaf size={24} className="text-emerald-500" />,
      content: "Mianwali mein kapas ki kasht ke liye behtareen waqt shuru ho chuka hai. Behtar paidaish ke liye tasdeeq shuda beej istemal karen. Kasht se pehle zameen ko achi tarah tayyar karen.",
      category: "Sowing"
    },
    {
      title: "Pani ki Bachat (Water Management)",
      icon: <Droplets size={24} className="text-sky-500" />,
      content: "Garmi ki shiddat mein izafe ke paish-e-nazar, faslon ko waqt par pani den. Pani sham ya subah savere lagayen taake evaporation kam ho.",
      category: "Irrigation"
    },
    {
      title: "Keeray Makoron ka Hamla (Pest Control)",
      icon: <Bug size={24} className="text-rose-500" />,
      content: "Faslon ka baqaida muaina karen. Agar kisi beemari ya keeray ka hamla nazar aaye toh foran mehkama zaraat ke numainday se mashwara karkay spray karen.",
      category: "Protection"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-12 w-full">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-flex items-center justify-center bg-emerald-500/10 p-4 rounded-full mb-2 border border-emerald-500/20">
          <BookOpen size={40} className="text-emerald-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Zarayee <span className="text-emerald-500">Mashwary</span>
        </h1>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg">
          Mianwali ke kisan doston ke liye mausam aur waqt ke mutabiq ahem zarrayi maloomat aur mashwary.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-[2rem] p-8 hover:bg-slate-800/60 hover:border-emerald-500/40 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {tip.icon}
              </div>
              <div className="space-y-3 flex-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-900 px-3 py-1 rounded-full">
                  {tip.category}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {tip.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {tip.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-sky-900/20 border border-sky-500/20 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-sky-500/20 p-3 rounded-xl text-sky-400">
            <Info size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">Mazeed Maloomat Ke Liye</h4>
            <p className="text-slate-400">Mehkama Zaraat Mianwali se rabta karen ya unki helpline par call karen.</p>
          </div>
        </div>
        <button className="bg-sky-500 text-slate-950 px-8 py-3 rounded-xl font-black shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-colors whitespace-nowrap">
          Call Helpline: 0800-15000
        </button>
      </div>
    </div>
  );
};

export default CropAdvisory;
