
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Clock, Users, School } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import T from '@/components/T';

const AboutPage = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us - Jawaher Passengers Transport';
  }, []);

  const stats = [
    { 
      icon: <Clock className="text-jawaher-red h-8 w-8" />,
      value: '15+', 
      label: 'yearsExperience',
      description: isRTL ? 'سنوات من الخبرة في مجال النقل المدرسي' : 'Years of experience in school transportation'
    },
    { 
      icon: <Users className="text-jawaher-red h-8 w-8" />,
      value: '500+', 
      label: 'satisfiedClients',
      description: isRTL ? 'أولياء أمور راضون عن خدماتنا' : 'Satisfied parents with our services'
    },
    { 
      icon: <Award className="text-jawaher-red h-8 w-8" />,
      value: '30+', 
      label: 'busesInFleet',
      description: isRTL ? 'حافلة مدرسية حديثة في أسطولنا' : 'Modern school buses in our fleet'
    },
    { 
      icon: <School className="text-jawaher-red h-8 w-8" />,
      value: '25+', 
      label: 'schoolsServed',
      description: isRTL ? 'مدرسة نقدم لها خدمات النقل' : 'Schools we provide transportation for'
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
                <T t="aboutTitle" />
              </motion.h1>
              <motion.div 
                className="h-1 w-24 bg-jawaher-red mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-jawaher-red mb-2">{stat.value}</div>
                  <div className="font-bold mb-2"><T t={stat.label as any} /></div>
                  <p className="text-gray-600">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={`text-3xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL ? 'من نحن' : 'Who We Are'}
                </h2>
                <div className={`text-gray-600 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p>
                    {isRTL 
                      ? 'جواهر لنقل الركاب هي شركة رائدة في مجال خدمات النقل المدرسي في دبي. تأسست الشركة بهدف توفير وسائل نقل آمنة وموثوقة ومريحة للطلاب من وإلى المدارس.'
                      : 'Jawaher Passengers Transport is a leading school transportation service provider in Dubai. The company was established with the goal of providing safe, reliable, and comfortable transportation for students to and from schools.'
                    }
                  </p>
                  <p>
                    {isRTL 
                      ? 'نحن نفتخر بتقديم خدمات نقل عالية الجودة مع التركيز على سلامة وراحة الطلاب. يتمتع سائقونا بخبرة واسعة وحاصلون على تراخيص من هيئة الطرق والمواصلات (RTA)، مما يضمن أعلى معايير السلامة والمهنية.'
                      : 'We pride ourselves on delivering high-quality transportation services with a focus on student safety and comfort. Our drivers are experienced and licensed by the Roads and Transport Authority (RTA), ensuring the highest standards of safety and professionalism.'
                    }
                  </p>
                  <p>
                    {isRTL 
                      ? 'لدينا أسطول حديث من الحافلات المجهزة بأحدث تقنيات السلامة، بما في ذلك أنظمة تتبع GPS والكاميرات المثبتة وأحزمة الأمان لكل مقعد. نحن نقدم خدماتنا لمجموعة واسعة من المدارس في دبي والمناطق المحيطة بها.'
                      : 'We operate a modern fleet of buses equipped with the latest safety features, including GPS tracking systems, installed cameras, and seat belts for each seat. We provide our services to a wide range of schools across Dubai and the surrounding areas.'
                    }
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="/assets-upload/flyer-02.png" 
                  alt="Our Team" 
                  className="w-5/6 h-auto rounded-lg shadow-xl" 
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-jawaher-red p-8 rounded-lg text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL ? 'مهمتنا' : 'Our Mission'}
                </h3>
                <p className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL 
                    ? 'مهمتنا هي توفير خدمة نقل مدرسي آمنة وموثوقة وفعالة، تضمن وصول الطلاب إلى المدرسة والعودة إلى المنزل بسلام وفي الوقت المحدد. نحن نسعى جاهدين للتميز في كل جانب من جوانب خدمتنا، من صيانة المركبات إلى تدريب السائقين والتواصل مع أولياء الأمور.'
                    : 'Our mission is to provide safe, reliable, and efficient school transportation that ensures students arrive at school and return home safely and on time. We strive for excellence in every aspect of our service, from vehicle maintenance to driver training and parent communication.'
                  }
                </p>
              </motion.div>

              <motion.div 
                className="bg-jawaher-green p-8 rounded-lg text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL ? 'رؤيتنا' : 'Our Vision'}
                </h3>
                <p className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL 
                    ? 'رؤيتنا هي أن نكون الخيار الأول والمفضل لخدمات النقل المدرسي في دبي والإمارات العربية المتحدة. نسعى لتحقيق ذلك من خلال الابتكار المستمر، وتبني أحدث التقنيات، والالتزام بأعلى معايير السلامة والموثوقية.'
                    : 'Our vision is to be the premier and preferred provider of school transportation services in Dubai and the UAE. We aim to achieve this through continuous innovation, embracing the latest technologies, and maintaining the highest standards of safety and reliability.'
                  }
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

export default AboutPage;
