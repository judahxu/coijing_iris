// components/LanguageSwitch.tsx
'use client';
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../app/i18n/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';

interface LanguageSwitchProps {
  variant?: 'default' | 'home';
  isScrolled?: boolean;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ variant = 'default', isScrolled = false }) => {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  // const router = useRouter();

  const handleLanguageChange = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
    // pathname.replace(`/${language}`, `/${newLang}`);

  };

  return (
    <button
      onClick={handleLanguageChange}
      className="flex items-center space-x-1 px-2 py-1 rounded-md text-gray-700">
      <Globe className="w-4 h-4" />
      <span>{language === 'zh' ? '简体中文' : 'English'}</span>
    </button>
  );
};

export default LanguageSwitch;