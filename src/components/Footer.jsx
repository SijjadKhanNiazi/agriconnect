import React from "react";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = ({ session }) => {
  return (
    <footer className="border-t border-slate-800 bg-[#0f172a] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="text-emerald-500" size={20} />
            <span className="font-black text-white tracking-widest text-sm uppercase">
              AgriConnect
            </span>
          </div>
          <p className="text-slate-500 text-xs font-medium">
            © 2026 Mianwali Digital Marketplace
          </p>
        </div>

        <div className="flex gap-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <Link to="/privacy">
            <span className="hover:text-emerald-500 cursor-pointer transition-colors">
              Privacy
            </span>
          </Link>

          <Link to="/terms">
            <span className="hover:text-emerald-500 cursor-pointer transition-colors">
              Terms
            </span>
          </Link>

          <Link to="/help">
            <span className="hover:text-emerald-500 cursor-pointer transition-colors">
              Help
            </span>
          </Link>

          {session && session.user && session.user.email === "sijjadkhan603@gmail.com" && (
            <Link to="/admin">
              <span className="hover:text-rose-500 cursor-pointer transition-colors">
                Admin
              </span>
            </Link>
          )}
        </div>

        <p className="text-slate-600 text-[10px] font-medium tracking-tighter">
          By Engineer Sijjad khan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
