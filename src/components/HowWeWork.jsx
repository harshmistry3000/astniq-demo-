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
    bg: 'bg-brand-red',
    accent: '#0a0a0f',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description:
      'We translate insights into a concrete roadmap — defining architecture, tech stack, timelines, and milestones. Every decision is driven by your goals and backed by data.',
    icon: Lightbulb,
    bg: 'bg-brand-blue',
    accent: '#0a0a0f',
  },
  {
    number: '03',
    title: 'Design & Development',
    description:
      'Our engineers and designers work in sync — building pixel-perfect UIs and clean scalable codebases. We follow agile sprints so you always see progress.',
    icon: Code2,
    bg: 'bg-brand-green',
    accent: '#0a0a0f',
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    description:
      'Every feature is rigorously tested — unit tests, integration tests, performance benchmarks, and real-device checks. We ship only what we are proud of.',
    icon: FlaskConical,
    bg: 'bg-brand-yellow',
    accent: '#0a0a0f',
  },
  {
    number: '05',
    title: 'Launch & Ongoing Support',
    description:
      'We handle smooth deployment, monitor post-launch performance, and stay by your side with continuous improvements and dedicated support to keep your product thriving.',
    icon: Rocket,
    bg: 'bg-brand-red',
    accent: '#0a0a0f',
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
        className={`bg-brand-red py-20 px-4 text-center border-b-8 border-brand-black transition-all duration-700 ease-out relative ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0a0a0f 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-block bg-brand-white text-brand-black px-4 py-1 border-4 border-brand-black neo-shadow-yellow transform -rotate-1 mb-4">
            <p className="font-black uppercase text-sm tracking-widest">
              Our Process
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl ubuntu-bold text-brand-white mb-6 leading-tight uppercase" style={{ textShadow: '4px 4px 0 #0a0a0f' }}>
            How We Work?
          </h2>
          <p className="text-brand-black bg-brand-yellow p-4 border-4 border-brand-black neo-shadow-black text-xl font-bold leading-relaxed max-w-2xl mx-auto transform rotate-1">
            A proven, structured approach that turns your ideas into high-quality digital products — on time and on budget.
          </p>
        </div>
      </div>

      {/* ── ScrollStack steps ── */}
      <div className="w-full bg-brand-white relative" style={{ height: '600px' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0a0a0f 0, #0a0a0f 2px, transparent 2px, transparent 12px)' }} />
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
              itemClassName={`${step.bg} text-brand-white border-8 border-brand-black neo-shadow-black rounded-3xl p-8`}
            >
              <div className="flex flex-col h-full justify-between">
                {/* Top row: number + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl ubuntu-bold text-brand-black opacity-30 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-16 h-16 bg-brand-white border-4 border-brand-black neo-shadow-black rounded-2xl flex items-center justify-center text-brand-black transform rotate-6">
                    <step.icon size={32} strokeWidth={3} />
                  </div>
                </div>

                {/* Title */}
                <div className="bg-brand-white/10 p-6 rounded-2xl border-4 border-brand-black backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl ubuntu-bold text-brand-white mb-4 leading-snug uppercase" style={{ textShadow: '2px 2px 0 #0a0a0f' }}>
                    {step.title}
                  </h3>
                  <p className="text-brand-white text-base md:text-lg leading-relaxed font-bold bg-brand-black p-4 border-4 border-brand-black shadow-[4px_4px_0_#ffffff]">
                    {step.description}
                  </p>
                </div>

                {/* Bottom pill */}
                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 bg-brand-white border-4 border-brand-black neo-shadow-black text-brand-black text-sm font-black uppercase px-6 py-2 transform -rotate-2">
                    <span className="w-3 h-3 rounded-none bg-brand-black" />
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
