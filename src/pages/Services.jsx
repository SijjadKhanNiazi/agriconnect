import React, { useState } from "react";
import { Wrench, Sun, Tractor, Building, Phone, MapPin, Search } from "lucide-react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Sab Dekhen", icon: <Search size={18} /> },
    { id: "mechanic", name: "Tractor Mechanic", icon: <Wrench size={18} /> },
    { id: "solar", name: "Solar Tube Well", icon: <Sun size={18} /> },
    { id: "rental", name: "Kraye par Tractor", icon: <Tractor size={18} /> },
    { id: "govt", name: "Mehkama Zaraat", icon: <Building size={18} /> },
  ];

  const services = [
    {
      id: 1,
      name: "Ustad Aslam Tractor Workshop",
      category: "mechanic",
      phone: "0300-1234567",
      address: "Bypass Road, Mianwali",
      rating: "4.9",
    },
    {
      id: 2,
      name: "Bismillah Solar Energy Solutions",
      category: "solar",
      phone: "0301-7654321",
      address: "Kutchery Road, Mianwali",
      rating: "4.8",
    },
    {
      id: 3,
      name: "Chaudhry Tractor Rentals",
      category: "rental",
      phone: "0345-9876543",
      address: "Piplan, Mianwali",
      rating: "4.7",
    },
    {
      id: 4,
      name: "Agriculture Extension Office",
      category: "govt",
      phone: "0459-234567",
      address: "Near DCO Office, Mianwali City",
      rating: "-",
    },
    {
      id: 5,
      name: "Awami Solar & Engineering",
      category: "solar",
      phone: "0333-1122334",
      address: "Musa Khel, Mianwali",
      rating: "4.6",
    },
    {
      id: 6,
      name: "Majeed Auto & Tractor Repair",
      category: "mechanic",
      phone: "0321-4455667",
      address: "Kundian, Mianwali",
      rating: "4.5",
    },
  ];

  const filteredServices = activeCategory === "all" ? services : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-12 w-full">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Zarayee <span className="text-emerald-500">Khidmat</span>
        </h1>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg">
          Mianwali mein zarrayi saholiyat, mechanics, aur mehkama zaraat ke ahem contacts yahan talaash karen.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${
              activeCategory === cat.id
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-slate-800/40 border border-slate-700/50 rounded-[2rem] p-6 hover:bg-slate-800/70 hover:border-emerald-500/40 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-700/50 group-hover:scale-110 transition-transform">
                {service.category === "mechanic" && <Wrench className="text-rose-400" />}
                {service.category === "solar" && <Sun className="text-amber-400" />}
                {service.category === "rental" && <Tractor className="text-emerald-400" />}
                {service.category === "govt" && <Building className="text-sky-400" />}
              </div>
              <span className="bg-slate-900 px-3 py-1 rounded-full text-xs font-bold text-slate-400 border border-slate-700/50">
                ⭐ {service.rating}
              </span>
            </div>
            
            <h3 className="text-xl font-black text-white mb-4 line-clamp-1 group-hover:text-emerald-400 transition-colors">
              {service.name}
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-slate-700/30">
                <Phone size={18} className="text-emerald-500" />
                <span className="font-bold tracking-wider">{service.phone}</span>
              </div>
              <div className="flex items-start gap-3 text-slate-400 p-2">
                <MapPin size={18} className="text-rose-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{service.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredServices.length === 0 && (
        <div className="text-center py-20 text-slate-400 font-bold text-lg">
          Is category mein koi service nahi mili.
        </div>
      )}
    </div>
  );
};

export default Services;
