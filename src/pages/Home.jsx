import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Loader2,
  ArrowRight,
  Filter,
  Image as ImageIcon,
  Ghost,
  PlusCircle,
  RefreshCcw,
} from "lucide-react";
import MandiTicker from "../components/MandiTicker";
import WeatherWidget from "../components/WeatherWidget";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [selectedArea, setSelectedArea] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("Listings")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setListings(data || []);
      setFilteredListings(data || []);
    } else {
      console.error("Fetch Error:", error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (selectedArea === "All") {
      setFilteredListings(listings);
    } else {
      setFilteredListings(
        listings.filter((item) => item.area === selectedArea),
      );
    }
  }, [selectedArea, listings]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      <MandiTicker />

      <div className="p-6 w-full">
        <div className="mb-8">
          <WeatherWidget />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8 bg-slate-800/40 p-8 rounded-[2rem] border border-slate-700/50 backdrop-blur-xl shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-white tracking-tight">
              Agri <span className="text-emerald-500">Marketplace</span>
            </h2>
            <p className="text-slate-400 font-medium max-w-md">
              Mianwali ke kisanon ke liye behtareen machines aur zarrayi ajnas
              ka markaz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full sm:w-64 group">
              <Filter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500 group-hover:scale-110 transition-transform"
                size={18}
              />
              <select
                className="w-full bg-slate-900 border border-slate-700 text-slate-200 pl-11 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 appearance-none transition-all cursor-pointer font-bold text-sm"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="All">Poora Mianwali</option>
                <option value="Rokhri">Rokhri</option>
                <option value="Piplan">Piplan</option>
                <option value="Isakhel">Isakhel</option>
                <option value="Kundian">Kundian</option>
                <option value="Mianwali City">Mianwali City</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="animate-spin text-emerald-500" size={50} />
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              Syncing with Database...
            </p>
          </div>
        ) : filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredListings.map((ad) => (
              <div
                key={ad.id}
                className="group bg-slate-800/30 border border-slate-700/50 rounded-[2rem] overflow-hidden hover:bg-slate-800/60 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  {ad.image_url ? (
                    <img
                      src={ad.image_url}
                      alt={ad.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-700">
                      <ImageIcon size={48} />
                      <span className="text-xs mt-2 uppercase font-bold tracking-widest">
                        No Image
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-emerald-500/20">
                      {ad.category || "General"}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight line-clamp-1">
                      {ad.title}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-1 mb-3">
                      {ad.description}
                    </p>
                    <div className="text-xl font-black text-white whitespace-nowrap ml-2">
                      <span className="text-emerald-500 text-sm mr-1">Rs.</span>
                      {ad.price?.toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-3 text-slate-400">
                      <MapPin size={16} className="text-rose-500" />
                      <span className="text-sm font-semibold">{ad.area}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Phone size={16} className="text-sky-500" />
                      <span className="text-sm font-bold tracking-wider">
                        {ad.contact}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/ad/${ad.id}`}
                    className="mt-auto w-full bg-slate-900 text-white group-hover:bg-emerald-500 group-hover:text-slate-950 py-4 rounded-2xl font-black transition-all duration-300 flex items-center justify-center gap-2 border border-slate-700 group-hover:border-emerald-500"
                  >
                    Details Dekhen
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-slate-800/20 border-2 border-dashed border-slate-700/50 rounded-[3rem]">
            <div className="bg-slate-900 p-8 rounded-full mb-6 relative">
              <Ghost size={60} className="text-slate-700 animate-bounce" />
              <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full"></div>
            </div>

            <h3 className="text-2xl font-black text-white mb-2">
              Abhi Koi Ad Maujood Nahi Hai
            </h3>

            <p className="text-slate-400 max-w-sm mx-auto mb-8 font-medium">
              Afsos!{" "}
              {selectedArea !== "All"
                ? `"${selectedArea}" mein`
                : "Marketplace mein"}{" "}
              abhi tak koi cheez farokht ke liye nahi lagayi gayi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {selectedArea !== "All" && (
                <button
                  onClick={() => setSelectedArea("All")}
                  className="flex items-center gap-2 bg-slate-800 text-slate-200 px-8 py-4 rounded-2xl font-bold border border-slate-700 hover:border-emerald-500 transition-all active:scale-95"
                >
                  <RefreshCcw size={18} />
                  Filters Reset Karen
                </button>
              )}

              <Link
                to="/create"
                className="flex items-center gap-2 bg-emerald-500 text-slate-950 px-8 py-4 rounded-2xl font-black shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all active:scale-95"
              >
                <PlusCircle size={20} />
                Pehla Ad Post Karen
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
