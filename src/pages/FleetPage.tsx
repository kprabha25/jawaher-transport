
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import T from '@/components/T';

const FleetPage = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Fleet - Jawaher Passengers Transport';
  }, []);

  const buses = [
    {
      id: 1,
      name: isRTL ? 'حافلة مدرسية كبيرة' : 'Large School Bus',
      description: isRTL 
        ? 'حافلات مدرسية كبيرة مجهزة بالكامل مع مقاعد مريحة وأحزمة أمان وتكييف هواء. مثالية للمسافات الطويلة ومجموعات الطلاب الكبيرة.'
        : 'Fully-equipped large school buses with comfortable seats, seat belts, and air conditioning. Perfect for long distances and large student groups.',
      capacity: '45-55',
      image: '/assets-upload/flyer-04.png',
      features: [
        isRTL ? 'مكيف هواء' : 'Air Conditioning',
        isRTL ? 'أحزمة أمان' : 'Seat Belts',
        isRTL ? 'نظام تتبع GPS' : 'GPS Tracking System',
        isRTL ? 'كاميرات مراقبة' : 'Surveillance Cameras',
        isRTL ? 'مقاعد مريحة' : 'Comfortable Seating',
        isRTL ? 'مساحة تخزين واسعة' : 'Ample Storage Space',
      ]
    },
    {
      id: 2,
      name: isRTL ? 'حافلة مدرسية متوسطة' : 'Medium School Bus',
      description: isRTL 
        ? 'حافلات مدرسية متوسطة الحجم توفر توازنًا مثاليًا بين السعة وسهولة التنقل. مجهزة بجميع ميزات السلامة المطلوبة من قبل هيئة الطرق والمواصلات.'
        : 'Medium-sized school buses offering a perfect balance between capacity and maneuverability. Equipped with all safety features required by RTA.',
      capacity: '30-40',
      image: '/assets-upload/flyer-05.png',
      features: [
        isRTL ? 'مكيف هواء' : 'Air Conditioning',
        isRTL ? 'أحزمة أمان' : 'Seat Belts',
        isRTL ? 'نظام تتبع GPS' : 'GPS Tracking System',
        isRTL ? 'كاميرات مراقبة' : 'Surveillance Cameras',
        isRTL ? 'مقاعد مريحة' : 'Comfortable Seating',
        isRTL ? 'سهولة الوصول' : 'Easy Accessibility',
      ]
    },
    {
      id: 3,
      name: isRTL ? 'حافلة مدرسية صغيرة' : 'Small School Bus',
      description: isRTL 
        ? 'حافلات مدرسية صغيرة مثالية للطرق الضيقة والمناطق السكنية. رشيقة وسهلة المناورة مع الحفاظ على جميع ميزات السلامة القياسية.'
        : 'Small school buses perfect for narrow roads and residential areas. Nimble and easy to maneuver while maintaining all standard safety features.',
      capacity: '15-25',
      image: '/assets-upload/flyer-03.png',
      features: [
        isRTL ? 'مكيف هواء' : 'Air Conditioning',
        isRTL ? 'أحزمة أمان' : 'Seat Belts',
        isRTL ? 'نظام تتبع GPS' : 'GPS Tracking System',
        isRTL ? 'كاميرات مراقبة' : 'Surveillance Cameras',
        isRTL ? 'مقاعد مريحة' : 'Comfortable Seating',
        isRTL ? 'مثالية للمناطق السكنية' : 'Perfect for Residential Areas',
      ]
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pb-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <T t="fleetTitle" />
              </motion.h1>
              <motion.div 
                className="h-1 w-24 bg-jawaher-red mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <motion.p 
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <T t="fleetDescription" />
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Fleet Gallery */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-16">
              {buses.map((bus, index) => (
                <motion.div 
                  key={bus.id}
                  className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className={`absolute -z-10 ${index % 2 !== 0 ? 'right-4' : 'left-4'} -top-4 w-full h-full bg-jawaher-yellow opacity-30 rounded-lg`}></div>
                      <img 
                        src={bus.image}
                        alt={bus.name}
                        className="w-5/6 h-auto rounded-lg shadow-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {bus.name}
                    </h2>
                    <p className={`text-gray-600 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {bus.description}
                    </p>
                    
                    <div className={`flex items-center mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      <span className="font-bold mr-2">
                        {isRTL ? 'السعة:' : 'Capacity:'}
                      </span>
                      <span className="bg-jawaher-red text-white px-3 py-1 rounded-full">
                        {bus.capacity} {isRTL ? 'مقعد' : 'seats'}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {isRTL ? 'المميزات:' : 'Features:'}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {bus.features.map((feature, fIndex) => (
                        <div key={fIndex} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Check className={`h-5 w-5 text-jawaher-red ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Fleet Stats */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isRTL ? 'أسطولنا بالأرقام' : 'Our Fleet by Numbers'}
              </h2>
              <div className="h-1 w-24 bg-jawaher-yellow mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-4xl font-bold text-jawaher-red mb-2">30+</div>
                <div className="text-xl font-bold mb-2">
                  {isRTL ? 'حافلات في الأسطول' : 'Buses in Fleet'}
                </div>
                <p className="text-gray-600">
                  {isRTL ? 'أسطول متنوع من الحافلات المدرسية لتلبية جميع احتياجات النقل' : 'A diverse fleet of school buses to meet all transportation needs'}
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-jawaher-red mb-2">100%</div>
                <div className="text-xl font-bold mb-2">
                  {isRTL ? 'متوافقة مع RTA' : 'RTA Compliant'}
                </div>
                <p className="text-gray-600">
                  {isRTL ? 'جميع حافلاتنا تلبي وتتجاوز معايير هيئة الطرق والمواصلات' : 'All our buses meet and exceed the Roads and Transport Authority standards'}
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-jawaher-red mb-2">2x</div>
                <div className="text-xl font-bold mb-2">
                  {isRTL ? 'فحوصات أمان شهرية' : 'Monthly Safety Checks'}
                </div>
                <p className="text-gray-600">
                  {isRTL ? 'نجري فحوصات سلامة شاملة مرتين في الشهر على جميع المركبات' : 'We perform comprehensive safety checks twice monthly on all vehicles'}
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-jawaher-red mb-2">24/7</div>
                <div className="text-xl font-bold mb-2">
                  {isRTL ? 'مراقبة الأسطول' : 'Fleet Monitoring'}
                </div>
                <p className="text-gray-600">
                  {isRTL ? 'مراقبة مستمرة لجميع الحافلات من خلال مركز التحكم الخاص بنا' : 'Continuous monitoring of all buses through our control center'}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FleetPage;
