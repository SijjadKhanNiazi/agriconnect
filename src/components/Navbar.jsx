import React from "react";
import { Link } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import {
  LayoutDashboard,
  PlusCircle,
  LogOut,
  User,
  Home as HomeIcon,
  Leaf,
  Settings,
} from "lucide-react";

const Navbar = ({ session }) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-700/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-emerald-500 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
            <Leaf className="text-[#0f172a]" size={24} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-white tracking-tighter">
              AGRI<span className="text-emerald-500">CONNECT</span>
            </span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
              Mianwali Hub
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <HomeIcon size={18} /> Home
          </Link>
          {session && (
            <Link
              to="/my-ads"
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <LayoutDashboard size={18} /> My Ads
            </Link>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/create"
            className="hidden sm:flex items-center gap-2 bg-emerald-500 text-slate-950 px-5 py-2.5 rounded-xl font-black text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            <PlusCircle size={18} /> Post Ad
          </Link>

          <div className="h-8 w-[1px] bg-slate-700 mx-2 hidden sm:block"></div>

          {session ? (
            <div className="flex items-center gap-4">
              <Link
                to="/edit-profile"
                className="text-slate-400 hover:text-emerald-500 transition-colors p-2 bg-slate-800 rounded-lg"
              >
                <User size={20} />
              </Link>
              <button
                onClick={() => supabase.auth.signOut()}
                className="flex items-center gap-2 text-rose-500 hover:bg-rose-500/10 px-4 py-2 rounded-xl transition-all font-bold text-sm"
              >
                <LogOut size={18} />{" "}
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="text-slate-400 hover:text-white px-4 py-2.5 rounded-xl text-sm font-black transition-all"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-slate-800 text-white hover:bg-slate-700 px-6 py-2.5 rounded-xl text-sm font-black transition-all border border-slate-700"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
