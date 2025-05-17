
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import T from '../T';

const ContactSection = () => {
  const { isRTL } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent',
        description: 'Your message has been sent successfully. We will get back to you soon!',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };
  
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
            <T t="contactTitle" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            <T t="contactDescription" />
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-2xl font-bold mb-6">
                {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              
              <ul className="space-y-6">
                <li className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`${isRTL ? 'ml-4' : 'mr-4'}`}>
                    <div className="bg-jawaher-red rounded-full w-12 h-12 flex items-center justify-center">
                      <MapPin className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      {isRTL ? 'العنوان' : 'Address'}
                    </h4>
                    <p className="text-gray-600"><T t="address" /></p>
                  </div>
                </li>
                
                <li className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`${isRTL ? 'ml-4' : 'mr-4'}`}>
                    <div className="bg-jawaher-red rounded-full w-12 h-12 flex items-center justify-center">
                      <Phone className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      {isRTL ? 'الهاتف' : 'Phone'}
                    </h4>
                    <p className="text-gray-600">
                      <a href="tel:00971558595754" className="hover:text-jawaher-red transition-colors">
                        00971558595754
                      </a>
                    </p>
                  </div>
                </li>
                
                <li className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`${isRTL ? 'ml-4' : 'mr-4'}`}>
                    <div className="bg-jawaher-red rounded-full w-12 h-12 flex items-center justify-center">
                      <Mail className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      {isRTL ? 'البريد الإلكتروني' : 'Email'}
                    </h4>
                    <p className="text-gray-600">
                      <a href="mailto:jawaherpassengers@gmail.com" className="hover:text-jawaher-red transition-colors">
                        jawaherpassengers@gmail.com
                      </a>
                    </p>
                  </div>
                </li>
                
                <li className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`${isRTL ? 'ml-4' : 'mr-4'}`}>
                    <div className="bg-jawaher-red rounded-full w-12 h-12 flex items-center justify-center">
                      <Clock className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      {isRTL ? 'ساعات العمل' : 'Working Hours'}
                    </h4>
                    <p className="text-gray-600">9:00 AM - 9:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className={`text-2xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <T t="formName" />
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      <T t="formEmail" />
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="phone" 
                      className={`block mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      <T t="formPhone" />
                    </label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <T t="formMessage" />
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}
                    rows={5}
                    required
                  />
                </div>
                
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto bg-jawaher-red hover:bg-red-700 text-white font-bold py-3 px-8"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>{isRTL ? 'جاري الإرسال...' : 'Sending...'}</span>
                      </div>
                    ) : (
                      <T t="formSubmit" />
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
