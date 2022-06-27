import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#000000',
            secondary: '#689F38',
            accent: '#FFFFFF',
            error: '#b71c1c',
          },
        },
      },
});
