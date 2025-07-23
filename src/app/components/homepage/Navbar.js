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

const CustomPopup = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);
  
  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  
  return (
    <div className={`fixed top-6 right-6 z-50 ${bgColor} text-white px-5 py-3 rounded shadow-lg`}>
      <div className="flex items-center justify-between space-x-4">
        <span>{message}</span>
        <button onClick={onClose} className="text-white text-xl leading-none">×</button>
      </div>
    </div>
  );
};

function RegisterForm({ closeModal, setPopupMessage, setPopupType }) {
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      setPopupMessage("Registered successfully!");
      setPopupType("success");
      closeModal();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setPopupMessage("Email already registered");
      } else if (error.code === "auth/weak-password") {
        setPopupMessage("Password is too weak");
      } else {
        setPopupMessage("Registration failed. Please try again");
      }
      setPopupType("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-xl w-full max-w-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
        >
          ×
        </button>
        <div className="mb-10">
          <h1 className="text-3xl font-light text-white mb-3">Create your account</h1>
          <p className="text-gray-500 text-lg">Join us by filling the form below</p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-4 text-lg border-0 border-b-2 border-white/20 focus:border-blue-400 bg-transparent text-white placeholder-white/60 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full p-4 text-lg border-0 border-b-2 border-white/20 focus:border-blue-400 bg-transparent text-white placeholder-white/60 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-4 text-lg border-0 border-b-2 border-white/20 focus:border-blue-400 bg-transparent text-white placeholder-white/60 focus:outline-none transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 text-lg font-medium rounded-full hover:bg-blue-700 transition-colors mt-8"
          >
            Register
          </button>
          <p className="text-center text-gray-500 text-lg mt-8">
            Already have an account?{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                closeModal();
              }}
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("error");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(auth, email, password);
    setPopupMessage("Logged in successfully!");
    setPopupType("success");
    setIsLoginOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setPopupMessage("Logged out successfully!");
      setPopupType("success");
    } catch (error) {
      setPopupMessage("Logout failed. Please try again");
      setPopupType("error");
    }
  };

  return (
    <div>
      {/* Custom Popup */}
      {popupMessage && (
        <CustomPopup 
          message={popupMessage} 
          type={popupType}
          onClose={() => setPopupMessage("")} 
        />
      )}

      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="text-2xl font-light text-white hover:text-blue-400 cursor-pointer transition-colors tracking-tight">
                RentEase
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
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
                  className="text-white/80 hover:text-white transition-colors text-lg font-light tracking-wide"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              {!user ? (
                <>
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setIsRegisterOpen(false);
                    }}
                    className="text-white hover:underline hover:text-blue-200 transition-colors text-lg font-light"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => {
                      setIsRegisterOpen(true);
                      setIsLoginOpen(false);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
                  >
                    Join Now
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-white/70 hover:text-white transition-colors text-sm underline"
                >
                  Logout ({user.displayName || user.email})
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>




      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-xl w-full max-w-lg relative">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
            >
              ×
            </button>
            <div className="mb-10">
              <h1 className="text-3xl font-light text-white mb-3">
                Welcome back
              </h1>
              <p className="text-gray-500 text-lg">Sign in to your account</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full p-4 text-lg border-0 border-b-2 border-white/20 focus:border-blue-400 bg-transparent text-white placeholder-white/60 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="w-full p-4 text-lg border-0 border-b-2 border-white/20 focus:border-blue-400 bg-transparent text-white placeholder-white/60 focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 text-lg font-medium rounded-full hover:bg-blue-700 transition-colors mt-8"
              >
                Sign in
              </button>
              <p className="text-center text-gray-500 text-lg mt-8">
                Don't have an account?{" "}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoginOpen(false);
                    setIsRegisterOpen(true);
                  }}
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Create account
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <RegisterForm
          closeModal={() => {
            setIsRegisterOpen(false);
          }}
          setPopupMessage={setPopupMessage}
          setPopupType={setPopupType}
        />
      )}
    </div>
  );
}

export default Navbar;

