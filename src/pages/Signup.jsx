import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  UserPlus,
  Loader2,
  ArrowRight,
  User,
  Phone,
  MapPin,
} from "lucide-react";
import toast from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    city: "Mianwali",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,

      options: {
        data: {
          full_name: formData.fullName,
          phone: formData.phone,
          city: formData.city,
        },
      },
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Registration kamyab! Please apna email confirm karen.", {
        duration: 5000,
      });
      navigate("/login");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0f172a]">
      <div className="w-full max-w-lg bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex bg-emerald-500 p-3 rounded-2xl mb-4 shadow-lg shadow-emerald-500/20">
            <UserPlus className="text-[#0f172a]" size={28} />
          </div>
          <h2 className="text-3xl font-black text-white">Naya Account</h2>
          <p className="text-slate-400 text-sm mt-2 font-medium">
            AgriConnect Mianwali ka hissa banain
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="relative group">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <input
              name="fullName"
              type="text"
              placeholder="Pura Naam (Full Name)"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-medium"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative group">
            <Phone
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <input
              name="phone"
              type="text"
              placeholder="Mobile Number"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-medium"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative group">
            <MapPin
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <select
              name="city"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-10 py-4 rounded-2xl outline-none focus:border-emerald-500/50 appearance-none font-medium"
              onChange={handleChange}
              value={formData.city}
            >
              <option value="Mianwali">Mianwali</option>
              <option value="Rokhri">Rokhri</option>
              <option value="Piplan">Piplan</option>
              <option value="Isa Khel">Isa Khel</option>
              <option value="Kundian">Kundian</option>
            </select>
          </div>

          <div className="relative group">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-medium"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative group">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-medium"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 text-slate-950 py-4 rounded-2xl font-black hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50 active:scale-95"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Account Banaye <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        <p className="text-center mt-8 text-slate-400 text-sm font-medium">
          Pehle se account hai?{" "}
          <Link
            to="/login"
            className="text-emerald-500 font-black hover:text-emerald-400 transition-colors ml-1"
          >
            Login Karen
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
