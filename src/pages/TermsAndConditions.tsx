import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 font-sans">
      <header className="bg-white border-b border-amber-200 py-6 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">AgentsForgeX</p>
            <h1 className="text-3xl font-bold text-amber-900">Terms and Conditions</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-amber-700 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-200 transition">
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-amber-900">Terms and Conditions</h1>
          <p className="text-sm text-amber-700">Last updated: June 24, 2026</p>
          <p className="text-amber-800 leading-relaxed">Please read these terms and conditions carefully before using Our Service.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Interpretation and Definitions</h2>
          <h3 className="text-2xl font-semibold text-amber-900">Interpretation</h3>
          <p className="text-amber-800 leading-relaxed">The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          <h3 className="text-2xl font-semibold text-amber-900">Definitions</h3>
          <p className="text-amber-800 leading-relaxed">For the purposes of these Terms and Conditions:</p>
          <ul className="list-disc space-y-3 pl-6 text-amber-800">
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
            <li><strong>Country</strong> refers to: California, United States.</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to Agentsforgex, 1455 Market St, San Francisco, CA 94103, USA.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service. These Terms and Conditions have been created with the help of the{' '}
              <a href="https://www.termsfeed.com/terms-conditions-generator/" rel="noreferrer" target="_blank" className="text-amber-900 underline hover:text-amber-700">TermsFeed Terms and Conditions Generator</a>.
            </li>
            <li><strong>Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.</li>
            <li><strong>Website</strong> refers to Agentsforgex, accessible from{' '}
              <a href="https://agentsforgex.com/" rel="external nofollow noopener" target="_blank" className="text-amber-900 underline hover:text-amber-700">https://agentsforgex.com/</a>.
            </li>
            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Acknowledgment</h2>
          <p className="text-amber-800 leading-relaxed">These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
          <p className="text-amber-800 leading-relaxed">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
          <p className="text-amber-800 leading-relaxed">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
          <p className="text-amber-800 leading-relaxed">You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
          <p className="text-amber-800 leading-relaxed">Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Links to Other Websites</h2>
          <p className="text-amber-800 leading-relaxed">Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
          <p className="text-amber-800 leading-relaxed">The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.</p>
          <p className="text-amber-800 leading-relaxed">We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.</p>
          <h3 className="text-2xl font-semibold text-amber-900">Links from a Third-Party Social Media Service</h3>
          <p className="text-amber-800 leading-relaxed">The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.</p>
          <p className="text-amber-800 leading-relaxed">You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service, including any content, goods, or services made available through them. Your use of any Third-Party Social Media Service is governed by that Third-Party Social Media Service's terms and privacy policies.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Termination</h2>
          <p className="text-amber-800 leading-relaxed">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
          <p className="text-amber-800 leading-relaxed">Upon termination, Your right to use the Service will cease immediately.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Limitation of Liability</h2>
          <p className="text-amber-800 leading-relaxed">Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
          <p className="text-amber-800 leading-relaxed">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service…</p>
          <p className="text-amber-800 leading-relaxed">Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
          <p className="text-amber-800 leading-relaxed">The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind...</p>
          <p className="text-amber-800 leading-relaxed">Without limiting the foregoing, neither the Company nor any of the Company's provider makes any representation or warranty of any kind…</p>
          <p className="text-amber-800 leading-relaxed">Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Governing Law</h2>
          <p className="text-amber-800 leading-relaxed">The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Disputes Resolution</h2>
          <p className="text-amber-800 leading-relaxed">If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">For European Union (EU) Users</h2>
          <p className="text-amber-800 leading-relaxed">If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">United States Legal Compliance</h2>
          <p className="text-amber-800 leading-relaxed">You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Severability and Waiver</h2>
          <h3 className="text-2xl font-semibold text-amber-900">Severability</h3>
          <p className="text-amber-800 leading-relaxed">If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
          <h3 className="text-2xl font-semibold text-amber-900">Waiver</h3>
          <p className="text-amber-800 leading-relaxed">Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Translation Interpretation</h2>
          <p className="text-amber-800 leading-relaxed">These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Changes to These Terms and Conditions</h2>
          <p className="text-amber-800 leading-relaxed">We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
          <p className="text-amber-800 leading-relaxed">By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-900">Contact Us</h2>
          <p className="text-amber-800 leading-relaxed">If you have any questions about these Terms and Conditions, You can contact us:</p>
          <ul className="list-disc space-y-2 pl-6 text-amber-800">
            <li>By email: connect@agentsforgex.com</li>
            <li>By visiting this page on our website: <a href="https://agentsforgex.com/" rel="external nofollow noopener" target="_blank" className="text-amber-900 underline hover:text-amber-700">https://agentsforgex.com/</a></li>
            <li>By phone: +1 (415) 831-2654</li>
          </ul>
        </section>
      </main>

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
                <a href="#" className="hover:text-amber-300 transition-colors">
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
        <div className="max-w-7xl mx-auto pt-8 border-t border-amber-800 flex flex-col md:flex-row justify-between items-center text-xs text-amber-200/50">
          <p>© 2026 AgentsForgeX Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
