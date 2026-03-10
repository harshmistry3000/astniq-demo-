import React, { useState } from 'react';
import { 
  Globe, 
  Code, 
  Smartphone, 
  Layout, 
  ChevronRight, 
  PhoneCall,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

const LiquidEther = React.lazy(() => import('../components/LiquidEther'));
const Floating3D = React.lazy(() => import('../components/Floating3D'));

export const TechnologiesPage = () => {
  const [activeTab, setActiveTab] = useState('web');

  const colors = {
    blue: 'bg-[#2D5BFF]',
    yellow: 'bg-[#FFD335]',
    green: 'bg-[#00D285]',
    orange: 'bg-[#FF8A3D]',
    red: 'bg-[#FF4D4D]',
    dark: 'bg-[#1A1A1A]',
    light: 'bg-[#F4F7FE]'
  };

  const tabs = [
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'App Development' },
    { id: 'cms', label: 'CMS Development' }
  ];

  const processSteps = [
    { num: '01', title: 'Request Gathering', desc: 'Requirement analysis to understand the user scenarios and goals for your business.', color: colors.blue },
    { num: '02', title: 'Planning', desc: 'Understanding your project architecture to provide solutions for the challenges.', color: colors.orange },
    { num: '03', title: 'Designing', desc: 'Conceptualizing and designing for the solution.', color: colors.green },
    { num: '04', title: 'Content & Functionality', desc: 'Adding features and content for an interactive and functional solution.', color: colors.blue },
    { num: '05', title: 'Testing & Launching', desc: 'Testing for optimal quality and bug-free delivery to your target audience.', color: colors.red },
  ];

  return (
    <>
      <style>{`
        .bg-grid { background-image: radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 30px 30px; }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 px-6 bg-transparent overflow-hidden border-b-8 border-black shadow-[0_8px_0_0_rgba(0,0,0,1)] flex items-center min-h-[90vh]">
        {/* Liquid Ether Background */}
        <div className="absolute inset-0 z-0">
          <React.Suspense fallback={null}>
            <LiquidEther
              colors={[ '#FFD335', '#FF4D4D', '#00D285' ]}
              mouseForce={20}
              cursorSize={100}
              isViscous
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </React.Suspense>
        </div>

        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10 w-full pointer-events-none">
          <div className="inline-flex items-center gap-2 px-6 py-2 border-[3px] border-black bg-white font-black uppercase text-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] pointer-events-auto">
            <Cpu size={16} strokeWidth={3} /> Innovation Stack
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-none tracking-tighter uppercase whitespace-nowrap overflow-visible pointer-events-auto">
            <span className="text-[#1A1A1A]">Our</span> 
            {' '}
            <span className="text-[#2D5BFF] relative inline-block">
              Technologies
              {/* Thick yellow underline mimicking the screenshot */}
              <span className="absolute -bottom-1 left-0 w-[100%] h-3 bg-[#FFD335] -z-10"></span>
            </span>
          </h1>
          
          <div className="mt-12 max-w-4xl mx-auto bg-white border-[6px] border-black p-8 md:p-10 shadow-[10px_10px_0_0_rgba(0,0,0,1)] pointer-events-auto">
            <p className="text-xl md:text-3xl font-bold leading-snug">
              Our skilled team harnesses these innovative technologies to craft robust, scalable, and immersive software solutions that drive businesses forward.
            </p>
          </div>
        </div>
      </section>

      {/* Next Generation Technology */}
      <section className="py-24 px-6 bg-[#FFD335] border-t-8 border-black relative overflow-hidden">
        <React.Suspense fallback={null}>
          <Floating3D shapeType="torus" color="#FF8A3D" className="absolute -top-10 -right-10 w-96 h-96 opacity-40 mix-blend-multiply" rotateSpeed={[0.02, 0.04]} />
        </React.Suspense>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10"
        >
          <div className={`aspect-square rounded-full border-8 border-black ${colors.blue} flex items-center justify-center p-12 relative overflow-hidden shadow-[16px_16px_0_0_rgba(0,0,0,1)] bg-white`}>
            {/* Abstract Globe representation */}
            <Globe className="w-full h-full text-white opacity-40 mix-blend-overlay animate-pulse" />
            <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay"></div>
            <div className="absolute inset-0 border-[16px] border-black border-dashed rounded-full animate-[spin_20s_linear_infinite] opacity-20"></div>
          </div>
          
          <div className="space-y-8">
            <div>
              <span className="font-black text-blue-600 uppercase tracking-widest text-lg italic">// Next Generation Technology</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mt-4">
                Innovative and comprehensive solutions developed with the most <span className={`${colors.yellow} px-2 border-2 border-black`}>modern</span> and diverse technologies.
              </h2>
            </div>
            
            <ul className="space-y-6">
              {[
                "We combine our extensive experience and specialized skills to deliver a wide range of exceptional software solutions.",
                "Our custom application design and development services are tailored to address your unique business requirements.",
                "We excel in web development, creating seamless web and dynamic web applications. We optimize and test across platforms for optimal performance. Our team is dedicated to rigorous development, designing native and cross-platform applications for iOS and Android platforms.",
                "We have a deep understanding of cloud technologies, and offer end-to-end cloud solutions. Quality assurance and testing are at the core of our process, ensuring that every project meets the highest standards of excellence. With our expertise, we unlock the potential of technology to deliver innovative solutions that drive you forward."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full border-2 border-black ${colors.green} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="font-bold text-lg leading-snug">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Technology We Use - Tabs */}
      <section className="py-24 px-6 bg-blue-600 border-y-8 border-black overflow-hidden relative">
        <React.Suspense fallback={null}>
          <Floating3D shapeType="icosahedron" color="#ffffff" className="absolute top-0 right-0 w-80 h-80 opacity-20 mix-blend-overlay" rotateSpeed={[0.01, 0.01]} />
        </React.Suspense>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-16 relative z-10"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Technology we use</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 border-4 border-black p-4 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[200px] px-8 py-4 font-black uppercase text-lg border-4 border-transparent transition-all ${
                  activeTab === tab.id 
                    ? `border-black ${colors.yellow} shadow-[4px_4px_0_0_rgba(0,0,0,1)] -translate-y-1` 
                    : 'text-red-500 hover:border-black hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="border-4 border-black bg-white p-12 min-h-[300px] shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative overflow-hidden">
            {activeTab === 'web' && (
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'PHP', 'HTML5 & CSS3', 'JavaScript'].map((tech, i) => (
                  <div key={i} className="border-4 border-black p-6 font-black uppercase text-center hover:bg-black hover:text-white transition-colors cursor-pointer flex flex-col items-center gap-4">
                    <Code size={32} />
                    {tech}
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'app' && (
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                 {['iOS Native', 'Android Native', 'Flutter', 'React Native', 'Swift', 'Kotlin', 'Ionic', 'Java'].map((tech, i) => (
                  <div key={i} className={`border-4 border-black p-6 font-black uppercase text-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer flex flex-col items-center gap-4`}>
                    <Smartphone size={32} />
                    {tech}
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'cms' && (
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                 {['WordPress', 'Shopify', 'Magento', 'Drupal', 'Joomla', 'Wix', 'Webflow', 'Contentful'].map((tech, i) => (
                  <div key={i} className={`border-4 border-black p-6 font-black uppercase text-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer flex flex-col items-center gap-4`}>
                    <Layout size={32} />
                    {tech}
                  </div>
                ))}
              </div>
            )}
            
            <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${colors.yellow} border-8 border-black rounded-full mix-blend-multiply opacity-20 pointer-events-none`}></div>
          </div>
        </motion.div>
      </section>

      {/* How we work */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <React.Suspense fallback={null}>
          <Floating3D shapeType="box" color="#00D285" className="absolute top-1/2 left-10 w-64 h-64 opacity-20 -translate-y-1/2" rotateSpeed={[0.03, 0.015]} />
        </React.Suspense>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter underline decoration-blue-500 text-blue-800">How we work</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-28 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-2 before:bg-black before:z-0">
            {processSteps.map((step, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="hidden md:flex flex-1"></div>
                
                {/* Number Badge */}
                <div className={`z-10 absolute left-28 md:relative md:left-auto flex items-center justify-center w-16 h-16 rounded-full border-4 border-black ${step.color} shadow-[4px_4px_0_0_rgba(0,0,0,1)] -translate-x-1/2 md:translate-x-0 group-hover:scale-110 transition-transform font-black text-2xl text-white`}>
                  {step.num}
                </div>
                
                <div className="w-[calc(100%-8rem)] md:w-[calc(50%-4rem)] p-6 bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] group-hover:-translate-y-2 transition-transform relative">
                  {/* Small decorative accent line */}
                  <div className={`absolute top-0 left-0 w-2 h-full ${step.color}`}></div>
                  <h3 className="font-black text-2xl uppercase text-blue-600 mb-2 pl-4">{step.title}</h3>
                  <p className="font-bold text-gray-700 pl-4">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section (Reusing Brutalist style from ServicePage) */}
      <section className="py-24 px-6 bg-[#FF8A3D] border-t-8 border-black relative overflow-hidden">
        {/* Abstract 2D grid background */}
        <div className="absolute inset-0 bg-grid opacity-30 mix-blend-multiply z-0"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10"
        >
          <div className="space-y-10">
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              Get In <span className="text-blue-900 italic">Touch</span>
            </h2>
            <p className="text-2xl font-bold bg-white p-6 border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              Questions or need support? Contact our seasoned IT consultants for
              <span className={`px-2 mx-2 ${colors.yellow} border-2 border-black inline-block transform -rotate-2`}>tailored solutions</span> 
              that enhance your digital footprint. Your success is our mission!
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-6 group">
                <div className={`p-4 border-4 border-black ${colors.green} group-hover:-rotate-12 transition-transform`}>
                  <PhoneCall size={32} />
                </div>
                <div>
                  <p className="font-black uppercase text-sm text-gray-500">Call Us</p>
                  <p className="text-xl font-black">91402 71025</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className={`p-4 border-4 border-black ${colors.orange} group-hover:rotate-12 transition-transform`}>
                  <Globe size={32} />
                </div>
                <div>
                  <p className="font-black uppercase text-sm text-gray-500">Email Us</p>
                  <p className="text-xl font-black underline">Info@astniq.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className={`p-4 border-4 border-black ${colors.blue} text-white group-hover:-rotate-12 transition-transform`}>
                  <Code size={32} />
                </div>
                <div>
                  <p className="font-black uppercase text-sm text-gray-500">Visit Us</p>
                  <p className="text-xl font-black">502, Sun Avenue One, near Shyamal crossroads, Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-white border-8 border-black p-10 md:p-14 shadow-[20px_20px_0_0_rgba(0,0,0,1)] relative`}>
            {/* Form decorative offset */}
            <div className={`absolute -top-8 -right-8 w-20 h-20 ${colors.red} border-4 border-black rounded-full -z-10 animate-pulse`}></div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-black uppercase text-sm mb-2 block">First Name</label>
                  <input type="text" className="w-full p-4 border-4 border-black bg-[#F4F7FE] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all font-bold" placeholder="JOHN" />
                </div>
                <div>
                  <label className="font-black uppercase text-sm mb-2 block">Last Name</label>
                  <input type="text" className="w-full p-4 border-4 border-black bg-[#F4F7FE] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all font-bold" placeholder="DOE" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-black uppercase text-sm mb-2 block">Email Address</label>
                  <input type="email" className="w-full p-4 border-4 border-black bg-[#F4F7FE] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all font-bold" placeholder="HELLO@EXAMPLE.COM" />
                </div>
                <div>
                  <label className="font-black uppercase text-sm mb-2 block">Phone Number</label>
                  <input type="tel" className="w-full p-4 border-4 border-black bg-[#F4F7FE] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all font-bold" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label className="font-black uppercase text-sm mb-2 block">Subject</label>
                <input type="text" className="w-full p-4 border-4 border-black bg-[#F4F7FE] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all font-bold" placeholder="HOW CAN WE HELP?" />
              </div>

              <div>
                <label className="font-black uppercase text-sm mb-2 block">Project Description</label>
                <textarea rows="4" className="w-full p-4 border-4 border-black bg-[#F4F7FE] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all font-bold resize-none" placeholder="TELL US ABOUT YOUR AMAZING PROJECT..."></textarea>
              </div>

              <button type="button" className={`w-full py-5 ${colors.blue} text-white border-4 border-black font-black uppercase text-2xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all`}>
                Submit Button
              </button>
            </form>
          </div>
        </motion.div>
      </section>
      
    </>
  );
};
