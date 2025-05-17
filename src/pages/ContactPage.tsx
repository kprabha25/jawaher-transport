
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import T from '@/components/T';

const ContactPage = () => {
  const { isRTL } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us - Jawaher Passengers Transport';
  }, []);
  
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
        title: isRTL ? 'تم إرسال الرسالة' : 'Message Sent',
        description: isRTL 
          ? 'تم إرسال رسالتك بنجاح. سنرد عليك قريبًا!' 
          : 'Your message has been sent successfully. We will get back to you soon!',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };
  
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
                <T t="contactTitle" />
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
                <T t="contactDescription" />
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Contact Info and Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={`text-3xl font-bold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
                </h2>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="space-y-8">
                    <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`${isRTL ? 'ml-4' : 'mr-4'}`}>
                        <div className="bg-jawaher-red rounded-full w-16 h-16 flex items-center justify-center">
                          <MapPin className="text-white h-8 w-8" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {isRTL ? 'العنوان' : 'Address'}
                        </h3>
                        <p className="text-gray-600">
                          <T t="address" />
                        </p>
                      </div>
                    </div>
                    
                    <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`${isRTL ? 'ml-4' : 'mr-4'}`}>
                        <div className="bg-jawaher-red rounded-full w-16 h-16 flex items-center justify-center">
                          <Phone className="text-white h-8 w-8" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {isRTL ? 'الهاتف' : 'Phone'}
                        </h3>
                        <p className="text-gray-600">
                          <a href="tel:00971558595754" className="hover:text-jawaher-red transition-colors">
                            00971558595754
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`${isRTL ? 'ml-4' : 'mr-4'}`}>
                        <div className="bg-jawaher-red rounded-full w-16 h-16 flex items-center justify-center">
                          <Mail className="text-white h-8 w-8" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {isRTL ? 'البريد الإلكتروني' : 'Email'}
                        </h3>
                        <p className="text-gray-600">
                          <a href="mailto:jawaherpassengers@gmail.com" className="hover:text-jawaher-red transition-colors">
                            jawaherpassengers@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`${isRTL ? 'ml-4' : 'mr-4'}`}>
                        <div className="bg-jawaher-red rounded-full w-16 h-16 flex items-center justify-center">
                          <Clock className="text-white h-8 w-8" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {isRTL ? 'ساعات العمل' : 'Working Hours'}
                        </h3>
                        <p className="text-gray-600">
                          <T t="hours" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={`text-3xl font-bold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>
                
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="space-y-6">
                    <div>
                      <label 
                        htmlFor="name"
                        className={`block mb-2 font-medium ${isRTL ? 'text-right' : ''}`}
                      >
                        <T t="formName" /> *
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={isRTL ? 'text-right' : ''}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label 
                          htmlFor="email"
                          className={`block mb-2 font-medium ${isRTL ? 'text-right' : ''}`}
                        >
                          <T t="formEmail" /> *
                        </label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={isRTL ? 'text-right' : ''}
                          required
                        />
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="phone"
                          className={`block mb-2 font-medium ${isRTL ? 'text-right' : ''}`}
                        >
                          <T t="formPhone" /> *
                        </label>
                        <Input 
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className={isRTL ? 'text-right' : ''}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="subject"
                        className={`block mb-2 font-medium ${isRTL ? 'text-right' : ''}`}
                      >
                        {isRTL ? 'الموضوع' : 'Subject'} *
                      </label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={isRTL ? 'text-right' : ''}
                        required
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="message"
                        className={`block mb-2 font-medium ${isRTL ? 'text-right' : ''}`}
                      >
                        <T t="formMessage" /> *
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={isRTL ? 'text-right' : ''}
                        rows={5}
                        required
                      />
                    </div>
                    
                    <div className={`${isRTL ? 'text-right' : ''}`}>
                      <Button 
                        type="submit"
                        disabled={loading}
                        className="bg-jawaher-red hover:bg-red-700 text-white font-bold py-3 px-8"
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
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {isRTL ? 'موقعنا' : 'Our Location'}
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3350217652628!2d55.324094!3d25.277824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d386b2f1c8b%3A0xb920052c6a9da28!2sHor%20Al%20Anz%2C%20Dubai!5e0!3m2!1sen!2sae!4v1660000000000!5m2!1sen!2sae" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
