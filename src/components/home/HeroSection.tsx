
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import T from '../T';
const images = [
  '/assets-upload/banner-01.jpg',
  '/assets-upload/banner-02.jpg',
  '/assets-upload/banner-03.jpg',
];

const HeroSection = () => {
  const { language, isRTL } = useLanguage();
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url('/assets-upload/255e1fb3-7f89-4e07-9dee-e08e9e143833.png')`,
          filter: 'brightness(0.4)',
        }}
      ></div> */}

      {/* Motion Carousel Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${images[index]}')`,
            filter: 'brightness(0.7)',
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className={`max-w-3xl ${isRTL ? 'text-right ml-auto' : 'text-left'}`}>
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <T t="heroTitle" />
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <T t="heroSubtitle" />
          </motion.p>
          <motion.div 
            className={`flex space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <RouterLink to="/about">
            <Button 
              className="bg-jawaher-yellow hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg"
            >
              <T t="learnMore" />
            </Button>
            </RouterLink>
            <RouterLink to="/contact">
              <Button 
                className="bg-jawaher-red hover:bg-red-700 text-white font-bold px-8 py-6 text-lg"
                variant="outline"
              >
                <T t="contactNow" />
              </Button>
            </RouterLink>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
