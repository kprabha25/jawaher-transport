
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import T from '../T';

const CTASection = () => {
  const { isRTL } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-jawaher-yellow text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <T t="ctaTitle" />
            </h2>
            <p className={`text-xl mb-8 text-gray-200 ${isRTL ? 'text-right' : 'text-left'}`}>
              <T t="ctaDescription" />
            </p>
            <Link to="/contact">
              <Button 
                className="bg-white text-jawaher-red hover:bg-gray-100 font-bold text-lg px-8 py-6"
              >
                <T t="ctaButton" />
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-jawaher-dark/20 rounded-lg"></div>
              <img 
                src="/assets-upload/flyer-04.png" 
                alt="School Bus" 
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
