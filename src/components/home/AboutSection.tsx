
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import T from '../T';

const AboutSection = () => {
  const { isRTL } = useLanguage();

  const stats = [
    { value: '15+', label: 'yearsExperience' },
    { value: '30+', label: 'busesInFleet' },
    { value: '500+', label: 'satisfiedClients' },
    { value: '25+', label: 'schoolsServed' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="bg-jawaher-yellow absolute top-0 left-0 w-3/4 h-3/4 -z-10 transform -translate-x-6 -translate-y-6"></div>
            <img 
              src="/assets-upload/flyer-01.png" 
              alt="Jawaher Transport Team" 
              className="w-4/6 h-auto object-cover shadow-xl z-10" 
            />
            <div className="bg-jawaher-red absolute bottom-0 right-0 w-2/5 h-2/5 -z-10 transform translate-x-6 translate-y-6"></div>
             */}
             <div className="bg-jawaher-yellow absolute top-0 left-0 w-1/2 h-1/2 -z-10 transform -translate-x-4 -translate-y-4"></div>
  <img 
    src="/assets-upload/flyer-01.png" 
    alt="Jawaher Transport Team" 
    className="w-4/6 h-auto object-cover shadow-xl z-10 mx-auto" 
  />
  <div className="bg-jawaher-red absolute bottom-0 right-0 w-1/4 h-1/4 -z-10 transform translate-x-4 translate-y-4"></div>

          </motion.div>

          {/* Content */}
          <motion.div 
            className={`${isRTL ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <T t="aboutTitle" />
            </h2>
            <p className="text-gray-600 mb-8">
              <T t="aboutDescription" />
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-jawaher-red mb-1">{stat.value}</div>
                  <div className="text-gray-600"><T t={stat.label as any} /></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
