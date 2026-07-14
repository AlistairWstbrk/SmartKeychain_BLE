import React, { useState } from 'react';
import { Cpu, ShieldAlert, Layers, Smartphone, ArrowRight } from 'lucide-react';
import ModelViewer from './ModelViewer';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInterestSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Plug your data handling/API log endpoint right here
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Header Pipeline */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-zinc-900">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse" />
          <span className="font-mono uppercase tracking-widest font-bold text-sm text-zinc-200">MAXIMALIST LABS</span>
        </div>
        <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/5 px-3 py-1 border border-cyan-500/10 rounded-full">
          PROJECT: MATRIX // DEV_STATUS: ACTIVE
        </span>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        
        {/* Hero Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              The Interactive Cyber Companion.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              An open-source, ultra-miniature wearable ecosystem built for makers. Featuring a vibrant circular pipeline, motion interaction, and high-speed BLE image streaming right from your pocket.
            </p>
            
            {/* Launch Waitlist Form */}
            <form onSubmit={handleInterestSubmit} className="pt-2">
              {!submitted ? (
                <div className="flex flex-col sm:flex-row gap-3 p-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl focus-within:border-cyan-500/40 transition-all">
                  <input
                    type="email"
                    required
                    placeholder="Enter email for MakerWorld launch drop..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent flex-1 px-4 py-3 text-sm focus:outline-none text-zinc-200"
                  />
                  {/* Shimmer Style CTA Button */}
                  <button
                    type="submit"
                    className="relative group overflow-hidden bg-white text-black font-semibold text-sm px-6 py-3 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <span>Secure Access</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm rounded-2xl font-mono text-center">
                  [✓] System access verified. You are queued for the crowdfunding run.
                </div>
              )}
            </form>
          </div>

          {/* Render 3D Engine Component */}
          <div className="lg:col-span-7">
            <ModelViewer />
          </div>
        </div>

        {/* Feature Bento Grid (Direct Spec Layout) */}
        <div className="space-y-4">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-cyan-500">Hardware Metrics</h2>
            <p className="text-2xl font-bold tracking-tight">Engineered to Over-Deliver.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Bento Card 1 */}
            <div className="p-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl space-y-4 hover:border-zinc-800 transition-all relative overflow-hidden group">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl w-fit">
                <Cpu size={24} />
              </div>
              <h3 className="text-lg font-semibold">Seeed Studio S3 Architecture</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Harnessing dual-core performance combined with an 8MB PSRAM buffer to store and sequence dense Bluetooth drawing arrays dynamically.
              </p>
            </div>

            {/* Bento Card 2 */}
            <div className="p-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl space-y-4 hover:border-zinc-800 transition-all relative overflow-hidden group">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl w-fit">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-semibold">1.28" High-Refresh IPS</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Vibrant 240x240 circular matrix driven over a fully configured SPI pipeline for fluid UI navigation and telemetry.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="p-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl space-y-4 hover:border-zinc-800 transition-all relative overflow-hidden group">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit">
                <Smartphone size={24} />
              </div>
              <h3 className="text-lg font-semibold">Web Bluetooth Integration</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                No app installation footprint required. Stream real-time vector designs, text payloads, and metrics directly via your web browser.
              </p>
            </div>

          </div>

          {/* Wide Safety Bento Item */}
          <div className="w-full p-8 bg-zinc-900/20 border border-zinc-900 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-zinc-800 transition-all">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                <ShieldAlert size={14} /> Integrated Safety Protocol
              </div>
              <h4 className="text-lg font-semibold text-zinc-200">Zero-Solder Kit Architecture</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The modular Hub PCB design securely maps your battery configurations via pre-verified protection modules, featuring pogo-pin arrays for seamless structural connectivity.
              </p>
            </div>
            <div className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-xl text-zinc-400 whitespace-nowrap">
              NO HEAT // NO SOLDER // SNAP LAYOUT
            </div>
          </div>

        </div>

      </main>

      {/* Basic Footer */}
      <footer className="border-t border-zinc-900 text-center py-8 text-xs font-mono text-zinc-600">
        &copy; {new Date().getFullYear()} MAXIMALIST LABS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
