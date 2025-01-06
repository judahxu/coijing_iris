'use client'
import React, { useState, useEffect } from 'react';
import { MessageSquare, BarChart, Zap, Users, ChevronRight, ArrowRight,LucideIcon  } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '~/components/LanguageSwitch';

interface SolutionCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Header = () => {
  const { t } = useTranslation('home');  // 指定命名空间

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChatClick = () => {
    // 检查 voiceflow 对象是否已加载
      window?.voiceflow?.chat?.open()
    
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">IRIS</span>
          </div>
          <nav className="hidden md:flex space-x-8 flex items-center">
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              {t('header.features')}
            </a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-600">
              {t('header.solutions')}
            </a>
            <a href="#cases" className="text-gray-700 hover:text-blue-600">
              {t('header.cases')}
            </a>
            <button 
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50" 
              onClick={handleChatClick}
            >
              {t('header.try')}
            </button>
            <LanguageSwitch/>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  const { t } = useTranslation('home');
  const handleChatClick = () => {
    // 检查 voiceflow 对象是否已加载
      window?.voiceflow?.chat?.open()
  };
  return(

    <div className="relative pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                {t('hero.title.prefix')}
                <span className="text-blue-600">{t('hero.title.highlight')}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl">
                {t('hero.description')}
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <button 
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
                  onClick={handleChatClick}
                >
                  {t('hero.button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <img
                    src="/images/kefu.png"
                    alt="AI客服界面展示"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const FeatureCard = ({ icon: Icon, title, description }:SolutionCardProps) => (
  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const { t } = useTranslation('home');
  const features = [
    {
      icon: MessageSquare,
      title: t('features.cards.conversation.title'),
      description: t('features.cards.conversation.description')
    },
    {
      icon: Zap,
      title: t('features.cards.response.title'),
      description: t('features.cards.response.description')
    },
    {
      icon: BarChart,
      title: t('features.cards.analysis.title'),
      description: t('features.cards.analysis.description')
    },
    {
      icon: Users,
      title: t('features.cards.collaboration.title'),
      description: t('features.cards.collaboration.description')
    }
  ];
  return(
    <section id="features" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">{t('features.title')}</h2>
        <p className="mt-4 text-xl text-gray-600">{t('features.subtitle')}</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  </section>
)};

const Solutions = () => {
  const { t } = useTranslation('home');
  const industries = [
    {
      name: t('solutions.industries.retail.name'),
      description: t('solutions.industries.retail.description'),
      url: '/images/mall.png'
    },
    {
      name: t('solutions.industries.finance.name'),
      description: t('solutions.industries.finance.description'),
      url: '/images/baoxian.png'
    },
    {
      name: t('solutions.industries.government.name'),
      description: t('solutions.industries.government.description'),
      url: '/images/zhengwu.png'
    }
  ];
  return(
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('solutions.title')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('solutions.subtitle')}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={industry.url}
                alt={industry.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <button className="text-blue-600 hover:text-blue-700 flex items-center">
                  {t('solutions.learnMore')}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Cases = () => {
  const { t } = useTranslation('home');
  const cases = [
    {
      name: t('cases.items.cabinet.name'),
      description: t('cases.items.cabinet.description'),
      metrics: {
        efficiency: t('cases.items.cabinet.metrics.efficiency'),
        cost: t('cases.items.cabinet.metrics.cost')
      },
      url: '/images/kuaidi.png'
    },
    {
      name: t('cases.items.charging.name'),
      description: t('cases.items.charging.description'),
      metrics: {
        efficiency: t('cases.items.charging.metrics.efficiency'),
        cost: t('cases.items.charging.metrics.cost')
      },
      url: '/images/chongdian.png'
    }
  ];

  return(
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('cases.title')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('cases.subtitle')}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="mr-4">{item.metrics.efficiency}</span>
                  <span>{item.metrics.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

const CTASection = () => {
  const { t } = useTranslation('home');
  const handleChatClick = () => {
    // 检查 voiceflow 对象是否已加载
      window?.voiceflow?.chat?.open()
  };
  return(
  <section className="py-20 bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        {t('cta.title')}
      </h2>
      <p className="text-xl text-white/90 mb-8">
        {t('cta.subtitle')}
      </p>
      <button 
        className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        onClick={handleChatClick}
      >
        {t('cta.button')}
      </button>
    </div>
  </section>
)};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Cases />
        <CTASection />
      </main>
    </div>
  );
};

export default HomePage;