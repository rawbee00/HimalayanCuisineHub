import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#040844', fontFamily: 'Yadri, serif' }}>
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#040844' }}>{t('contact.address.title')}</h3>
            <p className="text-gray-600 leading-relaxed">
              Av. Jose Antonio Tavio, 13, A<br />
              38630 Costa del Silencio<br />
              Santa Cruz de Tenerife
            </p>
          </div>

          {/* Phone */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#040844' }}>{t('contact.phone.title')}</h3>
            <a 
              href="tel:+34641114511" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              +34 641 11 45 11
            </a>
          </div>

          {/* Email */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#040844' }}>{t('contact.email.title')}</h3>
            <a 
              href="mailto:hcth.nepal@gmail.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              hcth.nepal@gmail.com
            </a>
          </div>

          {/* Hours */}
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#040844' }}>{t('contact.hours.title')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('contact.hours.days')}<br />
              <span className="font-medium">{t('contact.hours.time')}</span>
            </p>
          </div>
        </div>

        {/* Map or additional info section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: '#040844' }}>
            {t('contact.findUs.title')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            {t('contact.findUs.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+34641114511"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('contact.buttons.call')}
            </a>
            <a 
              href="mailto:hcth.nepal@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              {t('contact.buttons.email')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}