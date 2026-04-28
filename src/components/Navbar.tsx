import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center mb-8 h-12 relative z-50">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-600/20">EL</div>
        <span className="text-xl font-extrabold tracking-tight text-slate-800">Elite Ledger <span className="text-emerald-600 italic">Works</span></span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.href} className="hover:text-emerald-600 transition-colors">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-16 right-0 z-50 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 min-w-[200px] md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-600 hover:text-emerald-600 p-2 rounded-lg hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
