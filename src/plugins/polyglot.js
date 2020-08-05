import Vue from 'vue';
import Polyglot from 'vue-polyglot';
import locales from '../locales';

Vue.use(Polyglot, {
  defaultLanguage: 'en',
  languagesAvailable: ['en', 'fr'],
});
Vue.locales(locales);
