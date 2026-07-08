import React from "react";
import { TrendingUp, AlertCircle } from "lucide-react";

const MandiTicker = () => {
  const rates = [
    { crop: "Wheat (گندم)", price: "11,500 - 11,750", unit: "100kg" },
    { crop: "Rice Basmati (New)", price: "27,000 - 28,000", unit: "100kg" },
    { crop: "Rice (IRRI)", price: "10,250 - 10,500", unit: "100kg" },
    { crop: "Chana Black", price: "17,000 - 19,000", unit: "100kg" },
    { crop: "Gram Pulse", price: "19,500 - 21,500", unit: "100kg" },
    { crop: "Moong", price: "28,250 - 28,750", unit: "100kg" },
    { crop: "Mash", price: "35,000 - 37,500", unit: "100kg" },
    { crop: "Wheat Straw (بھوسہ)", price: "2,500 - 2,688", unit: "100kg" },
    { crop: "Sarson / Toria", price: "20,000 - 20,500", unit: "100kg" },
    { crop: "Til (Sesame)", price: "12,700 - 15,500", unit: "100kg" },
  ];

  return (
    <div className="bg-[#020617] border-y border-emerald-500/20 py-3 overflow-hidden flex items-center shadow-2xl relative">
      <div className="absolute left-0 z-20 bg-[#020617] pr-4 pl-6 flex items-center gap-3 border-r border-emerald-500/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] whitespace-nowrap">
            Mandi Rates
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 text-[9px] text-slate-500 font-bold uppercase border-l border-slate-800 pl-3">
          <AlertCircle size={10} className="text-amber-500" />
          <span>Rates are for info only. Verify before deal.</span>
        </div>
      </div>

      <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm font-medium items-center ml-24 md:ml-64">
        {[...rates, ...rates].map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-slate-300">
            <TrendingUp size={14} className="text-emerald-500" />
            <span className="font-semibold text-slate-100">{item.crop}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-black tracking-tighter">
                Rs. {item.price}
              </span>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
                / {item.unit}
              </span>
            </div>
            <span className="text-slate-700 ml-4">|</span>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>
    </div>
  );
};

export default MandiTicker;
//
