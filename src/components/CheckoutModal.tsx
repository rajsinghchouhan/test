import { useState } from 'react';
import { X, ShieldCheck, Check, Sparkles, ExternalLink, Download, Lock, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the exact checkout URL from the reference site
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase px-3 py-1 rounded-full mb-2">
            Instant Digital Access
          </span>
          <h3 className="text-2xl font-black text-white">
            कंफर्म करें और तुरंत E-Book पाएं
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            पेमेंट के तुरंत बाद डाउनलोड लिंक स्क्रीन और WhatsApp पर मिल जाएगा
          </p>
        </div>

        {/* Order Summary Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h4 className="font-bold text-white text-sm">Ladies Massage Business Guide</h4>
              <p className="text-[11px] text-slate-400">Complete 4-PDF Bundle (150+ Pages)</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-slate-200">₹199</span>
              <span className="text-[10px] text-slate-500 line-through block">₹1,999</span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center justify-between text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> 5 Exclusive Bonuses (₹4,395 Value)
              </span>
              <span className="font-bold uppercase text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">FREE</span>
            </div>
            <div className="flex items-center justify-between text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Lifetime Community & Updates
              </span>
              <span className="font-bold uppercase text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">FREE</span>
            </div>
            <div className="flex items-center justify-between text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> 30-Day Money Back Guarantee
              </span>
              <span className="text-[11px]">100% Risk Free</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="font-bold text-white text-base">Total Payable Amount:</span>
            <div className="text-right">
              <span className="text-2xl font-black text-emerald-400 font-mono">₹199</span>
              <span className="text-[10px] text-emerald-500/80 block">All Taxes Included</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <form onSubmit={handleProceed} className="space-y-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-base py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4 fill-slate-950" />
            <span>Proceed to Secure Payment (₹199)</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </form>

        {/* Trust Badges */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Secure Checkout
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-slate-300">
            <Download className="w-3.5 h-3.5 text-emerald-400" /> Instant Download
          </span>
        </div>
      </div>
    </div>
  );
}
