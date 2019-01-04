import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en from './en.json';
import zh from './zh.json';

i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en,
      zh,
    },
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });

export default i18n;
