
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import T from '../T';

const TestimonialsSection = () => {
  const { isRTL } = useLanguage();
  
  const testimonials = [
    {
      quote: 'testimonial1',
      author: 'parent1',
      role: 'Parent',
    },
    {
      quote: 'testimonial2',
      author: 'parent2',
      role: 'Parent',
    },
    {
      quote: 'testimonial3',
      author: 'parent3',
      role: 'Parent',
    },
  ];
  
  return (
    <section className="py-16 md:py-24 bg-jawaher-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <T t="testimonialsTitle" />
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-jawaher-yellow text-6xl font-serif mb-4">"</div>
              <blockquote className="mb-6 text-gray-300">
                <T t={testimonial.quote as any} />
              </blockquote>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`${isRTL ? 'ml-3' : 'mr-3'}`}>
                  <div className="h-12 w-12 bg-jawaher-yellow rounded-full flex items-center justify-center">
                    <span className="text-jawaher-dark text-lg font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="font-bold">
                    <T t={testimonial.author as any} />
                  </div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
