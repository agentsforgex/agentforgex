import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import heroSvg from '../assets/hero.svg?url';
import logoSvg from '../assets/Logo.svg?url';


import autonomousWorkflowImg from '../assets/8.svg?url';
import multiAgentImg from '../assets/9.svg?url';
import agentOrchestrationImg from '../assets/10.svg?url';
import governanceLayerImg from '../assets/Governance & Oversight Layer.svg?url';
import knowledgeIntegrationImg from '../assets/Knowledge Integration Framework.svg?url';
import enterpriseApiImg from '../assets/Enterprise API Orchestration.svg?url';


import agentImg   from '../assets/Agent Orchestration Engine.svg?url';
import multiImg   from '../assets/Multi-Agent Collaboration.svg?url';
import autonomousImg   from '../assets/Autonomous Workflow Intelligence.svg?url';
import govImg  from '../assets/Governance & Oversight.svg?url';


import siloedOpsImg from '../assets/Siloed Operations.svg?url';
import complexWorkflowsImg from '../assets/Complex Workflows.svg?url';
import lackGovernanceImg from '../assets/Lack of Governance.svg?url';
import scalingStrugglesImg from '../assets/Scaling Struggles.svg?url';
import decisionBottlenecksImg from '../assets/Decision Bottlenecks.svg?url';

import {
  ArrowDown,
  Network,
  Workflow,
  ShieldCheck,
  Database,
  Cpu,
  Layers,
  Zap,
  Activity,
  CheckCircle2,
  ArrowRight,
  Globe,
  Lock,
  BarChart3,
  Server,
  Users,
  Linkedin,
  X,
  Menu,
  Youtube,
  Facebook,
  Cloud } from
'lucide-react';
import { useScreenInit } from '../useScreenInit';
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">

      {/* LEFT SIDE — #01ffcd gradient */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-amber-50">
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-left" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#01ffcd" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-left)" />
        </svg>
      </div>

      {/* RIGHT SIDE — clean white */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-white" />

      {/* GRADIENT FILL LEFT OF LINE + WAVE LINE */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ zIndex: 5 }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#01ffcd" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#01ffcd" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Filled area LEFT of the wave line */}
        <motion.path
          d="M 0 0 L 100 -50 C 250 80, 450 100, 520 230 C 600 360, 750 370, 780 470 C 810 570, 750 600, 800 700 C 850 800, 980 840, 1080 950 L 0 950 Z"
          fill="url(#lineGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />

        {/* Wave line on top */}
        <motion.path
          d="M 100 -50 C 250 80, 450 100, 520 230 C 600 360, 750 370, 780 470 C 810 570, 750 600, 800 700 C 850 800, 980 840, 1080 950"
          stroke="#01ffcd"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </svg>

    </div>
  );
};

export default function Landing() {
  useScreenInit();
  const location = useLocation();
  const [billingAnnual, setBillingAnnual] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [contactErrors, setContactErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState({
    status: 'idle',
    message: ''
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [selectedIntegrations, setSelectedIntegrations] = useState<number[]>([]);
  const [visualizerMode, setVisualizerMode] = useState<'network' | 'risk' | 'throughput'>('network');
  const [highlightedNode, setHighlightedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [healthView, setHealthView] = useState<'summary' | 'forecast'>('summary');

  const integrationWidgets = [
    { id: 1, name: 'OpenAI', icon: Cpu, classes: 'from-emerald-400 to-emerald-600 border-emerald-700 shadow-emerald-300' },
    { id: 2, name: 'AWS', icon: Cloud, classes: 'from-orange-400 to-orange-600 border-orange-700 shadow-orange-300' },
    { id: 3, name: 'Salesforce', icon: Database, classes: 'from-sky-400 to-blue-600 border-blue-700 shadow-sky-300' },
    { id: 4, name: 'Azure', icon: Server, classes: 'from-cyan-400 to-cyan-600 border-cyan-700 shadow-cyan-300' },
    { id: 5, name: 'Slack', icon: Network, classes: 'from-violet-400 to-violet-600 border-violet-700 shadow-violet-300' },
    { id: 6, name: 'GraphQL', icon: Zap, classes: 'from-pink-400 to-pink-600 border-pink-700 shadow-pink-300' },
    { id: 7, name: 'PostgreSQL', icon: Database, classes: 'from-indigo-400 to-indigo-600 border-indigo-700 shadow-indigo-300' },
    { id: 8, name: 'MongoDB', icon: Layers, classes: 'from-emerald-500 to-emerald-700 border-emerald-800 shadow-emerald-300' },
    { id: 9, name: 'Webhook', icon: Activity, classes: 'from-rose-400 to-rose-600 border-rose-700 shadow-rose-300' }
  ];

  const visualizerNodes = [
    { name: 'Planner', icon: Workflow, detail: 'Dynamic routing and task choreography state.' },
    { name: 'Governor', icon: ShieldCheck, detail: 'Policy enforcement and guardrail validation.' },
    { name: 'Monitor', icon: Activity, detail: 'Live telemetry and anomaly detection.' },
    { name: 'Data Bus', icon: Database, detail: 'Secure data flow between enterprise systems.' },
    { name: 'Executor', icon: ArrowRight, detail: 'Execution pipeline for agent actions.' },
    { name: 'People', icon: Users, detail: 'Human oversight, approvals, and auditability.' }
  ];

  const healthMetrics = [
    { label: 'Active Agents', val: `${220 + selectedIntegrations.length * 6}` },
    { label: 'Task Success', val: `${(98 + selectedIntegrations.length * 0.2).toFixed(1)}%` },
    { label: 'Avg Response', val: `${Math.max(98, 142 - selectedIntegrations.length * 3)}ms` },
    { label: 'Workflows', val: `${18492 + selectedIntegrations.length * 120}` },
    { label: 'Utilization', val: `${Math.min(92, 55 + selectedIntegrations.length * 4)}%` },
    { label: 'Health', val: selectedIntegrations.length > 5 ? 'Optimal' : 'Stable' }
  ];

  const forecastMetrics = [
    { label: 'Throughput', score: Math.min(98, 65 + selectedIntegrations.length * 3) },
    { label: 'Drift Risk', score: Math.max(12, 32 - selectedIntegrations.length * 2) },
    { label: 'Pipeline Stability', score: Math.min(96, 58 + selectedIntegrations.length * 4) }
  ];

  const integrationStatus =
    selectedIntegrations.length >= 7
      ? 'Deployment Ready'
      : selectedIntegrations.length >= 4
      ? 'Configuring pipeline'
      : 'Connect more systems';

  const visualizerModeLabel = {
    network: 'Network Map',
    risk: 'Risk Surface',
    throughput: 'Throughput Pulse'
  }[visualizerMode];

  const modeAccent = {
    network: 'bg-amber-500 text-amber-100',
    risk: 'bg-rose-500 text-rose-100',
    throughput: 'bg-sky-500 text-sky-100'
  }[visualizerMode];

  const validateContact = () => {
    const errors = {
      name: contactData.name.trim() ? '' : 'Please enter your name.',
      email: /^\S+@\S+\.\S+$/.test(contactData.email.trim()) ? '' : 'Please enter a valid email address.',
      message: contactData.message.trim() ? '' : 'Please enter a message.'
    };

    setContactErrors(errors);
    const recaptchaValue = recaptchaRef.current?.getValue();
    return !errors.name && !errors.email && !errors.message && !!recaptchaValue;
  };

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactData(prev => ({ ...prev, [name]: value }));
    if (contactErrors[name as keyof typeof contactErrors]) {
      setContactErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateContact()) {
      const recaptchaValue = recaptchaRef.current?.getValue();
      const message = !recaptchaValue ? 'Please complete the reCAPTCHA verification.' : 'Please fix the highlighted fields before sending.';
      setContactStatus({ status: 'error', message });
      return;
    }

    setContactStatus({ status: 'sending', message: 'Sending message…' });

    try {
      const recaptchaToken = recaptchaRef.current?.getValue();
      const response = await fetch('https://formspree.io/f/xojovjno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ name: contactData.name, email: contactData.email, message: contactData.message, 'g-recaptcha-response': recaptchaToken })
      });

      const data = await response.json();
      if (response.ok) {
        setContactStatus({ status: 'success', message: 'Message sent successfully. We will reach out soon.' });
        setContactData({ name: '', email: '', message: '' });
        setContactErrors({ name: '', email: '', message: '' });
        recaptchaRef.current?.reset();
      } else {
        setContactStatus({ status: 'error', message: data.error || 'Unable to send your message right now. Please try again later.' });
      }
    } catch (error) {
      setContactStatus({ status: 'error', message: 'Network error. Please try again in a moment.' });
    } finally {
      recaptchaRef.current?.reset();
    }
  };

  useEffect(() => {
    if (contactStatus.status !== 'success') {
      return;
    }

    const timer = window.setTimeout(() => {
      setContactStatus({ status: 'idle', message: '' });
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [contactStatus.status]);

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    resetScroll();

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (!element) {
        return () => {
          window.history.scrollRestoration = previousScrollRestoration;
        };
      }

      const scrollToElement = () => {
        const headerOffset = 56;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(elementPosition - headerOffset, 0);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      };

      const timeoutId = window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          scrollToElement();
          window.requestAnimationFrame(scrollToElement);
        });
      }, 50);

      const handlePageShow = () => {
        resetScroll();
      };

      window.addEventListener('pageshow', handlePageShow);
      window.addEventListener('load', handlePageShow);

      return () => {
        window.clearTimeout(timeoutId);
        window.removeEventListener('pageshow', handlePageShow);
        window.removeEventListener('load', handlePageShow);
        window.history.scrollRestoration = previousScrollRestoration;
      };
    }

    const handlePageShow = () => {
      resetScroll();
    };

    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('load', handlePageShow);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('load', handlePageShow);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const ids = ['problem-statement', 'platform', 'features', 'command-center', 'enterprise-scale', 'capabilities', 'pricing', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the intersecting entry with the largest intersectionRatio
        // and require a meaningful intersectionRatio so small child elements don't steal focus.
        let best: IntersectionObserverEntry | null = null;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.intersectionRatio < 0.45) return; // require ~45% visibility
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        });
        if (best) {
          setActiveSection(best.target.id);
        }
      },
      { threshold: [0.45, 0.6, 0.8] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const heroParallax = useTransform(scrollYProgress, [0, 0.7], [0, -220]);
  const ctaParallax = useTransform(scrollYProgress, [0.3, 1], [200, 0]);
  const section2Y = useTransform(scrollYProgress, [0.08, 0.16, 0.24], [0, -70, -160]);
  const section2Scale = useTransform(scrollYProgress, [0.08, 0.16, 0.24], [1, 0.90, 0.75]);
  const section2Z = useTransform(scrollYProgress, [0.08, 0.16, 0.24], [2, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.16, 0.24, 0.32], [120, 35, 0]);
  const section3Scale = useTransform(scrollYProgress, [0.16, 0.24, 0.32], [0.78, 0.92, 1]);
  const section3Z = useTransform(scrollYProgress, [0.16, 0.24, 0.32], [0, 1, 2]);
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.80
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: 'easeOut'
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  return (
    <div id="top" className="min-h-screen bg-amber-50 text-amber-900 font-sans selection:bg-amber-300 selection:text-amber-900 overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 pt-0 pb-8 bg-amber-50/95 backdrop-blur-md border-b border-amber-200 overflow-visible">
  <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 h-14">
          <motion.a
            href="#top"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center overflow-visible">
            <div className="py-2 overflow-visible">
              <img src={logoSvg} alt="AgentsForgeX logo" className="h-48 w-48 mt-4" />
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-800 mt-4">
            <a href="#problem-statement" className={`hover:text-amber-900 transition-colors ${activeSection === 'platform' ? 'text-amber-900 font-bold underline' : ''}`}>
              Platform
            </a>
            <a href="#features" className={`hover:text-amber-900 transition-colors ${activeSection === 'features' ? 'text-amber-900 font-bold underline' : ''}`}>
              Features
            </a>
            <a href="#pricing" className={`hover:text-amber-900 transition-colors ${activeSection === 'pricing' ? 'text-amber-900 font-bold underline' : ''}`}>
              Pricing
            </a>
            <a href="#contact" className={`hover:text-amber-900 transition-colors ${activeSection === 'contact' ? 'text-amber-900 font-bold underline' : ''}`}>
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden mt-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-900 shadow-sm transition hover:bg-amber-100">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

      <motion.div
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block mt-4">
         <Link
           to="/Product"
           className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-amber-900 shadow-sm transition hover:bg-amber-600">
           Forgen x.1
         </Link>
     </motion.div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[420px] opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-3 border-t border-amber-200 px-4 pt-4 pb-3 bg-amber-50">
            <a href="#problem-statement" onClick={() => setMobileMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-sm font-medium ${activeSection === 'platform' ? 'bg-amber-200 text-amber-900' : 'text-amber-800 hover:bg-amber-100'}`}>
              Platform
            </a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-sm font-medium ${activeSection === 'features' ? 'bg-amber-200 text-amber-900' : 'text-amber-800 hover:bg-amber-100'}`}>
              Features
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-sm font-medium ${activeSection === 'pricing' ? 'bg-amber-200 text-amber-900' : 'text-amber-800 hover:bg-amber-100'}`}>
              Pricing
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-sm font-medium ${activeSection === 'contact' ? 'bg-amber-200 text-amber-900' : 'text-amber-800 hover:bg-amber-100'}`}>
              Contact
            </a>
            <Link to="/Product" onClick={() => setMobileMenuOpen(false)} className="block rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-amber-900 shadow-sm transition hover:bg-amber-600">
              AgentsforgeX
            </Link>
          </div>
        </div>
      </nav>

      {/* SECTION 1 - HERO */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-6 pt-36 pb-12 overflow-hidden"
        style={{ y: heroParallax }}>
        <AnimatedBackground />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 flex flex-col items-start text-left">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut'
              }}
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-100/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,204,0.2)]">
              
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="w-2 h-2 rounded-full bg-amber-500" />
              

            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-amber-950 mb-6 leading-tight">
              
              AgentsForgeX <span className="block text-amber-900">Run Autonomous AI Workflows with Control</span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              className="text-lg md:text-xl text-amber-800 max-w-2xl mb-10 leading-relaxed">
              
Craft and handle intelligent agent workflows with compliance, automation and enterprise ready command.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.5
              }}>
              <Link
                to="/Product"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-base font-bold text-amber-900 shadow-lg shadow-amber-300/30 hover:bg-amber-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Forgen x.1
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Right side - Hero SVG image */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}>
              <img
                src={heroSvg}
                alt="Hero Illustration"
                className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl" />
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-10 z-10 text-amber-500">
          
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.section>

      

      {/* SECTION 2 - PROBLEM STATEMENT */}
      <motion.section
        id="problem-statement"
        className="scroll-offset relative py-4 md:py-8 px-6 bg-amber-100"
        style={isMobile ? {} : { y: section2Y, scale: section2Scale, zIndex: section2Z }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-amber-900 mb-16 uppercase tracking-wide">
            
            The Hidden Failures of Enterprise AI
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
            {
              title: 'Siloed Systems',
              desc: 'AI operates in disconnected environments without shared context.',
              image: siloedOpsImg
            },
            {
              title: 'Complex Workflows',
              desc: 'Multi-step processes depend on coordinating multiple AI capabilities.',
              image: complexWorkflowsImg
            },
            {
              title: 'Weak Governance',
              desc: 'Autonomous agents lack proper oversight, control, and audit trails.',
              image: lackGovernanceImg
            },
            {
              title: 'Scaling Limits',
              desc: 'Enterprises struggle to deploy and manage agentic AI at scale.',
              image: scalingStrugglesImg
            },
            {
              title: 'Decision Bottlenecks',
              desc: 'AI-driven decisions slow down across fragmented legacy systems.',
              image: decisionBottlenecksImg
            }].
            map((item, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              className={`bg-amber-50 p-8 border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              
                <img src={item.image} alt={item.title} className="w-16 h-16 mb-4 object-contain" />
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-amber-800">{item.desc}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-10 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        <div className="max-w-7xl mx-auto rounded-3xl border border-amber-200 p-8 bg-[#01ffcd]">
          <p className="text-center text-lg md:text-xl font-mono font-semibold text-amber-950 tracking-wide">
            True enterprise intelligence happens when agents collaborate, not isolate.
          </p>
        </div>
      </motion.section>

      {/* SECTION 3 - PLATFORM OVERVIEW */}
      <motion.section
        id="platform"
        className="scroll-offset relative py-0 md:py-1 px-6 bg-amber-50"
        style={isMobile ? {} : { y: section3Y, scale: section3Scale, zIndex: section3Z }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            id="features"
            className="scroll-offset text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-amber-900 mb-6 uppercase tracking-wide">
              AgentsForgeX: The Operating System for Enterprise AI
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              A centralized orchestration layer that transforms isolated AI
              models into a cohesive, collaborative, and governed autonomous
              workforce.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
              title: 'AI Agent Orchestration Engine',
              desc: 'Deploy and manage autonomous AI agents; coordinate interactions and task delegation.',
              image: agentOrchestrationImg,
              anchor: 'orchestration-engine'
            },
            {
              title: 'Multi-Agent Collaboration',
              desc: 'Enable agents to communicate and share context; distributed reasoning and decision-making.',
              image: multiAgentImg,
              anchor: 'multi-agent-swarms'
            },
            {
              title: 'Autonomous Workflow Intelligence',
              desc: 'Automate complex business processes; execute multi-step tasks across systems.',
              image: autonomousWorkflowImg
            },
            {
              title: 'Governance & Oversight Layer',
              desc: 'Monitor agent behavior; enforce operational policies; full auditability.',
              image: governanceLayerImg,
              anchor: 'governance'
            },
            {
              title: 'Knowledge Integration Framework',
              desc: 'Connect LLMs, databases, APIs, CRMs, ERPs, cloud infrastructure.',
              image: knowledgeIntegrationImg,
              anchor: 'integrations'
            },
            {
              title: 'Enterprise API Orchestration',
              desc: 'API-first agent management; scalable agentic AI architecture.',
              image: enterpriseApiImg
            }].map((feature, i) => (
              <motion.div
                key={i}
                id={feature.anchor}
                variants={fadeUp}
                className={`group bg-amber-200 p-8 rounded-xl border-t-4 border-transparent hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,255,204,0.15)] ${feature.anchor ? 'scroll-offset' : ''}`}>
                <img src={feature.image} alt={feature.title} className="w-16 h-16 mb-4 object-contain" />
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-amber-800">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-amber-900 mt-12 md:mt-20 lg:mt-24 mb-8 md:mb-16 uppercase tracking-wide">
            How AgentsForgeX Orchestrates Intelligence
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-sm md:text-base lg:text-lg text-amber-800 mb-8 md:mb-16 font-mono">
            
            Powered by distributed agentic AI architecture
          </motion.p>

          <div className="relative w-full mx-auto bg-amber-50 rounded-2xl border border-amber-200 shadow-xl p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-96 sm:min-h-[28rem] md:min-h-[32rem]">
            {/* Top Layer */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 z-10 mb-6 sm:mb-8 md:mb-12 pt-4 sm:pt-6 md:pt-8">
              {['Enterprise Systems', 'LLMs', 'APIs', 'Databases'].map(
                (sys, i) =>
                <div
                  key={i}
                  className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-amber-200 text-amber-900 text-xs sm:text-sm font-mono rounded border border-amber-300">
                  
                    {sys}
                  </div>

              )}
            </div>

            {/* Connector line - Top to Engine */}
            <div className="flex justify-center z-10 my-2 sm:my-3 md:my-4">
              <svg width="80" height="30" viewBox="0 0 80 30" className="overflow-visible">
                <defs>
                  <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00FFCC" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00FFCC" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00FFCC" stopOpacity="0" />
                  </linearGradient>
                  <filter id="connectorGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <motion.path
                  d="M 40 0 Q 40 15, 40 30"
                  stroke="url(#connectorGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#connectorGlow)"
                  animate={{ strokeWidth: [2, 4, 2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </svg>
            </div>

            {/* Middle Layer (Engine) */}
            <div className="relative z-10 w-full bg-gradient-to-br from-amber-100 via-amber-100 to-amber-200 border-2 border-amber-500 rounded-xl p-3 sm:p-4 md:p-6 shadow-[0_0_40px_rgba(0,255,204,0.3)] mb-6 sm:mb-8 md:mb-12">
              <motion.div
                animate={{ boxShadow: ['0_0_20px_rgba(0,255,204,0.2)', '0_0_40px_rgba(0,255,204,0.4)', '0_0_20px_rgba(0,255,204,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-xl pointer-events-none"
              />
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-amber-900 mb-3 sm:mb-4 md:mb-5 uppercase tracking-widest text-center relative z-10 flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <Cpu className="w-full h-full text-amber-600" />
                </motion.div>
                AgentsForgeX Orchestration Engine
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-2 md:gap-3 relative z-10">
                {[
                  { label: 'Agent Routing', icon: Network },
                  { label: 'Context Sharing', icon: Database },
                  { label: 'Reasoning Engine', icon: Zap },
                  { label: 'Workflow Core', icon: Layers }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-br from-amber-50 to-amber-100 p-2 sm:p-3 md:p-4 text-center rounded-lg border-2 border-amber-300 hover:border-amber-500 transition-all cursor-pointer shadow-md hover:shadow-lg group relative overflow-hidden">
                      
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-transparent opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
                      
                      <div className="relative z-10 flex flex-col items-center gap-1">
                        <motion.div
                          whileHover={{ rotate: 10 }}
                          className="flex justify-center"
                        >
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-600" />
                        </motion.div>
                        <p className="text-xs sm:text-xs md:text-sm font-semibold text-amber-900">
                          {item.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Connector line - Engine to Bottom */}
            <div className="flex justify-center z-10 my-2 sm:my-3 md:my-4">
              <svg width="80" height="30" viewBox="0 0 80 30" className="overflow-visible">
                <defs>
                  <linearGradient id="connectorGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00FFCC" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00FFCC" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00FFCC" stopOpacity="0" />
                  </linearGradient>
                  <filter id="connectorGlow2">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <motion.path
                  d="M 40 0 Q 40 15, 40 30"
                  stroke="url(#connectorGradient2)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#connectorGlow2)"
                  animate={{ strokeWidth: [2, 4, 2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                />
              </svg>
            </div>

            {/* Bottom Layer */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 z-10">
              {['Agent A', 'Agent B', 'Agent C', 'Agent N'].map((agent, i) =>
              <div
                key={i}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-amber-500 text-amber-900 flex items-center justify-center font-bold text-xs sm:text-xs md:text-sm shadow-lg">
                
                  {agent}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 6 - DASHBOARD WIDGETS PREVIEW */}
      <section id="command-center" className="py-32 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-amber-900 mb-16 text-center uppercase tracking-wide">
            
            The AgentsForgeX Command Center
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Widget A */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="bg-white rounded-2xl p-5 shadow-xl border border-amber-100 flex flex-col">
              
              <h3 className="text-lg font-bold text-amber-900 mb-1">
                Connect Your Stack
              </h3>
              <p className="text-sm text-amber-700 mb-4">
                Integrate any LLM, enterprise app, or data source
              </p>
              <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-amber-700 font-semibold">Integration Builder</p>
                  <p className="text-sm text-amber-900 mt-1">Select core systems for command center orchestration.</p>
                </div>
                <div className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900 inline-flex items-center gap-2">
                  <span>{integrationStatus}</span>
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {integrationWidgets.map((integration) => {
                  const selected = selectedIntegrations.includes(integration.id);
                  return (
                    <motion.button
                      key={integration.id}
                      onClick={() =>
                        setSelectedIntegrations(prev =>
                          prev.includes(integration.id)
                            ? prev.filter(id => id !== integration.id)
                            : [...prev, integration.id]
                        )
                      }
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all relative group ${
                        selected
                          ? `bg-gradient-to-br ${integration.classes} border-amber-700 shadow-lg shadow-current/20`
                          : 'bg-amber-50 border-amber-200 hover:border-amber-400'
                      }`}
                    >
                      <integration.icon className={`w-6 h-6 ${selected ? 'text-white' : 'text-amber-600'}`} />
                      <span className={`text-xs font-semibold mt-2 ${selected ? 'text-white' : 'text-amber-700'}`}>
                        {integration.name}
                      </span>
                      {selected && (
                        <span className="absolute top-2 right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-amber-50 text-[10px] font-bold">
                          ✓
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Connection Count */}
              <div className="mt-4 pt-3 border-t border-amber-100 text-center">
                <p className="text-sm font-semibold text-amber-900">
                  {selectedIntegrations.length} of 9 Connected
                </p>
                <div className="w-full bg-amber-100 rounded-full h-1.5 mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(selectedIntegrations.length / 9) * 100}%` }}
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Widget B */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 lg:col-span-2 relative overflow-hidden">
              
              <div className="absolute top-6 right-6 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-mono rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-6">
                Agent Orchestration Visualizer
              </h3>
              <div className="mb-5 rounded-3xl border border-amber-100 bg-amber-50 p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-amber-900">{visualizerModeLabel}</p>
                    <p className="text-xs text-amber-700">Hover nodes to preview state, click to pin the insight pane.</p>
                  </div>
                  <div className="inline-flex rounded-full border border-amber-200 bg-white/90 p-1 shadow-sm">
                    {(['network', 'risk', 'throughput'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setVisualizerMode(mode)}
                        className={`px-3 py-1 text-[11px] font-semibold uppercase transition ${
                          visualizerMode === mode
                            ? 'bg-amber-900 text-amber-100'
                            : 'text-amber-700 hover:bg-amber-100'
                        } rounded-lg`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-amber-700">
                  <div className="rounded-2xl bg-white p-3 border border-amber-100">
                    <p className="font-semibold text-amber-900 mb-2">Mode Focus</p>
                    <p>{visualizerMode === 'network' ? 'Topology & throughput' : visualizerMode === 'risk' ? 'Threat surface and policy exposure' : 'Pipeline speed and capacity'}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3 border border-amber-100">
                    <p className="font-semibold text-amber-900 mb-2">Live Status</p>
                    <p>{visualizerMode === 'risk' ? 'Risk engine active' : visualizerMode === 'throughput' ? 'Latency smoothing enabled' : 'Network routes stable'}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3 border border-amber-100">
                    <p className="font-semibold text-amber-900 mb-2">Active Links</p>
                    <p>{selectedIntegrations.length + 4} concurrent connections</p>
                  </div>
                </div>
              </div>

              <div className="h-64 relative flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full z-10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.12)] ${modeAccent}`}>
                  <Cpu className="text-white w-8 h-8" />
                </div>
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                  const node = visualizerNodes[i % visualizerNodes.length];
                  const selected = highlightedNode === node.name;
                  return (
                    <motion.button
                      key={node.name}
                      type="button"
                      onMouseEnter={() => setHoveredNode(node.name)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setHighlightedNode(node.name)}
                      whileHover={{ scale: 1.05 }}
                      className="absolute w-full h-full flex items-center justify-center"
                      style={{ rotate: deg }}
                    >
                      <motion.div
                        className="w-32 h-[2px] absolute top-1/2 left-1/2 -translate-y-1/2 origin-left bg-gradient-to-r from-amber-500 to-transparent opacity-70"
                        style={{ rotate: 0 }}
                        animate={{ opacity: visualizerMode === 'network' ? [0.4, 1, 0.4] : visualizerMode === 'risk' ? [0.2, 0.8, 0.2] : [0.3, 0.9, 0.3] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                      />
                      <div
                        className={`w-12 h-12 rounded-full absolute top-1/2 left-[calc(50%+128px)] -translate-y-1/2 border-2 flex items-center justify-center transition-all ${
                          selected ? 'bg-amber-900 border-amber-600 shadow-[0_0_20px_rgba(251,191,36,0.35)] text-white' : 'bg-amber-200 border-amber-300 text-amber-700 hover:scale-105'
                        }`}
                        style={{ rotate: -deg }}
                      >
                        <node.icon className="w-4 h-4" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-800">
                <p className="font-semibold text-amber-900 mb-2">{highlightedNode || hoveredNode || 'System Insight'}</p>
                <p className="leading-relaxed text-amber-700">
                  {highlightedNode
                    ? visualizerNodes.find((node) => node.name === highlightedNode)?.detail
                    : hoveredNode
                    ? visualizerNodes.find((node) => node.name === hoveredNode)?.detail
                    : 'Track agent orchestration paths, monitor risk exposure, and surface throughput changes in real time.'}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-amber-700">
                {visualizerMode === 'risk' ? (
                  <div className="rounded-2xl border border-rose-100 bg-rose-50 p-3">
                    <p className="font-semibold text-rose-900 mb-1">Risk Alert</p>
                    <p>Policy divergence detected in the Governor node. Auto-heal sequence queued.</p>
                  </div>
                ) : visualizerMode === 'throughput' ? (
                  <div className="rounded-2xl border border-sky-100 bg-sky-50 p-3">
                    <p className="font-semibold text-sky-900 mb-1">Throughput Pulse</p>
                    <p>Peak throughput is increasing by 14% as more integrations come online.</p>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-amber-100 bg-amber-50 p-3">
                    <p className="font-semibold text-amber-900 mb-1">Network Overview</p>
                    <p>All routes are stable. The planner is prioritizing low-latency paths.</p>
                  </div>
                )}
              </div>

              <div className="mt-4 rounded-3xl bg-black/5 p-4 text-xs text-amber-700 grid gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-amber-900">Event Stream</span>
                  <span className="text-amber-500">Live</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>Routing optimization triggered for Agent Orchestrator.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500 animate-pulse" />
                    <span>Telemetry burst detected: 842 active threads.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Policy guard activated on governor risk stream.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Widget C */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.4
              }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 lg:col-span-3">
              
              <h3 className="text-lg font-bold text-amber-900 mb-6">
                Infrastructure Health Panel
              </h3>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                {(['summary', 'forecast'] as const).map((view) => (
                  <button
                    key={view}
                    type="button"
                    onClick={() => setHealthView(view)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      healthView === view ? 'bg-amber-900 text-amber-100' : 'bg-white/90 text-amber-800 border border-amber-200 hover:bg-amber-100'
                    }`}
                  >
                    {view === 'summary' ? 'Summary' : 'Forecast'}
                  </button>
                ))}
              </div>

              {healthView === 'summary' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {healthMetrics.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-amber-50 p-4 rounded-xl border border-amber-100"
                    >
                      <p className="text-xs text-amber-700 mb-1 font-medium">{stat.label}</p>
                      <p className="text-2xl font-mono font-bold text-amber-900">{stat.val}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {forecastMetrics.map((metric, i) => (
                    <div key={metric.label} className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
                      <div className="flex items-center justify-between gap-2 mb-2 text-sm font-semibold text-amber-900">
                        <span>{metric.label}</span>
                        <span>{metric.score}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-amber-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.score}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-700"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 rounded-3xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900 mb-3">Operational Trend</p>
                <div className="grid grid-cols-3 gap-3 text-xs text-amber-700">
                  <div className="rounded-2xl bg-white p-3 border border-amber-100">
                    <p className="font-semibold text-amber-900 mb-1">Latency</p>
                    <p>{selectedIntegrations.length > 5 ? 'Improving' : 'Stable'}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3 border border-amber-100">
                    <p className="font-semibold text-amber-900 mb-1">Drift</p>
                    <p>{visualizerMode === 'risk' ? 'Elevated' : 'Low'}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3 border border-amber-100">
                    <p className="font-semibold text-amber-900 mb-1">Capacity</p>
                    <p>{Math.min(94, 60 + selectedIntegrations.length * 4)}%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - TARGET INDUSTRIES */}
      <section className="py-20 px-6 bg-amber-100 border-y border-amber-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            id="enterprise-scale"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="text-sm font-mono font-bold text-amber-800 mb-8 text-center uppercase tracking-widest">
            Built for Enterprise Scale
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4">
            {[
            'Enterprise AI Teams',
            'Digital Transformation',
            'Financial Institutions',
            'Healthcare Organizations',
            'Technology Companies',
            'Government & Public Sector',
            'Business Process Automation'].
            map((industry, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.05
              }}
              className="px-6 py-3 bg-amber-200 text-amber-900 rounded-full font-medium text-sm border border-transparent hover:border-amber-500 hover:shadow-[0_0_15px_rgba(0,255,204,0.3)] transition-all cursor-default flex items-center gap-2">
              
                <Globe className="w-4 h-4 text-amber-600" />
                {industry}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - CAPABILITIES DEEP DIVE */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <motion.h2
            id="capabilities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-amber-900 text-center uppercase tracking-wide">
            Capabilities Deep Dive
          </motion.h2>
        </div>
        {[
        {
          title: 'Agent Orchestration Engine',
          desc: 'Deploy, monitor, and scale thousands of autonomous agents across your infrastructure. Our engine handles load balancing, state management, and fault tolerance automatically.',
          bg: 'bg-amber-50'
        },
        {
          title: 'Multi-Agent Collaboration',
          desc: "Agents don't work in isolation. AgentsForgeX enables complex swarm intelligence where agents debate, verify, and hand off tasks to specialized peers.",
          bg: 'bg-amber-100',
          reverse: true
        },
        {
          title: 'Autonomous Workflow Intelligence',
          desc: 'Map your existing business processes to autonomous workflows. The system dynamically adjusts execution paths based on real-time data and agent reasoning.',
          bg: 'bg-amber-50'
        },
        {
          title: 'Governance & Oversight',
          desc: 'Maintain complete control with enterprise-grade governance. Set strict operational boundaries, require human-in-the-loop approvals, and maintain immutable audit logs.',
          bg: 'bg-amber-100',
          reverse: true
        }].
        map((block, i) =>
        <div key={i} className={`${block.bg}`}>
            <div
            className={`max-w-7xl mx-auto flex flex-col ${block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 py-24 px-6`}>
            
              <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeUp}
              className="flex-1">
              
                <h3 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-6">
                  {block.title}
                </h3>
                <p className="text-lg text-amber-800 leading-relaxed">
                  {block.desc}
                </p>
              </motion.div>
              <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              className="flex-1 w-full max-h-80 bg-white rounded-2xl shadow-xl border border-amber-200 flex relative overflow-hidden">
              
                <img 
                  src={
                    block.title === 'Agent Orchestration Engine' ? agentImg :
                    block.title === 'Multi-Agent Collaboration' ? multiImg :
                    block.title === 'Autonomous Workflow Intelligence' ? autonomousImg :
                    block.title === 'Governance & Oversight' ? govImg :
                    ''
                  }
                  alt={block.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 9 - PRICING */}
      <section id="pricing" className="scroll-offset py-32 px-6 bg-amber-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-amber-900 mb-16 text-center uppercase tracking-wide">
            
            Flexible Deployment for Enterprise Teams
          </motion.h2>

          <div className="flex flex-col items-center justify-center gap-4 mb-10 md:flex-row md:justify-center">
            <p className="text-sm font-semibold text-amber-900 uppercase tracking-[0.2em]">Billing</p>
            <div className="inline-flex rounded-full bg-amber-200 p-1">
              <button
                type="button"
                onClick={() => setBillingAnnual(false)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${billingAnnual ? 'text-amber-700' : 'bg-amber-900 text-white shadow-sm'}`}>
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingAnnual(true)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${billingAnnual ? 'bg-amber-900 text-white shadow-sm' : 'text-amber-700'}`}>
                Annual
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="bg-amber-50 rounded-2xl p-8 border border-amber-200 shadow-sm">
              
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                Starter
              </h3>
              <p className="text-amber-700 mb-4">
                Agent execution and orchestration pricing
              </p>

              <a
                href={billingAnnual ? 'https://buy.stripe.com/test_14A14fcB750VaZf8yRaIM02' : 'https://buy.stripe.com/test_fZu00b30x3WR6IZ9CVaIM00'}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center py-3 px-4 bg-transparent border-2 border-amber-700 text-amber-900 font-bold rounded-lg hover:bg-amber-200 transition-colors mb-8">
                Checkout
              </a>
              <div className="mb-8">
                <div className="text-4xl font-extrabold text-amber-900">
                  {billingAnnual ? '$460' : '$39'}
                  <span className="text-lg font-medium text-amber-700">{billingAnnual ? '/yr' : '/mo'}</span>
                </div>
                <p className="text-sm text-amber-700 mt-2">
                  {billingAnnual ? 'Billed annually for better savings.' : 'Pay monthly with no long-term commitment.'}
                </p>
              </div>
              <ul className="space-y-4 text-amber-800">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> Up to 50
                  active agents
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> Standard
                  integrations
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> Community
                  support
                </li>
              </ul>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}
              className="bg-white rounded-2xl p-8 border-2 border-amber-500 shadow-xl relative transform md:-translate-y-4">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-amber-900 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Recommended
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                Enterprise
              </h3>
              <p className="text-amber-700 mb-8 h-12">
                Platform licensing + SaaS subscription
              </p>
              <a
                href={billingAnnual ? 'https://buy.stripe.com/test_4gM9AL9oValf0kB3exaIM03' : 'https://buy.stripe.com/test_7sY28j8kRgJD7N3g1jaIM01'}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center py-3 px-4 bg-amber-500 text-amber-900 font-bold rounded-lg hover:bg-amber-400 transition-colors mb-8 shadow-md">
                Checkout
              </a>
              <div className="mb-8">
                <div className="text-4xl font-extrabold text-amber-900">
                  {billingAnnual ? '$1,060' : '$89'}
                  <span className="text-lg font-medium text-amber-700">{billingAnnual ? '/yr' : '/mo'}</span>
                </div>
                <p className="text-sm text-amber-700 mt-2">
                  {billingAnnual ? 'Annual billing optimized for enterprise savings.' : 'Monthly billing for flexible adoption.'}
                </p>
              </div>
              <ul className="space-y-4 text-amber-800">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> Unlimited
                  agents
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> Advanced
                  governance
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> 24/7
                  Priority support
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> Custom LLM
                  routing
                </li>
              </ul>
            </motion.div>

            {/* Custom */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}
              className="bg-amber-50 rounded-2xl p-8 border border-amber-200 shadow-sm">
              
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Custom</h3>
              <p className="text-amber-700 mb-8 h-12">
                Enterprise implementation + API access
              </p>
              <a href="#contact" className="w-full inline-flex items-center justify-center py-3 px-4 bg-transparent border-2 border-amber-700 text-amber-900 font-bold rounded-lg hover:bg-amber-200 transition-colors mb-8">
                Contact Sales
              </a>
              <ul className="space-y-4 text-amber-800">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> On-premise
                  deployment
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> Dedicated
                  success manager
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> Custom
                  integrations
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 10 - CTA BANNER */}
      <motion.section
        className="py-32 px-6 mx-6 rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200 via-amber-300 to-amber-500 text-center"
        style={{ y: ctaParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-amber-900 mb-4 md:mb-6">
            
            Deploy Your First Agent Network Today
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="text-xl text-amber-900/80 mb-10">
            
            Join enterprise teams transforming operations with autonomous AI
            coordination.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.4
            }}>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-amber-900 text-amber-100 font-bold text-lg rounded-xl hover:bg-amber-800 transition-colors shadow-2xl hover:shadow-[0_0_30px_rgba(0,51,42,0.4)]">
              Request Enterprise Access <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 11 - CONTACT */}
      <section id="contact" className="scroll-offset py-24 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="rounded-3xl bg-white p-10 shadow-xl border border-amber-100">
            <h2 className="text-4xl font-display font-bold text-amber-900 mb-4">
              Start a conversation with AgentsForgeX
            </h2>
            <p className="text-lg text-amber-800 mb-10 leading-relaxed">
              Tell us about your enterprise AI goals and our team will reach out
              with a tailored strategy for autonomous agent orchestration.
            </p>
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              <form noValidate onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-amber-900 block mb-2" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={contactData.name}
                    onChange={handleContactChange}
                    placeholder="Your full name"
                    className={`w-full rounded-2xl border px-4 py-3 text-amber-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200 ${contactErrors.name ? 'border-red-500 bg-red-50' : 'border-amber-200 bg-amber-50'}`}
                  />
                  {contactErrors.name && <p className="mt-2 text-sm text-red-600">{contactErrors.name}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-amber-900 block mb-2" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={contactData.email}
                    onChange={handleContactChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-2xl border px-4 py-3 text-amber-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200 ${contactErrors.email ? 'border-red-500 bg-red-50' : 'border-amber-200 bg-amber-50'}`}
                  />
                  {contactErrors.email && <p className="mt-2 text-sm text-red-600">{contactErrors.email}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-amber-900 block mb-2" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={contactData.message}
                    onChange={handleContactChange}
                    placeholder="How can AgentsForgeX help your organization?"
                    className={`w-full rounded-2xl border px-4 py-3 text-amber-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200 ${contactErrors.message ? 'border-red-500 bg-red-50' : 'border-amber-200 bg-amber-50'}`}
                  />
                  {contactErrors.message && <p className="mt-2 text-sm text-red-600">{contactErrors.message}</p>}
                </div>
                <div className="flex justify-center py-2">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeIokItAAAAACVn8TirO0h-_k8YhVLDXKdJKA6R"
                  />
                </div>
                <button
                  type="submit"
                  disabled={contactStatus.status === 'sending'}
                  className="inline-flex items-center justify-center rounded-full bg-amber-900 px-8 py-4 text-base font-semibold text-amber-100 transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-60">
                  {contactStatus.status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {contactStatus.status === 'success' && (
                  <p className="text-sm font-semibold text-emerald-700">{contactStatus.message}</p>
                )}
                {contactStatus.status === 'error' && (
                  <p className="text-sm font-semibold text-red-600">{contactStatus.message}</p>
                )}
              </form>

              <aside className="rounded-3xl bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 p-8 border border-amber-100 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-900 mb-6">
                  Contact Info
                </p>
                <div className="space-y-6 text-sm text-amber-700">
                  <div>
                    <p className="font-semibold text-amber-900 mb-2">Head Office</p>
                    <p>1455 Market St</p>
                    <p>San Francisco, CA 94103</p>
                    <p>USA</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900 mb-2">Phone</p>
                    <a href="tel:+14158312654" className="text-amber-900 hover:text-amber-700 transition">+1 (415) 831-2654</a>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900 mb-2">Email</p>
                    <a href="mailto:connect@agentsforgex.com" className="text-amber-900 hover:text-amber-700 transition">connect@agentsforgex.com</a>
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 12 - FOOTER */}
      <footer className="bg-[#00332a] text-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid items-start grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="space-y-5">
            <a href="#top" className="inline-flex items-start">
              <img src={logoSvg} alt="AgentsForgeX" className="h-20 w-auto -mt-6 self-start" />
            </a>
            <p className="text-slate-300 text-sm leading-7">
              Orchestrates autonomous AI agents into unified enterprise systems, transforming fragmented workflows into coordinated, self-executing intelligence at scale.
            </p>
          </div>

          <div className="space-y-5 self-start">
            <h4 className="font-semibold text-slate-100 mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-300/80">
              <li>
                <a href="/#command-center" className="hover:text-white transition-colors">
                  Orchestration Engine
                </a>
              </li>
              <li>
                <a href="/#enterprise-scale" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-5 self-start">
            <h4 className="font-semibold text-slate-100 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-300/80">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-5 self-start">
            <h4 className="font-semibold text-slate-100 mb-4">Social</h4>
            <p className="text-sm text-slate-300/80">Follow us for the latest product updates and announcements.</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/company/agentsforge-x/" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-100 hover:bg-white/20 transition">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/AgentsForgeX" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-100 hover:bg-white/20 transition">
                <X className="h-5 w-5" />
                <span className="sr-only">X</span>
              </a>
              <a href="https://www.youtube.com/@AgentsForgeX" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-100 hover:bg-white/20 transition">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://www.facebook.com/AgentsForgex0" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-100 hover:bg-white/20 transition">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.pinterest.com/AgentsForgex/" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-100 hover:bg-white/20 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.657 9.166 8.438 10.06-.117-.854-.223-2.167.047-3.105.243-.836 1.567-5.314 1.567-5.314s-.398-.797-.398-1.973c0-1.848 1.072-3.228 2.406-3.228 1.136 0 1.684.852 1.684 1.873 0 1.141-.726 2.847-1.102 4.43-.313 1.327.665 2.407 1.973 2.407 2.368 0 4.186-2.494 4.186-6.085 0-3.183-2.291-5.414-5.566-5.414-3.797 0-6.036 2.851-6.036 5.795 0 1.144.44 2.374.99 3.041.109.132.125.247.094.379-.103.412-.337 1.327-.383 1.51-.06.244-.197.296-.456.178-1.694-.79-2.756-3.247-2.756-5.218 0-4.247 3.087-8.147 8.903-8.147 4.672 0 8.305 3.336 8.305 7.793 0 4.654-2.932 8.408-7.003 8.408-1.366 0-2.651-.71-3.087-1.547l-.84 3.197c-.304 1.179-1.127 2.656-1.678 3.553C8.53 23.81 10.241 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
                <span className="sr-only">Pinterest</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800/70 pt-6 text-sm text-slate-400/80">
          <p>© 2026 AgentsForgeX Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}