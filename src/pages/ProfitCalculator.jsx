import React, { useState } from "react";
import { Calculator as CalcIcon, Coins, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

const ProfitCalculator = () => {
  // Income Inputs
  const [yieldPerAcre, setYieldPerAcre] = useState(40);
  const [pricePerMaund, setPricePerMaund] = useState(4000);
  
  // Expense Inputs
  const [landPrep, setLandPrep] = useState(15000);
  const [seedCost, setSeedCost] = useState(8000);
  const [fertilizerCost, setFertilizerCost] = useState(25000);
  const [pesticideCost, setPesticideCost] = useState(5000);
  const [waterCost, setWaterCost] = useState(12000);
  const [laborCost, setLaborCost] = useState(10000);

  const totalIncome = yieldPerAcre * pricePerMaund;
  const totalExpense = landPrep + seedCost + fertilizerCost + pesticideCost + waterCost + laborCost;
  const netProfit = totalIncome - totalExpense;
  const roi = totalExpense > 0 ? ((netProfit / totalExpense) * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-12 w-full">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-flex items-center justify-center bg-emerald-500/10 p-4 rounded-full mb-2 border border-emerald-500/20">
          <Coins size={40} className="text-emerald-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Munafa <span className="text-emerald-500">Calculator</span>
        </h1>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg">
          Apni fasal par aane walay akhrajat aur aamdani ka andaza lagayen aur fi acre munafa janiye.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Expenses Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-800/40 p-6 rounded-[2rem] border border-slate-700/50 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingDown className="text-rose-400" /> Akhrajat (Expenses)
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Zameen ki Tayari (Rs)</label>
                <input type="number" value={landPrep} onChange={e => setLandPrep(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl outline-none focus:border-rose-500/50 mt-1" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Beej (Seed) (Rs)</label>
                <input type="number" value={seedCost} onChange={e => setSeedCost(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl outline-none focus:border-rose-500/50 mt-1" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Khaad (Fertilizer) (Rs)</label>
                <input type="number" value={fertilizerCost} onChange={e => setFertilizerCost(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl outline-none focus:border-rose-500/50 mt-1" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Spray (Pesticides) (Rs)</label>
                <input type="number" value={pesticideCost} onChange={e => setPesticideCost(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl outline-none focus:border-rose-500/50 mt-1" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Paani / Tube Well (Rs)</label>
                <input type="number" value={waterCost} onChange={e => setWaterCost(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl outline-none focus:border-rose-500/50 mt-1" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Mazdoori / Katai (Rs)</label>
                <input type="number" value={laborCost} onChange={e => setLaborCost(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl outline-none focus:border-rose-500/50 mt-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Income Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-800/40 p-6 rounded-[2rem] border border-slate-700/50 backdrop-blur-xl h-full">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="text-emerald-400" /> Aamdani (Income)
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Paadawar (Maunds per Acre)</label>
                <input type="number" value={yieldPerAcre} onChange={e => setYieldPerAcre(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl outline-none focus:border-emerald-500/50 mt-1" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Rate fi Maund (Rs)</label>
                <input type="number" value={pricePerMaund} onChange={e => setPricePerMaund(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl outline-none focus:border-emerald-500/50 mt-1" />
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-slate-900/50 rounded-xl border border-emerald-500/20">
              <span className="text-sm text-slate-400 font-bold block mb-1">Total Aamdani</span>
              <span className="text-3xl font-black text-emerald-400">Rs. {totalIncome.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-1">
          <div className="bg-emerald-500/10 p-8 rounded-[2rem] border border-emerald-500/30 h-full flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-700"></div>
            
            <h2 className="text-2xl font-black text-white mb-8 relative z-10">Nateeja (Result)</h2>
            
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                <span className="text-slate-300 font-bold">Kul Akhrajat</span>
                <span className="text-xl font-black text-rose-400">Rs. {totalExpense.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                <span className="text-slate-300 font-bold">Kul Aamdani</span>
                <span className="text-xl font-black text-emerald-400">Rs. {totalIncome.toLocaleString()}</span>
              </div>

              <div className="pt-4">
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider block mb-2">
                  Khalis Munafa (Net Profit)
                </span>
                <div className={`text-4xl md:text-5xl font-black ${netProfit >= 0 ? 'text-white' : 'text-rose-500'}`}>
                  Rs. {netProfit.toLocaleString()}
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-full border border-slate-700/50">
                <span className="text-slate-400 text-sm font-bold">Munafa ki Sharah (ROI):</span>
                <span className={`text-lg font-black ${netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{roi}%</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfitCalculator;
