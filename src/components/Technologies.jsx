import React from 'react';
import CardSwap, { Card } from './ui/CardSwap';
import { Blocks, Code2, Database, Globe, Smartphone, Cloud } from 'lucide-react';

const SI = 'https://cdn.simpleicons.org';

const topics = [
  {
    category: "Web Development",
    icon: Globe,
    bgColor: "bg-gradient-to-br from-rose-400 to-orange-400",
    shadow: "shadow-rose-500/40",
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
    bgColor: "bg-gradient-to-br from-blue-400 to-cyan-400",
    shadow: "shadow-cyan-500/40",
    items: [
      { name: "Android", logo: `${SI}/android` },
      { name: "iOS",     logo: `${SI}/apple` },
    ]
  },
  {
    category: "Cross Platform",
    icon: Blocks,
    bgColor: "bg-gradient-to-br from-sky-400 to-indigo-400",
    shadow: "shadow-indigo-500/40",
    items: [
      { name: "Flutter",      logo: `${SI}/flutter` },
      { name: "React Native", logo: `${SI}/react` },
    ]
  },
  {
    category: "CMS",
    icon: Code2,
    bgColor: "bg-gradient-to-br from-indigo-400 to-purple-400",
    shadow: "shadow-purple-500/40",
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
    bgColor: "bg-gradient-to-br from-orange-400 to-amber-400",
    shadow: "shadow-orange-500/40",
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
    bgColor: "bg-gradient-to-br from-emerald-400 to-teal-400",
    shadow: "shadow-emerald-500/40",
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
    <section className="bg-slate-50 py-32 pb-48 px-4 md:px-8 w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Area */}
        <div className="flex flex-col z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Technologies &amp; Platforms We Work With
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Welcome to our software development company, where we elevate your business with our bespoke software solutions, crafted to drive growth and efficiency.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Partner with us for innovative and scalable software solutions tailored to your needs.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
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
                className={`border-none shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col rounded-[2rem] h-full ${topic.bgColor} ${topic.shadow}`}
              >
                {/* Header: icon + title */}
                <div className="flex items-center gap-4 px-8 pt-8 pb-5">
                  <div className="shrink-0 w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center text-white shadow-inner">
                    <topic.icon size={26} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide leading-tight">
                    {topic.category}
                  </h3>
                </div>

                {/* Divider */}
                <div className="mx-8 mb-5 h-px bg-white/25" />

                {/* Items grid with real icons */}
                <div className="flex-1 px-8 pb-8 grid grid-cols-3 gap-4 content-start">
                  {topic.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center gap-2 shadow-md"
                    >
                      {/* White rounded square with real brand icon */}
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md p-2">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.textContent = item.name.charAt(0);
                          }}
                        />
                      </div>
                      <span className="text-slate-700 text-sm font-bold tracking-wide leading-tight">
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
