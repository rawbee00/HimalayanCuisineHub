import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NewWelcome.module.css';

interface NewWelcomeProps {
  onEnter: () => void;
}

export default function NewWelcome({ onEnter }: NewWelcomeProps) {
  const { i18n } = useTranslation();
  
  // Ensure the language is set in the document
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-yatra text-white leading-tight drop-shadow-lg">
            {t('newWelcome.title')}
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-white mt-2 drop-shadow-md">
            {t('newWelcome.subtitle')}
          </p>
          <p className="text-xl md:text-2xl font-medium text-white mt-1 mb-8 drop-shadow-md">
            {t('newWelcome.tagline')}
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto mb-8 shadow-lg">
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            {t('newWelcome.welcomeText1')}
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            {t('newWelcome.welcomeText2')}
          </p>
        </div>
        
        <div className={styles.buttonContainer}>
          <button
            onClick={onEnter}
            className={styles.enterButton}
          >
            {t('newWelcome.buttonText')}
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
