import React, { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { User, Phone, MapPin, Loader2, Save, ArrowLeft } from "lucide-react";

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    username: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // 1. Pehle database (profiles table) se data check karte hain
        const { data, error } = await supabase
          .from("profiles")
          .select("username, phone, address")
          .eq("id", user.id)
          .single();

        if (data) {
          // Agar database mein data mil gaya
          setProfile(data);
        } else {
          // 2. Agar database khali hai, to Signup ke waqt wala metadata use karte hain
          setProfile({
            username: user.user_metadata?.full_name || "",
            phone: user.user_metadata?.phone || "",
            address: user.user_metadata?.city || "",
          });
        }
      }
    } catch (error) {
      console.log("Error loading user data");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        username: profile.username,
        phone: profile.phone,
        address: profile.address,
        updated_at: new Date(),
      });

      if (error) throw error;

      toast.success("Profile kamyabi se update ho gayi!");
      navigate("/my-ads");
    } catch (error) {
      toast.error("Update fail ho gaya: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors mb-6 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-xs font-bold uppercase tracking-widest">
            Back
          </span>
        </button>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white">Profile Edit Karen</h2>
          <p className="text-slate-400 text-sm mt-2 font-medium">
            Apni maloomat durust karen
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="relative group">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Aapka Naam"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-medium"
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
              required
            />
          </div>

          <div className="relative group">
            <Phone
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-medium"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
            />
          </div>

          <div className="relative group">
            <MapPin
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Ilaqa (e.g. Mianwali City)"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-medium"
              value={profile.address}
              onChange={(e) =>
                setProfile({ ...profile, address: e.target.value })
              }
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-emerald-500 text-slate-950 py-4 rounded-2xl font-black hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Save size={20} /> Save Changes
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
