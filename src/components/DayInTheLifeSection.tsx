import { MessageSquare, Clock, Sun, Sparkles, Heart, IndianRupee, CheckCheck } from 'lucide-react';

interface DayInTheLifeSectionProps {
  onOpenCheckout: () => void;
}

export function DayInTheLifeSection({ onOpenCheckout }: DayInTheLifeSectionProps) {
  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>A Day In Your New Life</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Imagine करो... तुम्हारी नई लाइफ
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2 font-medium">
            अलार्म की चीख-पुकार नहीं, बॉस की डांट नहीं — अपनी शर्तों पर शान से जीना!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Timeline Story on Left */}
          <div className="lg:col-span-7 space-y-4">
            {/* Step 1 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4.5 flex gap-4 items-start hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">10:00 AM • No 7 AM Alarm!</span>
                <h3 className="text-base font-bold text-white mt-0.5">सुबह 10 बजे सुकून से उठते हो</h3>
                <p className="text-slate-300 text-sm mt-1">
                  कोई हड़बड़ी नहीं, कोई बस की भागदौड़ नहीं। चाय पीते हुए WhatsApp खोलते हो।
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4.5 flex gap-4 items-start hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <IndianRupee className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">12:00 PM • First Client Visit</span>
                <h3 className="text-base font-bold text-white mt-0.5">बड़ा सा घर, Full AC रूम और ₹3000 Cash</h3>
                <p className="text-slate-300 text-sm mt-1">
                  1 घंटा फुल बॉडी मसाज। क्लाइंट बहुत खुश और रिलैक्स्ड होती है। ₹3,000 cash तुरंत हाथ में मिलता है।
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4.5 flex gap-4 items-start hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">02:00 PM • Lunch & Rest</span>
                <h3 className="text-base font-bold text-white mt-0.5">घर जाकर आराम से लंच और रेस्ट</h3>
                <p className="text-slate-300 text-sm mt-1">
                  फिर शाम को 4:30 बजे दूसरी क्लाइंट का कॉल आता है: "भैया 5 बजे आ सकते हो? नेक पेन है, ₹2500 दूंगी।"
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 rounded-xl p-4.5 flex gap-4 items-start shadow-lg shadow-emerald-950/30">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 fill-emerald-400/40" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide">08:00 PM • Pure Happiness</span>
                <h3 className="text-base font-bold text-white mt-0.5">एक दिन की ₹5,500 कमाई मम्मी के हाथ में!</h3>
                <p className="text-slate-200 text-sm mt-1">
                  डिनर के वक्त घर पहुंचते हो। ₹5,500 आज की कमाई मम्मी को देते हो और उनके चेहरे पर गर्व भरी मुस्कान देखते हो!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Mockup Phone */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-[32px] border-4 border-slate-700 bg-slate-950 p-3 shadow-2xl shadow-emerald-900/20">
              {/* Phone Header */}
              <div className="bg-emerald-900 text-white rounded-t-2xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
                    P
                  </div>
                  <div>
                    <h4 className="text-xs font-bold">Pooja (Society Client)</h4>
                    <span className="text-[10px] text-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Online
                    </span>
                  </div>
                </div>
                <MessageSquare className="w-4 h-4 text-emerald-200" />
              </div>

              {/* Chat Body */}
              <div className="bg-[#0b141a] p-3 space-y-3 min-h-[300px] text-xs font-sans rounded-b-2xl">
                {/* Incoming Message 1 */}
                <div className="bg-[#202c33] text-slate-100 p-2.5 rounded-lg rounded-tl-none max-w-[85%] space-y-1">
                  <p>Bhaiya 12 baje free ho? 1 ghanta full body massage chahiye, ₹3000 dungi. Body bohot stiff ho rahi hai.</p>
                  <span className="text-[9px] text-slate-400 block text-right">10:14 AM</span>
                </div>

                {/* Outgoing Message */}
                <div className="bg-[#005c4b] text-slate-100 p-2.5 rounded-lg rounded-tr-none ml-auto max-w-[85%] space-y-1">
                  <p>Ji ma'am, bilkul. Main 12 baje pahunch raha hoon with aromatic oils.</p>
                  <div className="flex items-center justify-end gap-1 text-[9px] text-emerald-200">
                    <span>10:16 AM</span>
                    <CheckCheck className="w-3 h-3 text-cyan-400" />
                  </div>
                </div>

                {/* Incoming Message 2 (Post Session) */}
                <div className="bg-[#202c33] text-slate-100 p-2.5 rounded-lg rounded-tl-none max-w-[85%] space-y-1">
                  <p className="text-emerald-300 font-semibold">Thank you so much bhaiya! Boht relief mila pain se. Maine ₹3,000 cash de diye hain. Next week fir se call karungi.</p>
                  <span className="text-[9px] text-slate-400 block text-right">01:15 PM</span>
                </div>

                {/* Evening Incoming message */}
                <div className="bg-[#202c33] text-slate-100 p-2.5 rounded-lg rounded-tl-none max-w-[85%] space-y-1">
                  <p>Bhaiya 5 baje aa sakte ho? Neck pain hai, massage chahiye. ₹2500 dungi.</p>
                  <span className="text-[9px] text-slate-400 block text-right">04:30 PM</span>
                </div>

                {/* Day Summary Chip */}
                <div className="bg-amber-500/20 border border-amber-500/40 text-amber-300 p-2 rounded-lg text-center text-[11px] font-bold">
                  🎉 Total Today: ₹5,500 Cash in Hand!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-10 text-center">
          <p className="text-slate-300 text-base mb-4 font-medium">
            यही तो चाहिए था ना? यह बिल्कुल सच हो सकता है — बस सही गाइडेंस की जरूरत है।
          </p>
          <button
            onClick={onOpenCheckout}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-base py-3 px-8 rounded-full shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 cursor-pointer"
          >
            हाँ, मुझे यह लाइफस्टाइल चाहिए (सिर्फ ₹199)
          </button>
        </div>
      </div>
    </section>
  );
}
