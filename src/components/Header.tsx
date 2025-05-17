
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import T from './T';

const Header = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm py-2'
          : ' bg-white/95 shadow-md text-black bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className={`text-3xl font-extrabold ${isRTL ? 'order-last' : 'order-first'}`}>
                <span className="text-jawaher-red">J</span>
                <span className="text-jawaher-dark">PT</span>
              </div>
              <div className={`ml-2 ${isRTL ? 'ml-0 mr-2' : ''}`}>
                <h1 className="text-xl font-bold">JAWAHER</h1>
                <p className="text-xs uppercase tracking-wider">Passengers Transport</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-jawaher-red transition-colors">
              <T t="home" />
            </Link>
            <Link to="/about" className="font-medium hover:text-jawaher-red transition-colors">
              <T t="about" />
            </Link>
            <Link to="/services" className="font-medium hover:text-jawaher-red transition-colors">
              <T t="services" />
            </Link>
            <Link to="/fleet" className="font-medium hover:text-jawaher-red transition-colors">
              <T t="fleet" />
            </Link>
            <Link to="/contact" className="font-medium hover:text-jawaher-red transition-colors">
              <T t="contactUs" />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full hover:bg-gray-100"
            >
              <Globe size={20} />
              <span className="ml-2 font-medium">{language === 'en' ? 'عربي' : 'EN'}</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="mr-2 rounded-full hover:bg-gray-100"
            >
              <Globe size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium py-2 hover:text-jawaher-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <T t="home" />
              </Link>
              <Link
                to="/about"
                className="font-medium py-2 hover:text-jawaher-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <T t="about" />
              </Link>
              <Link
                to="/services"
                className="font-medium py-2 hover:text-jawaher-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <T t="services" />
              </Link>
              <Link
                to="/fleet"
                className="font-medium py-2 hover:text-jawaher-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <T t="fleet" />
              </Link>
              <Link
                to="/contact"
                className="font-medium py-2 hover:text-jawaher-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <T t="contactUs" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
