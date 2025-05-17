
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = language === 'en' ? '404 - Page Not Found' : '404 - الصفحة غير موجودة';
  }, [location.pathname, language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-jawaher-red mb-4">404</h1>
          <p className="text-2xl font-bold mb-8">
            {language === 'en' ? 'Page Not Found' : 'الصفحة غير موجودة'}
          </p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {language === 'en' 
              ? "We couldn't find the page you were looking for. Let's get you back on track." 
              : "لم نتمكن من العثور على الصفحة التي تبحث عنها. دعنا نعيدك إلى المسار الصحيح."
            }
          </p>
          <Link to="/">
            <Button className="bg-jawaher-red hover:bg-red-700 text-white px-8 py-3 text-lg font-bold">
              {language === 'en' ? 'Back to Home' : 'العودة للصفحة الرئيسية'}
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
