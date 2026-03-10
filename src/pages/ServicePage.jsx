import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, TrendingUp, PhoneCall, Database, PenTool, Brain, Star, Lightbulb, Plane, Award, Briefcase, Monitor, DollarSign, Activity, MapPin, Mail, Phone } from 'lucide-react';

const Floating3D = React.lazy(() => import('../components/Floating3D'));
const ColorBends = React.lazy(() => import('../components/ColorBends'));

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ServiceHero = () => (
  <section className="relative py-32 md:py-48 px-6 bg-transparent overflow-hidden border-b-8 border-black shadow-[0_8px_0_0_rgba(0,0,0,1)] flex items-center min-h-[90vh]">
    
    {/* React Bits Color Bends Background */}
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <React.Suspense fallback={null}>
        <ColorBends
          colors={['#1E5DDb', '#FBC02D', '#28a745', '#ff6b00', '#e31b23', '#e5fcc2']}
          frequency={2}
          amplitude={1.5}
          speed={0.3}
          warpStrength={1.5}
          noise={0.15}
        />
      </React.Suspense>
    </div>

    {/* Halftone Texture Overlay */}
    <div className="absolute inset-0 z-10 mix-blend-overlay opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
    
    <div className="max-w-7xl mx-auto text-center space-y-6 relative z-20 w-full pointer-events-none">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <div className="inline-flex items-center gap-2 px-6 py-2 border-[3px] border-black bg-white font-black uppercase text-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] pointer-events-auto text-black">
          <Star size={16} strokeWidth={3} /> Global Solutions
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-none tracking-tighter uppercase whitespace-nowrap overflow-visible pointer-events-auto mt-6">
          <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Our</span> 
          {' '}
          <span className="text-[#FFD335] relative inline-block drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Services
            {/* Thick blue underline mimicking the screenshot */}
            <span className="absolute -bottom-1 left-0 w-[100%] h-3 bg-[#2D5BFF] -z-10"></span>
          </span>
        </h1>
        
        <div className="mt-12 max-w-4xl mx-auto bg-white border-[6px] border-black p-8 md:p-10 shadow-[10px_10px_0_0_rgba(0,0,0,1)] pointer-events-auto text-black">
          <p className="text-xl md:text-3xl font-bold leading-snug">
            Unlock the full potential of your online presence with our comprehensive services. Our team of experts will optimize your website, enhance your visibility, and drive targeted organic traffic, ensuring your business thrives in the digital landscape.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ExploreServices = () => (
  <section className="py-24 bg-[#FFD335] border-b-8 border-primary-border relative overflow-hidden">
    <React.Suspense fallback={null}>
      <Floating3D shapeType="icosahedron" color="#2D5BFF" className="absolute -top-10 -left-10 w-96 h-96 opacity-40" rotateSpeed={[0.02, 0.05]} />
    </React.Suspense>
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
      {/* Abstract Fake Graphic to replace globe */}
      <motion.div 
        initial={{ rotate: -10, x: -50, opacity: 0 }}
        whileInView={{ rotate: 0, x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full md:w-1/2"
      >
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 bg-brand-blue rounded-full border-8 border-primary-border shadow-[12px_12px_0px_#111111] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#ffffff_20px,#ffffff_40px)]" />
            
            {/* Hexagons mimicking image content */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-1/4 bg-brand-yellow w-24 h-24 border-4 border-primary-border neo-brutalism flex items-center justify-center rotate-12">
              <Code size={40} className="text-[#111111]" />
            </motion.div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 bg-brand-red w-32 h-32 border-4 border-primary-border neo-brutalism flex items-center justify-center -rotate-6">
              <Activity size={56} className="text-white" />
            </motion.div>
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/3 right-1/4 bg-[#e5fcc2] w-20 h-20 border-4 border-primary-border rounded-full shadow-[4px_4px_0px_#111111] flex items-center justify-center rotate-45">
              <Cpu size={32} className="text-[#111111]" />
            </motion.div>

          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 p-10 bg-white border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] text-[#111111]"
      >
        <h3 className="text-brand-blue font-black text-2xl uppercase tracking-wider mb-4 border-b-4 border-brand-blue inline-block">Explore Our Services</h3>
        <h2 className="text-4xl md:text-5xl font-black text-[#111111] mb-8 leading-tight">
          Transforming Your Business with <span className="bg-brand-yellow px-2 neo-brutalism transform -rotate-2 inline-block">Cutting-Edge Solutions</span>
        </h2>
        <div className="space-y-6 text-lg font-semibold text-gray-800">
          <p className="bg-[#f0f0f0] p-4 border-l-8 border-brand-blue rounded-r-lg">
            At Astniq Solution, we are committed to helping your business thrive in the digital age. Our comprehensive range of services covers everything you need to enhance your online presence and reach your target audience effectively.
          </p>
          <p>
            Our team of experts will work closely with you to develop tailored strategies and implement best practices intended to maximize out potential. Whether it's through our organic inbound capabilities or other digital avenues, our focus is on ensuring your overall digital experience meets expectations.
          </p>
          <p>
            Explore our services below to discover how we can help you achieve your goals. If you have any specific challenges, don't hesitate to reach out to us! We are more than capable of handling any complex technical challenge and finding the perfect solution for your needs.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const serviceCategories = [
  { name: 'Artificial Intelligence', icon: <Cpu size={32} />, color: 'bg-brand-red', desc: 'Leverage the power of AI to automate tasks, gain insights, and enhance decision making. Our AI solutions are designed to transform the way you do business.' },
  { name: 'Development', icon: <Code size={32} />, color: 'bg-brand-blue', desc: 'Expert developers create custom software and web applications tailored to your business needs, ensuring your digital presence is as efficient as it is appealing.' },
  { name: 'Inbound', icon: <TrendingUp size={32} />, color: 'bg-brand-green', desc: 'Attract, engage, and delight customers with our inbound marketing strategies. We help you create meaningful connections and drive results.' },
  { name: 'Outbound', icon: <PhoneCall size={32} />, color: 'bg-brand-yellow', desc: 'Reach your target audience with high-impact outbound marketing techniques. Connect with your customers and ensure your brand stands out.' },
  { name: 'Data', icon: <Database size={32} />, color: 'bg-[#a3c2ff]', desc: 'Unlock the value of your data. Our data solutions provide insights that help improve your organization and make informed decisions.' },
  { name: 'Designing', icon: <PenTool size={32} />, color: 'bg-brand-yellow', desc: 'Our creative experts design interfaces that elevate your brand and drive results. From logos to websites, we make your brand image unforgettable.' },
  { name: 'Neuro-Inclusion', icon: <Brain size={32} />, color: 'bg-[#bfe1f6]', desc: 'We promote diversity and inclusion through inclusive design methodologies. Ensure your digital environment welcomes all ability levels.' },
  { name: 'Experience Management', icon: <Star size={32} />, color: 'bg-[#fffd00]', desc: 'Enhance both customer and employee experiences with our management strategies. Add to satisfaction, loyalty, and productivity.' },
  { name: 'Consulting', icon: <Lightbulb size={32} />, color: 'bg-[#e5fcc2]', desc: 'Our IT consulting services guide your business toward success. We help you strategize, plan, and execute right IT solutions.' },
];

const ServicesGrid = () => (
  <section className="py-24 bg-[#0a192f] border-b-8 border-primary-border pattern-bg relative overflow-hidden">
    <React.Suspense fallback={null}>
      <Floating3D shapeType="torus" color="#FF8A3D" className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20" rotateSpeed={[0.02, 0.04]} />
    </React.Suspense>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-black text-white inline-block border-b-4 border-brand-yellow pb-4 uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-black px-4 pt-2 -rotate-1">Our Services Categories</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, rotate: idx % 2 === 0 ? 1 : -1 }}
            className={`bg-white border-4 border-primary-border shadow-[8px_8px_0px_#111111] overflow-hidden group cursor-pointer h-full flex flex-col`}
          >
            <div className={`p-6 border-b-4 border-primary-border ${cat.color} flex items-center group-hover:brightness-110 transition-all`}>
              <div className="bg-white p-3 border-4 border-primary-border rounded-full neo-brutalism mr-4">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-black uppercase text-[#111111] leading-tight">{cat.name}</h3>
            </div>
            <div className="p-6 bg-white flex-grow">
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ClientSuccess = () => {
  const industries = [
    { name: 'Travel And Aviation', icon: <Plane size={24} />, desc: 'Explore the future of travel and aviation – your gateway to flights of success and unparalleled experiences.' },
    { name: 'Quality Resourcing', icon: <Award size={24} />, desc: 'Discover the power of Quality Resourcing in the exceptional handle. Ensure your team excels with expertise.' },
    { name: 'Business Services', icon: <Briefcase size={24} />, desc: 'Explore our comprehensive range of business services designed to enhance your company operations.' },
    { name: 'Software And Research', icon: <Monitor size={24} />, desc: 'Capitalize the intersection of Software and Research in execution tailored to projects.' },
    { name: 'Financial Planning', icon: <DollarSign size={24} />, desc: 'Unlock Your Financial Future with Expert Financial Planning tools.' },
    { name: 'Healthcare Services', icon: <Activity size={24} />, desc: 'Seamlessly navigate world-class Healthcare services tailored to your well-being journey.' }
  ];

  return (
    <section className="py-24 bg-[#00D285] border-b-8 border-primary-border relative overflow-hidden">
      <React.Suspense fallback={null}>
        <Floating3D shapeType="box" color="#1A1A1A" className="absolute top-20 left-20 w-48 h-48 opacity-40" rotateSpeed={[0.03, 0.05]} />
      </React.Suspense>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-[#111111] mb-16 leading-tight max-w-4xl mx-auto bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
        >
          Our success is intrinsically tied to our clients' success. <span className="bg-brand-yellow text-black px-2 mt-2 inline-block neo-brutalism transform rotate-1 border-2 border-black">Your achievement is our primary goal.</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#e4fcff] border-4 border-[#8ad3e6] shadow-[4px_4px_0px_rgba(138,211,230,1)] p-6 rounded-lg flex flex-col sm:flex-row items-start text-left gap-4"
            >
              <div className="text-[#2b8aab] mt-1 shrink-0 bg-white p-2 rounded-full border-2 border-[#8ad3e6]">
                {ind.icon}
              </div>
              <div>
                <h4 className="font-black text-xl text-[#0b4d66] mb-2">{ind.name}</h4>
                <p className="text-sm font-medium text-[#2d6c82]">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => (
  <section className="py-24 bg-[#FF8A3D] relative overflow-hidden">
    <React.Suspense fallback={null}>
      <Floating3D shapeType="torus" color="#ffffff" className="absolute -bottom-32 -left-32 w-[600px] h-[600px] opacity-20" rotateSpeed={[0.015, 0.02]} />
    </React.Suspense>
    {/* Abstract dotted bg */}
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#111 3px, transparent 3px)', backgroundSize: '24px 24px' }} />
    
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 relative z-10"
    >
      <div className="w-full lg:w-1/2 text-brand-black">
        <h2 className="text-6xl font-black mb-6 uppercase text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Get In Touch</h2>
        <p className="text-xl font-bold bg-[#f4f4f0] p-6 border-4 border-black border-l-[12px] border-l-brand-yellow mb-10 text-gray-800 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          Questions or need support? Contact our seasoned IT consultants for tailored solutions that enhance your digital footprint. Your success is our mission!
        </p>
        
        <div className="space-y-8">
          <div className="flex items-center group">
            <div className="w-12 h-12 bg-white border-4 border-primary-border shadow-[4px_4px_0px_#111111] flex items-center justify-center mr-6 group-hover:-translate-y-1 transition-transform">
              <Phone size={20} />
            </div>
            <span className="text-xl font-bold">+91 99789 71636</span>
          </div>
          <div className="flex items-center group">
            <div className="w-12 h-12 bg-white border-4 border-primary-border shadow-[4px_4px_0px_#111111] flex items-center justify-center mr-6 group-hover:-translate-y-1 transition-transform">
              <Mail size={20} />
            </div>
            <span className="text-xl font-bold">info@astniq.com</span>
          </div>
          <div className="flex items-center group">
            <div className="w-12 h-12 bg-white border-4 border-primary-border shadow-[4px_4px_0px_#111111] flex items-center justify-center mr-6 group-hover:-translate-y-1 transition-transform">
              <MapPin size={20} />
            </div>
            <span className="text-lg font-bold">503, Sun Avenue One, near Shyamal, Ambawadi, Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <form className="bg-white border-8 border-primary-border shadow-[16px_16px_0px_#111111] p-8 md:p-12 relative text-brand-black">
          {/* Decorative tape graphic */}
          <div className="absolute -top-4 -right-4 w-32 h-8 bg-brand-yellow transform rotate-3 z-20 border-2 border-[#111111] opacity-80 mix-blend-multiply" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="First Name" className="w-full p-4 border-4 border-primary-border bg-[#fae8d4] font-bold outline-none focus:bg-white transition-colors placeholder-[#8c7b69]" />
            <input type="text" placeholder="Last Name" className="w-full p-4 border-4 border-primary-border bg-[#fae8d4] font-bold outline-none focus:bg-white transition-colors placeholder-[#8c7b69]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="email" placeholder="Email" className="w-full p-4 border-4 border-primary-border bg-[#fae8d4] font-bold outline-none focus:bg-white transition-colors placeholder-[#8c7b69]" />
            <input type="tel" placeholder="Phone no." className="w-full p-4 border-4 border-primary-border bg-[#fae8d4] font-bold outline-none focus:bg-white transition-colors placeholder-[#8c7b69]" />
          </div>
          <input type="text" placeholder="Subject" className="w-full p-4 border-4 border-primary-border bg-[#fae8d4] font-bold outline-none focus:bg-white transition-colors placeholder-[#8c7b69] mb-6" />
          <textarea placeholder="Project Description" rows="4" className="w-full p-4 border-4 border-primary-border bg-[#fae8d4] font-bold outline-none focus:bg-white transition-colors placeholder-[#8c7b69] mb-8 resize-none"></textarea>
          
          <button type="button" className="bg-[#0000ff] text-white text-xl font-black uppercase px-8 py-4 border-4 border-primary-border w-1/2 shadow-[6px_6px_0px_#111111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#111111] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all">
            Submit Action
          </button>
        </form>
      </div>
    </motion.div>
  </section>
);

const ServicePage = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <ServiceHero />
      <ExploreServices />
      <ServicesGrid />
      <ClientSuccess />
      <ContactForm />
    </div>
  );
};

export { ServicePage };
