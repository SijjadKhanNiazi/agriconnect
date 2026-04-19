import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  Tag,
  MapPin,
  BadgeDollarSign,
  Phone,
  Send,
  Loader2,
  Camera,
  X,
  Type,
  FileText, // Naya icon description ke liye
} from "lucide-react";

const CreateListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "Machinery",
    price: "",
    area: "Rokhri",
    contact: "",
    description: "", // State mein field add ho gayi
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Machinery",
    "Crops",
    "Seeds",
    "Fertilizers",
    "Livestock",
  ];
  const areas = [
    "Rokhri",
    "Mianwali City",
    "Piplan",
    "Isa Khel",
    "Kundian",
    "Kamar Mushani",
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size 2MB se kam honi chahiye!");
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading("Ad post ho raha hai...");

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        toast.error("Pehle login karen!", { id: loadingToast });
        setIsSubmitting(false);
        return;
      }

      let publicImageUrl = null;

      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("listing-images")
          .upload(filePath, image);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("listing-images")
          .getPublicUrl(filePath);

        publicImageUrl = urlData.publicUrl;
      }

      // --- DATABASE INSERT (Description included) ---
      const { error } = await supabase.from("Listings").insert([
        {
          title: formData.title,
          category: formData.category,
          price: parseInt(formData.price),
          area: formData.area,
          contact: formData.contact,
          description: formData.description, // Database mein insert
          image_url: publicImageUrl,
          user_id: user.id,
        },
      ]);

      if (error) throw error;

      toast.success("Mubarak ho! Ad lag gaya.", { id: loadingToast });
      navigate("/my-ads");
    } catch (err) {
      toast.error(err.message || "Kuch masla hua hai", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-2xl mx-auto bg-slate-800/30 border border-slate-700/50 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white">Naya Ad Lagayen</h1>
          <p className="text-slate-400 text-sm mt-2">
            AgriConnect Mianwali par apni cheez farokht karen
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="flex justify-center mb-8">
            {imagePreview ? (
              <div className="relative w-full h-48 rounded-3xl overflow-hidden border-2 border-emerald-500/30">
                <img
                  src={imagePreview}
                  className="w-full h-full object-cover"
                  alt="Preview"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                  className="absolute top-2 right-2 bg-rose-500 p-2 rounded-full text-white shadow-lg"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <label className="w-full h-48 border-2 border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group">
                <Camera
                  className="text-slate-500 group-hover:text-emerald-500 mb-2"
                  size={40}
                />
                <span className="text-slate-500 text-sm font-bold">
                  Tasveer Select Karen
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* Title */}
          <div className="relative group">
            <Type
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Ad ka Title (e.g. Massey Ferguson 240)"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 transition-all"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <Tag
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
              />
              <select
                className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none appearance-none focus:border-emerald-500/50"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative group">
              <BadgeDollarSign
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
              />
              <input
                type="number"
                placeholder="Qemat (Rs)"
                className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Description Field (NAYA) */}
          <div className="relative group">
            <FileText
              className="absolute left-4 top-5 text-slate-500 group-focus-within:text-emerald-500"
              size={20}
            />
            <textarea
              placeholder="Cheez ki tafseel likhen (e.g. 2 saal chala hua hai, bilkul fit condition hai...)"
              className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50 transition-all min-h-[120px] resize-none"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <MapPin
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
              />
              <select
                className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none appearance-none focus:border-emerald-500/50"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
              >
                {areas.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative group">
              <Phone
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Rabta Number"
                className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-emerald-500/50"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-500 text-slate-950 py-4 rounded-2xl font-black hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Send size={20} /> Post My Ad
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateListing;
