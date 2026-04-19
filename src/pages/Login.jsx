import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, LogIn, Loader2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Khushamdeed! Aap login ho chuke hain.");
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex bg-emerald-500 p-3 rounded-2xl mb-4 shadow-lg shadow-emerald-500/20">
            <LogIn className="text-[#0f172a]" size={28} />
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Kisaan Login
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-medium">
            Apne account mein wapis aayen
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative group">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative group">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors"
              size={20}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 text-slate-950 py-4 rounded-2xl font-black hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Login Karen
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-8 pt-6 border-t border-slate-700/50">
          <p className="text-slate-400 text-sm font-medium">
            Account nahi hai?{" "}
            <Link
              to="/signup"
              className="text-emerald-500 font-black hover:text-emerald-400 transition-colors ml-1"
            >
              Naya Account Banaye
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
