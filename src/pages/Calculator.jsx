import React, { useState } from "react";
import { Calculator as CalcIcon, Sprout, Wheat, Leaf } from "lucide-react";

const Calculator = () => {
  const [crop, setCrop] = useState("wheat");
  const [acres, setAcres] = useState(1);

  const calculateFertilizer = () => {
    let urea = 0;
    let dap = 0;
    let potash = 0;

    switch (crop) {
      case "wheat":
        urea = acres * 2; // 2 bags of Urea per acre
        dap = acres * 1.5; // 1.5 bags of DAP
        potash = acres * 1; // 1 bag SOP
        break;
      case "cotton":
        urea = acres * 3;
        dap = acres * 1.5;
        potash = acres * 1;
        break;
      case "sugarcane":
        urea = acres * 4;
        dap = acres * 2;
        potash = acres * 2;
        break;
      default:
        urea = 0;
        dap = 0;
        potash = 0;
    }
    
    return { urea, dap, potash };
  };

  const results = calculateFertilizer();

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-12 w-full">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-flex items-center justify-center bg-emerald-500/10 p-4 rounded-full mb-2 border border-emerald-500/20">
          <CalcIcon size={40} className="text-emerald-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Khaad <span className="text-emerald-500">Calculator</span>
        </h1>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg">
          Apni fasal aur zameen ke raqbe ke mutabiq khaad ki munasib miqdar maloom karen.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-slate-800/30 border border-slate-700/50 rounded-[2.5rem] overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col md:flex-row">
        
        {/* Input Section */}
        <div className="p-8 md:p-12 w-full md:w-1/2 border-b md:border-b-0 md:border-r border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-8">Zaroori Maloomat</h2>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Fasal Ka Intekhab</label>
              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={() => setCrop("wheat")}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all ${crop === 'wheat' ? 'bg-amber-500/10 border-amber-500 text-amber-500' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                >
                  <Wheat size={24} />
                  <span className="text-xs font-bold">Gandum</span>
                </button>
                <button 
                  onClick={() => setCrop("cotton")}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all ${crop === 'cotton' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                >
                  <Leaf size={24} />
                  <span className="text-xs font-bold">Kapas</span>
                </button>
                <button 
                  onClick={() => setCrop("sugarcane")}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all ${crop === 'sugarcane' ? 'bg-sky-500/10 border-sky-500 text-sky-500' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                >
                  <Sprout size={24} />
                  <span className="text-xs font-bold">Ganna</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Raqba (Acres mein)</label>
              <div className="flex items-center gap-4 bg-slate-900 border border-slate-700 rounded-2xl p-2">
                <button 
                  onClick={() => setAcres(Math.max(1, acres - 1))}
                  className="w-12 h-12 bg-slate-800 rounded-xl text-xl font-black hover:bg-slate-700 hover:text-emerald-400 transition-colors"
                >-</button>
                <div className="flex-1 text-center text-2xl font-black text-white">{acres}</div>
                <button 
                  onClick={() => setAcres(acres + 1)}
                  className="w-12 h-12 bg-slate-800 rounded-xl text-xl font-black hover:bg-slate-700 hover:text-emerald-400 transition-colors"
                >+</button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 md:p-12 w-full md:w-1/2 bg-slate-800/40 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-2">Takhmeena (Estimation)</h2>
          <p className="text-slate-400 text-sm font-medium mb-8">Puri fasal ke doraniye mein darkar khaad ki miqdar.</p>
          
          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-emerald-500/20 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="text-emerald-400 font-bold">Urea (یوریا)</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Nitrogen source</p>
              </div>
              <div className="text-3xl font-black text-white">{results.urea} <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">Bags</span></div>
            </div>
            
            <div className="bg-slate-900/50 border border-amber-500/20 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="text-amber-400 font-bold">DAP (ڈی اے پی)</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Phosphorus source</p>
              </div>
              <div className="text-3xl font-black text-white">{results.dap} <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">Bags</span></div>
            </div>

            <div className="bg-slate-900/50 border border-sky-500/20 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="text-sky-400 font-bold">Potash / SOP (پوٹاش)</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Potassium source</p>
              </div>
              <div className="text-3xl font-black text-white">{results.potash} <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">Bags</span></div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
            * Yeh takhmeena aam miqdar par mabni hai.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
