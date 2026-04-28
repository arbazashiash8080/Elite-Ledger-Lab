import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-200/50">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
        © 2024 ELITE LEDGER WORKS
      </p>
      <div className="flex gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        <Link to="#" className="hover:text-emerald-600">Privacy Policy</Link>
        <Link to="#" className="hover:text-emerald-600">Terms of Service</Link>
        <Link to="#" className="hover:text-emerald-600">LinkedIn</Link>
      </div>
    </footer>
  );
};
