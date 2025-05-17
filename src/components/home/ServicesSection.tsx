
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Bus, LocateFixed, UserCheck, Shield } from 'lucide-react';
import T from '../T';

const ServicesSection = () => {
  const { isRTL } = useLanguage();

  const services = [
    {
      icon: <Bus size={48} className="text-jawaher-red" />,
      title: 'service1Title',
      description: 'service1Description',
    },
    {
      icon: <LocateFixed size={48} className="text-jawaher-red" />,
      title: 'service2Title',
      description: 'service2Description',
    },
    {
      icon: <UserCheck size={48} className="text-jawaher-red" />,
      title: 'service3Title',
      description: 'service3Description',
    },
    {
      icon: <Shield size={48} className="text-jawaher-red" />,
      title: 'service4Title',
      description: 'service4Description',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <T t="servicesTitle" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            <T t="servicesDescription" />
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                <T t={service.title as any} />
              </h3>
              <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-center'}`}>
                <T t={service.description as any} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
