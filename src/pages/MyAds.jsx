import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../services/supabaseClient";
import toast from "react-hot-toast";
import {
  Trash2,
  Loader2,
  PackageOpen,
  MapPin,
  Tag,
  Calendar,
  ChevronRight,
  Filter,
} from "lucide-react";

const MyAds = () => {
  const [myAds, setMyAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  const categories = [
    "All",
    "Machinery",
    "Crops",
    "Seeds",
    "Fertilizers",
    "Livestock",
  ];

  useEffect(() => {
    fetchMyAds();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredAds(myAds);
    } else {
      setFilteredAds(myAds.filter((ad) => ad.category === selectedCategory));
    }
  }, [selectedCategory, myAds]);

  const fetchMyAds = async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const { data, error } = await supabase
        .from("Listings")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (!error) {
        setMyAds(data);
        setFilteredAds(data);
      } else {
        toast.error("Ads fetch nahi ho sakay!");
      }
    }
    setLoading(false);
  };

  const deleteAd = async (ad) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold text-white">
            Kya aap waqai ye ad delete karna chahte hain?
          </p>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                await executeDelete(ad);
              }}
              className="bg-rose-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold"
            >
              Haan, Delete Kar Do
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-slate-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold"
            >
              Nahi
            </button>
          </div>
        </div>
      ),
      {
        duration: 5000,
        style: { background: "#1e293b", border: "1px solid #334155" },
      },
    );
  };

  const executeDelete = async (ad) => {
    const loadToast = toast.loading("Ad delete ho raha hai...");
    try {
      if (ad.image_url) {
        const filePath = ad.image_url.split(
          "/storage/v1/object/public/listing-images/",
        )[1];
        if (filePath) {
          await supabase.storage.from("listing-images").remove([filePath]);
        }
      }

      const { error } = await supabase
        .from("Listings")
        .delete()
        .eq("id", ad.id);
      if (error) throw error;

      setMyAds(myAds.filter((item) => item.id !== ad.id));
      toast.success("Ad delete ho gaya!", { id: loadToast });
    } catch (error) {
      toast.error("Ghalti: " + error.message, { id: loadToast });
    }
  };

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#0f172a]">
        <Loader2 className="animate-spin text-emerald-400 mb-4" size={50} />
        <p className="text-emerald-100/60 font-medium tracking-widest uppercase text-[10px]">
          Syncing Dashboard...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight mb-2">
              Dashboard <span className="text-emerald-500">.</span>
            </h1>
            <p className="text-slate-400 font-medium">
              Manage your agri-listings
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-2">
              <Filter size={12} /> Filter by Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-2xl outline-none focus:border-emerald-500 transition-all cursor-pointer font-bold text-sm shadow-xl"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredAds.length === 0 ? (
          <div className="bg-slate-800/20 rounded-[3rem] p-16 text-center border-2 border-dashed border-slate-700/50">
            <PackageOpen size={60} className="text-slate-700 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white">No Ads Found</h2>
            <p className="text-slate-500 mt-2 mb-8 max-w-xs mx-auto">
              {selectedCategory === "All"
                ? "Aapne koi ad post nahi kiya."
                : `Category "${selectedCategory}" mein koi ad nahi hai.`}
            </p>
            {selectedCategory === "All" && (
              <button
                onClick={() => navigate("/create")}
                className="bg-emerald-500 text-slate-950 px-8 py-4 rounded-2xl font-black hover:bg-emerald-400 transition-all inline-block shadow-lg active:scale-95"
              >
                Post Now
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredAds.map((ad) => (
              <div
                key={ad.id}
                className="group bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 rounded-[2.5rem] p-5 transition-all duration-500 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-2xl"
              >
                <div className="w-full md:w-40 h-32 bg-slate-900 rounded-[1.5rem] flex-shrink-0 overflow-hidden border border-slate-700/50">
                  {ad.image_url ? (
                    <img
                      src={ad.image_url}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-700">
                      <Tag size={24} />
                    </div>
                  )}
                </div>

                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {ad.category}
                    </span>
                    <span className="text-slate-500 text-[11px] flex items-center gap-1.5 font-bold">
                      <Calendar size={12} />{" "}
                      {new Date(ad.created_at).toLocaleDateString("en-GB")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {ad.title}
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                      <MapPin size={14} className="text-rose-500" /> {ad.area}
                    </div>
                    <div className="text-xl font-black text-white">
                      Rs. {ad.price?.toLocaleString()}
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs line-clamp-1 mt-3">
                    {ad.description}
                  </p>
                </div>

                <div className="flex md:flex-col gap-3 w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-700/50 pt-4 md:pt-0 md:pl-6">
                  <button
                    onClick={() => deleteAd(ad)}
                    className="flex-1 md:h-12 md:w-12 bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center p-3 rounded-xl transition-all border border-rose-500/20"
                  >
                    <Trash2 size={20} />
                  </button>
                  <button
                    onClick={() => navigate(`/ad/${ad.id}`)}
                    className="flex-1 md:h-12 md:w-12 bg-slate-900 text-slate-400 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center p-3 rounded-xl transition-all border border-slate-700"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAds;
