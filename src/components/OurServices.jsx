import React from 'react';
import { 
  Smartphone, Ghost, Database, Cpu, 
  Monitor, Bot, Shield, Infinity as InfinityIcon,
  Cloud, Blocks, Paintbrush, TrendingUp
} from 'lucide-react';

const services = [
  {
    title: 'Mobile app development',
    icon: Smartphone,
    description: 'Build an application that increase your income and make your business profitable.',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    title: 'AR / VR development',
    icon: Ghost, // Or Glasses, but Lucide has minimal VR icons, we'll use a placeholder or something like Box
    description: 'Unlock immersive AR/VR experiences with our cutting-edge development expertise.',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    title: 'Database development',
    icon: Database,
    description: 'Optimize data efficiency and security with our database management solutions.',
    iconBg: 'bg-green-200',
    iconColor: 'text-green-700'
  },
  {
    title: 'IOT development',
    icon: Cpu,
    description: 'Connect, monitor, and automate with our innovative IoT expertise.',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600'
  },
  {
    title: 'Web Development',
    icon: Monitor,
    description: 'Elevate your online presence with our web development expertise.',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Artificial Intelligence',
    icon: Bot,
    description: 'Unleash the power of AI for smarter decision-making and innovation.',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600'
  },
  {
    title: 'Cyber security',
    icon: Shield,
    description: 'Elevate your project\'s security posture with our robust cybersecurity solutions.',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    title: 'DevOps',
    icon: InfinityIcon, // DevOps sign
    description: 'Accelerate your development and operations with our DevOps expertise.',
    iconBg: 'bg-lime-100',
    iconColor: 'text-lime-600'
  },
  {
    title: 'Cloud Services',
    icon: Cloud,
    description: 'Design and deployment of highly available, auto-scaling enterprise cloud infrastructures.',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600'
  },
  {
    title: 'Blockchain Tech',
    icon: Blocks,
    description: 'Secure, high-performance decentralized applications and smart contract ecosystems.',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    title: 'UI/UX Design',
    icon: Paintbrush,
    description: 'Highly engaging digital interfaces designed to maximize user retention and deep engagement.',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600'
  },
  {
    title: 'SEO Optimization',
    icon: TrendingUp,
    description: 'Advanced search engine optimization tailored for enterprise-scale organic growth.',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600'
  }
];

export function OurServices() {
  return (
    <section className="bg-brand-white py-24 px-4 md:px-8 w-full min-h-screen flex flex-col justify-center items-center border-b-8 border-brand-black relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0a0a0f 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-brand-red text-brand-white px-6 py-2 border-4 border-brand-black neo-shadow-yellow transform -rotate-2 mb-6">
            <h2 className="text-4xl md:text-6xl ubuntu-bold uppercase tracking-widest">
              Our Services
            </h2>
          </div>
          <p className="text-xl text-brand-black quicksand-font font-bold max-w-2xl mx-auto p-4 bg-brand-yellow border-4 border-brand-black neo-shadow-blue transform rotate-1">
            Elevate your business with our comprehensive highly-scalable solutions.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-white p-8 border-4 border-brand-black flex flex-col neo-shadow-black hover:-translate-y-2 hover:-translate-x-1 hover:neo-shadow-green cursor-pointer transition-all duration-300 group"
            >
              <div className={`w-16 h-16 border-4 border-brand-black flex items-center justify-center mb-8 transform -rotate-3 group-hover:rotate-0 transition-transform ${
                // Reusing brand colors for icons based on index
                ['bg-brand-blue', 'bg-brand-yellow', 'bg-brand-red', 'bg-brand-green'][index % 4]
              } text-brand-white neo-shadow-black`}>
                <service.icon size={32} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-2xl ubuntu-bold text-brand-black mb-4 leading-tight uppercase relative z-10 transition-colors group-hover:text-brand-blue">
                {service.title}
              </h3>
              
              <div className="w-12 h-1 bg-brand-black mb-6"></div>
              
              <p className="text-brand-black quicksand-font text-base leading-relaxed font-semibold">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
