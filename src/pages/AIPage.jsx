import { Suspense, lazy, useRef, useState, useEffect } from 'react';
import {
  CheckCircle, Phone, Mail, MapPin, ArrowRight,
  ChevronDown, Bot, BrainCircuit, BarChart2,
  Settings, FlaskConical, Lightbulb, HeartPulse,
  ShoppingBag, Factory, MessageSquare, Send
} from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

/* ═══════════════════════════════════════════════
   BRAND COLORS
═══════════════════════════════════════════════ */
const C = {
  blue:   '#1a56db',
  black:  '#0a0a0f',
  yellow: '#f59e0b',
  red:    '#ef4444',
  green:  '#10b981',
  white:  '#f8fafc',
};

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
        className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden border-b-8 border-brand-black bg-brand-green"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0a0a0f 3px, transparent 3px)', backgroundSize: '32px 32px' }} />

        {/* Left text content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-36 pb-16 lg:pt-40 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-brand-yellow text-brand-black border-4 border-brand-black neo-shadow-black rounded-sm mb-8 w-fit transform -rotate-2">
            <span className="text-brand-black text-sm font-black uppercase tracking-[0.2em]">
              Welcome to Astniq Solution
            </span>
          </div>

          <h1
            className="ubuntu-bold text-5xl md:text-6xl lg:text-7xl text-brand-black uppercase leading-tight mb-8"
            style={{ textShadow: '4px 4px 0 #f8fafc' }}
          >
            AI Services and<br /><span className="text-brand-white" style={{ WebkitTextStroke: '2px #0a0a0f', textShadow: '4px 4px 0 #1a56db' }}>Development</span> <br /> Company
          </h1>

          <p className="quicksand-font text-brand-black bg-brand-white p-6 border-4 border-brand-black neo-shadow-red text-lg md:text-xl font-bold mb-12 transform rotate-1 max-w-xl">
            Boost your business and Unlock Business Growth with Next-gen AI Services. Empower your Business with Artificial Intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={scrollToServices}
              className="flex items-center gap-2 px-8 py-4 bg-brand-blue text-brand-white font-black uppercase text-base border-4 border-brand-black neo-shadow-black hover:translate-x-1 hover:-translate-y-1 hover:neo-shadow-yellow transition-all duration-300"
            >
              Explore AI Services <ArrowRight size={20} strokeWidth={3} />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-brand-white text-brand-black font-black uppercase text-base border-4 border-brand-black neo-shadow-black hover:translate-x-1 hover:-translate-y-1 hover:neo-shadow-red transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right — Spline 3D Robot */}
        <div className="relative z-10 flex-1 w-full lg:w-auto min-h-[420px] lg:min-h-screen flex items-center justify-center p-8">
          <div className="w-full h-[600px] rounded-3xl overflow-hidden border-8 border-brand-black neo-shadow-black bg-brand-black relative">
            <Suspense fallback={
              <div className="flex items-center justify-center w-full h-full bg-brand-black">
                <div className="w-16 h-16 border-8 border-brand-white border-t-brand-blue rounded-full animate-spin" />
              </div>
            }>
              <Spline
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-24 px-4 md:px-8 border-b-8 border-brand-black" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col items-center justify-center mb-16">
              <div className="inline-block bg-brand-yellow text-brand-black px-4 py-1 border-4 border-brand-black neo-shadow-black transform rotate-2 mb-6">
                <span className="font-black uppercase tracking-[0.2em] text-sm">
                  // AI Transformation
                </span>
              </div>
              <h2 className="ubuntu-bold text-4xl md:text-5xl text-brand-black text-center leading-tight uppercase" style={{ textShadow: '2px 2px 0 #10b981' }}>
                Transforming Business with the Power of AI
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessCards.map((card, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-brand-white border-4 border-brand-black neo-shadow-black p-8 h-full transition-transform duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <div className="w-16 h-16 bg-brand-blue border-4 border-brand-black neo-shadow-black flex items-center justify-center mb-6 transform group-hover:-rotate-12 transition-transform">
                    <card.icon size={32} className="text-brand-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="ubuntu-bold text-brand-black text-2xl uppercase mb-3 leading-tight">{card.title}</h3>
                  <div className="w-12 h-1.5 bg-brand-black mb-4 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-brand-black quicksand-font text-base leading-relaxed font-bold">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 bg-brand-blue border-b-8 border-brand-black relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0a0a0f 3px, transparent 3px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="flex flex-col items-center justify-center mb-16">
              <h2 className="ubuntu-bold text-4xl md:text-5xl lg:text-6xl text-brand-white text-center uppercase tracking-tight mb-6 leading-tight" style={{ textShadow: '4px 4px 0 #0a0a0f' }}>
                Artificial Intelligence Services and <span className="text-brand-yellow font-black" style={{ WebkitTextStroke: '2px #0a0a0f', textShadow: '4px 4px 0 #ef4444' }}>Solutions</span>
              </h2>
              <p className="text-brand-black bg-brand-white p-4 border-4 border-brand-black neo-shadow-black text-center max-w-3xl mx-auto text-lg font-bold transform -rotate-1">
                We design and build web and mobile apps as well as custom software products that rely on complex machine learning and AI models.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((svc, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="bg-brand-white border-4 border-brand-black neo-shadow-white p-8 h-full transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:-translate-x-1"
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `8px 8px 0 #ef4444`; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = `4px 4px 0 #f8fafc`; }}
                >
                  <div className="w-16 h-16 bg-brand-green border-4 border-brand-black neo-shadow-black flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors duration-300 transform group-hover:rotate-12">
                    <svc.icon size={32} className="text-brand-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="ubuntu-bold text-brand-black text-2xl uppercase mb-3 leading-tight">{svc.title}</h3>
                  <div className="w-12 h-1.5 bg-brand-black mb-4 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-brand-black quicksand-font text-base leading-relaxed font-bold mb-6">{svc.desc}</p>
                  <span className="inline-flex items-center gap-2 px-4 py-2 border-2 border-brand-black bg-brand-red text-brand-white text-xs font-black uppercase tracking-wider transition-all duration-300 group-hover:bg-brand-black group-hover:text-brand-yellow">
                    Learn More <ArrowRight size={14} strokeWidth={3} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-24 px-4 md:px-8 border-b-8 border-brand-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <Reveal>
            <div className="inline-block bg-brand-yellow text-brand-black px-4 py-1 border-4 border-brand-black neo-shadow-black transform -rotate-2 mb-6">
              <span className="font-black uppercase tracking-[0.2em] text-sm">
                // About Us
              </span>
            </div>
            <h2 className="ubuntu-bold text-4xl md:text-5xl text-brand-black uppercase mb-6 leading-tight" style={{ textShadow: '2px 2px 0 #1a56db' }}>
              Top-Ranked AI Development Company for <span className="text-brand-yellow font-black" style={{ WebkitTextStroke: '2px #0a0a0f', textShadow: '4px 4px 0 #10b981' }}>AI-Based App</span> Development Services
            </h2>
            <div className="border-l-8 border-brand-black pl-6 mb-8 mt-6">
              <p className="quicksand-font text-brand-black text-lg leading-relaxed font-bold mb-6">
                Astniq solution is an expert AI software development company that creates futuristic and SEO-optimized AI app development solutions for businesses. We have a team of highly-skilled developers that work as per your company's needs. Whether you want to create a custom AI app from scratch or add smart features to existing ones, our top-tier AI company allows you to pick the right choice. Our experts have deep knowledge of modern technology like machine learning, natural language processing, etc.
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Custom AI App Development',
                'Integration of Smart Features',
                'Advanced Machine Learning & NLP',
                'End-to-End Automation Solutions',
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 bg-brand-white border-4 border-brand-black neo-shadow-black p-3">
                  <div className="w-8 h-8 rounded-full bg-brand-green border-2 border-brand-black flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={18} className="text-brand-black" strokeWidth={3} />
                  </div>
                  <span className="text-brand-black font-black uppercase text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-2 px-8 py-4 bg-brand-blue text-brand-white font-black uppercase border-4 border-brand-black neo-shadow-black transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:neo-shadow-none">
              Get Started <ArrowRight size={20} strokeWidth={3} />
            </button>
          </Reveal>

          {/* Right — decorative box */}
          <Reveal delay={150}>
            <div className="relative transform rotate-2">
              <div
                className="w-full aspect-square max-w-md mx-auto flex items-center justify-center border-8 border-brand-black neo-shadow-red bg-brand-yellow"
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0a0a0f 4px, transparent 4px)', backgroundSize: '36px 36px' }} />
                <div className="relative z-10 text-center px-10 bg-brand-white m-6 py-12 border-4 border-brand-black neo-shadow-black transform -rotate-2">
                  <div className="text-8xl mb-6 transform hover:scale-110 transition-transform">🤖</div>
                  <h3 className="text-brand-black ubuntu-bold text-3xl mb-4 uppercase leading-tight">AI-Based App Development Services</h3>
                  <p className="text-brand-black quicksand-font text-base font-bold">
                    Embrace the future of technology with our SEO-optimized AI-Based App Development services.
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -right-8 bg-brand-green border-4 border-brand-black neo-shadow-black px-6 py-4 flex items-center gap-4 transform -rotate-3">
                <div className="w-12 h-12 bg-brand-white border-4 border-brand-black flex items-center justify-center transform -rotate-6">
                  <Bot size={24} className="text-brand-black" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-brand-black ubuntu-bold text-xs uppercase tracking-wider mb-1">AI Models</div>
                  <div className="text-brand-white ubuntu-bold text-2xl" style={{ textShadow: '2px 2px 0 #0a0a0f' }}>150+ Deployed</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 border-b-8 border-brand-black bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0a0a0f 0, #0a0a0f 4px, transparent 4px, transparent 16px)' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <div className="bg-brand-white border-4 border-brand-black neo-shadow-black p-6 md:p-8 mb-16 transform -rotate-1 max-w-4xl mx-auto">
              <h2 className="ubuntu-bold text-4xl md:text-5xl text-brand-black text-center uppercase leading-tight" style={{ textShadow: '2px 2px 0 #f59e0b' }}>
                Why Choose us as your <span className="text-brand-white" style={{ WebkitTextStroke: '2px #0a0a0f', textShadow: '4px 4px 0 #1a56db' }}>AI Solution Provider?</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((reason, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-brand-white border-4 border-brand-black neo-shadow-black p-6 h-full flex items-start gap-4 transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1 hover:neo-shadow-red group cursor-pointer">
                  <div className="w-12 h-12 border-4 border-brand-black bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:rotate-12 transition-transform">
                    <CheckCircle size={24} className="text-brand-black" strokeWidth={2.5} />
                  </div>
                  <p className="text-brand-black quicksand-font font-black text-base md:text-lg leading-relaxed">{reason}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHOM AI REALLY HELPS — white bg
      ══════════════════════════════════════════ */}
      <section className="bg-brand-white py-24 px-4 md:px-8 border-b-8 border-brand-black">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col items-center justify-center mb-16">
              <div className="inline-block bg-brand-blue text-brand-white px-4 py-1 border-4 border-brand-black neo-shadow-black transform -rotate-1 mb-6">
                <span className="font-black uppercase tracking-[0.2em] text-sm">
                  // Industry Impact
                </span>
              </div>
              <h2 className="ubuntu-bold text-4xl md:text-5xl text-brand-black text-center uppercase leading-tight" style={{ textShadow: '2px 2px 0 #ef4444' }}>
                Whom <span className="text-brand-yellow font-black" style={{ WebkitTextStroke: '2px #0a0a0f', textShadow: '4px 4px 0 #10b981' }}>AI</span> Really Helps
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className="bg-brand-white border-4 border-brand-black neo-shadow-black p-8 h-full transition-transform duration-300 transform hover:-translate-y-2 group cursor-pointer"
                >
                  <div
                    className="w-16 h-16 border-4 border-brand-black neo-shadow-black flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform"
                    style={{ background: ind.color }}
                  >
                    <ind.icon size={32} style={{ color: C.white }} strokeWidth={2.5} />
                  </div>
                  <h3 className="ubuntu-bold text-brand-black text-2xl uppercase mb-3 leading-tight">
                    {ind.title}
                  </h3>
                  <div className="w-12 h-1.5 bg-brand-black mb-4 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-brand-black quicksand-font text-base leading-relaxed font-bold">{ind.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden bg-brand-black border-b-8 border-brand-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f8fafc 3px, transparent 3px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left info */}
          <Reveal>
            <h2 className="ubuntu-bold text-5xl md:text-6xl text-brand-white uppercase tracking-tight mb-6 leading-tight" style={{ textShadow: '4px 4px 0 #1a56db' }}>
              Get In <span className="text-brand-yellow" style={{ WebkitTextStroke: '2px #0a0a0f', textShadow: '4px 4px 0 #ef4444' }}>Touch</span>
            </h2>
            <p className="text-brand-black bg-brand-white p-6 border-4 border-brand-black neo-shadow-red text-lg font-bold leading-relaxed mb-10 transform rotate-1">
              Questions or need support? Contact our seasoned IT consultants for tailored solutions that enhance your digital footprint. Your success is our mission!
            </p>
            <div className="space-y-6">
              {[
                { icon: Phone, label: '99789 71636', href: 'tel:9978971636', accent: C.white },
                { icon: Mail, label: 'info@astniq.com', href: 'mailto:info@astniq.com', accent: C.green },
                { icon: MapPin, label: '503, Sun Avenue One, near Shyamal, Ambawadi, Ahmedabad, Gujarat', href: '#', accent: C.yellow },
              ].map(({ icon: Icon, label, href, accent }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 border-4 border-brand-black flex items-center justify-center flex-shrink-0 transition-transform duration-300 transform group-hover:-rotate-12" style={{ background: accent }}>
                    <Icon size={24} className="text-brand-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-brand-white font-black uppercase text-base leading-relaxed mt-3 px-4 py-1 border-2 border-transparent group-hover:bg-brand-blue group-hover:border-brand-black transition-all">{label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right form */}
          <Reveal delay={150}>
            <div className="bg-brand-blue p-8 md:p-10 border-4 border-brand-black neo-shadow-white transform -rotate-1">
              <h3 className="ubuntu-bold text-3xl text-brand-white uppercase mb-8" style={{ textShadow: '2px 2px 0 #0a0a0f' }}>Hello ASTNIQ</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-5 py-4 bg-brand-white text-brand-black text-sm font-black uppercase placeholder-brand-black/50 border-4 border-brand-black neo-shadow-black outline-none focus:translate-x-1 focus:translate-y-1 focus:neo-shadow-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-5 py-4 bg-brand-white text-brand-black text-sm font-black uppercase placeholder-brand-black/50 border-4 border-brand-black neo-shadow-black outline-none focus:translate-x-1 focus:translate-y-1 focus:neo-shadow-none transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-4 bg-brand-white text-brand-black text-sm font-black uppercase placeholder-brand-black/50 border-4 border-brand-black neo-shadow-black outline-none focus:translate-x-1 focus:translate-y-1 focus:neo-shadow-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone no."
                  className="w-full px-5 py-4 bg-brand-white text-brand-black text-sm font-black uppercase placeholder-brand-black/50 border-4 border-brand-black neo-shadow-black outline-none focus:translate-x-1 focus:translate-y-1 focus:neo-shadow-none transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-4 mb-4 bg-brand-white text-brand-black text-sm font-black uppercase placeholder-brand-black/50 border-4 border-brand-black neo-shadow-black outline-none focus:translate-x-1 focus:translate-y-1 focus:neo-shadow-none transition-all"
              />
              <textarea
                placeholder="Project Description"
                rows={5}
                className="w-full px-5 py-4 mb-8 bg-brand-white text-brand-black text-sm font-black uppercase placeholder-brand-black/50 border-4 border-brand-black neo-shadow-black outline-none resize-none focus:translate-x-1 focus:translate-y-1 focus:neo-shadow-none transition-all"
              />
              <button className="w-full flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-widest text-lg bg-brand-yellow text-brand-black border-4 border-brand-black neo-shadow-black transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:neo-shadow-none">
                Submit Message <Send size={24} strokeWidth={3} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
