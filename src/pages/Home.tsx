import { motion } from "motion/react";
import { 
  TrendingUp, 
  Database, 
  ShieldCheck, 
  BookOpen, 
  LineChart, 
  FileCheck, 
  Search,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  PieChart as RePieChart,
  Pie,
  Cell
} from 'recharts';

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

const pieData = [
  { name: 'Efficiency', value: 45 },
  { name: 'Growth', value: 30 },
  { name: 'Accuracy', value: 25 },
];

const COLORS = ['#10b981', '#34d399', '#059669'];

export const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto lg:grid-cols-12 lg:grid-rows-10">
      
      {/* 1. Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-12 lg:col-span-7 lg:row-span-5 bento-card flex flex-col justify-between overflow-hidden relative group min-h-[400px]"
      >
        <div className="max-w-lg relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900 leading-[1.1]">
            Simplify Your Finances <br />
            <span className="text-emerald-600 italic">with Confidence</span>
          </h1>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            Smart financial solutions for growing businesses. We handle the numbers so you can focus on making history.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 shadow-xl transition-all active:scale-95">
              Get Started
            </Link>
            <Link to="/about" className="px-8 py-4 border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all">
              About Us
            </Link>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end opacity-40 group-hover:opacity-60 transition-opacity">
          <svg viewBox="0 0 200 100" className="w-72">
            <rect x="0" y="40" width="20" height="60" fill="currentColor" className="text-emerald-200" />
            <rect x="30" y="20" width="20" height="80" fill="currentColor" className="text-emerald-300" />
            <rect x="60" y="50" width="20" height="50" fill="currentColor" className="text-emerald-400" />
            <rect x="90" y="10" width="20" height="90" fill="currentColor" className="text-emerald-500" />
            <rect x="120" y="30" width="20" height="70" fill="currentColor" className="text-emerald-600" />
            <rect x="150" y="45" width="20" height="55" fill="currentColor" className="text-emerald-700" />
          </svg>
        </div>

        <div className="absolute top-8 right-8 hidden lg:block">
          <div className="bg-white/90 backdrop-blur p-4 rounded-2xl border border-slate-100 shadow-lg flex items-center gap-3">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth</p>
              <p className="text-lg font-extrabold">+24.8%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Process Section - Enhanced with Charts */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="md:col-span-12 lg:col-span-5 lg:row-span-5 bento-card-dark flex flex-col min-h-[400px]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2 italic">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            Our Process
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { icon: <Database size={14} />, title: "Data Collection", step: "01", desc: "Secure multi-channel data ingestion." },
            { icon: <ShieldCheck size={14} />, title: "Validation", step: "02", desc: "Triple-check verification protocols." },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-emerald-500">{item.icon}</span>
                <span className="text-[10px] text-emerald-500/50 font-mono font-bold">{item.step}</span>
              </div>
              <div className="font-bold text-xs mb-1">{item.title}</div>
              <p className="text-[10px] text-slate-400 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Animated Chart Visual */}
        <div className="h-32 mb-4 bg-slate-800/30 rounded-2xl p-2 border border-slate-700/30">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorVal)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <BookOpen size={14} />, title: "Bookkeeping", step: "03", desc: "Real-time ledger management." },
            { icon: <Search size={14} />, title: "Insights", step: "06", desc: "A.I powered trend discovery." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-emerald-500">{item.icon}</span>
                <span className="text-[10px] text-emerald-500/50 font-mono font-bold">{idx + 3}</span>
              </div>
              <div className="font-bold text-xs mb-1">{item.title}</div>
              <p className="text-[10px] text-slate-400 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="md:col-span-6 lg:col-span-4 lg:row-span-5 bento-card flex flex-col"
      >
        <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-6 italic border-b border-slate-100 pb-2">
          What We Offer
        </h3>
        <div className="space-y-6 flex-1 flex flex-col justify-center">
          {[
            { icon: "◈", title: "Financial Management", desc: "Complete capital oversight." },
            { icon: "◈", title: "Bookkeeping", desc: "Accurate transaction logs." },
            { icon: "◈", title: "Reporting & Analysis", desc: "In-depth visualisations." },
            { icon: "◈", title: "Forecasting", desc: "Predictive growth modeling." }
          ].map((service, idx) => (
            <div key={idx} className="flex items-start gap-4 group cursor-default">
              <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold border border-slate-200 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <div>
                <p className="font-bold text-sm text-slate-800">{service.title}</p>
                <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 4. Why Us & About Section - Enhanced with Pie Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="md:col-span-6 lg:col-span-5 lg:row-span-5 bento-card-accent flex flex-col justify-between"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-[10px] font-extrabold text-white/70 uppercase tracking-widest italic border-b border-white/20 pb-2">
            Elite Values
          </h3>
          <div className="w-16 h-16">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie
                  data={pieData}
                  innerRadius={20}
                  outerRadius={30}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(255,255,255,0.2)" />
                  ))}
                </Pie>
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <p className="text-lg leading-relaxed mb-6 font-medium">
          We help businesses gain clarity, control, and confidence in their financial operations through data-driven insights.
        </p>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-2">
          {[
            "Accurate & Reliable",
            "On-Time Delivery",
            "Secure Handling",
            "Data Results"
          ].map((val, i) => (
            <div key={i} className="text-[10px] font-bold flex items-center gap-2 bg-white/10 p-2 rounded-lg">
              <CheckCircle2 size={10} className="text-emerald-200" /> {val}
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-white/20 pt-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-3xl font-extrabold">99%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Accuracy</p>
            </div>
            <Link to="/about" className="text-[10px] font-extrabold uppercase bg-white/20 px-3 py-2 rounded-lg hover:bg-white/30 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 5. Contact Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="md:col-span-12 lg:col-span-3 lg:row-span-5 bento-card flex flex-col"
      >
        <h3 className="text-xl font-bold text-slate-900 mb-6 italic">Ready to <span className="text-emerald-600">Simplify?</span></h3>
        <div className="space-y-3 mb-6">
          <Link to="/contact" className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all active:scale-95 flex items-center justify-center gap-2">
            <Phone size={16} /> Contact Now
          </Link>
          <a href="mailto:priya@eliteledger.works" className="w-full py-4 bg-slate-100 text-slate-800 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
            <Mail size={16} /> Email Us
          </a>
        </div>
        
        <div className="mt-auto space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-[10px]">
            <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-emerald-600">
              <Mail size={12} />
            </div>
            <span className="font-bold text-slate-500">priya@eliteledger.works</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-emerald-600">
              <Phone size={12} />
            </div>
            <span className="font-bold text-slate-500">+91 8580436591</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-emerald-600">
              <MapPin size={12} />
            </div>
            <span className="font-bold text-slate-500">TDI Business Center, Sector 118, Mohali, Punjab</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
};
