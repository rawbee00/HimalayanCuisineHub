import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h4 className="yadri-font text-2xl font-bold mb-4">{t('footer.title')}</h4>
            <p className="mb-2">{t('footer.subtitle')}</p>
            <p className="text-gray-300">{t('footer.tagline')}</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">{t('footer.hours.title')}</h4>
            <p className="text-gray-300">{t('footer.hours.days')}</p>
            <p className="text-gray-300 font-medium">{t('footer.hours.time')}</p>
          </div>
          <div className="text-center md:text-right">
            <h5 className="font-semibold mb-4">{t('footer.contact')}</h5>
            <p className="text-gray-300 mb-1">+34 641 11 45 11</p>
            <p className="text-gray-300 mb-1">hcth.nepal@gmail.com</p>
            <p className="text-gray-300">Av. Jose Antonio Tavio, 13, A</p>
            <p className="text-gray-300">38630 Costa del Silencio</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
