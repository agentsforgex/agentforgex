import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/Logo.svg?url';
import {
  Linkedin,
  X,
  Youtube,
  Facebook
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 font-sans selection:bg-amber-300 selection:text-amber-900 overflow-x-hidden">
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white p-12 shadow-2xl border border-amber-200">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.32em] font-bold text-amber-700 mb-4">
              About Us
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-black text-amber-950 leading-tight">
              Mission-driven autonomy for enterprise AI teams.
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-amber-900">Our story</h2>
              <p className="text-lg text-amber-800 leading-relaxed">
                AgentsForgeX was founded to help enterprises move beyond isolated AI
                tools and build collaborative, governed decision systems. We believe
                true automation is achieved when agents work together with clear rules,
                auditability, and human oversight.
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                Our platform enables multi-agent orchestration, intelligent workflow
                routing, and secure governance for complex enterprise operations.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-amber-900">What we do</h2>
              <ul className="space-y-4 text-amber-800">
                <li className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
                  <strong className="block text-amber-900 font-semibold mb-2">Orchestration Engine</strong>
                  Coordinate agent workflows, manage state, and automate large-scale reasoning.
                </li>
                <li className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
                  <strong className="block text-amber-900 font-semibold mb-2">Governance & Oversight</strong>
                  Maintain policy controls, approval checkpoints, and traceable audit logs.
                </li>
                <li className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
                  <strong className="block text-amber-900 font-semibold mb-2">Integrations</strong>
                  Connect LLMs, enterprise systems, databases and APIs through a unified platform.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 rounded-3xl bg-amber-100 p-10 border border-amber-200">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Our values</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Trustworthy', desc: 'We build systems that are auditable, explainable, and reliable.' },
                { title: 'Collaborative', desc: 'Agents and people work together to solve complex problems.' },
                { title: 'Enterprise-ready', desc: 'Designed for scale, security, and operational governance.' }
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-white p-6 border border-amber-200 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-700 font-semibold mb-3">{item.title}</p>
                  <p className="text-amber-800 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-amber-800 text-lg mb-6">
              Ready to bring enterprise-grade agent orchestration to your team?
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-amber-900 px-8 py-4 text-base font-semibold text-amber-100 transition hover:bg-amber-800"
            >
              Visit Platform Overview
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#00332a] text-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid items-start grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="space-y-5">
            <img src={logoSvg} alt="AgentsForgeX" className="h-20 w-auto -mt-6 self-start" />
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
              <a href="https://www.facebook.com/AgentsForgex/" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-100 hover:bg-white/20 transition">
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
    </div>
  );
}
