
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import T from '../T';

const FleetSection = () => {
  const { isRTL } = useLanguage();
  
  const features = [
    {
      icon: <Check className="text-jawaher-purple" size={20} />,
      text: 'GPS Tracking System',
    },
    {
      icon: <Check className="text-jawaher-purple" size={20} />,
      text: 'RTA Licensed Drivers',
    },
    {
      icon: <Check className="text-jawaher-purple" size={20} />,
      text: 'Installed Cameras',
    },
    {
      icon: <Check className="text-jawaher-purple" size={20} />,
      text: 'Air Conditioning',
    },
    {
      icon: <Check className="text-jawaher-purple" size={20} />,
      text: 'Regular Maintenance',
    },
    {
      icon: <Check className="text-jawaher-purple" size={20} />,
      text: 'First Aid Kit',
    },
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <T t="fleetTitle" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            <T t="fleetDescription" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative h-96"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-x-8 top-0 bottom-0 z-10">
              <img 
                src="/assets-upload/flyer-02.png" 
                alt="School Bus" 
                className="w-full h-full object-cover rounded-lg shadow-xl" 
              />
            </div>
            <div className="absolute right-0 bottom-0 w-2/3 h-72">
              <img 
                src="/assets-upload/flyer-40.png" 
                alt="School Bus" 
                className="w-full h-full object-cover rounded-lg shadow-xl" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {isRTL ? 'مميزات أسطول حافلاتنا' : 'Our Fleet Features'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-purple-100 rounded-full p-1 mr-3">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">{isRTL ? 'السعة' : 'Capacity'}</h4>
                <p className="text-gray-600">30-55 {isRTL ? 'مقعد' : 'seats'}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">{isRTL ? 'مميزات السلامة' : 'Safety Features'}</h4>
                <p className="text-gray-600">{isRTL ? 'مطابقة لمعايير RTA' : 'RTA Compliant'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
