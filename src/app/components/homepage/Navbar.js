import React, { useState } from 'react';
import Link from 'next/link';

function RegisterForm({ closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    alert('Your rental account has been created');
    closeModal();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-500 text-xl"
      >
        ×
      </button>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-white-600 to-blue-600 bg-clip-text text-transparent mb-4">RentEase</h2>
      <h2 className="text-2xl font-semibold text-black mb-5">Create Your Rental Account</h2>
      <form onSubmit={handleRegister}>
        <div className="text-left mb-2">
          <label className="text-left mb-2 text-black">Full Name:</label>
        </div>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="text-left mb-2">
          <label className="text-left mb-2 text-black">Email:</label>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="text-left mb-2">
          <label className="text-left mb-2 text-black">Password:</label>
        </div>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Sign Up for RentEase
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <button
            onClick={(e) => {
              e.preventDefault();
              closeModal();
              document.getElementById('open-login')?.click();
            }}
            className="text-blue-600 hover:underline"
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
}

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md z-50">
        <div className="flex items-center space-x-2">
          <span className="text-white text-2xl font-bold">RentEase</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium text-white">
          {[
            { label: "Home", href: "/" },
            { label: "Rentals", href: "/properties" },
            { label: "About Us", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors duration-300 hover:text-blue-400"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            id="open-login"
            onClick={() => {
              setIsLoginOpen(true);
              setIsRegisterOpen(false);
            }}
            className="text-sm text-white hover:underline"
          >
            Sign in
          </button>
          <button
            onClick={() => {
              setIsRegisterOpen(true);
              setIsLoginOpen(false);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Get Started
          </button>
        </div>
      </nav>

      {isLoginOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center text-center text-gray-300">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-2 right-2 text-gray-500 text-xl"
            >
              ×
            </button>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white-600 to-blue-600 bg-clip-text text-transparent mb-4">RentEase</h2>
            <h2 className="text-2xl font-semibold text-black mb-5">Sign In</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Welcome back!<br /> Please sign in to manage your rental listings.
            </p>
            <form>
              <div className="text-left mb-2">
                <label className="text-black">Email:</label>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 px-4 py-2 border rounded"
              />
              <div className="text-left mb-2 ">
                <label className="text-black">Password:</label>
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                Sign In
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Don't have an account?{' '}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoginOpen(false);
                    setIsRegisterOpen(true);
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Sign Up for Rentals
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center text-center text-gray-300">
          <RegisterForm closeModal={() => setIsRegisterOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Navbar;