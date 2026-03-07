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
    <section className="bg-slate-50 py-20 px-4 md:px-8 w-full min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-700 font-medium">
            Elevate your business with our comprehensive software development services.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-shadow duration-300 border border-slate-100 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${service.iconBg} ${service.iconColor}`}>
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight">
                {service.title}
              </h3>
              
              <div className="w-8 h-0.5 bg-slate-800 mb-6"></div>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
