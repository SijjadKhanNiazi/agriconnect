import React, { useState } from "react";
import { TrendingUp, TrendingDown, Minus, Search, Calendar } from "lucide-react";

const MarketRates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const currentDate = new Date().toLocaleDateString('ur-PK', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const crops = [
    { name: "Wheat (گندم)", currentPrice: "11,500", prevPrice: "11,400", unit: "100kg", status: "up" },
    { name: "Rice Basmati (New)", currentPrice: "27,500", prevPrice: "28,000", unit: "100kg", status: "down" },
    { name: "Rice (IRRI)", currentPrice: "10,350", prevPrice: "10,350", unit: "100kg", status: "stable" },
    { name: "Chana Black", currentPrice: "18,000", prevPrice: "17,500", unit: "100kg", status: "up" },
    { name: "Gram Pulse", currentPrice: "20,500", prevPrice: "20,000", unit: "100kg", status: "up" },
    { name: "Moong", currentPrice: "28,500", prevPrice: "28,500", unit: "100kg", status: "stable" },
    { name: "Mash", currentPrice: "36,000", prevPrice: "36,500", unit: "100kg", status: "down" },
    { name: "Wheat Straw (بھوسہ)", currentPrice: "2,600", prevPrice: "2,500", unit: "100kg", status: "up" },
    { name: "Sarson / Toria", currentPrice: "20,200", prevPrice: "20,000", unit: "100kg", status: "up" },
    { name: "Til (Sesame)", currentPrice: "14,000", prevPrice: "14,500", unit: "100kg", status: "down" },
  ];

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-12 w-full">
      <div className="mb-10 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Aaj Ke <span className="text-emerald-500">Mandi Rates</span>
        </h1>
        <p className="text-slate-400 font-medium max-w-xl mx-auto">
          Mianwali galla mandi ke taza tareen rates. Yeh rates rozana update kiye jate hain.
        </p>
        <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 px-4 py-2 rounded-full mt-4 text-sm font-bold text-slate-300">
          <Calendar size={16} className="text-emerald-500" />
          {currentDate}
        </div>
      </div>

      <div className="bg-slate-800/30 border border-slate-700/50 rounded-[2rem] overflow-hidden backdrop-blur-xl shadow-2xl">
        <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-700/50 bg-slate-800/40">
          <h2 className="text-2xl font-black text-white">Crop Prices</h2>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Fasal ka naam likhen..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 pl-11 pr-4 py-3 rounded-xl outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-semibold"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/50 text-slate-400 text-xs uppercase tracking-widest">
                <th className="p-6 font-bold">Crop / Fasal</th>
                <th className="p-6 font-bold">Current Rate (Rs)</th>
                <th className="p-6 font-bold hidden md:table-cell">Previous Rate</th>
                <th className="p-6 font-bold">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {filteredCrops.map((crop, index) => (
                <tr key={index} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="p-6">
                    <div className="font-bold text-white text-lg">{crop.name}</div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Per {crop.unit}</div>
                  </td>
                  <td className="p-6">
                    <span className="text-2xl font-black text-emerald-400 tracking-tighter">
                      {crop.currentPrice}
                    </span>
                  </td>
                  <td className="p-6 hidden md:table-cell text-slate-400 font-semibold">
                    {crop.prevPrice}
                  </td>
                  <td className="p-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold ${
                      crop.status === 'up' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                      crop.status === 'down' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      'bg-slate-700/50 text-slate-300 border border-slate-600'
                    }`}>
                      {crop.status === 'up' && <TrendingUp size={16} />}
                      {crop.status === 'down' && <TrendingDown size={16} />}
                      {crop.status === 'stable' && <Minus size={16} />}
                      <span className="capitalize">{crop.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredCrops.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-slate-500 font-bold">
                    Koi fasal nahi mili.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-8 text-center text-slate-500 text-sm font-medium">
        * Note: Rates provided are indicative and may vary based on quality and local market conditions.
      </div>
    </div>
  );
};

export default MarketRates;
