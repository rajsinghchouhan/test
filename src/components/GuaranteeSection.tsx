import { ShieldCheck, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenCheckout: () => void;
}

export function GuaranteeSection({ onOpenCheckout }: GuaranteeSectionProps) {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/30 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          {/* Decorative ambient ring */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Shield Badge Visual */}
          <div className="shrink-0 text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-400 flex flex-col items-center justify-center p-2 shadow-lg shadow-emerald-500/20 mx-auto">
              <ShieldCheck className="w-10 h-10 text-emerald-400 mb-1" />
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300">100% Risk-Free</span>
              <span className="text-[9px] text-slate-300">30 Days</span>
            </div>
          </div>

          {/* Guarantee Copy */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              30-Day Money Back Guarantee
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-snug">
              अगर 30 दिनों में पहला Client नहीं मिला, तो FULL ₹199 Refund!
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              हम इस गाइड और सिस्टम पर 100% कॉन्फिडेंट हैं। गाइड को ध्यान से पढ़ो, टेक्निक्स सीखो और क्लाइंट्स ढूंढने का तरीका आजमाओ। अगर 30 दिन में तुम्हें पहली क्लाइंट नहीं मिलती, तो बिना किसी सवाल के आपके ₹199 पूरे के पूरे वापस कर दिए जाएंगे।
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Questions Asked
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Money-Back Promise
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant Digital Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
