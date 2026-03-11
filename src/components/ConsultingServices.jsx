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
    <section className="bg-white py-24 px-4 md:px-8 w-full flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-red-500 font-bold uppercase text-sm mb-3 tracking-wider">
            Featured Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
            Services For Consulting
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Start your business journey with our consulting service special for startups. With the experience for then 10 years we are running our own startups so you can trust on us from our work profile.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultingServices.map((service, index) => (
            <div key={index} className="relative rounded-xl w-full h-full">
              <GlowBorder
                color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                borderRadius={12}
                borderWidth={2}
                duration={10}
                className="z-20"
              />
              <CardSpotlight
                className="p-8 border-none hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                slotClass="flex flex-col sm:flex-row items-start gap-5 h-full"
                gradientColor="rgba(200, 220, 255, 0.4)"
                gradientOpacity={1}
              >
                <div className={`p-4 rounded-full shrink-0 ${service.iconBg} ${service.iconColor}`}>
                  <service.icon size={32} />
                </div>
              
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-blue-600 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
