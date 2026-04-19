import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import toast from "react-hot-toast";
import {
  MapPin,
  Phone,
  ArrowLeft,
  Calendar,
  CircleDollarSign,
  Loader2,
  Share2,
  Sprout,
  Package,
  BadgeCheck,
} from "lucide-react";

const AdDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPlaceholderIcon = (category) => {
    const cat = category?.toLowerCase() || "";
    if (
      cat.includes("gandum") ||
      cat.includes("crop") ||
      cat.includes("seed") ||
      cat.includes("khad")
    ) {
      return <Sprout size={60} className="text-emerald-500/40" />;
    }
    return <Package size={60} className="text-slate-700" />;
  };

  useEffect(() => {
    const fetchAdDetails = async () => {
      const { data, error } = await supabase
        .from("Listings")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        toast.error("Ad load karne mein masla hua!");
        navigate("/");
      } else {
        setAd(data);
      }
      setLoading(false);
    };

    fetchAdDetails();
  }, [id, navigate]);

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copy ho gaya!");
    } catch (err) {
      toast.error("Copy nahi ho saka");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <Loader2 className="animate-spin text-emerald-500" size={50} />
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-bold uppercase tracking-widest text-xs">
              Wapis Jayen
            </span>
          </button>

          <button
            onClick={handleShare}
            className="p-3 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-emerald-500 transition-all text-slate-400 hover:text-emerald-500"
          >
            <Share2 size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-800/20 p-6 md:p-10 rounded-[3rem] border border-slate-700/50 backdrop-blur-xl">
          <div className="space-y-4">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden border border-slate-700 bg-slate-900 relative shadow-2xl">
              <div className="absolute top-5 left-5 z-10 bg-emerald-500 text-slate-950 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <BadgeCheck size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950">
                  Selling
                </span>
              </div>

              {ad.image_url ? (
                <img
                  src={ad.image_url}
                  alt={ad.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-700 bg-slate-900/50">
                  {getPlaceholderIcon(ad.category)}
                  <span className="mt-2 font-bold uppercase tracking-widest text-[10px] opacity-30">
                    No Photo
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-emerald-500/20 inline-block mb-4">
                {ad.category || "General"}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tighter">
                {ad.title}
              </h1>
              <div className="flex items-center gap-2 text-emerald-500">
                <CircleDollarSign size={24} />
                <span className="text-4xl font-black">
                  Rs. {ad.price?.toLocaleString()}
                </span>
              </div>
              <div className="bg-slate-900/30 p-6 rounded-[2rem] border border-slate-700/50">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-3">
                  Tafseelat / Description
                </h4>
                <p className="text-slate-300 leading-relaxed font-medium">
                  {ad.description ||
                    "Is ad ki koi mazeed tafseel maujood nahi hai."}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-5 rounded-[2rem] border border-slate-700/50">
                <div className="flex items-center gap-3 text-slate-400 mb-1">
                  <MapPin size={16} className="text-rose-500" />
                  <span className="text-[10px] font-black uppercase tracking-wider">
                    Ilaqa
                  </span>
                </div>
                <p className="text-lg font-bold text-white">{ad.area}</p>
              </div>

              <div className="bg-slate-900/50 p-5 rounded-[2rem] border border-slate-700/50">
                <div className="flex items-center gap-3 text-slate-400 mb-1">
                  <Calendar size={16} className="text-sky-500" />
                  <span className="text-[10px] font-black uppercase tracking-wider">
                    Lagaya Gaya
                  </span>
                </div>
                <p className="text-lg font-bold text-white">
                  {new Date(ad.created_at).toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>

            <div className="bg-emerald-500 p-8 rounded-[2.5rem] shadow-xl shadow-emerald-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-emerald-950/70 font-black text-[10px] uppercase tracking-widest mb-1">
                  Rabta Karen
                </p>
                <p className="text-3xl font-black text-emerald-950">
                  {ad.contact}
                </p>
              </div>
              <a
                href={`tel:${ad.contact}`}
                className="w-full md:w-auto bg-emerald-950 text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetail;
