import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ChevronRight,
  Bot, BarChart2, MonitorPlay, Brain, 
  PhoneIncoming, Megaphone, Users, Target, PlusSquare,
  Layout, Database, Smartphone, LayoutTemplate, 
  Search, HardDrive, Cloud, Building2, Blocks
} from 'lucide-react';

// --- DATA STRUCTURES ---

const serviceTabs = [
  { 
    id: 'ai', icon: Bot, name: 'Artificial Intelligence', 
    items: ['AI', 'Generative AI', 'NLP', 'Robotic Automation', 'Machine Learning', 'MLOps', 'Computer Vision', 'Blockchain', 'DevOps'] 
  },
  { 
    id: 'data', icon: BarChart2, name: 'Data', 
    items: ['Data Analytics', 'Data Migration', 'Data Science', 'Data Engineering', 'Big Data', 'Database Management'] 
  },
  { 
    id: 'dev', icon: MonitorPlay, name: 'Development & Design', 
    groups: [
      { name: 'Development', items: ['Web Development', 'App Development', 'CMS Development', 'Game Development', 'SaaS', 'IOT Development', 'AR/VR Development', 'Cloud Development', 'Market Development'] },
      { name: 'Design', items: ['UI/UX', 'Mobile App Design', 'Wireframes Designing', 'Responsive Web Design'] }
    ]
  },
  { 
    id: 'consulting', icon: Brain, name: 'Consulting & Neuro-Inclusion', 
    groups: [
      { name: 'Consulting', items: ['IT Consulting', 'Cloud Consulting', 'Startup Consulting', 'App Development Consulting'] },
      { name: 'Neuro-Inclusion', items: ['Awareness', 'Activation', 'Acceleration'] }
    ]
  },
  { 
    id: 'inbound', icon: PhoneIncoming, name: 'Inbound', 
    items: ['Call Center Outsourcing', 'Live Chat Outsourcing', 'Back Office Outsourcing', 'Help Desk Outsourcing', 'Email Support Outsourcing', 'Technical Support Outsourcing', 'Inbound Contact Center'] 
  },
  { 
    id: 'outbound', icon: Megaphone, name: 'Outbound', 
    items: ['Telemarketing Outsourcing', 'Lead Generation Outsourcing', 'Customer Surveys Outsourcing', 'Customer Based Validation', 'Outbound IVR Services', 'Outbound Contact Center'] 
  },
  { 
    id: 'hr', icon: Users, name: 'HR Services', 
    items: ['Recruitment Outsourcing', 'Corporate Training Solution', 'HR Outsourcing', 'Smart Selection Recruitment Software', 'Outstaffing Services', 'Compensation & Benefits Outsourcing'] 
  },
  { 
    id: 'experience', icon: Target, name: 'Experience Management', 
    items: ['Customer Experience Audit', 'Contact Center Technical Audit', 'Call Center KPI Review'] 
  },
  { 
    id: 'others', icon: PlusSquare, name: 'Others', 
    items: ['ERP', 'MVP', 'Cyber Security', 'Software Testing', 'IT Outsourcing', 'Product Engineering', 'Project Takeover', 'Business Intelligence', 'Digital Marketing', 'Brand Narrative', 'Public Relations & Communication', 'Crisis and Issue Management'] 
  },
];

const technologiesData = [
  { icon: Layout, name: 'Frontend', items: ['React JS', 'Angular JS', 'Vue JS', 'Vite JS', 'HTML', 'Tailwind CSS', 'CSS'], subGroups: [{ name: 'Full Stack', items: ['MEAN', 'MERN'] }] },
  { icon: Database, name: 'Backend', items: ['Laravel', 'Node JS', 'Dot Net', 'Java', 'PHP', 'CakePHP', 'ROR', 'Python', 'Django', 'Symfony', 'Rust', 'Golang', 'TypeScript', 'Next JS', 'C/C++', 'C#'] },
  { icon: Smartphone, name: 'App Development', items: ['Android', 'Flutter', 'React Native', 'iOS', 'Ionic', 'Xamarin', 'Hybrid App', 'On Demand App', 'Wearable App'] },
  { icon: LayoutTemplate, name: 'CMS', items: ['WordPress', 'CodeIgniter', 'WooCommerce', 'Drupal', 'Joomla', 'BigCommerce', 'Salesforce', 'DotNetNuke', 'Sitefinity'], subGroups: [{ name: 'E-Commerce', items: ['Magento', 'Shopify'] }] },
  { icon: Search, name: 'Digital Marketing', items: ['SEO', 'Paid Search', 'Social Media', 'Content Marketing', 'Display Advertising'], subGroups: [{ name: 'Data Analytics', items: ['Power BI', 'Tableau'] }] },
  { icon: HardDrive, name: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'GraphQL', 'Firebase', 'SQLite'] },
  { icon: Cloud, name: 'Cloud', items: ['AWS', 'Azure', 'Google App Engine', 'Terraform', 'CI-CD'], subGroups: [{ name: 'Microsoft', items: ['SharePoint', 'PowerApps', 'Power Automate'] }] },
  { icon: Blocks, name: 'Blockchain', items: ['Cardano', 'Polygon', 'Solana', 'Ethereum', 'Tezos', 'Tron', 'Hyperledger', 'Dapp', 'EOS', 'Polkadot', 'NFT Marketplace', 'Crypto Wallet', 'Web3', 'Smart Contract'] },
  { icon: Building2, name: 'Others', items: ['CRM', 'ODOO', 'SAP S/4HANA', 'Azure DevOps', 'API Development', 'Unity', 'Chatbot', 'LAMP', 'Web Portal', 'Microservices', 'Progressive Web App', 'Metaverse', 'Offshore', 'Enterprise Mobility', 'Information Architecture'] },
];

const outdoorServiceData = [
  { name: 'Artificial Intelligence', icon: Bot, items: ['Research and Development', 'Fractional Executive and Retainer', 'Enterprise Ecommerce', 'Customer Experience Design', 'E-commerce Support Service', 'Headless Ecommerce', 'Intelligence Assessments'] },
  { name: 'Data', icon: BarChart2, items: ['Amazon Wholesale Automation', 'Amazon PL Automation', 'Walmart Automation', 'E-Bay Automation', 'Business Process Outsourcing'] },
  { name: 'Development', icon: MonitorPlay, items: ['Data Entry Outsourcing', 'IT Support Outsourcing', 'Outsourced E-commerce Customer', 'Customer Service Support', 'Industry Specific Service', 'Upselling & Cross-Selling'] },
  { name: 'Other Services', icon: PlusSquare, items: ['Enterprise Call Center', 'Advocacy Engagement', 'Outsource Accounting & Bookkeeping', 'Marketing Technology', 'External Employment', 'Marketing Organization & Operations'] },
];

// --- COMPONENTS ---

const MenuDropdown = ({ isOpen, children, width = "w-64" }) => {
  if (!isOpen) return null;
  return (
    <div className={`absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/40 p-4 transition-all duration-300 z-50 ${width}`}>
      {children}
    </div>
  );
};

export function Navbar() {
  const location = useLocation();
  // Only use transparent-start behaviour on the home page.
  // On all other routes (AI, Services, etc.) the navbar is always opaque so it
  // stays readable over dark hero sections.
  const isHome = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(!isHome);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeServiceTab, setActiveServiceTab] = useState(serviceTabs[0]);
  const menuRef = useRef(null);

  // Reset scroll state when route changes
  useEffect(() => {
    setIsScrolled(!isHome || window.scrollY > 20);
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname, isHome]);

  useEffect(() => {
    if (!isHome) return; // non-home pages always opaque — no scroll listener needed
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  const toggleMenu = (menu) => {
    if (activeMenu === menu) setActiveMenu(null);
    else setActiveMenu(menu);
  };

  const navItemClass = (menuName) => cn(
    'flex items-center gap-1 px-3 py-2 rounded-full text-[15px] quicksand-font font-bold transition-all duration-300 cursor-pointer select-none',
    activeMenu === menuName ? 'bg-blue-50 text-blue-600' :
    isScrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
  );

  return (
    <nav ref={menuRef} className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
      isScrolled || activeMenu ? 'bg-white/95 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] border-b border-gray-100 py-3' : 'bg-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className={cn("ubuntu-bold text-2xl tracking-tight transition-colors duration-300", isScrolled || activeMenu ? "text-gray-900" : "text-gray-800", "group-hover:text-blue-600")}>Logo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={navItemClass('Home')}>Home</Link>

            {/* Service Mega Menu */}
            <div className="relative">
              <div className={navItemClass('Service')} onClick={() => toggleMenu('Service')}>
                <Link to="/services" className="hover:text-blue-600" onClick={e => e.stopPropagation()}>Service</Link>
                <ChevronDown size={14} className={cn("transition-transform duration-200", activeMenu === 'Service' && "rotate-180")} />
              </div>
              <MenuDropdown isOpen={activeMenu === 'Service'} width="w-[850px] -ml-40">
                <div className="flex gap-6 h-[450px]">
                  {/* Left Tabs */}
                  <div className="w-1/3 flex flex-col space-y-1 border-r border-gray-100 pr-4 overflow-y-auto custom-scrollbar">
                    {serviceTabs.map(tab => (
                      <button 
                        key={tab.id}
                        onMouseEnter={() => setActiveServiceTab(tab)}
                        className={cn(
                          "w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-3 transition-all duration-200 text-sm ubuntu-medium group",
                          activeServiceTab.id === tab.id ? "bg-blue-50/80 text-blue-700 shadow-sm" : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900"
                        )}
                      >
                        <tab.icon size={18} className={activeServiceTab.id === tab.id ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"} />
                        <span className="flex-1 truncate">{tab.name}</span>
                        <ChevronRight size={14} className={activeServiceTab.id === tab.id ? "opacity-100 text-blue-400" : "opacity-0 text-gray-300"} />
                      </button>
                    ))}
                  </div>
                  {/* Right Content */}
                  <div className="w-2/3 pl-2 overflow-y-auto">
                    <h3 className="text-xl ubuntu-bold text-gray-900 mb-5 flex items-center gap-2">
                      <div className="p-1.5 bg-blue-50 rounded-lg">
                        <activeServiceTab.icon className="text-blue-600" size={20} />
                      </div>
                      {activeServiceTab.name}
                    </h3>
                    
                    {activeServiceTab.groups ? (
                      <div className="grid grid-cols-2 gap-8">
                        {activeServiceTab.groups.map(group => (
                          <div key={group.name} className="space-y-3">
                            <h4 className="ubuntu-bold text-gray-900 mb-3 border-b pb-2 border-gray-100/50">{group.name}</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {group.items.map(item => (
                                <Link key={item} to={item === 'Cloud Development' ? '/cloud-development' : '#'} className="flex items-center justify-center text-center w-full px-2 py-2 min-h-[44px] bg-white border border-gray-100 text-gray-600 text-xs font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 hover:shadow-[0_4px_12px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 transition-all duration-300 break-words">{item}</Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-2">
                        {activeServiceTab.items.map(item => (
                          <Link
                            key={item}
                            to={
                              item === 'AI' ? '/ai' :
                              item === 'Generative AI' ? '/ai' :
                              item === 'Machine Learning' ? '/ai' :
                              item === 'NLP' ? '/ai' :
                              item === 'Computer Vision' ? '/ai' :
                              item === 'MLOps' ? '/ai' :
                              item === 'Robotic Automation' ? '/ai' :
                              item === 'Cloud Development' ? '/cloud-development' :
                              '#'
                            }
                            className="flex items-center justify-center text-center w-full px-2 py-2 min-h-[44px] bg-white border border-gray-100 text-gray-600 text-xs font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 hover:shadow-[0_4px_12px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 transition-all duration-300 break-words"
                          >{item}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </MenuDropdown>
            </div>

            {/* Technologies Mega Menu */}
            <div className="relative">
              <div className={navItemClass('Technologies')} onClick={() => toggleMenu('Technologies')}>
                <Link to="/technologies" className="hover:text-blue-600" onClick={e => e.stopPropagation()}>Technologies</Link>
                <ChevronDown size={14} className={cn("transition-transform duration-200", activeMenu === 'Technologies' && "rotate-180")} />
              </div>
              <MenuDropdown isOpen={activeMenu === 'Technologies'} width="w-[1000px] -ml-[400px]">
                <div className="grid grid-cols-3 gap-6 p-2 max-h-[60vh] overflow-y-auto">
                  {technologiesData.map((tech, i) => (
                    <div key={i} className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100/50">
                      <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-blue-50 rounded-lg">
                          <tech.icon size={18} className="text-blue-600" />
                        </div>
                        {tech.name}
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {tech.items.map(item => (
                          <Link key={item} to={item === 'Cloud Development' ? '/cloud-development' : '#'} className="flex items-center justify-center text-center w-full px-2 py-2 min-h-[44px] bg-white border border-gray-100 text-gray-600 text-[11px] xl:text-xs font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 hover:shadow-[0_4px_12px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 transition-all duration-300 break-words cursor-pointer">{item}</Link>
                        ))}
                      </div>
                      {tech.subGroups && tech.subGroups.map(sub => (
                        <div key={sub.name} className="mt-4">
                          <h5 className="font-semibold text-xs text-gray-500 uppercase tracking-wider mb-2">{sub.name}</h5>
                          <div className="grid grid-cols-3 gap-2 mt-2">
                            {sub.items.map(item => (
                              <Link key={item} to={item === 'Cloud Development' ? '/cloud-development' : '#'} className="flex items-center justify-center text-center w-full px-2 py-2 min-h-[44px] bg-white border border-gray-100 text-gray-600 text-[11px] xl:text-xs font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 hover:shadow-[0_4px_12px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 transition-all duration-300 break-words cursor-pointer">{item}</Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </MenuDropdown>
            </div>

            {/* Outdoor Service Mega Menu */}
            <div className="relative">
              <div className={navItemClass('Outdoor Service')} onClick={() => toggleMenu('Outdoor Service')}>
                Outdoor Service <ChevronDown size={14} className={cn("transition-transform duration-200", activeMenu === 'Outdoor Service' && "rotate-180")} />
              </div>
              <MenuDropdown isOpen={activeMenu === 'Outdoor Service'} width="w-[800px] -ml-64">
                <div className="grid grid-cols-2 gap-8 p-2">
                  {outdoorServiceData.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="font-semibold text-gray-900 border-b pb-2 flex items-center gap-2 border-gray-100/50">
                        <div className="p-1.5 bg-blue-50 rounded-lg">
                          <section.icon size={16} className="text-blue-600"/>
                        </div>
                        {section.name}
                      </h4>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        {section.items.map(item => (
                          <Link key={item} to={item === 'Cloud Development' ? '/cloud-development' : '#'} className="flex items-center justify-center text-center w-full px-2 py-2 min-h-[44px] bg-white border border-gray-100 text-gray-600 text-[11px] xl:text-xs font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 hover:shadow-[0_4px_12px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 transition-all duration-300 break-words cursor-pointer">{item}</Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </MenuDropdown>
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <div className={navItemClass('About')} onClick={() => toggleMenu('About')}>
                About <ChevronDown size={14} className={cn("transition-transform duration-200", activeMenu === 'About' && "rotate-180")} />
              </div>
              <MenuDropdown isOpen={activeMenu === 'About'} width="w-48">
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md">
                  Our Startups
                </a>
              </MenuDropdown>
            </div>

            {/* Contact Us (no dropdown) */}
            <a href="#" className={navItemClass('Contact Us').replace('cursor-pointer', '')}>Contact Us</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden max-[1024px]:hidden lg:flex items-center space-x-3">
            <button className={cn("text-[15px] quicksand-font font-bold transition-all duration-300 px-5 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-full", isScrolled || activeMenu ? "text-gray-600 hover:text-blue-600" : "text-gray-700 hover:text-blue-600")}>
              Log in
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-[15px] quicksand-font font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={cn("p-2 rounded-md", isScrolled || activeMenu ? "text-gray-600" : "text-gray-800")}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Basic Mobile Menu Implementation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto bg-white border-b border-gray-200 shadow-xl pb-6">
          <div className="flex flex-col p-4 space-y-2">
            <div className="font-semibold text-gray-900 py-2 border-b">Home</div>
            <div className="py-2 border-b">
              <div className="font-semibold text-gray-900 mb-2">Service</div>
              <p className="text-sm text-gray-500 pl-2">Includes: AI, Data, Dev & Design, Consulting...</p>
            </div>
            <div className="py-2 border-b">
              <div className="font-semibold text-gray-900 mb-2">Technologies</div>
              <p className="text-sm text-gray-500 pl-2">Includes: Frontend, Backend, Cloud, DB...</p>
            </div>
             <div className="py-2 border-b">
              <div className="font-semibold text-gray-900 mb-2">Outdoor Service</div>
            </div>
            <div className="py-2 border-b">
              <div className="font-semibold text-gray-900 mb-2">About</div>
              <p className="text-sm text-gray-500 pl-2">Our Startups</p>
            </div>
            <div className="font-semibold text-gray-900 py-2">Contact Us</div>
          </div>
        </div>
      )}
    </nav>
  );
}
