"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { auth } from "../../../../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { 
  User, 
  LogOut, 
  X, 
  Mail, 
  Lock, 
  UserPlus, 
  LogIn, 
  Home,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ChevronDown
} from "lucide-react";

const CustomPopup = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);
  
  const isSuccess = type === 'success';
  
  return (
    <div className={`fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl backdrop-blur-md border animate-in slide-in-from-top-4 fade-in duration-300 ${
      isSuccess 
        ? 'bg-emerald-500/90 border-emerald-400/50 text-white' 
        : 'bg-red-500/90 border-red-400/50 text-white'
    }`}>
      {isSuccess ? <CheckCircle2 className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
      <span className="font-medium text-sm">{message}</span>
      <button onClick={onClose} className="ml-4 text-white/80 hover:text-white transition-colors">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

const AuthModal = ({ isOpen, onClose, title, subtitle, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="absolute top-0 right-0 p-4">
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
            <User className="h-6 w-6 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-slate-400 text-sm">{subtitle}</p>
        </div>
        
        {children}
      </div>
    </div>
  );
};

function RegisterForm({ closeModal, setPopupMessage, setPopupType }) {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      setPopupMessage("Account created successfully!");
      setPopupType("success");
      closeModal();
    } catch (error) {
      let msg = "Registration failed.";
      if (error.code === "auth/email-already-in-use") msg = "Email already in use.";
      if (error.code === "auth/weak-password") msg = "Password should be stronger.";
      setPopupMessage(msg);
      setPopupType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-400 ml-1">Full Name</label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-400 ml-1">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            required
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-400 ml-1">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            required
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/20 mt-6 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <UserPlus className="h-5 w-5" />}
        Create Account
      </button>
    </form>
  );
}

function LoginForm({ closeModal, setPopupMessage, setPopupType }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setPopupMessage("Welcome back!");
      setPopupType("success");
      closeModal();
    } catch (error) {
      setPopupMessage("Invalid email or password.");
      setPopupType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-400 ml-1">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            required
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-400 ml-1">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            required
            className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/20 mt-6 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <LogIn className="h-5 w-5" />}
        Sign In
      </button>
    </form>
  );
}

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("error");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setPopupMessage("Signed out successfully.");
      setPopupType("success");
    } catch (error) {
      setPopupMessage("Failed to sign out.");
      setPopupType("error");
    }
  };

  // Invisible button to trigger login from other components
  const triggerLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <>
      <button id="open-login" className="hidden" onClick={triggerLogin} />
      
      {popupMessage && (
        <CustomPopup 
          message={popupMessage} 
          type={popupType}
          onClose={() => setPopupMessage("")} 
        />
      )}

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3" 
          : "bg-transparent border-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-800 p-2 rounded-lg group-hover:scale-105 transition-transform">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                RentEase
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "Home", href: "/" },
                { label: "Properties", href: "/properties" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              {!user ? (
                <>
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setIsRegisterOpen(false);
                    }}
                    className="hidden sm:block text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setIsRegisterOpen(true);
                      setIsLoginOpen(false);
                    }}
                    className="bg-white text-slate-900 hover:bg-blue-50 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Get Started
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex flex-col items-end mr-2">
                    <span className="text-sm font-medium text-white leading-none">{user.displayName || "User"}</span>
                    <span className="text-[10px] text-slate-400 leading-none mt-1">{user.email}</span>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold border border-slate-700">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : <User className="h-4 w-4" />}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-slate-400 hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                    title="Sign Out"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <AuthModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        title="Welcome back"
        subtitle="Sign in to manage your rentals"
      >
        <LoginForm 
          closeModal={() => setIsLoginOpen(false)}
          setPopupMessage={setPopupMessage}
          setPopupType={setPopupType}
        />
        <div className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <button
            onClick={() => {
              setIsLoginOpen(false);
              setIsRegisterOpen(true);
            }}
            className="text-blue-500 hover:text-blue-400 font-medium hover:underline"
          >
            Create one now
          </button>
        </div>
      </AuthModal>

      {/* Register Modal */}
      <AuthModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        title="Join RentEase"
        subtitle="Start your journey to the perfect home"
      >
        <RegisterForm 
          closeModal={() => setIsRegisterOpen(false)}
          setPopupMessage={setPopupMessage}
          setPopupType={setPopupType}
        />
        <div className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <button
            onClick={() => {
              setIsRegisterOpen(false);
              setIsLoginOpen(true);
            }}
            className="text-blue-500 hover:text-blue-400 font-medium hover:underline"
          >
            Sign in
          </button>
        </div>
      </AuthModal>
    </>
  );
}

export default Navbar;