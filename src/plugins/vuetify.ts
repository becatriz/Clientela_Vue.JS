import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pt from 'vuetify/src/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { pt },
      current: 'pt',
    },
  icons: {
    iconfont: 'mdi',
  },
});
