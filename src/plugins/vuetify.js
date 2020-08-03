import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const theme = {
  primary: '#9C27B0',
};

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
});
