import { Suspense, lazy, useRef, useState, useEffect } from 'react';
import {
  CheckCircle, Phone, Mail, MapPin, ArrowRight,
  ChevronDown, Bot, BrainCircuit, BarChart2,
  Settings, FlaskConical, Lightbulb, HeartPulse,
  ShoppingBag, Factory, MessageSquare, Send
} from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */

const businessCards = [
  {
    icon: BrainCircuit,
    title: 'Utilize the transformative potential of Artificial Intelligence (AI) to elevate your business.',
    text: 'Extract valuable insights from your data, automate repetitive tasks, and optimize operations with AI. Make precision-driven, informed decisions through AI technology.',
  },
  {
    icon: Lightbulb,
    title: 'Wide AI Expertise.',
    text: 'Benefit from our extensive AI expertise, covering areas like developing intelligent chatbots, predictive analytics, recommendation systems, and anomaly detection. Access cutting-edge AI technologies that can drive your business forward.',
  },
  {
    icon: Settings,
    title: 'Partnership for Success.',
    text: 'Partner with us to unlock the full potential of AI and stay ahead in your industry. Gain a competitive edge by harnessing the power of AI in your business strategy.',
  },
];

const aiServices = [
  { icon: Bot,           title: 'AI Consulting',                  desc: 'Strategic guidance on integrating AI into your existing workflows.' },
  { icon: Settings,      title: 'AI Software Development',        desc: 'Custom AI applications tailored to specific business needs.' },
  { icon: Lightbulb,     title: 'Artificial Intelligence Training',desc: 'Training for teams to effectively use and manage AI tools.' },
  { icon: FlaskConical,  title: 'Artificial Intelligence R&D',    desc: 'Research and development for innovative AI use cases.' },
  { icon: BrainCircuit,  title: 'AI Driven Solutions',            desc: 'End-to-end solutions powered by advanced algorithms.' },
  { icon: BarChart2,     title: 'AI Driven Analytics',            desc: 'Deep data analysis using machine learning for predictive insights.' },
];

const whyChoose = [
  'Elevate Customer Satisfaction with Real-Time Chatbot Solutions.',
  'Increase Business Operations Efficiency with Expert Machine Learning Solutions.',
  'Boost Business Productivity with AI-Driven Automation Solutions.',
  'To increase business revenue by designing a personalized customer journey.',
  'To reduce business costs by preventing fraud.',
];

const industries = [
  {
    icon: HeartPulse,
    title: 'Healthcare Revolution',
    text: 'AI is reshaping healthcare by personalizing patient care, improving diagnoses, and enhancing treatment outcomes.',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    border: 'rgba(14,165,233,0.25)',
  },
  {
    icon: ShoppingBag,
    title: 'Retail Enhancement',
    text: 'In retail, AI powers recommendation engines, chatbots, and personalized marketing, delivering exceptional shopping experiences.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
  },
  {
    icon: Factory,
    title: 'Manufacturing Optimization',
    text: 'AI optimizes manufacturing processes, reducing costs and promoting sustainability, driving progress and innovation in vital industries.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.25)',
  },
];

/* ═══════════════════════════════════════════════
   REVEAL WRAPPER
═══════════════════════════════════════════════ */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HEXAGON GRID PATTERN (SVG background)
═══════════════════════════════════════════════ */
function HexPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon
            points="30,2 56,16 56,44 30,58 4,44 4,16"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════ */
export function AIPage() {
  const servicesRef = useRef(null);

  const scrollToServices = () =>
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Quicksand', sans-serif" }}>

      {/* ══════════════════════════════════════════
          HERO — teal gradient + hex pattern + Spline
      ══════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #009aaa 0%, #00b8c4 35%, #00d4e0 60%, #b2f0f5 85%, #e8fdff 100%)',
        }}
      >
        <HexPattern />

        {/* Left text content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-36 pb-16 lg:pt-40 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.25em]">
              Welcome to Astniq Solution
            </span>
          </div>

          <h1
            className="font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.15)' }}
          >
            AI Services and<br />Development Company
          </h1>

          <p className="text-white/90 text-lg md:text-xl font-bold mb-3">
            Boost your business and Unlock Business Growth with Next-gen AI Services.
          </p>

          <p className="text-white/80 text-base font-semibold mb-10">
            Empower your Business with Artificial Intelligence (AI)
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToServices}
              className="flex items-center gap-2 px-8 py-4 bg-white text-[#007a88] font-black text-base rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              Explore AI Services <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/60 text-white font-bold text-base rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right — Spline 3D Robot */}
        <div className="relative z-10 flex-1 w-full lg:w-auto min-h-[420px] lg:min-h-screen flex items-center justify-center">
          <Suspense fallback={
            <div className="flex items-center justify-center w-full h-96">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          }>
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              style={{ width: '100%', height: '100%', minHeight: '500px' }}
            />
          </Suspense>
        </div>

        {/* Scroll hint */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AI BUSINESS TRANSFORMATION — 3 cards
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 md:px-8" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-[#00b8c4] font-black uppercase tracking-[0.3em] text-sm text-center mb-3">
              // AI Transformation
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 text-center mb-14 leading-tight">
              Transforming Business with the Power of AI
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessCards.map((card, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl p-8 h-full border-2 border-slate-100 bg-white hover:border-[#00b8c4]/40 hover:shadow-[0_8px_40px_rgba(0,184,196,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#e6f9fa] flex items-center justify-center mb-6 group-hover:bg-[#00b8c4] transition-colors duration-300">
                    <card.icon size={26} className="text-[#00b8c4] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-black text-slate-800 text-lg mb-3 leading-snug">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AI SERVICES — mint background, tan/brown cards
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8" style={{ background: '#e6f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 text-center mb-4 leading-tight">
              Artificial Intelligence Services and Solutions to help you unlock greater value
            </h2>
            <p className="text-slate-500 text-center max-w-3xl mx-auto mb-14 text-base leading-relaxed font-medium">
              We are focusing on end-to-end AI-based application development and AI consulting. We design and build web and mobile apps as well as custom software products that rely on complex machine learning and AI models and algorithms.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((svc, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="rounded-2xl p-7 h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group border-4 border-transparent hover:border-white"
                  style={{ background: 'linear-gradient(135deg, #c8a882 0%, #d4b896 100%)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center mb-5 group-hover:bg-white/50 transition-colors">
                    <svc.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-black text-white text-xl mb-3">{svc.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed font-medium">{svc.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-white font-bold text-sm group">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AI-BASED APP DEV — white bg
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <Reveal>
            <p className="text-[#00b8c4] font-black uppercase tracking-[0.3em] text-sm mb-3">
              // About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">
              Top-Ranked AI Development Company for AI-Based App Development Services
            </h2>
            <p className="text-slate-500 text-base leading-relaxed font-medium mb-6">
              Astniq solution is an expert AI software development company that creates futuristic and SEO-optimized AI app development solutions for businesses. We have a team of highly-skilled developers that work as per your company's needs. Whether you want to create a custom AI app from scratch or add smart features to existing ones, our top-tier AI company allows you to pick the right choice. Our experts have deep knowledge of modern technology like machine learning, natural language processing, etc.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Custom AI App Development',
                'Integration of Smart Features',
                'Advanced Machine Learning & NLP',
                'End-to-End Automation Solutions',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#00b8c4] flex-shrink-0" />
                  <span className="text-slate-700 font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-2 px-8 py-4 bg-[#00b8c4] hover:bg-[#009aaa] text-white font-black rounded-full shadow-[0_8px_30px_rgba(0,184,196,0.35)] hover:shadow-[0_12px_40px_rgba(0,184,196,0.5)] hover:-translate-y-1 transition-all duration-300">
              Get Started <ArrowRight size={18} />
            </button>
          </Reveal>

          {/* Right — decorative box */}
          <Reveal delay={150}>
            <div className="relative">
              <div
                className="w-full aspect-square max-w-md mx-auto rounded-3xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #009aaa 0%, #00d4e0 100%)' }}
              >
                <HexPattern />
                <div className="relative z-10 text-center px-8">
                  <div className="text-7xl mb-4">🤖</div>
                  <h3 className="text-white font-black text-2xl mb-2">AI-Based App Development Services</h3>
                  <p className="text-white/80 text-sm font-medium">
                    Embrace the future of technology with our SEO-optimized AI-Based App Development services.
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-6 py-4 border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#e6f9fa] rounded-xl flex items-center justify-center">
                  <Bot size={20} className="text-[#00b8c4]" />
                </div>
                <div>
                  <div className="text-slate-800 font-black text-sm">AI Models</div>
                  <div className="text-[#00b8c4] font-black text-lg">150+ Deployed</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US — mint bg with checklist
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-8" style={{ background: '#e6f9fa' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 text-center mb-14 leading-tight">
              Why Choose us as your AI Solution Provider?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((reason, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 h-full border-2 border-[#00b8c4]/15 hover:border-[#00b8c4]/40 hover:shadow-[0_8px_30px_rgba(0,184,196,0.1)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f9fa] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={20} className="text-[#00b8c4]" />
                  </div>
                  <p className="text-slate-700 font-semibold text-sm leading-relaxed">{reason}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHOM AI REALLY HELPS — white bg
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[#00b8c4] font-black uppercase tracking-[0.3em] text-sm text-center mb-3">
              // Industry Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 text-center mb-14 leading-tight">
              Whom AI Really Helps
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className="rounded-2xl p-7 h-full border-2 border-dashed hover:-translate-y-2 transition-all duration-300"
                  style={{ background: ind.bg, borderColor: ind.border }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${ind.color}20` }}
                  >
                    <ind.icon size={28} style={{ color: ind.color }} />
                  </div>
                  <h3 className="font-black text-slate-800 text-xl mb-3" style={{ color: ind.color }}>
                    {ind.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{ind.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GET IN TOUCH
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden" style={{ background: '#e6f9fa' }}>
        <HexPattern />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left info */}
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 leading-tight">
              Get In Touch
            </h2>
            <p className="text-slate-600 text-base font-medium leading-relaxed mb-8">
              Questions or need support? Contact our seasoned IT consultants for tailored solutions that enhance your digital footprint. Your success is our mission!
            </p>
            <div className="space-y-5">
              {[
                { icon: Phone, label: '99789 71636', href: 'tel:9978971636' },
                { icon: Mail, label: 'info@astniq.com', href: 'mailto:info@astniq.com' },
                { icon: MapPin, label: '503, Sun Avenue One, near Shyamal, Ambawadi, Ahmedabad, Gujarat', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00b8c4]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b8c4] transition-colors">
                    <Icon size={20} className="text-[#00b8c4] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm leading-relaxed mt-2.5 group-hover:text-[#007a88] transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right form */}
          <Reveal delay={150}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-[#00b8c4] bg-slate-50 outline-none text-slate-800 font-medium text-sm transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-[#00b8c4] bg-slate-50 outline-none text-slate-800 font-medium text-sm transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-[#00b8c4] bg-slate-50 outline-none text-slate-800 font-medium text-sm transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone no."
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-[#00b8c4] bg-slate-50 outline-none text-slate-800 font-medium text-sm transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-[#00b8c4] bg-slate-50 outline-none text-slate-800 font-medium text-sm transition-colors mb-4"
              />
              <textarea
                placeholder="Project Description"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-[#00b8c4] bg-slate-50 outline-none text-slate-800 font-medium text-sm transition-colors mb-5 resize-none"
              />
              <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#00b8c4] hover:bg-[#009aaa] text-white font-black rounded-xl shadow-[0_8px_30px_rgba(0,184,196,0.35)] hover:shadow-[0_12px_40px_rgba(0,184,196,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                Submit Button <Send size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
