import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from "lucide-react";

export const Contact = () => {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
        >
          Get in <span className="text-emerald-600">Touch</span>
        </motion.h1>
        <p className="text-slate-500 text-lg">
          Ready to simplify your finances? Our team is standing by to start the conversation.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Contact Info Bento Column */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bento-card-accent p-8"
          >
            <h3 className="text-2xl font-bold mb-8 italic">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">Email Us</p>
                  <p className="font-extrabold text-lg">priya@eliteledger.works</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">Call Us</p>
                  <p className="font-extrabold text-lg">+91 8580436591</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">Our Hub</p>
                  <p className="font-extrabold text-lg">TDI Business Center, Sector 118, Mohali Punjab</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
             <div className="bento-card p-6 flex flex-col items-center justify-center text-center">
                <Clock className="text-emerald-600 mb-2" size={24} />
                <p className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Business Hours</p>
                <p className="text-sm font-extrabold text-slate-800">9AM - 6PM EST</p>
             </div>
             <div className="bento-card p-6 flex flex-col items-center justify-center text-center">
                <Globe className="text-emerald-600 mb-2" size={24} />
                <p className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Support Area</p>
                <p className="text-sm font-extrabold text-slate-800">Global Service</p>
             </div>
          </div>
        </div>

        {/* Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 bento-card p-8 md:p-12"
        >
          <div className="flex items-center gap-2 mb-8">
             <MessageSquare className="text-emerald-600" size={20} />
             <h3 className="text-xl font-bold text-slate-800 italic">Inquiry Form</h3>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Priya Sharma" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Work Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="priya@company.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subject</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors appearance-none font-medium">
                <option>Book Keeping Inquiry</option>
                <option>Pricing Inquiry</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea rows={6} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="How can we help your business climb the financial ladder?"></textarea>
            </div>

            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 shadow-xl transition-all active:scale-95">
              Securely Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
