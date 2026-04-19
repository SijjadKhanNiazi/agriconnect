import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "./services/supabaseClient";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CreateListing from "./pages/CreateListing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyAds from "./pages/MyAds";
import AdDetail from "./pages/AdDetail";
import EditProfile from "./pages/EditProfile";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Help from "./pages/Help";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a] selection:bg-emerald-500/30">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1e293b",
              color: "#fff",
              borderRadius: "16px",
            },
          }}
        />

        <Navbar session={session} />

        <main className="pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ad/:id" element={<AdDetail />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/help" element={<Help />} />

            {/* Protected Routes */}
            <Route
              path="/edit-profile"
              element={session ? <EditProfile /> : <Login />}
            />
            <Route
              path="/create"
              element={session ? <CreateListing /> : <Login />}
            />
            <Route path="/my-ads" element={session ? <MyAds /> : <Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
