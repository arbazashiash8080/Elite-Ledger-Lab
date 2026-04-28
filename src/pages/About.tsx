import { motion } from "motion/react";
import { ShieldCheck, Target, Users, Award, Database, TrendingUp } from "lucide-react";

export const About = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-emerald-600 font-extrabold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Pioneers in <span className="text-emerald-600 italic">Financial Clarity</span> Since 2014
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Elite Ledger Works was founded on a simple principle: that data-driven transparency is the bedrock of business confidence. 
            We transform messy financial noise into a clear signal for growth.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-3xl font-extrabold text-slate-900 mb-1">150+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Partners</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-3xl font-extrabold text-slate-900 mb-1">99.9%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Accuracy Rating</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative aspect-square bg-slate-900 rounded-[60px] overflow-hidden p-8 flex items-center justify-center"
        >
           <div className="grid grid-cols-2 gap-4 w-full">
              <div className="space-y-4 pt-8">
                 <div className="h-40 bg-emerald-600 rounded-3xl animate-pulse" />
                 <div className="h-24 bg-slate-800 rounded-3xl" />
              </div>
              <div className="space-y-4">
                 <div className="h-24 bg-slate-800 rounded-3xl" />
                 <div className="h-40 bg-white/10 rounded-3xl" />
              </div>
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
           <div className="absolute bottom-12 left-12 right-12">
              <p className="text-white font-bold text-xl italic leading-tight">
                "We don't just count the numbers; we make the numbers count."
              </p>
           </div>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bento-card-dark p-12">
          <Target className="text-emerald-500 mb-6" size={40} />
          <h2 className="text-2xl font-bold mb-4 italic">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed font-medium">
            To empower entrepreneurs with structured financial intelligence, removing the stress of complexity and enabling bold, strategic decisions.
          </p>
        </div>
        <div className="bento-card p-12 flex flex-col justify-center">
          <Award className="text-emerald-600 mb-6" size={40} />
          <h2 className="text-2xl font-bold mb-4 italic">Our Values</h2>
          <div className="grid grid-cols-2 gap-4 uppercase tracking-widest text-[9px] font-bold text-slate-500">
             <div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"/> Radical Integrity</div>
             <div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"/> Data Obsession</div>
             <div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"/> Client Success</div>
             <div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"/> On-Time Delivery</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <ShieldCheck />, title: "Secure Infrastructure", desc: "Military-grade encryption for all financial documents." },
          { icon: <Users />, title: "Expert Analysts", desc: "A seasoned team with collective decades of FinTech expertise." },
          { icon: <TrendingUp />, title: "Growth Mindset", desc: "We scale our services as your business climbs the ladder." }
        ].map((feat, idx) => (
          <div key={idx} className="bento-card">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
               {feat.icon}
            </div>
            <h3 className="text-lg font-extrabold mb-2 text-slate-900 leading-tight">{feat.title}</h3>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
