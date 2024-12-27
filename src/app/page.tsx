'use client'
import React, { useState, useEffect } from 'react';
import { MessageSquare, BarChart, Zap, Users, ChevronRight, ArrowRight,LucideIcon  } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Header = () => {
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
            <a href="#features" className="text-gray-700 hover:text-blue-600">产品功能</a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-600">解决方案</a>
            <a href="#cases" className="text-gray-700 hover:text-blue-600">客户案例</a>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50" onClick={handleChatClick}>
              免费体验
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
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
                智能客服
                <span className="text-blue-600">重新定义服务体验</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl">
                基于大语言模型的新一代智能客服系统，为企业打造7*24小时全天候的智能服务能力
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700" onClick={handleChatClick}>
                  开始使用
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <img
                    src="/kefu.png"
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

const Features = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">产品优势</h2>
        <p className="mt-4 text-xl text-gray-600">多维度提升客服效率与服务质量</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          icon={MessageSquare}
          title="智能对话"
          description="基于大语言模型的深度理解能力，实现自然流畅的多轮对话"
        />
        <FeatureCard
          icon={Zap}
          title="高效响应"
          description="7*24小时全天候服务，毫秒级响应，显著提升客户满意度"
        />
        <FeatureCard
          icon={BarChart}
          title="数据分析"
          description="全方位的数据分析和可视化，助力企业持续优化服务质量"
        />
        <FeatureCard
          icon={Users}
          title="无缝协同"
          description="智能分流与人机协同，打造完整的客服服务生态"
        />
      </div>
    </div>
  </section>
);

const Solutions = () => {
  const industrys: Record<string, string>[] = [
    {
      name:'电商零售',
      url:'/mall.png'
    },
    {
      name:'金融保险',
      url:'/baoxian.png'
    },
    {
      name:'政务服务',
      url:'/zhengwu.png'
    }
  ]
  return(
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">解决方案</h2>
          <p className="mt-4 text-xl text-gray-600">覆盖多个行业的专业解决方案</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industrys.map((industry, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={industry.url}
                alt={industry.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-4">为{industry.name}行业提供专业的智能客服解决方案</p>
                <button className="text-blue-600 hover:text-blue-700 flex items-center">
                  了解更多
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

  const caseDatas: Record<string, string>[] = [
    {
      name:'智能柜',
      url:'/kuaidi.png'
    },
    {
      name:'充电桩',
      url:'/chongdian.png'
    },
  ]

  return(
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">客户案例</h2>
          <p className="mt-4 text-xl text-gray-600">来自各行业的成功案例</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseDatas.map((item,index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">智能客服帮助企业提升服务效率，降低运营成本</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="mr-4">效率提升 80%</span>
                  <span>成本降低 50%</span>
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
  const handleChatClick = () => {
    // 检查 voiceflow 对象是否已加载
      window?.voiceflow?.chat?.open()
  };
  return(
  <section className="py-20 bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        开启智能客服新时代
      </h2>
      <p className="text-xl text-white/90 mb-8">
        立即体验全新的客服体验
      </p>
      <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors" onClick={handleChatClick}>
        免费试用
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