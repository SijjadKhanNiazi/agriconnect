import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import toast from "react-hot-toast";
import { Trash2, Edit, Users, Package, Loader2 } from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("ads");
  const [ads, setAds] = useState([]);
  const [users, setUsers] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      if (activeTab === "ads") {
        fetchAds();
      } else {
        fetchUsers();
      }
    }
  }, [activeTab, isAuthorized]);

  const checkAuth = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user && user.email === "sijjadkhan603@gmail.com") {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setIsAuthorized(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchAds = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("Listings").select("*").order("created_at", { ascending: false });
    if (!error) {
      setAds(data || []);
    }
    setLoading(false);
  };

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("profiles").select("*").order("updated_at", { ascending: false });
    if (!error) {
      setUsers(data || []);
    }
    setLoading(false);
  };

  // Ads Actions
  const deleteAd = async (id) => {
    if (!window.confirm("Kiya aap waqai is ad ko delete karna chahte hain?")) return;
    const { error } = await supabase.from("Listings").delete().eq("id", id);
    if (error) {
      toast.error("Error: " + error.message);
    } else {
      toast.success("Ad deleted successfully");
      fetchAds();
    }
  };

  const editAd = async (ad) => {
    const newTitle = window.prompt("New Title:", ad.title);
    if (newTitle === null) return;
    const newPrice = window.prompt("New Price (Rs):", ad.price);
    if (newPrice === null) return;

    const { error } = await supabase.from("Listings").update({
      title: newTitle,
      price: Number(newPrice)
    }).eq("id", ad.id);

    if (error) {
      toast.error("Error updating ad");
    } else {
      toast.success("Ad updated successfully");
      fetchAds();
    }
  };

  // Users Actions
  const deleteUser = async (id) => {
    if (!window.confirm("Kiya aap waqai is user ko delete karna chahte hain? (Note: sirf profile delete hogi)")) return;
    const { error } = await supabase.from("profiles").delete().eq("id", id);
    if (error) {
      toast.error("Error: " + error.message);
    } else {
      toast.success("User profile deleted successfully");
      fetchUsers();
    }
  };

  const editUser = async (user) => {
    const newUsername = window.prompt("New Username:", user.username);
    if (newUsername === null) return;
    const newPhone = window.prompt("New Phone:", user.phone);
    if (newPhone === null) return;

    const { error } = await supabase.from("profiles").update({
      username: newUsername,
      phone: newPhone
    }).eq("id", user.id);

    if (error) {
      toast.error("Error updating user");
    } else {
      toast.success("User updated successfully");
      fetchUsers();
    }
  };

  if (!loading && !isAuthorized) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 flex flex-col items-center justify-center">
        <div className="bg-slate-800/40 p-10 rounded-[2rem] border border-rose-500/20 text-center shadow-2xl backdrop-blur-xl">
          <div className="bg-rose-500/10 p-4 rounded-full inline-block mb-4">
            <Users size={40} className="text-rose-500" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Access <span className="text-rose-500">Denied</span></h1>
          <p className="text-slate-400 font-medium">Ye page sirf 'sijjadkhan603@gmail.com' ke liye hai.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-12 w-full">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">Admin <span className="text-emerald-500">Dashboard</span></h1>
            <p className="text-slate-400 font-medium mt-2">Manage all platform ads and users.</p>
          </div>
          
          <div className="flex bg-slate-800/50 p-1.5 rounded-2xl border border-slate-700/50 w-full md:w-auto">
            <button 
              onClick={() => setActiveTab("ads")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'ads' ? 'bg-emerald-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
            >
              <Package size={18} /> Ads
            </button>
            <button 
              onClick={() => setActiveTab("users")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'users' ? 'bg-emerald-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
            >
              <Users size={18} /> Users
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-emerald-500" size={40} />
          </div>
        ) : (
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-[2rem] overflow-hidden backdrop-blur-xl shadow-2xl overflow-x-auto">
            
            {activeTab === "ads" && (
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-900/50 text-slate-400 text-xs uppercase tracking-widest">
                    <th className="p-5 font-bold">Image</th>
                    <th className="p-5 font-bold">Title</th>
                    <th className="p-5 font-bold">Category</th>
                    <th className="p-5 font-bold">Price</th>
                    <th className="p-5 font-bold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {ads.map((ad) => (
                    <tr key={ad.id} className="hover:bg-slate-800/40 transition-colors group">
                      <td className="p-5">
                        <div className="w-16 h-12 bg-slate-900 rounded-lg overflow-hidden border border-slate-700/50">
                          {ad.image_url ? <img src={ad.image_url} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">No Img</div>}
                        </div>
                      </td>
                      <td className="p-5 font-bold text-white max-w-[200px] truncate">{ad.title}</td>
                      <td className="p-5 text-sm text-slate-400">{ad.category}</td>
                      <td className="p-5 text-emerald-400 font-bold">Rs. {ad.price}</td>
                      <td className="p-5">
                        <div className="flex items-center justify-center gap-3">
                          <button onClick={() => editAd(ad)} className="bg-sky-500/10 text-sky-400 p-2 rounded-lg hover:bg-sky-500 hover:text-white transition-colors border border-sky-500/20">
                            <Edit size={16} />
                          </button>
                          <button onClick={() => deleteAd(ad.id)} className="bg-rose-500/10 text-rose-400 p-2 rounded-lg hover:bg-rose-500 hover:text-white transition-colors border border-rose-500/20">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {ads.length === 0 && (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-slate-500 font-bold">No ads found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

            {activeTab === "users" && (
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-900/50 text-slate-400 text-xs uppercase tracking-widest">
                    <th className="p-5 font-bold">User ID</th>
                    <th className="p-5 font-bold">Username</th>
                    <th className="p-5 font-bold">Phone</th>
                    <th className="p-5 font-bold">Address</th>
                    <th className="p-5 font-bold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-800/40 transition-colors group">
                      <td className="p-5 text-xs text-slate-500 font-mono truncate max-w-[150px]">{user.id}</td>
                      <td className="p-5 font-bold text-white">{user.username || "No Name"}</td>
                      <td className="p-5 text-sm text-slate-400">{user.phone || "-"}</td>
                      <td className="p-5 text-sm text-slate-400">{user.address || "-"}</td>
                      <td className="p-5">
                        <div className="flex items-center justify-center gap-3">
                          <button onClick={() => editUser(user)} className="bg-sky-500/10 text-sky-400 p-2 rounded-lg hover:bg-sky-500 hover:text-white transition-colors border border-sky-500/20">
                            <Edit size={16} />
                          </button>
                          <button onClick={() => deleteUser(user.id)} className="bg-rose-500/10 text-rose-400 p-2 rounded-lg hover:bg-rose-500 hover:text-white transition-colors border border-rose-500/20">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-slate-500 font-bold">No users found in profiles.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
