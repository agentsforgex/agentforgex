import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Activity,
  Layers,
  Cpu,
  Workflow,
  Terminal,
  Play,
  Sliders,
  Check,
  ChevronRight,
  AlertTriangle,
  Menu,
  X,
  Database
} from 'lucide-react';
import logoSvg from '../assets/Logo.svg?url';

// Reusable SVG Grid Background
const AnimatedTechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <div className="absolute inset-y-0 left-0 w-full bg-amber-50">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="product-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00FFCC" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#product-grid)" />
        </svg>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-300/20 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
};

export default function Product() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [simActiveTab, setSimActiveTab] = useState<'marketing' | 'audit'>('marketing');
  const [simStep, setSimStep] = useState<number>(0);
  const [simLogs, setSimLogs] = useState<string[]>([]);
  const [simRunning, setSimRunning] = useState<boolean>(false);
  
  // Custom Swarm Builder settings
  const [swarmCore, setSwarmCore] = useState<'nemo-llama' | 'nemo-mistral'>('nemo-llama');
  const [swarmMode, setSwarmMode] = useState<'debate' | 'sequential'>('debate');
  const [swarmSecurity, setSwarmSecurity] = useState<'strict' | 'adaptive'>('strict');
  const [swarmCompiled, setSwarmCompiled] = useState<boolean>(false);
  const [compiling, setCompiling] = useState<boolean>(false);

  // Live telemetry state simulation
  const [telemetry, setTelemetry] = useState({
    activeThreads: 1420,
    messagesPerSec: 12450,
    avgLatency: 142,
    anomalyDrift: 0.02
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Telemetry real-time ticking
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        activeThreads: prev.activeThreads + Math.floor(Math.random() * 9) - 4,
        messagesPerSec: prev.messagesPerSec + Math.floor(Math.random() * 150) - 75,
        avgLatency: Number((138 + Math.random() * 8).toFixed(1)),
        anomalyDrift: Number(Math.max(0.01, Math.min(0.05, prev.anomalyDrift + (Math.random() * 0.01 - 0.005))).toFixed(4))
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulator Workflow Timers
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (simRunning) {
      const marketingSteps = [
        { log: '[Swarm Engine] Initializing Campaign Swarm...', latency: 500 },
        { log: '[Agent: Market Researcher] Scraping competitive landscape & target demographics...', latency: 1200 },
        { log: '[Agent: Market Researcher] Generated 3 strategic customer segments.', latency: 800 },
        { log: '[Swarm Handoff] Routing strategy blueprints to Strategy Writer via Triton BLS...', latency: 600 },
        { log: '[Agent: Strategy Writer] Formulating ad copy variants & visual brief...', latency: 1400 },
        { log: '[Agent: Strategy Writer] Copy variations created. Flagging compliance check.', latency: 800 },
        { log: '[Swarm Handoff] Dispatching copy options to Compliance Guardrail Agent...', latency: 600 },
        { log: '[Agent: Compliance Guard] Reviewing content against regulatory alignment guidelines...', latency: 1000 },
        { log: '[NeMo Guardrails] Auto-corrected brand voice: adjusted "guaranteed value" to "projected efficiency".', latency: 900 },
        { log: '[Agent: Compliance Guard] Copy vetted & signed off (Safety check: PASS).', latency: 700 },
        { log: '[Swarm Engine] Campaign swarm completed successfully. Artifact packaged.', latency: 600 }
      ];

      const auditSteps = [
        { log: '[Swarm Engine] Deploying Corporate Ledger Audit Swarm...', latency: 500 },
        { log: '[Agent: Ledger Ingestor] Reading transactional databases & ledger sheets...', latency: 1100 },
        { log: '[Agent: Ledger Ingestor] Loaded 14,800 transactions across Q2.', latency: 700 },
        { log: '[Swarm Handoff] Handoff transaction records to Anomaly Scanner...', latency: 500 },
        { log: '[Agent: Anomaly Scanner] Running parallel GPU checks on invoice patterns...', latency: 1500 },
        { log: '[Agent: Anomaly Scanner] Flagged 3 double-invoiced edge cases in logistics.', latency: 900 },
        { log: '[Swarm Handoff] Escalating flags to Compliance & Verification Lead...', latency: 500 },
        { log: '[Agent: Compliance Guard] Verifying merchant IDs and verifying payment approvals...', latency: 1300 },
        { log: '[Agent: Compliance Guard] Confirmed mismatch on merchant 4901; flag confirmed.', latency: 800 },
        { log: '[Swarm Engine] Audit report compiled. Flags submitted to admin workspace.', latency: 600 }
      ];

      const steps = simActiveTab === 'marketing' ? marketingSteps : auditSteps;

      if (simStep < steps.length) {
        timer = setTimeout(() => {
          setSimLogs(prev => [...prev, steps[simStep].log]);
          setSimStep(prev => prev + 1);
        }, steps[simStep].latency);
      } else {
        setSimRunning(false);
      }
    }
    return () => clearTimeout(timer);
  }, [simRunning, simStep, simActiveTab]);

  const handleStartSimulation = () => {
    setSimLogs([]);
    setSimStep(0);
    setSimRunning(true);
  };

  const handleCompileSwarm = () => {
    setCompiling(true);
    setSwarmCompiled(false);
    setTimeout(() => {
      setCompiling(false);
      setSwarmCompiled(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 font-sans selection:bg-amber-300 selection:text-amber-900 overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-0 bg-amber-50/95 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 -my-10">
          <Link to="/" className="inline-flex items-center">
            <img src={logoSvg} alt="AgentsForgeX logo" className="h-40 w-40" />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-800">
            <a href="/#problem-statement" className="hover:text-amber-900 transition-colors">
              Platform
            </a>
            <a href="/#features" className="hover:text-amber-900 transition-colors">
              Features
            </a>
            <a href="/#pricing" className="hover:text-amber-900 transition-colors">
              Pricing
            </a>
            <a href="/#contact" className="hover:text-amber-900 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-900 shadow-sm transition hover:bg-amber-100"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div className="hidden md:block">
            <a
              href="https://app.agentsforgex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-amber-900 shadow-sm hover:bg-amber-300 transition-all duration-300 transform hover:scale-105"
            >
              Launch Console
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[420px] opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-3 border-t border-amber-200 px-4 pt-4 pb-3 bg-amber-50">
            <a href="/#problem-statement" onClick={() => setMobileMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-amber-800 hover:bg-amber-100">
              Platform
            </a>
            <a href="/#features" onClick={() => setMobileMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-amber-800 hover:bg-amber-100">
              Features
            </a>
            <a href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-amber-800 hover:bg-amber-100">
              Pricing
            </a>
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-amber-800 hover:bg-amber-100">
              Contact
            </a>
            <a href="https://app.agentsforgex.com" target="_blank" rel="noopener noreferrer" className="block rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-amber-900 shadow-sm transition hover:bg-amber-600">
              Launch Console
            </a>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <AnimatedTechBackground />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-300 bg-amber-100/50 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,204,0.15)]"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest">
                Forgen x.1 Enterprise Edition
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-black tracking-tight text-amber-950 mb-6 leading-[1.1]"
            >
              Multi-Agent Orchestration <span className="text-amber-700 block">At Absolute Scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-amber-800 max-w-xl mb-10 leading-relaxed font-sans"
            >
              Deploy, govern, and coordinate autonomous agent swarms. Forgen x.1 enables multi-agent teams to debate, self-correct, and execute complex business logic under strict enterprise guardrails.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="https://app.agentsforgex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-amber-900 shadow-lg shadow-amber-300/30 hover:bg-amber-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Launch Live Console
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#swarm-intelligence"
                className="inline-flex items-center justify-center rounded-full border-2 border-amber-700 bg-transparent px-8 py-4 text-base font-bold text-amber-900 hover:bg-amber-100 transition-colors"
              >
                Explore Technology
              </a>
            </motion.div>
          </div>

          {/* Right Hero Column: Swarm Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square rounded-3xl border border-amber-200/80 bg-white/70 backdrop-blur-md shadow-2xl p-8 flex flex-col justify-between overflow-hidden"
            >
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Floating nodes mesh */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Center Node */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-20 h-20 bg-amber-500 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,255,204,0.4)] z-20 border-2 border-white"
                >
                  <Cpu className="w-9 h-9 text-amber-900" />
                  <span className="text-[9px] font-mono font-bold text-amber-900 mt-0.5">X.1 CORE</span>
                </motion.div>

                {/* Subnode 1 (Top Left) */}
                <motion.div
                  animate={{ y: [6, -6, 6], x: [-3, 3, -3] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-8 left-6 w-14 h-14 bg-amber-100 rounded-2xl border-2 border-amber-300 flex flex-col items-center justify-center shadow-lg z-10"
                >
                  <Workflow className="w-5 h-5 text-amber-800" />
                  <span className="text-[8px] font-mono font-medium text-amber-700 mt-1">PLANNER</span>
                </motion.div>

                {/* Subnode 2 (Bottom Right) */}
                <motion.div
                  animate={{ y: [-5, 5, -5], x: [3, -3, 3] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-8 right-6 w-14 h-14 bg-amber-100 rounded-2xl border-2 border-amber-300 flex flex-col items-center justify-center shadow-lg z-10"
                >
                  <Shield className="w-5 h-5 text-amber-800" />
                  <span className="text-[8px] font-mono font-medium text-amber-700 mt-1">GOVERNOR</span>
                </motion.div>

                {/* Subnode 3 (Top Right) */}
                <motion.div
                  animate={{ y: [8, -8, 8], x: [2, -2, 2] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-10 right-8 w-12 h-12 bg-amber-100 rounded-2xl border border-amber-200 flex flex-col items-center justify-center shadow-md z-10"
                >
                  <Activity className="w-4 h-4 text-amber-600" />
                  <span className="text-[8px] font-mono font-medium text-amber-500 mt-0.5">MONITOR</span>
                </motion.div>

                {/* Connecting SVG lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <line x1="90" y1="90" x2="190" y2="190" stroke="#00FFCC" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="290" y1="290" x2="190" y2="190" stroke="#00FFCC" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="310" y1="100" x2="190" y2="190" stroke="#00FFCC" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Console Feed Overlay */}
              <div className="w-full bg-amber-900 text-[10px] font-mono p-3 rounded-xl border border-amber-800 text-amber-300 flex items-center gap-2 mt-auto">
                <Terminal className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 animate-pulse" />
                <span className="truncate">Swarm status: Active. 1,420 threads aligned.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SWARM INTELLIGENCE & COLLABORATION */}
      <section id="swarm-intelligence" className="relative py-28 px-6 bg-white border-y border-amber-200 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-amber-700 font-mono text-xs uppercase tracking-widest font-bold">
              <Workflow className="w-4 h-4" />
              Dynamic Task Routing
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-amber-950 leading-tight">
              Swarm Collaboration & Auto-Correction
            </h2>
            <p className="text-lg text-amber-800 leading-relaxed font-sans">
              Traditional AI agents fail when hitting edge cases because they operate in isolation. Forgen x.1 orchestrates **swarm collaboration** where specialized agents debate approaches, cross-verify deliverables, and hand off tasks dynamically.
            </p>
            <p className="text-md text-amber-700 font-sans">
              Behind the scenes, Forgen x.1 leverages a high-throughput, low-latency execution flow. By mapping workflows as multi-model ensembles on the GPU and scripting execution trees dynamically, agent states are managed instantly with zero-latency handoffs.
            </p>
            
            {/* Scannable Technical Note */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/50 flex items-start gap-3">
              <Cpu className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-mono font-bold text-amber-900 uppercase">Under the Hood: Workflow Intelligence</h4>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  Powered by <strong>NVIDIA Triton Inference Server</strong>. Utilizes Business Logic Scripting (BLS) to route reasoning tasks dynamically between model execution trees on the GPU, minimizing memory copies.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Simulator Widget */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-amber-900 rounded-3xl border border-amber-950 shadow-2xl p-6 overflow-hidden text-left flex flex-col h-[520px]">
              
              {/* Simulator Header */}
              <div className="flex items-center justify-between border-b border-amber-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-amber-300 ml-2">swarm_simulator_v1.sh</span>
                </div>
                
                {/* Workflow Selector Tabs */}
                <div className="flex gap-2">
                  <button
                    onClick={() => { if (!simRunning) { setSimActiveTab('marketing'); setSimStep(0); setSimLogs([]); } }}
                    disabled={simRunning}
                    className={`px-3 py-1 text-xs font-mono rounded transition-colors ${simActiveTab === 'marketing' ? 'bg-amber-500 text-amber-900 font-bold' : 'text-amber-400 hover:bg-amber-800'}`}
                  >
                    Campaign Swarm
                  </button>
                  <button
                    onClick={() => { if (!simRunning) { setSimActiveTab('audit'); setSimStep(0); setSimLogs([]); } }}
                    disabled={simRunning}
                    className={`px-3 py-1 text-xs font-mono rounded transition-colors ${simActiveTab === 'audit' ? 'bg-amber-500 text-amber-900 font-bold' : 'text-amber-400 hover:bg-amber-800'}`}
                  >
                    Ledger Audit
                  </button>
                </div>
              </div>

              {/* Live Animation Simulation View */}
              <div className="flex-1 flex flex-col justify-between">
                
                {/* Log Terminal Screen */}
                <div className="bg-black/40 rounded-xl border border-amber-800/40 p-4 font-mono text-xs text-amber-200 h-[280px] overflow-y-auto space-y-2 mb-4 scrollbar-thin scrollbar-thumb-amber-800">
                  {simLogs.length === 0 && (
                    <div className="text-amber-500/60 italic flex flex-col items-center justify-center h-full gap-2">
                      <Terminal className="w-8 h-8" />
                      <span>Ready. Select workflow and click Run Simulation.</span>
                    </div>
                  )}
                  {simLogs.map((log, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={i}
                      className={`py-0.5 border-l-2 pl-2 ${log.includes('[SUCCESS]') || log.includes('[APPROVED]') ? 'border-amber-500 text-amber-300' : log.includes('[WARNING]') ? 'border-yellow-500 text-yellow-300' : 'border-amber-700/60'}`}
                    >
                      {log}
                    </motion.div>
                  ))}
                  {simRunning && (
                    <div className="flex items-center gap-1.5 text-amber-500 animate-pulse">
                      <div className="w-1.5 h-3 bg-amber-500" />
                      <span>Executing handoff...</span>
                    </div>
                  )}
                </div>

                {/* Node Active State Map Visualizer */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { label: 'Ingest', activeSteps: simActiveTab === 'marketing' ? [1, 2] : [1, 2] },
                    { label: 'Synthesize', activeSteps: simActiveTab === 'marketing' ? [4, 5] : [4, 5] },
                    { label: 'Govern', activeSteps: simActiveTab === 'marketing' ? [7, 8, 9] : [7, 8] },
                    { label: 'Export', activeSteps: simActiveTab === 'marketing' ? [10] : [9] }
                  ].map((node, index) => {
                    const isActive = simRunning && node.activeSteps.includes(simStep);
                    const isPassed = !simRunning && simStep > 0 && simStep >= Math.max(...node.activeSteps);
                    return (
                      <div
                        key={index}
                        className={`py-3.5 px-1 rounded-xl border text-center font-mono transition-all duration-300 ${isActive ? 'bg-amber-500 border-white text-amber-950 scale-105 shadow-[0_0_20px_rgba(0,255,204,0.3)] font-bold' : isPassed ? 'bg-amber-800/40 border-amber-500 text-amber-300' : 'bg-amber-950/80 border-amber-800/60 text-amber-600'}`}
                      >
                        <div className="text-[9px] uppercase tracking-wider">{node.label}</div>
                        <div className="text-[8px] mt-1 opacity-80">
                          {isActive ? 'ACTIVE' : isPassed ? 'COMPLETED' : 'IDLE'}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Simulation Control Button */}
                <button
                  onClick={handleStartSimulation}
                  disabled={simRunning}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-mono font-bold bg-amber-500 text-amber-900 hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {simRunning ? (
                    <>
                      <div className="w-4 h-4 border-2 border-amber-900 border-t-transparent rounded-full animate-spin" />
                      Simulating Swarm Orchestration...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-amber-900" />
                      Run Swarm Simulation
                    </>
                  )}
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: GOVERNANCE & OVERSIGHT LAYER */}
      <section className="relative py-28 px-6 bg-amber-100/50 overflow-hidden">
        <AnimatedTechBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Mock Governance Control Panel */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-white rounded-3xl border border-amber-200/80 shadow-2xl p-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-300/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-2.5 mb-6">
                <Shield className="w-5 h-5 text-amber-700" />
                <span className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest">
                  Compliance Control Center
                </span>
              </div>

              {/* Toggles List */}
              <div className="space-y-4 mb-6">
                {[
                  { title: 'PII Leakage & Masking Guard', desc: 'Auto-scrubs social security numbers, credit cards, or internal IP addresses before export.', active: true },
                  { title: 'Hallucination Self-Correction', desc: 'Iterates and cross-checks model assertions against vector databases before response.', active: true },
                  { title: 'Action-Write Approval Gates', desc: 'Enforces human authorization for dangerous API scopes (e.g. database deletes, outbound emails).', active: true },
                  { title: 'Lexical Guardrails', desc: 'Filters regulatory non-compliant language, toxic adjectives, or unauthorized claims.', active: true }
                ].map((policy, idx) => (
                  <div key={idx} className="p-4 bg-amber-50 rounded-2xl border border-amber-200/50 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-amber-950 font-display">{policy.title}</h4>
                      <p className="text-xs text-amber-800 mt-1 leading-relaxed">{policy.desc}</p>
                    </div>
                    {/* Toggle Button Graphic */}
                    <div className="w-12 h-6 rounded-full bg-amber-500 p-1 flex items-center justify-end cursor-pointer shadow-inner">
                      <div className="w-4 h-4 bg-amber-950 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock Audit Alert Feed */}
              <div className="p-4 rounded-2xl bg-amber-900 text-xs font-mono text-amber-300 border border-amber-950 space-y-2">
                <div className="flex items-center gap-1 text-yellow-400 font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>POLICY BLOCK TRIGGERED: LEXICAL INTEGRITY</span>
                </div>
                <div className="text-[10px] leading-relaxed text-amber-200">
                  [Guardrail Alert] Term "guaranteed return" detected in Financial Agent copy. Auto-corrected block replacement executed: replaced with "projected growth range". Compliance signature verified.
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Governance Description */}
          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-amber-700 font-mono text-xs uppercase tracking-widest font-bold">
              <Shield className="w-4 h-4" />
              Operational Boundaries
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-amber-950 leading-tight">
              Strict Behavioral & Ethical Guardrails
            </h2>
            <p className="text-lg text-amber-800 leading-relaxed font-sans">
              Giving autonomy to digital workers requires bulletproof supervision. Forgen x.1 enables managers to establish precise behavioral policies, configure automatic verification loops, and isolate faulty agents immediately.
            </p>
            <p className="text-md text-amber-700 font-sans">
              By separating the cognitive reasoning process from safety verification rules, the orchestration system enforces administrative boundaries at the foundational runtime layer. Policies cannot be bypassed by prompt injection or drift.
            </p>
            
            {/* Scannable Technical Note */}
            <div className="p-4 bg-white rounded-xl border border-amber-200/50 flex items-start gap-3">
              <Layers className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-mono font-bold text-amber-900 uppercase">Under the Hood: Governance Layer</h4>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  Built on top of the <strong>NVIDIA NeMo Framework</strong> and <strong>NeMo Guardrails</strong>. Aligns base language models to strictly defined operational boundaries, enabling developers to build safe, programmable dialogue policies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: REAL-TIME TELEMETRY & COMMAND CENTER */}
      <section className="relative py-28 px-6 bg-white border-y border-amber-200 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-amber-700 font-mono text-xs uppercase tracking-widest font-bold">
              <Activity className="w-4 h-4" />
              Swarm Auditability
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-amber-950 leading-tight">
              Real-Time Telemetry & Performance
            </h2>
            <p className="text-lg text-amber-800 leading-relaxed font-sans">
              Forgen x.1 provides complete visibility. Monitor thousands of active agent threads, tracking token consumption, response latency, and system safety status within a unified command center.
            </p>
            <p className="text-md text-amber-700 font-sans">
              Active swarms consume massive inference computing power. We compile and optimize agent networks to eliminate data serialization overheads, maintaining target response times under heavy enterprise-wide loads.
            </p>
            
            {/* Scannable Technical Note */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/50 flex items-start gap-3">
              <Activity className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-mono font-bold text-amber-900 uppercase">Under the Hood: Telemetry & Auditing</h4>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  Ingests live workflows through <strong>NVIDIA Morpheus</strong> to analyze telemetry at GPU speed and flag security drifts. Compiles and runs LLMs via <strong>NVIDIA TensorRT</strong> to deliver optimal inference performance.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Widget Grid */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              
              {/* Metric 1: Active Threads */}
              <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200/80 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">Active Swarms</span>
                  <Workflow className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-4xl font-display font-black text-amber-950">
                  {telemetry.activeThreads}
                </div>
                <p className="text-xs text-amber-700 mt-2">Active digital worker threads</p>
              </div>

              {/* Metric 2: Messages/Sec */}
              <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200/80 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">Throughput</span>
                  <Database className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-4xl font-display font-black text-amber-950">
                  {telemetry.messagesPerSec.toLocaleString()}
                </div>
                <p className="text-xs text-amber-700 mt-2">GPU tokens processed / sec</p>
              </div>

              {/* Metric 3: Average Latency */}
              <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200/80 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-amber-900 text-[9px] font-mono font-bold px-2 py-0.5 rounded-bl-lg">
                  TRT OPTIMIZED
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">Avg Latency</span>
                  <Cpu className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-4xl font-display font-black text-amber-950">
                  {telemetry.avgLatency}ms
                </div>
                <p className="text-xs text-amber-700 mt-2">Task handoff & completion speed</p>
              </div>

              {/* Metric 4: System Drift Score */}
              <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200/80 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">Anomaly Rate</span>
                  <Shield className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-4xl font-display font-black text-amber-950 text-amber-800">
                  {telemetry.anomalyDrift}%
                </div>
                <p className="text-xs text-amber-700 mt-2">Active security deviation score</p>
              </div>

            </div>

            {/* Performance Audit Chart Preview */}
            <div className="bg-amber-900 rounded-3xl border border-amber-950 p-6 mt-6 text-amber-300 font-mono text-xs flex flex-col h-44 justify-between">
              <div className="flex justify-between items-center border-b border-amber-850 pb-2">
                <span>GPU Core Utilization Feed</span>
                <span className="text-[10px] text-amber-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  Live Sync (Morpheus Pipelines)
                </span>
              </div>
              
              {/* CSS Flex Bar Chart */}
              <div className="flex justify-between items-end gap-1.5 h-20 px-4 mt-2">
                {[64, 48, 52, 70, 85, 92, 74, 60, 52, 45, 62, 78, 88, 70, 65, 80].map((height, i) => (
                  <div key={i} className="flex-1 bg-amber-950 rounded-t h-full relative">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: i * 0.05 }}
                      className="w-full bg-amber-500 rounded-t absolute bottom-0 shadow-[0_0_10px_rgba(0,255,204,0.2)]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-[8px] text-amber-600 mt-2">
                <span>00:00:00 MST</span>
                <span>T-30s</span>
                <span>Active</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: CREATOR SANDBOX */}
      <section className="relative py-28 px-6 bg-amber-100/50 overflow-hidden">
        <AnimatedTechBackground />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-amber-700 font-mono text-xs uppercase tracking-widest font-bold">
            <Sliders className="w-4 h-4" />
            Sandbox Compiler
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-amber-950">
            Configure Your Custom Swarm
          </h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto font-sans">
            Customize agent architectures for your organization's specific requirements. Adjust core parameters, choose communication paradigms, and compile networks instantly.
          </p>

          <div className="bg-white rounded-3xl border border-amber-200/80 shadow-2xl p-6 md:p-8 text-left max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="space-y-6">
              
              {/* Option 1: AI Engine Core */}
              <div>
                <label className="text-xs font-mono font-bold text-amber-800 uppercase block mb-2">Cognitive Core Model</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { setSwarmCore('nemo-llama'); setSwarmCompiled(false); }}
                    className={`py-2 px-3 text-xs font-mono rounded-lg border transition-all ${swarmCore === 'nemo-llama' ? 'bg-amber-950 text-amber-300 border-amber-950' : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'}`}
                  >
                    NeMo Llama-3
                  </button>
                  <button
                    onClick={() => { setSwarmCore('nemo-mistral'); setSwarmCompiled(false); }}
                    className={`py-2 px-3 text-xs font-mono rounded-lg border transition-all ${swarmCore === 'nemo-mistral' ? 'bg-amber-950 text-amber-300 border-amber-950' : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'}`}
                  >
                    NeMo Mistral
                  </button>
                </div>
              </div>

              {/* Option 2: Swarm Protocol */}
              <div>
                <label className="text-xs font-mono font-bold text-amber-800 uppercase block mb-2">Collaboration Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { setSwarmMode('debate'); setSwarmCompiled(false); }}
                    className={`py-2 px-3 text-xs font-mono rounded-lg border transition-all ${swarmMode === 'debate' ? 'bg-amber-950 text-amber-300 border-amber-950' : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'}`}
                  >
                    Debate Mode
                  </button>
                  <button
                    onClick={() => { setSwarmMode('sequential'); setSwarmCompiled(false); }}
                    className={`py-2 px-3 text-xs font-mono rounded-lg border transition-all ${swarmMode === 'sequential' ? 'bg-amber-950 text-amber-300 border-amber-950' : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'}`}
                  >
                    Sequential
                  </button>
                </div>
              </div>

              {/* Option 3: Security Constraints */}
              <div>
                <label className="text-xs font-mono font-bold text-amber-800 uppercase block mb-2">Governance Enforcement</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { setSwarmSecurity('strict'); setSwarmCompiled(false); }}
                    className={`py-2 px-3 text-xs font-mono rounded-lg border transition-all ${swarmSecurity === 'strict' ? 'bg-amber-950 text-amber-300 border-amber-950' : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'}`}
                  >
                    Strict Rules
                  </button>
                  <button
                    onClick={() => { setSwarmSecurity('adaptive'); setSwarmCompiled(false); }}
                    className={`py-2 px-3 text-xs font-mono rounded-lg border transition-all ${swarmSecurity === 'adaptive' ? 'bg-amber-950 text-amber-300 border-amber-950' : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'}`}
                  >
                    Adaptive
                  </button>
                </div>
              </div>

            </div>

            {/* Sandbox Output Column */}
            <div className="flex flex-col justify-between h-full bg-amber-50 p-5 rounded-2xl border border-amber-200/60 min-h-[220px]">
              <div className="space-y-3 font-mono text-xs text-amber-900">
                <h4 className="font-bold border-b border-amber-200 pb-1 uppercase text-amber-800">Deployment Config</h4>
                <div>Engine: <span className="text-amber-600 font-bold">{swarmCore === 'nemo-llama' ? 'NeMo Llama-3-70B' : 'NeMo Mistral-Large'}</span></div>
                <div>Routing: <span className="text-amber-600 font-bold">{swarmMode === 'debate' ? 'Parallel Debate' : 'Sequence Pipeline'}</span></div>
                <div>Safety: <span className="text-amber-600 font-bold">{swarmSecurity === 'strict' ? 'Strict Guardrails' : 'Adaptive Audits'}</span></div>
              </div>

              <div className="mt-6 space-y-2">
                <button
                  onClick={handleCompileSwarm}
                  disabled={compiling}
                  className="w-full py-3 bg-amber-950 text-amber-300 font-mono font-bold text-xs rounded-xl hover:bg-amber-900 transition-colors disabled:opacity-50"
                >
                  {compiling ? 'Compiling with TensorRT...' : 'Deploy Swarm Blueprint'}
                </button>
                
                <AnimatePresence>
                  {swarmCompiled && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-amber-500 text-amber-950 rounded-xl font-mono text-[10px] font-bold text-center flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Swarm compiled & optimized!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION: SITE-WIDE REDIRECTION PROMPT */}
      <section className="py-24 px-6 bg-amber-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase">
            Deploy Forgen x.1 Today
          </h2>
          <p className="text-lg text-amber-200/80 max-w-xl mx-auto leading-relaxed">
            Ready to integrate autonomous swarm workflow intelligence into your organization's infrastructure? Click below to access the cloud console.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.agentsforgex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-amber-900 shadow-lg hover:bg-amber-300 transition-colors transform hover:-translate-y-0.5"
            >
              Launch Live Product
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-amber-950 text-amber-500 border-t border-amber-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white text-lg tracking-wider">AGENTSFORGEX</span>
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-amber-700">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          
          <div className="text-xs text-amber-800">
            © 2026 AgentsForgeX Inc. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
