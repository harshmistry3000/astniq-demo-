/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Code2, FlaskConical, Rocket } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack';

const steps = [
  {
    number: '01',
    title: 'Discovery & Research',
    description:
      'We start by deeply understanding your business goals, target audience, and project requirements. Through workshops and interviews we map out a clear picture of what success looks like.',
    icon: Search,
    bg: 'bg-gradient-to-br from-violet-500 to-indigo-600',
    accent: '#7c3aed',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description:
      'We translate insights into a concrete roadmap — defining architecture, tech stack, timelines, and milestones. Every decision is driven by your goals and backed by data.',
    icon: Lightbulb,
    bg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    accent: '#0ea5e9',
  },
  {
    number: '03',
    title: 'Design & Development',
    description:
      'Our engineers and designers work in sync — building pixel-perfect UIs and clean scalable codebases. We follow agile sprints so you always see progress.',
    icon: Code2,
    bg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    accent: '#10b981',
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    description:
      'Every feature is rigorously tested — unit tests, integration tests, performance benchmarks, and real-device checks. We ship only what we are proud of.',
    icon: FlaskConical,
    bg: 'bg-gradient-to-br from-orange-400 to-amber-500',
    accent: '#f59e0b',
  },
  {
    number: '05',
    title: 'Launch & Ongoing Support',
    description:
      'We handle smooth deployment, monitor post-launch performance, and stay by your side with continuous improvements and dedicated support to keep your product thriving.',
    icon: Rocket,
    bg: 'bg-gradient-to-br from-rose-500 to-pink-500',
    accent: '#f43f5e',
  },
];

export function HowWeWork() {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full">

      {/* ── Plain header matching site style ── */}
      <div
        ref={headerRef}
        className={`bg-white py-20 px-4 text-center transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="text-blue-600 font-bold uppercase text-sm mb-3 tracking-widest">
          Our Process
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-5 leading-tight">
          How We Work?
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
          A proven, structured approach that turns your ideas into high-quality digital products — on time and on budget.
        </p>
      </div>

      {/* ── ScrollStack steps ── */}
      <div className="w-full bg-slate-50" style={{ height: '600px' }}>
        <ScrollStack
          itemDistance={120}
          itemScale={0.025}
          itemStackDistance={25}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.88}
          rotationAmount={0}
          blurAmount={0}
          useWindowScroll={false}
        >
          {steps.map((step, index) => (
            <ScrollStackItem
              key={index}
              itemClassName={`${step.bg} text-white`}
            >
              <div className="flex flex-col h-full justify-between">
                {/* Top row: number + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black text-white/20 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white border border-white/30 shadow-inner">
                    <step.icon size={28} strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom pill */}
                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Step {step.number}
                  </span>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

    </section>
  );
}
