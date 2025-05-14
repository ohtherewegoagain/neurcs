import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BetaSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-center py-10">
        <img src="/images/neurcs-logo.png" alt="NEURCS Logo" className="w-40" />
      </header>

      <section className="px-6 py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-5xl font-extrabold mb-4">
          Discover NEURCS
        </motion.h1>
        <p className="max-w-2xl mx-auto text-white/80 text-lg">
          An AI-powered brain wellness copilot built in collaboration with Yale School of Medicine. Reclaim your focus, balance your dopamine, and sleep better — starting today.
        </p>
      </section>

      <section className="px-6 py-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <h2 className="text-4xl font-bold mb-4 text-center">What We Do</h2>
        <p className="max-w-3xl mx-auto text-white/90 text-lg">
          NEURCS monitors real-time screen behavior, detects neural triggers, and delivers adaptive interventions. Our system includes modules for emotional state prediction, attention drift tracking, synchronized screen breaks, and sleep optimization.
        </p>
      </section>

      <section className="px-6 py-16 bg-gradient-to-br from-purple-900 to-violet-800">
        <h2 className="text-4xl font-bold mb-6 text-center">Why It Matters</h2>
        <div className="max-w-2xl mx-auto space-y-2 text-lg">
          <ul className="list-disc list-inside text-white/90">
            <li>Teen anxiety has surged by 35% (CDC)</li>
            <li>70% of adolescents report sleep problems</li>
            <li>Attention spans have dropped below 8 seconds</li>
            <li>1 in 3 teens is digitally dependent</li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 bg-gradient-to-r from-rose-900 to-pink-800">
        <h2 className="text-4xl font-bold mb-6 text-center">Beta Traction</h2>
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse text-white/90">
            <thead>
              <tr className="bg-white/20">
                <th className="p-3">Metric</th>
                <th className="p-3">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white/10">
                <td className="p-3">Users in Beta</td>
                <td className="p-3">500</td>
              </tr>
              <tr className="odd:bg-white/10">
                <td className="p-3">Avg. Sleep Increase</td>
                <td className="p-3">+49 minutes</td>
              </tr>
              <tr className="odd:bg-white/10">
                <td className="p-3">Screen Time Reduction</td>
                <td className="p-3">−34%</td>
              </tr>
              <tr className="odd:bg-white/10">
                <td className="p-3">Anxiety Drop (GAD7)</td>
                <td className="p-3">−24%</td>
              </tr>
              <tr className="odd:bg-white/10">
                <td className="p-3">Weekly Active Users</td>
                <td className="p-3">81%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-6 py-16 bg-gradient-to-r from-gray-800 to-gray-700">
        <h2 className="text-4xl font-bold mb-6 text-center">Investor Interest</h2>
        <p className="max-w-2xl mx-auto text-white/80 text-lg text-center">
          We’re in early discussions with top-tier investors across digital wellness, neuroscience, and health AI. Backed by clinical research and strong beta traction, NEURCS is positioned to scale.
        </p>
      </section>

      <section id="signup" className="px-6 py-16 bg-gradient-to-r from-zinc-900 to-zinc-700">
        <div className="max-w-md mx-auto bg-zinc-800/70 backdrop-blur rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up for the Beta</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg transition"
              >
                Join the Beta
              </button>
            </form>
          ) : (
            <div className="bg-white/10 p-6 rounded-2xl shadow-xl text-center">
              <h2 className="text-2xl font-semibold mb-2">You're In! 🎉</h2>
              <p className="text-white/80">
                We'll notify you when you're approved for the NEURCS beta. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="text-center py-10 text-white/50 text-sm">
        &copy; {new Date().getFullYear()} NEURCS. All rights reserved.
      </footer>
    </main>
  );
}
