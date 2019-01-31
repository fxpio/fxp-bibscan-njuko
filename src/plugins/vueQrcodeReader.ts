/*
 * This file is part of the BibScan for Njuko package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Vue from 'vue';
/* tslint:disable:no-var-requires */
const QrcodeStream = require('vue-qrcode-reader/src').QrcodeStream;
require('vue-qrcode-reader/dist/vue-qrcode-reader.css');

/**
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
Vue.component('qrcode-stream', QrcodeStream);
