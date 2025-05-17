
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Bus, LocateFixed, UserCheck, Shield, Clock, Calendar, Route, Car } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import T from '@/components/T';

const ServicesPage = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services - Jawaher Passengers Transport';
  }, []);
  
  const services = [
    {
      icon: <Bus size={48} className="text-jawaher-red" />,
      title: isRTL ? 'النقل المدرسي' : 'School Transportation',
      description: isRTL 
        ? 'نقدم خدمات نقل آمنة وموثوقة للطلاب من وإلى المدارس مع التركيز على الراحة والسلامة. تم تجهيز حافلاتنا بأحدث ميزات السلامة.'
        : 'We provide safe and reliable transportation services for students to and from schools with a focus on comfort and safety. Our buses are equipped with the latest safety features.'
    },
    {
      icon: <LocateFixed size={48} className="text-jawaher-red" />,
      title: isRTL ? 'نظام تتبع GPS' : 'GPS Tracking System',
      description: isRTL 
        ? 'جميع حافلاتنا مجهزة بأنظمة تتبع GPS تسمح للوالدين بمتابعة موقع أطفالهم في الوقت الفعلي. هذا يوفر راحة البال والتحكم الكامل.'
        : 'All our buses are equipped with GPS tracking systems that allow parents to monitor their children\'s location in real-time. This provides peace of mind and complete control.'
    },
    {
      icon: <UserCheck size={48} className="text-jawaher-red" />,
      title: isRTL ? 'سائقون مرخصون من RTA' : 'RTA Licensed Drivers',
      description: isRTL 
        ? 'يحمل جميع سائقينا تراخيص من هيئة الطرق والمواصلات (RTA) ويخضعون لتدريب شامل في مجال سلامة النقل المدرسي وإدارة الطلاب.'
        : 'All our drivers hold licenses from the Roads and Transport Authority (RTA) and undergo comprehensive training in school transportation safety and student management.'
    },
    {
      icon: <Shield size={48} className="text-jawaher-red" />,
      title: isRTL ? 'إجراءات السلامة' : 'Safety Measures',
      description: isRTL 
        ? 'نضع السلامة على رأس أولوياتنا. تشمل إجراءات السلامة لدينا كاميرات مثبتة داخل الحافلات، وصيانة منتظمة للمركبات، وفحوصات سلامة يومية.'
        : 'We prioritize safety above all else. Our safety measures include installed cameras inside the buses, regular vehicle maintenance, and daily safety checks.'
    },
    {
      icon: <Calendar size={48} className="text-jawaher-red" />,
      title: isRTL ? 'عقود طويلة وقصيرة الأجل' : 'Long and Short Term Contracts',
      description: isRTL 
        ? 'نقدم خيارات تعاقد مرنة تناسب احتياجاتك، سواء كنت تبحث عن خدمات نقل للعام الدراسي بأكمله أو لفترات أقصر.'
        : "We offer flexible contract options to suit your needs, whether you're looking for transportation services for the entire academic year or for shorter periods."
    },
    {
      icon: <Route size={48} className="text-jawaher-red" />,
      title: isRTL ? 'تغطية واسعة في دبي' : 'Wide Coverage in Dubai',
      description: isRTL 
        ? 'نقدم خدماتنا في جميع أنحاء دبي، مع طرق مخصصة مصممة لتقليل وقت التنقل وضمان وصول الطلاب في الوقت المحدد.'
        : 'We provide our services throughout Dubai, with dedicated routes designed to minimize commute times and ensure students arrive on time.'
    },
    {
      icon: <Clock size={48} className="text-jawaher-red" />,
      title: isRTL ? 'خدمة على مدار الساعة' : '24/7 Support',
      description: isRTL 
        ? 'فريق دعم متاح على مدار الساعة طوال أيام الأسبوع للإجابة على أسئلتك ومعالجة أي مخاوف تتعلق بنقل أطفالك.'
        : 'Our support team is available 24/7 to answer your questions and address any concerns regarding your children\'s transportation.'
    },
    {
      icon: <Car size={48} className="text-jawaher-red" />,
      title: isRTL ? 'أسطول حديث من الحافلات' : 'Modern Bus Fleet',
      description: isRTL 
        ? 'نعمل بأسطول حديث من الحافلات المدرسية المجهزة بأحدث التقنيات ووسائل الراحة لضمان تجربة نقل مريحة وآمنة.'
        : 'We operate a modern fleet of school buses equipped with the latest technology and amenities to ensure a comfortable and safe transportation experience.'
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
                <T t="servicesTitle" />
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
                <T t="servicesDescription" />
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-center'}`}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isRTL ? 'كيف نعمل' : 'How We Work'}
              </h2>
              <div className="h-1 w-24 bg-jawaher-yellow mx-auto mb-8"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Process Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-jawaher-red"></div>
                
                {/* Steps */}
                <div className="space-y-24">
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-jawaher-red text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-10">
                        1
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-4 text-center">
                        {isRTL ? 'الاتصال والتسجيل' : 'Contact and Registration'}
                      </h3>
                      <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-center'}`}>
                        {isRTL 
                          ? 'اتصل بنا لمناقشة متطلباتك وتسجيل طفلك في خدمة النقل المدرسي لدينا. سنقدم لك معلومات مفصلة حول المسارات والأوقات والأسعار.'
                          : 'Contact us to discuss your requirements and register your child for our school transportation service. We will provide you with detailed information about routes, times, and prices.'
                        }
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-jawaher-red text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-10">
                        2
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-4 text-center">
                        {isRTL ? 'تخطيط المسار' : 'Route Planning'}
                      </h3>
                      <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-center'}`}>
                        {isRTL 
                          ? 'نقوم بتخطيط أفضل مسار للنقل يضمن وصول طفلك إلى المدرسة في الوقت المناسب مع تقليل وقت التنقل. نراعي موقع منزلك والمدرسة لإنشاء جدول زمني مثالي.'
                          : 'We plan the optimal transportation route to ensure your child arrives at school on time while minimizing commute time. We consider your home location and school to create an ideal schedule.'
                        }
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-jawaher-red text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-10">
                        3
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-4 text-center">
                        {isRTL ? 'التنفيذ والمراقبة' : 'Execution and Monitoring'}
                      </h3>
                      <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-center'}`}>
                        {isRTL 
                          ? 'نبدأ خدمة النقل وفقًا للجدول المتفق عليه. يمكنك تتبع الحافلة في الوقت الفعلي من خلال نظام GPS الخاص بنا، وسيتم إخطارك عندما يصل طفلك إلى المدرسة أو المنزل.'
                          : 'We begin transportation service according to the agreed schedule. You can track the bus in real-time through our GPS system, and you will be notified when your child arrives at school or home.'
                        }
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
