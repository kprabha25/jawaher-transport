
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, TranslationKey } from '@/utils/translations';

interface TProps {
  t: TranslationKey;
  className?: string;
}

export const T = ({ t, className }: TProps) => {
  const { language } = useLanguage();
  return <span className={className}>{getTranslation(t, language)}</span>;
};

export default T;
