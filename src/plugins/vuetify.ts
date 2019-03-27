/*
 * This file is part of the Runr package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Vue from 'vue';
import Vuetify from 'vuetify';
import vuetifyTranslationFr from '@/translations/vuetify/fr';

/**
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#43748d',
    secondary: '#4d89a0',
    accent: '#1e88e5',
    error: '#f44336',
    warning: '#f9a825',
    info: '#4fc3f7',
    success: '#4caf50',
  },
  lang: {
    locales: {
      fr: vuetifyTranslationFr,
    },
  },
});
