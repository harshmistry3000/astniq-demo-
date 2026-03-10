import React from 'react';
import CardSwap, { Card } from './ui/CardSwap';
import { Blocks, Code2, Database, Globe, Smartphone, Cloud } from 'lucide-react';

const SI = 'https://cdn.simpleicons.org';

const topics = [
  {
    category: "Web Development",
    icon: Globe,
    bgColor: "bg-brand-red",
    shadow: "neo-shadow-black",
    items: [
      { name: "Angular",  logo: `${SI}/angular` },
      { name: "Vue Js",   logo: `${SI}/vuedotjs` },
      { name: "React Js", logo: `${SI}/react` },
      { name: "Node Js",  logo: `${SI}/nodedotjs` },
      { name: "Laravel",  logo: `${SI}/laravel` },
      { name: "Java",     logo: `${SI}/openjdk` },
      { name: "Dot Net",  logo: `${SI}/dotnet` },
      { name: "PHP",      logo: `${SI}/php` },
    ]
  },
  {
    category: "Mobile Technology",
    icon: Smartphone,
    bgColor: "bg-brand-blue",
    shadow: "neo-shadow-yellow",
    items: [
      { name: "Android", logo: `${SI}/android` },
      { name: "iOS",     logo: `${SI}/apple` },
    ]
  },
  {
    category: "Cross Platform",
    icon: Blocks,
    bgColor: "bg-brand-yellow",
    shadow: "neo-shadow-black",
    items: [
      { name: "Flutter",      logo: `${SI}/flutter` },
      { name: "React Native", logo: `${SI}/react` },
    ]
  },
  {
    category: "CMS",
    icon: Code2,
    bgColor: "bg-brand-green",
    shadow: "neo-shadow-black",
    items: [
      { name: "WordPress",   logo: `${SI}/wordpress` },
      { name: "CodeIgniter", logo: `${SI}/codeigniter` },
      { name: "Joomla",      logo: `${SI}/joomla` },
      { name: "WooCommerce", logo: `${SI}/woocommerce` },
      { name: "Drupal",      logo: `${SI}/drupal` },
    ]
  },
  {
    category: "Database",
    icon: Database,
    bgColor: "bg-brand-red",
    shadow: "neo-shadow-blue",
    items: [
      { name: "MySQL",      logo: `${SI}/mysql` },
      { name: "PostgreSQL", logo: `${SI}/postgresql` },
      { name: "MongoDB",    logo: `${SI}/mongodb` },
      { name: "Firebase",   logo: `${SI}/firebase` },
      { name: "SQLite",     logo: `${SI}/sqlite` },
    ]
  },
  {
    category: "Devops and Cloud",
    icon: Cloud,
    bgColor: "bg-brand-blue",
    shadow: "neo-shadow-black",
    items: [
      { name: "Terraform", logo: `${SI}/terraform` },
      { name: "CI / CD",   logo: `${SI}/githubactions` },
      { name: "AWS",       logo: `${SI}/amazonwebservices` },
      { name: "Docker",    logo: `${SI}/docker` },
      { name: "Kubernetes",logo: `${SI}/kubernetes` },
    ]
  }
];

export function Technologies() {
  return (
    <section className="bg-brand-green py-32 pb-48 px-4 md:px-8 w-full flex flex-col justify-center items-center overflow-hidden border-b-8 border-brand-black relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0a0a0f 0, #0a0a0f 2px, transparent 2px, transparent 12px)' }} />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content Area */}
        <div className="flex flex-col z-10">
          <div className="inline-block bg-brand-white text-brand-black px-6 py-2 border-4 border-brand-black neo-shadow-black transform -rotate-2 w-fit mb-8">
            <h2 className="text-4xl md:text-6xl ubuntu-bold uppercase leading-tight" style={{ textShadow: '2px 2px 0 #1a56db' }}>
              Technologies <br />&amp; Platforms <br />We Work With
            </h2>
          </div>
          <div className="bg-brand-yellow border-4 border-brand-black neo-shadow-black p-6 rounded-xl transform rotate-1 mb-8">
            <p className="text-brand-black text-xl font-bold leading-relaxed mb-4">
              Welcome to our software development company, where we elevate your business with our bespoke software solutions, crafted to drive growth and efficiency.
            </p>
            <p className="text-brand-black text-lg font-bold leading-relaxed">
              Partner with us for innovative and scalable solutions.
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-brand-blue text-brand-white font-black uppercase text-xl px-10 py-4 border-4 border-brand-black neo-shadow-black hover:translate-x-1 hover:-translate-y-1 hover:neo-shadow-yellow transition-transform">
              Discover More
            </button>
          </div>
        </div>

        {/* Right Animated Card Area */}
        <div className="relative h-[650px] w-full mt-14 lg:mt-0 flex justify-center lg:justify-end items-center pointer-events-none lg:pointer-events-auto">
          <CardSwap
            cardDistance={50}
            verticalDistance={45}
            delay={3000}
            pauseOnHover={false}
            width={550}
            height={500}
          >
            {topics.map((topic, index) => (
              <Card
                key={index}
                className={`border-4 border-brand-black flex flex-col rounded-3xl h-full ${topic.bgColor} ${topic.shadow}`}
              >
                {/* Header: icon + title */}
                <div className="flex items-center gap-4 px-8 pt-8 pb-5">
                  <div className="shrink-0 w-16 h-16 bg-brand-white border-4 border-brand-black rounded-xl flex items-center justify-center text-brand-black neo-shadow-black transform -rotate-3">
                    <topic.icon size={36} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl md:text-4xl ubuntu-bold text-brand-black uppercase tracking-wide leading-tight ml-2">
                    {topic.category}
                  </h3>
                </div>

                {/* Divider */}
                <div className="mx-8 mb-5 h-2 bg-brand-black" />

                {/* Items grid with real icons */}
                <div className="flex-1 px-8 pb-8 grid grid-cols-3 gap-6 content-start">
                  {topic.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-brand-white rounded-xl py-4 px-2 flex flex-col items-center justify-center text-center gap-3 border-4 border-brand-black neo-shadow-black transform hover:-rotate-2 transition-transform cursor-pointer"
                    >
                      {/* White rounded square with real brand icon */}
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-full h-full object-contain filter grayscale contrast-200"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.textContent = item.name.charAt(0);
                          }}
                        />
                      </div>
                      <span className="text-brand-black text-sm font-black uppercase tracking-wide leading-tight mt-1">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
