import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Youtube,
  Facebook } from
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
  const [billingAnnual, setBillingAnnual] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ids = ['platform', 'features', 'pricing', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
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
    <div className="min-h-screen bg-amber-50 text-amber-900 font-sans selection:bg-amber-300 selection:text-amber-900 overflow-x-hidden">
      {/* NAVBAR */}
     <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-0 bg-amber-50/95 backdrop-blur-md border-b border-amber-200">
  <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 -my-10">
          <motion.a
            href="#platform"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center">
            <img src={logoSvg} alt="AgentsForgeX logo" className="h-40 w-40" />
          </motion.a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-800">
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

      <motion.div
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
         <a
           href="https://agentdashboard.lk"
           target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-amber-900 shadow-sm transition hover:bg-amber-600">
            AgentsforgeX
          </a>
     </motion.div>
        </div>
      </nav>

      {/* SECTION 1 - HERO */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden"
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
              
              <span className="text-sm font-mono font-medium text-amber-800 uppercase tracking-wider">
                Powered by NVIDIA SDK
              </span>
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
              
              AgentsForgeX is the <span className="block text-amber-900">enterprise AI orchestration platform</span>
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
              
              Build and manage intelligent agent workflows with governance,
              automation and enterprise ready control.
            </motion.p>
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
        id="problem-statement" className="relative py-8 px-6 bg-amber-100"
        style={{ y: section2Y, scale: section2Scale, zIndex: section2Z }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-16 uppercase tracking-wide">
            
            Enterprise AI Is Broken
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
              title: 'Siloed Operations',
              desc: 'AI systems operate in disconnected silos without shared context.',
              image: siloedOpsImg
            },
            {
              title: 'Complex Workflows',
              desc: 'Multi-step processes require coordinating disparate AI capabilities.',
              image: complexWorkflowsImg
            },
            {
              title: 'Lack of Governance',
              desc: 'Managing autonomous agents lacks oversight and auditability.',
              image: lackGovernanceImg
            },
            {
              title: 'Scaling Struggles',
              desc: 'Enterprises struggle to deploy agentic AI reliably at scale.',
              image: scalingStrugglesImg
            },
            {
              title: 'Decision Bottlenecks',
              desc: 'Coordinating AI-driven decisions across legacy systems is difficult.',
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

      {/* SECTION 3 - PLATFORM OVERVIEW */}
      <motion.section
        id="platform"
        className="relative py-1 px-6 bg-amber-50"
        style={{ y: section3Y, scale: section3Scale, zIndex: section3Z }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-center mb-20">
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-6 uppercase tracking-wide">
              AgentsForgeX: The Operating System for Enterprise AI
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              A centralized orchestration layer that transforms isolated AI
              models into a cohesive, collaborative, and governed autonomous
              workforce.
            </p>
          </motion.div>

          <motion.div
            id="features"
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
              image: agentOrchestrationImg
            },
            {
              title: 'Multi-Agent Collaboration',
              desc: 'Enable agents to communicate and share context; distributed reasoning and decision-making.',
              image: multiAgentImg
            },
            {
              title: 'Autonomous Workflow Intelligence',
              desc: 'Automate complex business processes; execute multi-step tasks across systems.',
              image: autonomousWorkflowImg
            },
            {
              title: 'Governance & Oversight Layer',
              desc: 'Monitor agent behavior; enforce operational policies; full auditability.',
              image: governanceLayerImg
            },
            {
              title: 'Knowledge Integration Framework',
              desc: 'Connect LLMs, databases, APIs, CRMs, ERPs, cloud infrastructure.',
              image: knowledgeIntegrationImg
            },
            {
              title: 'Enterprise API Orchestration',
              desc: 'API-first agent management; scalable agentic AI architecture.',
              image: enterpriseApiImg
            }].
            map((feature, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-amber-200 p-8 rounded-xl border-t-4 border-transparent hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,255,204,0.15)]">
              
                <img src={feature.image} alt={feature.title} className="w-16 h-16 mb-6 object-contain" />
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-amber-800 leading-relaxed">{feature.desc}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 4 - TECHNICAL ARCHITECTURE DIAGRAM */}
      <section className="py-32 px-6 bg-amber-100 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-4 uppercase tracking-wide">
            
            How AgentsForgeX Orchestrates Intelligence
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-xl text-amber-800 mb-16 font-mono">
            
            Powered by NVIDIA-based AI architecture
          </motion.p>

          <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] bg-amber-50 rounded-2xl border border-amber-200 shadow-xl p-8 flex flex-col justify-between">
            {/* Top Layer */}
            <div className="flex justify-center gap-4 z-10">
              {['Enterprise Systems', 'LLMs', 'APIs', 'Databases'].map(
                (sys, i) =>
                <div
                  key={i}
                  className="px-4 py-2 bg-amber-200 text-amber-900 text-sm font-mono rounded border border-amber-300">
                  
                    {sys}
                  </div>

              )}
            </div>

            {/* Middle Layer (Engine) */}
            <div className="relative z-10 w-full max-w-2xl mx-auto bg-amber-100 border-2 border-amber-500 rounded-xl p-6 shadow-[0_0_30px_rgba(0,255,204,0.2)]">
              <h3 className="text-xl font-bold text-amber-900 mb-4 uppercase tracking-widest text-center">
                AgentsForgeX Orchestration Engine
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                'Agent Routing & Delegation',
                'Context Sharing Layer',
                'Reasoning & Decision Engine',
                'Workflow Execution Core'].
                map((core, i) =>
                <div
                  key={i}
                  className="bg-amber-50 p-3 text-center text-sm font-medium text-amber-800 rounded border border-amber-200">
                  
                    {core}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Layer */}
            <div className="flex justify-center gap-6 z-10">
              {['Agent A', 'Agent B', 'Agent C', 'Agent N'].map((agent, i) =>
              <div
                key={i}
                className="w-20 h-20 rounded-full bg-amber-500 text-amber-900 flex items-center justify-center font-bold shadow-lg">
                
                  {agent}
                </div>
              )}
            </div>

            {/* Animated SVG Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(0,255,204,0.5))'
              }}>
              
              <motion.path
                d="M 200 80 L 400 180 M 400 80 L 400 180 M 600 80 L 400 180"
                stroke="#00FFCC"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 5"
                animate={{
                  strokeDashoffset: [0, -20]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear'
                }} />
              
              <motion.path
                d="M 400 320 L 200 420 M 400 320 L 350 420 M 400 320 L 450 420 M 400 320 L 600 420"
                stroke="#00FFCC"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 5"
                animate={{
                  strokeDashoffset: [0, -20]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear'
                }} />
              
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 5 - DASHBOARD WIDGETS PREVIEW */}
      <section className="py-32 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-16 text-center uppercase tracking-wide">
            
            The AgentsForgeX Command Center
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 flex flex-col">
              
              <h3 className="text-lg font-bold text-amber-900 mb-2">
                Connect Your Stack
              </h3>
              <p className="text-sm text-amber-700 mb-6">
                Integrate any LLM, enterprise app, or data source
              </p>
              <div className="grid grid-cols-3 gap-4 mt-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) =>
                <div
                  key={i}
                  className="aspect-square bg-amber-50 rounded-lg border border-amber-100 flex items-center justify-center">
                  
                    <Database className="w-6 h-6 text-amber-400" />
                  </div>
                )}
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
                Powered by NVIDIA SDK
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-6">
                Agent Orchestration Visualizer
              </h3>
              <div className="h-64 relative flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full z-10 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,204,0.4)]">
                  <Cpu className="text-white w-8 h-8" />
                </div>
                {[0, 60, 120, 180, 240, 300].map((deg, i) =>
                <motion.div
                  key={i}
                  className="absolute w-full h-full flex items-center justify-center"
                  style={{
                    rotate: deg
                  }}>
                  
                    <div className="w-32 h-[2px] bg-gradient-to-r from-amber-500 to-transparent absolute left-1/2 origin-left" />
                    <div
                    className="w-10 h-10 bg-amber-200 rounded-full absolute left-[calc(50%+128px)] border-2 border-amber-400 flex items-center justify-center"
                    style={{
                      rotate: -deg
                    }}>
                    
                      <Activity className="w-4 h-4 text-amber-700" />
                    </div>
                  </motion.div>
                )}
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                {
                  label: 'Active Agents',
                  val: '247'
                },
                {
                  label: 'Task Success',
                  val: '99.3%'
                },
                {
                  label: 'Avg Response',
                  val: '142ms'
                },
                {
                  label: 'Workflows',
                  val: '18,492'
                },
                {
                  label: 'Utilization',
                  val: '67%'
                },
                {
                  label: 'Health',
                  val: 'Optimal'
                }].
                map((stat, i) =>
                <div
                  key={i}
                  className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  
                    <p className="text-xs text-amber-700 mb-1 font-medium">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-mono font-bold text-amber-900">
                      {stat.val}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - TARGET INDUSTRIES */}
      <section className="py-20 px-6 bg-amber-100 border-y border-amber-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
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

      {/* SECTION 7 - CAPABILITIES DEEP DIVE */}
      <section className="py-32">
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

      {/* SECTION 8 - PRICING */}
      <section id="pricing" className="py-32 px-6 bg-amber-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-16 text-center uppercase tracking-wide">
            
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

      {/* SECTION 9 - CTA BANNER */}
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
            className="text-5xl md:text-6xl font-display font-bold text-amber-900 mb-6">
            
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

      {/* SECTION 10 - CONTACT */}
      <section id="contact" className="py-24 px-6 bg-amber-50">
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
            <form action="https://formspree.io/f/xojovjno" method="POST" className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-amber-900 block mb-2" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-amber-900 block mb-2" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-amber-900 block mb-2" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="How can AgentsForgeX help your organization?"
                  className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-amber-900 px-8 py-4 text-base font-semibold text-amber-100 transition hover:bg-amber-800">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11 - FOOTER */}
      <footer className="bg-amber-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-2xl font-display font-bold text-white mb-4">
              AgentsForgeX Inc.
            </h4>
            <p className="text-white/70 text-sm mb-2">
              Founder: Saravanan Iyer
            </p>
            <p className="text-white/70 text-sm mb-2">
              Founded: December 05, 2023
            </p>
            <p className="text-white/70 text-sm mb-2">
              1455 Market St, San Francisco, CA 94103, USA
            </p>
            <p className="text-white/70 text-sm mb-2">+1 (415) 831-2654</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Orchestration Engine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Multi-Agent Swarms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Governance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-300 mb-4">Developers</h4>
            <ul className="space-y-2 text-sm text-amber-200/70">
              <li>
                <span className="opacity-50 cursor-not-allowed">
                  API Docs — Coming Soon
                </span>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition-colors">
                  SDK Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-300 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-amber-200/70">
              <li>
                <a href="#" className="hover:text-amber-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-amber-300 transition-colors">
                   Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-amber-300 transition-colors">
                   Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 border-t border-amber-800 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-amber-200/50">
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
              <X className="h-5 w-5" />
              <span className="sr-only">X</span>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.657 9.166 8.438 10.06-.117-.854-.223-2.167.047-3.105.243-.836 1.567-5.314 1.567-5.314s-.398-.797-.398-1.973c0-1.848 1.072-3.228 2.406-3.228 1.136 0 1.684.852 1.684 1.873 0 1.141-.726 2.847-1.102 4.43-.313 1.327.665 2.407 1.973 2.407 2.368 0 4.186-2.494 4.186-6.085 0-3.183-2.291-5.414-5.566-5.414-3.797 0-6.036 2.851-6.036 5.795 0 1.144.44 2.374.99 3.041.109.132.125.247.094.379-.103.412-.337 1.327-.383 1.51-.06.244-.197.296-.456.178-1.694-.79-2.756-3.247-2.756-5.218 0-4.247 3.087-8.147 8.903-8.147 4.672 0 8.305 3.336 8.305 7.793 0 4.654-2.932 8.408-7.003 8.408-1.366 0-2.651-.71-3.087-1.547l-.84 3.197c-.304 1.179-1.127 2.656-1.678 3.553C8.53 23.81 10.241 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
              <span className="sr-only">Pinterest</span>
            </a>
          </div>
          <p>© 2026 AgentsForgeX Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}