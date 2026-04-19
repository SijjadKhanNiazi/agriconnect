import React from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import {
  LayoutDashboard,
  PlusCircle,
  LogOut,
  User,
  Home as HomeIcon,
  Leaf,
} from "lucide-react";

const Navbar = ({ session }) => {
  const location = useLocation();

  // Active link check karne ke liye helper
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* --- TOP NAVBAR (Desktop & Mobile Brand) --- */}
      <nav className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-700/50 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-500 p-1.5 md:p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
              <Leaf className="text-[#0f172a]" size={20} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-black text-white tracking-tighter uppercase">
                Agri<span className="text-emerald-500">Connect</span>
              </span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                Mianwali Hub
              </span>
            </div>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${isActive("/") ? "text-emerald-400" : "text-slate-400 hover:text-emerald-400"}`}
            >
              <HomeIcon size={18} /> Home
            </Link>
            {session && (
              <Link
                to="/my-ads"
                className={`flex items-center gap-2 text-sm font-bold transition-colors ${isActive("/my-ads") ? "text-emerald-400" : "text-slate-400 hover:text-emerald-400"}`}
              >
                <LayoutDashboard size={18} /> My Ads
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop Post Ad Button */}
            <Link
              to="/create"
              className="hidden md:flex items-center gap-2 bg-emerald-500 text-slate-950 px-5 py-2.5 rounded-xl font-black text-sm hover:bg-emerald-400 transition-all shadow-lg active:scale-95"
            >
              <PlusCircle size={18} /> Post Ad
            </Link>

            {session ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/edit-profile"
                  className="text-slate-400 hover:text-emerald-500 transition-colors p-2 bg-slate-800/50 rounded-xl"
                >
                  <User size={20} />
                </Link>
                <button
                  onClick={() => supabase.auth.signOut()}
                  className="text-rose-500 hover:bg-rose-500/10 p-2 md:px-4 md:py-2 rounded-xl transition-all font-bold text-sm flex items-center gap-2"
                >
                  <LogOut size={18} />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="text-slate-400 hover:text-white px-3 py-2 rounded-xl text-xs md:text-sm font-black transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-slate-800 text-white hover:bg-slate-700 px-4 py-2 md:px-6 md:py-2.5 rounded-xl text-xs md:text-sm font-black transition-all border border-slate-700"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM NAVIGATION (Visible only on Mobile) --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-2xl border-t border-slate-700/50 px-6 py-3 pb-6 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 ${isActive("/") ? "text-emerald-500" : "text-slate-500"}`}
          >
            <HomeIcon size={22} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Home
            </span>
          </Link>

          <Link
            to="/create"
            className="flex flex-col items-center -mt-10 bg-emerald-500 p-4 rounded-full shadow-lg shadow-emerald-500/40 text-slate-950 ring-4 ring-[#0f172a]"
          >
            <PlusCircle size={24} />
          </Link>

          <Link
            to="/my-ads"
            className={`flex flex-col items-center gap-1 ${isActive("/my-ads") ? "text-emerald-500" : "text-slate-500"}`}
          >
            <LayoutDashboard size={22} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              My Ads
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
