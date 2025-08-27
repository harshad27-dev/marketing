"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Festivo</h2>
          <p className="text-sm text-gray-400 mt-1">
            Helping small businesses shine with festival-ready posters, captions, 
            and one-click sharing.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">How It Works</a>
          <a href="#" className="hover:text-gray-300 transition">Templates</a>
          <a href="#" className="hover:text-gray-300 transition">Pricing</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Festivo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
