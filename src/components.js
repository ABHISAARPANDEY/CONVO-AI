/* Convo AI - Modern Voice Agent Company Website Components */
import React, { useEffect, useMemo, useRef, useState } from "react";

// Modern image registry for Convo AI voice agent company
export const IMAGES = {
  // Hero and main sections
  hero_main: "https://images.unsplash.com/photo-1763718432504-7716caff6e99?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzY3MDgyMzM5fDA&ixlib=rb-4.1.0&q=85",
  hero_dashboard: "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxBSSUyMHRlY2hub2xvZ3klMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzY3MDgyMzM5fDA&ixlib=rb-4.1.0&q=85",
  
  // Modern technology and AI
  ai_dashboard: "https://images.pexels.com/photos/3862610/pexels-photo-3862610.jpeg",
  modern_tech: "https://images.unsplash.com/photo-1606211105533-0439bfecce21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2NzA4MjM0NXww&ixlib=rb-4.1.0&q=85",
  tech_setup: "https://images.pexels.com/photos/16544949/pexels-photo-16544949.jpeg",
  
  // Customer support and workflows
  customer_support_modern: "https://images.unsplash.com/photo-1709715357479-591f9971fb05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MHx8fHwxNzY3MDgyMzUxfDA&ixlib=rb-4.1.0&q=85",
  support_team: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MHx8fHwxNzY3MDgyMzUxfDA&ixlib=rb-4.1.0&q=85",
  team_collaboration: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg",
  
  // Infographics and process flows
  infographic_modern: "https://images.unsplash.com/photo-1707733148825-e49aa84d7f43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxpbmZvZ3JhcGhpY3xlbnwwfHx8fDE3NjcwODIzNTh8MA&ixlib=rb-4.1.0&q=85",
  process_flow: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",
  
  // Platform integrations
  shopify_integration: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  wordpress_integration: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
  custom_website: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
  
  // Voice technology
  voice_tech: "https://images.pexels.com/photos/1072851/pexels-photo-1072851.jpeg",
  ai_network: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
  
  // Testimonials (professional portraits)
  t1: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c",
  t2: "https://images.unsplash.com/photo-1569913486515-b74bf7751574",
  t3: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a",
  t4: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6",
  t5: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
  t6: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
};

// Utilities
export const useInView = (options = { threshold: 0.2 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setInView(true);
      });
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return { ref, inView };
};

export const Section = ({ id, className = "", children }) => (
  <section id={id} className={`section-wrapper ${className}`}>
    <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">{children}</div>
  </section>
);

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Modern Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <span className="font-display text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Convo AI
          </span>
        </a>

        {/* Modern Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="nav-link font-medium">Features</a>
          <a href="#setup" className="nav-link font-medium">Setup</a>
          <a href="#platforms" className="nav-link font-medium">Platforms</a>
          <a href="#pricing" className="nav-link font-medium">Pricing</a>
          <a href="#contact" className="nav-link font-medium">Contact</a>
        </nav>

        {/* Modern CTA Button */}
        <div className="flex items-center gap-4">
          <a href="#pricing" className="hidden sm:block text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Sign In
          </a>
          <a href="#pricing" className="btn">
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header id="top" className="relative pt-32 md:pt-40 lg:pt-44 pb-20 md:pb-28 lg:pb-32 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}} />
        </div>
      </div>

      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className={`space-y-8 ${showContent ? 'animate-[slideInLeft_800ms_ease-out]' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow"></span>
              AI-Powered Customer Support
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Transform Your</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Customer Support
                </span>
                <span className="block text-gray-900">with AI Agents</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Intelligent voice agents that provide 24/7 customer support for Shopify, WordPress, Wix, and custom websites. 
                <span className="font-semibold text-gray-800"> Setup in 5 minutes.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToPricing}
                className="btn text-lg px-8 py-4"
              >
                See Plans
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </button>
              <a href="#setup" className="btn-outline text-lg px-8 py-4 text-center">
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5min</div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`relative ${showContent ? 'animate-[slideInRight_800ms_ease-out]' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl modern-card">
                <img
                  src={IMAGES.hero_dashboard}
                  alt="Convo AI Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">99.9%</div>
                  <div className="text-xs text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const SetupProcess = () => {
  const [activeTab, setActiveTab] = useState('platform');
  
  const setupSteps = {
    platform: {
      title: "Platform Users (Shopify, WordPress, Wix)",
      subtitle: "One-click installation with automatic knowledge base extraction",
      steps: [
        {
          icon: "🔌",
          title: "Install Plugin",
          description: "Simply install our plugin from your platform's marketplace",
          time: "30 seconds"
        },
        {
          icon: "🤖",
          title: "Auto Knowledge Extraction",
          description: "Our AI automatically extracts your product info, FAQs, and policies",
          time: "2 minutes"
        },
        {
          icon: "🎯",
          title: "Customize & Launch",
          description: "Customize your agent's personality and go live instantly",
          time: "2 minutes"
        }
      ],
      image: IMAGES.shopify_integration
    },
    custom: {
      title: "Custom Website Users",
      subtitle: "Widget integration with manual knowledge base setup",
      steps: [
        {
          icon: "📧",
          title: "Get Widget ID",
          description: "Sign up and receive your unique widget ID via email",
          time: "1 minute"
        },
        {
          icon: "📚",
          title: "Setup Knowledge Base",
          description: "Upload your FAQs, product info, and support documents",
          time: "10 minutes"
        },
        {
          icon: "🔗",
          title: "Embed Widget",
          description: "Add our widget code to your website and start helping customers",
          time: "2 minutes"
        }
      ],
      image: IMAGES.custom_website
    }
  };

  const activeSetup = setupSteps[activeTab];

  return (
    <Section id="setup" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <p className="eyebrow eyebrow-gradient reveal-up">Setup Process</p>
        <h2 className="h2 mt-4 reveal-up">Get Started in Minutes, Not Hours</h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto reveal-up">
          Our motto: <span className="font-semibold text-gray-900">Simple setup for everyone.</span> Whether you're on a platform or have a custom website, we've got you covered.
        </p>
      </div>

      {/* Tab Selector */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab('platform')}
            className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'platform'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Platform Users
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'custom'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Custom Websites
          </button>
        </div>
      </div>

      {/* Setup Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Steps */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeSetup.title}</h3>
            <p className="text-gray-600">{activeSetup.subtitle}</p>
          </div>

          <div className="space-y-6">
            {activeSetup.steps.map((step, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 modern-card">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <span className="text-sm text-blue-600 font-medium">{step.time}</span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a href="#pricing" className="btn">
              Start Your Setup
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <img
            src={activeSetup.image}
            alt={activeSetup.title}
            className="w-full h-auto rounded-2xl shadow-xl modern-card"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
        </div>
      </div>
    </Section>
  );
};

export const MeetConvoAI = () => {
  const { ref, inView } = useInView();
  
  return (
    <Section className="py-20 md:py-28">
      <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${inView ? 'animate-[fadeInUp_800ms_ease-out]' : 'opacity-0'}`}>
        {/* Content */}
        <div className="space-y-8">
          <div>
            <p className="eyebrow eyebrow-gradient">Meet Convo AI</p>
            <h2 className="h2 mt-4">
              Intelligent voice agents that understand your business
            </h2>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Our AI doesn't just answer questions—it understands context, learns from interactions, 
              and provides personalized support that feels human. Available 24/7, multilingual, 
              and seamlessly integrated with your existing workflow.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Context Aware</h4>
              <p className="text-sm text-gray-600">Understands conversation history and customer intent</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Self Learning</h4>
              <p className="text-sm text-gray-600">Improves responses based on customer feedback</p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative z-10">
            <img
              src={IMAGES.customer_support_modern}
              alt="Modern customer support with AI"
              className="w-full h-auto rounded-2xl shadow-xl modern-card"
            />
          </div>
          
          {/* Floating stats */}
          <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">40%</div>
              <div className="text-xs text-gray-600">Faster Response</div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <div className="text-xs text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Intelligence",
      description: "Advanced natural language processing that understands context and intent",
      image: IMAGES.ai_dashboard,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🌍",
      title: "50+ Languages",
      description: "Multilingual support with cultural context understanding",
      image: IMAGES.infographic_modern,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "⚡",
      title: "Instant Responses",
      description: "Sub-200ms response times with real-time conversation flow",
      image: IMAGES.modern_tech,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Detailed insights into customer interactions and satisfaction",
      image: IMAGES.process_flow,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <Section id="features" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <p className="eyebrow eyebrow-gradient reveal-up">Features</p>
        <h2 className="h2 mt-4 reveal-up">Every Conversation. Handled Perfectly.</h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto reveal-up">
          Advanced AI technology that understands context, handles complex queries, 
          and provides human-like interactions that delight your customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg modern-card">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8 h-64 flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
              
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export const PlatformIntegrations = () => {
  const platforms = {
    shopify: { 
      label: 'Shopify', 
      src: IMAGES.shopify_integration, 
      desc: 'One-click installation with automatic product catalog integration',
      features: ['Auto product sync', 'Order tracking', 'Inventory updates', 'Customer history']
    },
    wordpress: { 
      label: 'WordPress', 
      src: IMAGES.wordpress_integration, 
      desc: 'Easy plugin installation for any WordPress website',
      features: ['WooCommerce support', 'Content extraction', 'SEO integration', 'Custom post types']
    },
    custom: { 
      label: 'Custom Sites', 
      src: IMAGES.custom_website, 
      desc: 'Universal widget that works with any website or platform',
      features: ['Universal widget', 'API integration', 'Custom styling', 'Advanced configuration']
    },
  };
  const [activePlatform, setActivePlatform] = useState('shopify');
  const active = platforms[activePlatform];

  return (
    <Section id="platforms" className="py-20 md:py-28 bg-gray-50">
      <div className="text-center mb-16">
        <p className="eyebrow eyebrow-gradient reveal-up">Platform Integrations</p>
        <h2 className="h2 mt-4 reveal-up">Works with your existing setup</h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto reveal-up">
          Seamless integration with popular platforms and custom websites. 
          No technical expertise required.
        </p>
      </div>
        
      {/* Platform selector */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-2 rounded-2xl shadow-lg">
          {Object.entries(platforms).map(([key, platform]) => (
            <button
              key={key}
              onClick={() => setActivePlatform(key)}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                activePlatform === key 
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {platform.label}
            </button>
          ))}
        </div>
      </div>

      {/* Platform showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{active.label} Integration</h3>
            <p className="text-xl text-gray-600">{active.desc}</p>
          </div>
          
          <div className="space-y-4">
            {active.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <a href="#setup" className="btn">
            Learn Setup Process
          </a>
        </div>

        <div className="relative">
          <img
            src={active.src}
            alt={`${active.label} integration`}
            className="w-full h-auto rounded-2xl shadow-xl modern-card"
          />
        </div>
      </div>
    </Section>
  );
};

export const Specs = () => {
  const rows = [
    ["Response Time", "< 200ms average response"],
    ["Languages Supported", "50+ languages with natural conversation"],
    ["Uptime", "99.9% guaranteed uptime"],
    ["Integration Time", "5-minute setup process"],
    ["Concurrent Users", "Unlimited simultaneous conversations"],
    ["Data Security", "SOC 2 Type II compliant"],
    ["API Access", "RESTful API with webhooks"],
    ["Analytics", "Real-time conversation analytics"],
    ["Customization", "Fully customizable voice and personality"],
    ["Support", "24/7 technical support included"],
  ];
  const wrapRef = useRef(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) el.classList.add('specs-inview');
      });
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Section id="specs" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <p className="eyebrow eyebrow-gradient reveal-up">Technical Specifications</p>
        <h2 className="h2 mt-4 reveal-up">Built to Scale</h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto reveal-up">
          Enterprise-grade infrastructure that grows with your business.
        </p>
      </div>
      
      <div ref={wrapRef} className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <dl className="divide-y divide-gray-100">
          {rows.map(([k, v], index) => (
            <div key={k} className={`grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 p-6 md:p-8 opacity-0 translate-y-4 will-change-transform spec-row hover:bg-gray-50 transition-colors`}>
              <dt className="text-gray-600 font-medium col-span-1">{k}</dt>
              <dd className="text-gray-900 font-semibold md:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export const Testimonials = () => {
  const cards = [
    { img: IMAGES.t1, name: "Sarah Chen", handle: "@sarahstore", quote: "Convo AI increased our customer satisfaction by 40% and handles 80% of our support queries automatically. Game changer!" },
    { img: IMAGES.t2, name: "Mike Rodriguez", handle: "@mikecommerce", quote: "Setup was incredibly easy. Our customers love the instant responses, even at 3 AM. Revenue increased 25%." },
    { img: IMAGES.t3, name: "Emma Thompson", handle: "@emmashop", quote: "The multilingual support helped us expand globally. It's like having a support team in every country." },
  ];
  
  return (
    <Section id="reviews" className="py-20 md:py-28 bg-gray-50">
      <div className="text-center mb-16">
        <span className="eyebrow eyebrow-gradient block reveal-up">Testimonials</span>
        <h2 className="h2 mt-4 reveal-up">Loved by E-commerce Businesses</h2>
        <p className="mt-6 text-xl text-gray-600 reveal-up">Trusted by thousands of online stores worldwide.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((testimonial, i) => (
          <figure key={i} className="bg-white rounded-2xl p-8 shadow-lg modern-card">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">"{testimonial.quote}"</blockquote>
            <div className="flex items-center gap-4">
              <img src={testimonial.img} alt={`${testimonial.name} portrait`} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100" loading="lazy" />
              <figcaption>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.handle}</div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
};

export const FAQ = () => {
  const items = [
    { q: "How quickly can I set up Convo AI?", a: "Setup takes just 5 minutes for platform users (Shopify, WordPress, Wix) with automatic knowledge extraction. Custom website users need about 15 minutes including knowledge base setup." },
    { q: "Does it work with my existing customer support tools?", a: "Yes, Convo AI integrates with popular tools like Zendesk, Intercom, Freshdesk, and custom CRM systems via our API." },
    { q: "What languages does Convo AI support?", a: "We support 50+ languages with natural conversation capabilities, cultural context understanding, and regional dialects." },
    { q: "Can I customize the voice agent's personality?", a: "Absolutely! You can customize the voice, tone, personality, response style, and even add your brand's specific terminology." },
    { q: "What happens if the AI can't answer a question?", a: "The AI seamlessly transfers complex queries to your human support team with full conversation context and customer history." },
    { q: "Is my customer data secure?", a: "Yes, we're SOC 2 Type II compliant with enterprise-grade security, data encryption, and GDPR compliance." },
    { q: "Do you offer a free plan?", a: "Yes! Our free plan includes 100 conversations per month, perfect for testing and small websites." },
    { q: "How does billing work for conversations?", a: "We count each customer interaction as one conversation, regardless of how many messages are exchanged during that session." },
  ];
  
  return (
    <Section id="faq" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <p className="eyebrow eyebrow-gradient reveal-up">FAQ</p>
        <h2 className="h2 mt-4 reveal-up">Got Questions? We've Got Answers.</h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto reveal-up">
          Everything you need to know about Convo AI and how it works.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden divide-y divide-gray-100">
          {items.map((item, idx) => (
            <Disclosure key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const Disclosure = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="hover:bg-gray-50 transition-colors">
      <button 
        className="w-full px-8 py-6 flex items-center justify-between text-left group" 
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{q}</span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`transition-transform duration-300 text-gray-400 group-hover:text-blue-600 ${open ? "rotate-45" : ""}`}
        >
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {open && (
        <div className="px-8 pb-6 -mt-2">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

export const PricingSection = () => {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'compare'

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for testing and small websites",
      features: [
        "100 conversations/month",
        "Basic AI responses",
        "Email support",
        "1 website integration",
        "Standard response time"
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-gray-50 to-gray-100"
    },
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Great for growing businesses",
      features: [
        "1,000 conversations/month",
        "Advanced AI with context",
        "Priority support",
        "3 website integrations",
        "Basic analytics",
        "Custom branding",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: false,
      gradient: "from-blue-50 to-blue-100"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "For established e-commerce stores",
      features: [
        "10,000 conversations/month",
        "Advanced AI + human handoff",
        "24/7 phone support",
        "Unlimited integrations",
        "Advanced analytics",
        "Custom voice & personality",
        "API access",
        "Priority processing"
      ],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-purple-50 to-purple-100"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Dedicated AI training",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees",
        "White-label solution",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-green-50 to-green-100"
    }
  ];

  // Detailed feature comparison matrix
  const comparisonFeatures = [
    { category: "Conversations", features: [
      { name: "Monthly conversations", free: "100", starter: "1,000", professional: "10,000", enterprise: "Unlimited" },
      { name: "Overage charges", free: "Not available", starter: "$0.05/conversation", professional: "$0.03/conversation", enterprise: "Included" },
    ]},
    { category: "AI Capabilities", features: [
      { name: "AI Model", free: "Basic", starter: "Advanced", professional: "Advanced + Human Handoff", enterprise: "Custom Trained" },
      { name: "Context understanding", free: false, starter: true, professional: true, enterprise: true },
      { name: "Multi-language support", free: true, starter: true, professional: true, enterprise: true },
      { name: "Custom voice & personality", free: false, starter: false, professional: true, enterprise: true },
      { name: "Dedicated AI training", free: false, starter: false, professional: false, enterprise: true },
    ]},
    { category: "Integrations", features: [
      { name: "Website integrations", free: "1", starter: "3", professional: "Unlimited", enterprise: "Unlimited" },
      { name: "Platform plugins", free: true, starter: true, professional: true, enterprise: true },
      { name: "API access", free: false, starter: true, professional: true, enterprise: true },
      { name: "Custom integrations", free: false, starter: false, professional: false, enterprise: true },
      { name: "Webhook support", free: false, starter: true, professional: true, enterprise: true },
    ]},
    { category: "Analytics & Reporting", features: [
      { name: "Basic analytics", free: false, starter: true, professional: true, enterprise: true },
      { name: "Advanced analytics", free: false, starter: false, professional: true, enterprise: true },
      { name: "Custom reports", free: false, starter: false, professional: true, enterprise: true },
      { name: "Export data", free: false, starter: false, professional: true, enterprise: true },
      { name: "Real-time dashboards", free: false, starter: false, professional: true, enterprise: true },
    ]},
    { category: "Support", features: [
      { name: "Email support", free: true, starter: true, professional: true, enterprise: true },
      { name: "Priority support", free: false, starter: true, professional: true, enterprise: true },
      { name: "24/7 phone support", free: false, starter: false, professional: true, enterprise: true },
      { name: "Dedicated account manager", free: false, starter: false, professional: false, enterprise: true },
      { name: "Response time SLA", free: "48 hours", starter: "24 hours", professional: "4 hours", enterprise: "1 hour" },
    ]},
    { category: "Security & Compliance", features: [
      { name: "SSL encryption", free: true, starter: true, professional: true, enterprise: true },
      { name: "SOC 2 compliance", free: false, starter: false, professional: true, enterprise: true },
      { name: "GDPR compliance", free: true, starter: true, professional: true, enterprise: true },
      { name: "Advanced security", free: false, starter: false, professional: false, enterprise: true },
      { name: "On-premise deployment", free: false, starter: false, professional: false, enterprise: true },
    ]},
    { category: "Customization", features: [
      { name: "Custom branding", free: false, starter: true, professional: true, enterprise: true },
      { name: "White-label solution", free: false, starter: false, professional: false, enterprise: true },
      { name: "Custom domain", free: false, starter: false, professional: true, enterprise: true },
      { name: "Widget customization", free: false, starter: true, professional: true, enterprise: true },
    ]},
    { category: "Business Features", features: [
      { name: "Team collaboration", free: false, starter: false, professional: true, enterprise: true },
      { name: "User management", free: false, starter: false, professional: true, enterprise: true },
      { name: "Role-based access", free: false, starter: false, professional: true, enterprise: true },
      { name: "Priority processing", free: false, starter: false, professional: true, enterprise: true },
      { name: "SLA guarantees", free: false, starter: false, professional: false, enterprise: true },
    ]},
  ];

  const renderFeatureValue = (value, planKey) => {
    if (typeof value === 'boolean') {
      return value ? (
        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      );
    }
    return <span className="text-gray-700 font-medium">{value}</span>;
  };

  return (
    <Section id="pricing" className="py-20 md:py-28 bg-gray-50">
      <div className="text-center mb-16">
        <p className="eyebrow eyebrow-gradient reveal-up">Pricing</p>
        <h2 className="h2 mt-4 reveal-up">Choose Your Plan</h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto reveal-up">
          Start free, scale as you grow. All plans include our core AI technology and 24/7 availability.
        </p>

        {/* View Toggle */}
        <div className="flex justify-center mt-8">
          <div className="bg-white p-1 rounded-2xl shadow-lg inline-flex">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                viewMode === 'cards'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              View Plans
            </button>
            <button
              onClick={() => setViewMode('compare')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                viewMode === 'compare'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Compare Plans
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'cards' ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-3xl p-8 bg-white shadow-lg modern-card ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-6 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-6 px-6 font-semibold text-gray-900">
                    <div className="flex flex-col items-center">
                      <span className="text-lg">Free</span>
                      <span className="text-sm text-gray-500 font-normal">$0</span>
                    </div>
                  </th>
                  <th className="text-center py-6 px-6 font-semibold text-gray-900">
                    <div className="flex flex-col items-center">
                      <span className="text-lg">Starter</span>
                      <span className="text-sm text-gray-500 font-normal">$29/mo</span>
                    </div>
                  </th>
                  <th className="text-center py-6 px-6 font-semibold text-gray-900 bg-purple-50">
                    <div className="flex flex-col items-center">
                      <span className="text-lg">Professional</span>
                      <span className="text-sm text-gray-500 font-normal">$99/mo</span>
                      <span className="text-xs text-purple-600 font-medium mt-1">Most Popular</span>
                    </div>
                  </th>
                  <th className="text-center py-6 px-6 font-semibold text-gray-900">
                    <div className="flex flex-col items-center">
                      <span className="text-lg">Enterprise</span>
                      <span className="text-sm text-gray-500 font-normal">Custom</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-gray-100">
                      <td colSpan="5" className="py-4 px-6 font-bold text-gray-900 text-lg">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featIdx) => (
                      <tr key={featIdx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-gray-700 font-medium">{feature.name}</td>
                        <td className="py-4 px-6 text-center">{renderFeatureValue(feature.free, 'free')}</td>
                        <td className="py-4 px-6 text-center">{renderFeatureValue(feature.starter, 'starter')}</td>
                        <td className="py-4 px-6 text-center bg-purple-50/30">{renderFeatureValue(feature.professional, 'professional')}</td>
                        <td className="py-4 px-6 text-center">{renderFeatureValue(feature.enterprise, 'enterprise')}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* CTA Buttons Row */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 border-t border-gray-200">
            {plans.map((plan, index) => (
              <button
                key={index}
                className={`py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg'
                    : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-12">
        <p className="text-gray-600">
          All plans include a 14-day free trial. No credit card required. 
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
            Questions? Contact us →
          </a>
        </p>
      </div>
    </Section>
  );
};

export const ContactSection = () => {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!state.name.trim()) e.name = 'Required';
    if (!state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email';
    if (!state.message.trim()) e.message = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      
      if (response.ok) {
        setSent(true);
        setState({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow eyebrow-gradient">Contact</p>
          <h2 className="h2 mt-4">Ready to transform your customer support?</h2>
          <p className="mt-6 text-xl text-gray-600">
            Get started today or reach out to learn more about how Convo AI can help your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={state.name}
                  onChange={(e)=>setState({...state, name:e.target.value})}
                  required
                  className="input w-full"
                  placeholder="Your name"
                  disabled={loading}
                />
                {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={state.email}
                  onChange={(e)=>setState({...state, email:e.target.value})}
                  required
                  className="input w-full"
                  placeholder="you@example.com"
                  disabled={loading}
                />
                {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  value={state.message}
                  onChange={(e)=>setState({...state, message:e.target.value})}
                  required
                  className="input w-full min-h-[120px] resize-y"
                  placeholder="Tell us about your customer support needs"
                  disabled={loading}
                />
                {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
              </div>
              
              <button type="submit" className="btn w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {sent && <div className="text-green-600 text-center">Message sent. We'll get back to you shortly.</div>}
              {errors.submit && <div className="text-red-500 text-center">{errors.submit}</div>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have questions about setup, pricing, or how Convo AI can help your specific use case? 
                We're here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Support</h4>
                  <p className="text-gray-600">support@convoai.com</p>
                  <p className="text-sm text-gray-500">We typically respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone Support</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Live Chat</h4>
                  <p className="text-gray-600">Available 24/7</p>
                  <p className="text-sm text-gray-500">Instant support via our website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const FooterCta = () => {
  return (
    <footer className="relative mt-20">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}} />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1240px] px-6 md:px-8 py-16 md:py-24">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="font-display text-2xl font-bold text-white">Convo AI</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Intelligent voice agents that transform customer support. 
                Available 24/7, multilingual, and seamlessly integrated.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Product</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#setup" className="text-gray-300 hover:text-white transition-colors">Setup</a></li>
                <li><a href="#platforms" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Convo AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Made with ❤️ for better customer support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export all
export { };