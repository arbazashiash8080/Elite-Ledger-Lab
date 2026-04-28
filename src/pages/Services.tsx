import { motion } from "motion/react";
import { 
  PieChart, 
  BookOpen, 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Search 
} from "lucide-react";

const services = [
  {
    icon: <PieChart size={32} />,
    title: "Financial Management",
    desc: "Complete oversight of your capital, ensuring liquidity and sustainable growth paths.",
    features: ["Cash Flow Management", "Asset Allocation", "Debt Restructuring"]
  },
  {
    icon: <BookOpen size={32} />,
    title: "Bookkeeping",
    desc: "Meticulous recording of every transaction to keep your records audit-ready and accurate.",
    features: ["Tax Preparation Support", "Account Reconciliation", "Payroll Management"]
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Reporting & Analysis",
    desc: "Detailed visual dashboards that turn complex numbers into clear business strategies.",
    features: ["Profitability Analysis", "Operational Metrics", "Board Ready Reports"]
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Budgeting & Forecasting",
    desc: "Data-driven projections to help you plan for seasonal shifts and expansion opportunities.",
    features: ["Scenario Planning", "A/B Growth Testing", "Burn Rate Analysis"]
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Risk Assessment",
    desc: "Identifying potential financial pitfalls before they become obstacles to your operations.",
    features: ["Internal Audits", "Compliance Checks", "Fraud Prevention"]
  },
  {
    icon: <Globe size={32} />,
    title: "International Taxation",
    desc: "Guiding businesses through the complexities of cross-border financial regulations.",
    features: ["VAT/GST Management", "Transfer Pricing", "Foreign Ledger Sync"]
  },
  {
    icon: <Zap size={32} />,
    title: "A.I Integration",
    desc: "Transforming your finance department with automated smart tools for faster decisions.",
    features: ["A.I Expense Coding", "Smart Data Ingestion", "Predictive Alerts"]
  },
  {
    icon: <Search size={32} />,
    title: "Strategic Consulting",
    desc: "Expert advisory services focused on high-level financial health and long-term vision.",
    features: ["Series Funding Support", "M&A Advisory", "Vendor Negotiation"]
  }
];

export const Services = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
        >
          Our <span className="text-emerald-600">Services</span>
        </motion.h1>
        <p className="text-slate-500 text-lg">
          Precision-engineered financial solutions designed for the modern business landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bento-card group hover:bg-slate-900 transition-all duration-300"
          >
            <div className="text-emerald-600 mb-6 group-hover:text-emerald-400 group-hover:scale-110 transition-all">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-white">{service.title}</h3>
            <p className="text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed mb-6">
              {service.desc}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-500 flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
