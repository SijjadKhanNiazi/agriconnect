import React from "react";
import { Cloud, CloudRain, Sun, Wind, Droplets } from "lucide-react";

const WeatherWidget = () => {
  // Mock data for Mianwali weather
  const weatherData = {
    city: "Mianwali",
    temp: "32°",
    condition: "Sunny / Clear",
    humidity: "45%",
    wind: "12 km/h",
    forecast: [
      { day: "Mon", icon: <Sun size={20} className="text-amber-400" />, temp: "33°" },
      { day: "Tue", icon: <Cloud size={20} className="text-slate-400" />, temp: "30°" },
      { day: "Wed", icon: <CloudRain size={20} className="text-sky-400" />, temp: "28°" },
      { day: "Thu", icon: <Sun size={20} className="text-amber-400" />, temp: "34°" },
    ]
  };

  return (
    <div className="bg-slate-800/40 border border-slate-700/50 rounded-[2rem] p-6 lg:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
        
        {/* Current Weather */}
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-pulse"></div>
            <Sun size={64} className="text-amber-400 relative z-10" />
          </div>
          <div>
            <h3 className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-1">Current Weather</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-white tracking-tighter">{weatherData.temp}</span>
              <span className="text-xl font-medium text-amber-400">{weatherData.condition}</span>
            </div>
            <p className="text-slate-300 font-semibold mt-1">{weatherData.city}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 border-y md:border-y-0 md:border-x border-slate-700/50 py-4 md:py-0 md:px-6 w-full md:w-auto justify-around">
          <div className="flex flex-col items-center gap-1">
            <Droplets size={20} className="text-sky-400 mb-1" />
            <span className="text-xs text-slate-400 font-bold uppercase">Humidity</span>
            <span className="text-lg font-black text-white">{weatherData.humidity}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Wind size={20} className="text-slate-300 mb-1" />
            <span className="text-xs text-slate-400 font-bold uppercase">Wind</span>
            <span className="text-lg font-black text-white">{weatherData.wind}</span>
          </div>
        </div>

        {/* Forecast */}
        <div className="flex gap-4 w-full md:w-auto justify-between md:justify-end">
          {weatherData.forecast.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 bg-slate-900/50 p-3 rounded-2xl border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
              <span className="text-[10px] text-slate-400 font-bold uppercase">{item.day}</span>
              {item.icon}
              <span className="text-sm font-black text-white">{item.temp}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WeatherWidget;
