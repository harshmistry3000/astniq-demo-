import React, { useState } from 'react';
import { 
  Monitor, Smartphone, Database, Bot, Cloud, Code2, 
  Paintbrush, Globe, TrendingUp, Blocks, Shield, Cpu,
  ArrowRight
} from 'lucide-react';
import { ContainerScrollAnimation } from './ui/ContainerScroll';

const servicesOptions = [
  {
    title: 'FLAT WEB 2.0',
    icon: Monitor,
    description: 'Premium creative solutions built with flat web 2.0 specifications focusing on clean structure.',
    detail: 'Our Flat Web 2.0 design approach focuses on minimalism, vivid colors, and crisp typography. By removing three-dimensional visual effects such as gradients, drop shadows, and textures, we create digital experiences that load faster and perform seamlessly across all devices. We craft interfaces that prioritize usability and clean aesthetic structure. This ensures your users spend less time trying to figure out how to navigate your platform and more time engaging with your core content and services. Whether it forms the basis of a corporate website or a complex web application, our flat design methodology guarantees an elegant, modern, and enduring digital presence that perfectly represents your brand values in a fast-paced digital world.',
    activeTheme: 'bg-blue-50 border-blue-200',
    iconActive: 'bg-blue-500 text-white',
    line: 'bg-blue-500'
  },
  {
    title: 'INTERACTIVE UX',
    icon: Smartphone,
    description: 'Highly engaging digital interfaces designed to maximize user retention and deep engagement.',
    detail: 'User Experience (UX) is at the heart of everything we build. We dive deep into user psychology, conducting extensive user research and A/B testing to understand exactly what your audience needs. Our interactive UX design transforms static pages into living, breathing applications. We implement micro-interactions, seamless page transitions, and intuitive navigation patterns that guide users effortlessly toward conversion goals. By focusing on the "feel" as much as the "look," we ensure high retention rates, lower bounce rates, and a significantly superior overall user satisfaction score. Every button click, hover state, and scroll event is meticulously engineered to provide immediate, satisfying feedback.',
    activeTheme: 'bg-amber-50 border-amber-200',
    iconActive: 'bg-amber-500 text-white',
    line: 'bg-amber-500'
  },
  {
    title: 'HYPER SEO',
    icon: TrendingUp,
    description: 'Advanced search engine optimization tailored for enterprise-scale organic growth.',
    detail: 'Visibility is paramount in the modern digital landscape. Our Hyper SEO strategies go far beyond basic keyword stuffing. We engineer your platform from the ground up with search engines in mind, implementing advanced technical SEO techniques, schema markup, and optimal site architecture. We focus heavily on Core Web Vitals, ensuring your platform is lightning-fast, highly responsive, and visually stable—factors that search engines strongly reward. Additionally, our rigorous content strategy guarantees that you are getting the right kind of traffic. Through constant monitoring, backlink analysis, and algorithm adaptation, we position your brand at the absolute forefront of your industry.',
    activeTheme: 'bg-emerald-50 border-emerald-200',
    iconActive: 'bg-emerald-500 text-white',
    line: 'bg-emerald-500'
  },
  {
    title: 'BOLD BRANDING',
    icon: Paintbrush,
    description: 'Comprehensive visual identities and brand narratives that disrupt saturated markets.',
    detail: 'Your brand is the entire emotional and psychological relationship you have with your customers. Our Bold Branding service is designed to make you unmistakable. We dont just create logos; we forge comprehensive visual identities, compelling brand narratives, and unique voices that resonate deeply with your target demographic. From color psychology and bespoke typography to messaging frameworks and brand guidelines, we ensure consistency across every single touchpoint. We challenge industry norms and push creative boundaries to ensure your brand doesnt just blend in but rather stands out aggressively in saturated markets, fostering profound customer loyalty and high brand equity.',
    activeTheme: 'bg-orange-50 border-orange-200',
    iconActive: 'bg-orange-500 text-white',
    line: 'bg-orange-500'
  },
  {
    title: 'NEXT-GEN CODE',
    icon: Code2,
    description: 'Robust, highly scalable software architecture leveraging modern web frameworks.',
    detail: 'In a world driven by technology, the quality of your underlying code dictates the ceiling of your business potential. We specialize in Next-Gen codebase architectures, utilizing modern frameworks like React, Next.js, and Node.js. We abandon legacy monoliths in favor of scalable, modular microservices and serverless architectures that can handle massive traffic spikes gracefully. Our engineering incorporates rigorous automated testing, continuous deployment pipelines, and strict typing via TypeScript to eliminate bugs before they hit production. The result is a profoundly robust, easily maintainable, and remarkably fast application that provides a flawless foundation for your business to scale aggressively.',
    activeTheme: 'bg-rose-50 border-rose-200',
    iconActive: 'bg-rose-500 text-white',
    line: 'bg-rose-500'
  },
  {
    title: 'GLOBAL REACH',
    icon: Globe,
    description: 'Internationalization and targeted localization strategies for worldwide audiences.',
    detail: 'Expanding your digital footprint across borders requires far more than simple translation. Our Global Reach solutions engineer your platform for true internationalization and localized adaptation. We implement edge computing using global CDNs to ensure your application loads instantly regardless of whether the user is in New York, Tokyo, or London. We handle complex multi-currency payments, localized regulatory compliances, and culturally adapted user interfaces. By dynamically serving localized content and optimizing server responses based on geographic data, we tear down geographical barriers, empowering your business to deeply connect with diverse cultures and operate securely worldwide.',
    activeTheme: 'bg-indigo-50 border-indigo-200',
    iconActive: 'bg-indigo-500 text-white',
    line: 'bg-indigo-500'
  },
  {
    title: 'DATA OPS',
    icon: Database,
    description: 'Architecture of state-of-the-art data pipelines and real-time business intelligence.',
    detail: 'Data is the most valuable currency in modern business, but only if you can harness it. Our Data Ops division architects sophisticated data pipelines, data lakes, and real-time streaming architectures using leading tools. We break down data silos within your organization, funneling disparate data sources into a single, unified source of truth. From there, we build comprehensive business intelligence dashboards that provide actionable, real-time insights into user behavior, operational efficiency, and financial forecasting. By ensuring high data quality, strict security protocols, and rapid accessibility, we empower your leadership to make highly informed, data-driven decisions that drastically outpace competition.',
    activeTheme: 'bg-purple-50 border-purple-200',
    iconActive: 'bg-purple-500 text-white',
    line: 'bg-purple-500'
  },
  {
    title: 'AI AGENTS',
    icon: Bot,
    description: 'Custom implementation of autonomous machine learning models and generative AI.',
    detail: 'The age of artificial intelligence is here, and we help you leverage it to its maximum potential. We build custom autonomous AI agents, fine-tune Large Language Models (LLMs) on your highly specific proprietary data, and integrate Generative AI directly into your workflows. Whether you need a sophisticated customer service chatbot capable of complex reasoning, an internal tool that drafts reports automatically, or predictive models that optimize your supply chain, we deliver. Our AI solutions eliminate menial tasks, drastically reduce operational costs, and unlock completely new vectors for product innovation, allowing your workforce to focus entirely on creative strategy.',
    activeTheme: 'bg-cyan-50 border-cyan-200',
    iconActive: 'bg-cyan-500 text-white',
    line: 'bg-cyan-500'
  },
  {
    title: 'CLOUD NATIVE',
    icon: Cloud,
    description: 'Design and deployment of highly available, auto-scaling enterprise cloud infrastructures.',
    detail: 'True scalability requires a bedrock of bulletproof cloud infrastructure. We architect and deploy fully cloud-native environments utilizing AWS, Google Cloud Platform, and Azure. By leveraging containerization with Docker and orchestration with Kubernetes, we ensure your applications are highly resilient, auto-scaling instantly based on demand, and practically immune to downtime. Our DevOps practices integrate Infrastructure as Code (IaC) using Terraform, ensuring your environments are perfectly reproducible and easily auditable. From implementing zero-trust security models to optimizing cloud expenditure to prevent runaway costs, our cloud-native solutions provide the ultimate scalable foundation.',
    activeTheme: 'bg-sky-50 border-sky-200',
    iconActive: 'bg-sky-500 text-white',
    line: 'bg-sky-500'
  },
  {
    title: 'BLOCKCHAIN TECH',
    icon: Blocks,
    description: 'Secure, high-performance decentralized applications and smart contract ecosystems.',
    detail: 'Embrace the decentralized future with our comprehensive Blockchain Architecture services. We specialize in developing secure, auditable smart contracts on Ethereum, Solana, and other top-tier networks. Our team builds robust Web3 applications (dApps) that integrate seamlessly with traditional Web2 frontend interfaces, drastically lowering the barrier to entry for your users. From conceptualizing customized tokenomics and executing secure token launches to building decentralized finance (DeFi) protocols and NFT marketplaces, we cover the entire blockchain spectrum. We enforce rigorous security audits to prevent vulnerabilities, ensuring your decentralized assets remain impenetrable.',
    activeTheme: 'bg-teal-50 border-teal-200',
    iconActive: 'bg-teal-500 text-white',
    line: 'bg-teal-500'
  },
  {
    title: 'CYBER DEFENSE',
    icon: Shield,
    description: 'Enterprise penetration testing, encryption, and proactive infrastructure security.',
    detail: 'In an era of relentless cyber threats, passive defense is no longer sufficient. Our Cyber Security division operates with an offensive mindset to secure your assets. We conduct exhaustive penetration testing, identifying and patching critical vulnerabilities in your applications, APIs, and cloud architecture before malicious actors can exploit them. We implement end-to-end encryption, multi-factor authentication (MFA), and sophisticated identity access management (IAM) protocols. Furthermore, we deploy active intrusion detection systems and provide comprehensive employee security training. By establishing multiple layers of defense, we protect your most sensitive data and preserve your reputation.',
    activeTheme: 'bg-red-50 border-red-200',
    iconActive: 'bg-red-500 text-white',
    line: 'bg-red-500'
  },
  {
    title: 'IOT SYSTEMS',
    icon: Cpu,
    description: 'End-to-end connected device ecosystems and ultra-low latency edge computing.',
    detail: 'The physical and digital worlds are merging rapidly. We engineer cutting-edge Internet of Things (IoT) ecosystems that connect your hardware devices seamlessly to the cloud. From developing lightweight embedded firmware for microcontrollers to building the scalable backend infrastructure required to ingest millions of data points per second, we deliver true end-to-end IoT solutions. We implement edge computing protocols to process critical data locally, drastically reducing latency and bandwidth costs. Whether you are building smart home automation products, industrial monitoring sensors, or connected healthcare devices, our IoT architectures guarantee secure, reliable communication.',
    activeTheme: 'bg-fuchsia-50 border-fuchsia-200',
    iconActive: 'bg-fuchsia-500 text-white',
    line: 'bg-fuchsia-500'
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesOptions[activeIndex];

  const TitleContent = (
    <div className="flex flex-col items-center justify-center">
      <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6 quicksand-font flex items-center justify-center gap-2">
        <span className="text-blue-400 font-bold">//</span> CAPABILITIES
      </p>
      <h2 className="ubuntu-bold text-5xl md:text-7xl lg:text-[100px] text-slate-900 uppercase tracking-tight leading-[0.9] mb-8">
        Our Digital<br />Arsenal
      </h2>
      <div className="w-[150px] h-2 bg-blue-600 rounded-full mb-10 mx-auto" />
      <div className="bg-blue-50 border-2 border-blue-200 p-6 md:p-8 rounded-2xl shadow-[6px_6px_0_0_rgba(191,219,254,1)] relative max-w-2xl mx-auto w-full group transition-all duration-300">
        <p className="quicksand-font text-lg md:text-xl font-bold text-slate-800 uppercase leading-snug">
          We don't just design; we engineer experiences that pop off the screen.
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-slate-50 relative w-full overflow-hidden pb-32 md:pb-48 lg:pb-64" id="services">
      <ContainerScrollAnimation titleComponent={TitleContent}>
        
        {/* Split Screen Application Layout */}
        <div className="flex h-full w-full bg-white text-slate-900 font-sans overflow-hidden">
          
          {/* LEFT SIDEBAR: List of 12 Interactive Boxes */}
          <div className="w-full md:w-[45%] lg:w-[40%] border-r border-slate-100 flex flex-col items-center bg-slate-50/50">
             
             {/* Simple Header */}
             <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 w-full p-4 border-b border-slate-100 flex items-center justify-between shadow-sm">
                <span className="ubuntu-bold text-lg text-slate-800 uppercase">Disciplines</span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100 uppercase">12 Available</span>
             </div>

             <div className="w-full flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3 pb-24">
                {servicesOptions.map((service, index) => {
                   const isActive = activeIndex === index;
                   return (
                     <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 flex items-start gap-4 ${
                           isActive 
                           ? service.activeTheme + ' shadow-md scale-[1.02]' 
                           : 'bg-white border-slate-200/50 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm'
                        }`}
                     >
                        <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 transition-colors ${isActive ? service.iconActive : 'bg-slate-100 text-slate-500'}`}>
                           <service.icon size={20} />
                        </div>
                        <div className="flex-1">
                           <h3 className={`ubuntu-bold text-[15px] mb-1 tracking-tight ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                              {service.title}
                           </h3>
                           <p className={`quicksand-font text-[12px] leading-relaxed line-clamp-2 ${isActive ? 'text-slate-700 font-medium' : 'text-slate-500'}`}>
                              {service.description}
                           </p>
                        </div>
                        
                        <div className={`shrink-0 mt-2 transition-opacity ${isActive ? 'opacity-100 text-slate-800' : 'opacity-0'}`}>
                           <ArrowRight size={16} />
                        </div>
                     </button>
                   );
                })}
             </div>
          </div>

          {/* RIGHT SIDE: Detail Pane (150 Word descriptions) */}
          <div className="hidden md:flex flex-1 bg-white relative overflow-y-auto custom-scrollbar p-10 lg:p-14 pb-24">
             {/* Soft background glow based on active topic */}
             <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] opacity-20 blur-[100px] pointer-events-none rounded-full" />

             <div className="flex flex-col h-full w-full max-w-2xl mx-auto justify-center" key={activeIndex}>
                {/* Entrance Animation Wrapper */}
                <div className="animate-[fade-in_0.4s_ease-out]">
                   
                   <div className={`inline-flex p-4 rounded-2xl mb-8 border-4 border-white shadow-xl ${activeService.iconActive}`}>
                      <activeService.icon size={48} />
                   </div>
                   
                   <h2 className="ubuntu-bold text-4xl lg:text-[50px] text-slate-900 mb-6 tracking-tight uppercase leading-none">
                      {activeService.title}
                   </h2>
                   
                   <div className={`w-20 h-2 rounded-full mb-8 ${activeService.line}`} />
                   
                   <h4 className="text-xl text-slate-800 font-semibold mb-6 quicksand-font italic">
                      {activeService.description}
                   </h4>

                   <p className="quicksand-font text-[17px] text-slate-600 leading-[1.8] font-medium text-justify column-rule">
                      {activeService.detail}
                   </p>
                   
                </div>
             </div>
          </div>

        </div>
      </ContainerScrollAnimation>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
