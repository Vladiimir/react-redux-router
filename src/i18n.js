import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import backend from 'i18next-xhr-backend';

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .use(backend)
  .init({
    ns: ['common'],
    defaultNS: 'common',
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
