import React from 'react';
import { 
  Briefcase, Rocket, CircleDollarSign, 
  Settings, ShieldAlert, Server
} from 'lucide-react';
import { CardSpotlight } from './ui/CardSpotlight';
import { GlowBorder } from './ui/GlowBorder';

const consultingServices = [
  {
    title: 'Business Advice',
    icon: Briefcase,
    description: 'Unlock valuable business advice to enhance your success. Our expert guidance empowers your growth and strategies for sustainable achievement.',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50'
  },
  {
    title: 'Startup Advice',
    icon: Rocket,
    description: 'Unlock the potential for startup success with expert advice and guidance. Our startup advice empowers your entrepreneurial journey.',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50'
  },
  {
    title: 'Financial Advice',
    icon: CircleDollarSign,
    description: 'Gain expert financial advice tailored to your goals and secure your financial future. Explore personalized guidance for wealth management and financial success.',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50'
  },
  {
    title: 'Digital Transformation Consulting',
    icon: Settings,
    description: 'Accelerate your journey into the digital era with our comprehensive transformation strategies. Streamline processes, enhance efficiency, and unlock new avenues for growth.',
    iconColor: 'text-sky-500',
    iconBg: 'bg-sky-50'
  },
  {
    title: 'Cybersecurity Advisory',
    icon: ShieldAlert,
    description: 'Safeguard your digital assets with our robust cybersecurity consulting services. Proactive threat management and tailored security solutions.',
    iconColor: 'text-slate-800',
    iconBg: 'bg-slate-100'
  },
  {
    title: 'IT Infrastructure Optimization',
    icon: Server,
    description: 'Ensure optimal performance and scalability of your IT infrastructure. Consult with us for infrastructure assessments, cloud integration, and performance tuning.',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50'
  }
];

export function ConsultingServices() {
  return (
    <section className="bg-brand-blue py-24 px-4 md:px-8 w-full flex flex-col justify-center items-center border-b-8 border-brand-black relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0a0a0f 3px, transparent 3px)', backgroundSize: '30px 30px' }} />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-block bg-brand-yellow text-brand-black px-6 py-2 border-4 border-brand-black neo-shadow-black transform rotate-2 mb-8">
            <h2 className="text-4xl md:text-6xl ubuntu-bold uppercase tracking-widest" style={{ textShadow: '2px 2px 0 #10b981' }}>
              Services For Consulting
            </h2>
          </div>
          <p className="text-brand-white text-xl font-black leading-relaxed bg-brand-black p-6 border-4 border-brand-white neo-shadow-red transform -rotate-1">
            Start your business journey with our consulting service special for startups. With the experience for then 10 years we are running our own startups so you can trust on us from our work profile.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultingServices.map((service, index) => (
            <div key={index} className="relative w-full h-full bg-brand-white border-4 border-brand-black p-8 flex flex-col neo-shadow-black hover:-translate-y-2 hover:-translate-x-1 hover:neo-shadow-yellow transition-all duration-300">
                <div className={`p-4 rounded-xl shrink-0 w-fit mb-6 border-4 border-brand-black bg-brand-black text-brand-white neo-shadow-red transform -rotate-3`}>
                  <service.icon size={36} strokeWidth={2.5} />
                </div>
              
                <div className="flex flex-col">
                  <h3 className="text-2xl ubuntu-bold text-brand-black mb-4 uppercase leading-tight relative z-10">
                    {service.title}
                  </h3>
                  
                  <div className="w-16 h-1.5 bg-brand-black mb-6"></div>

                  <p className="quicksand-font text-brand-black text-[16px] leading-relaxed font-bold">
                    {service.description}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
