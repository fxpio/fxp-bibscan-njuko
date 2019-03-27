/*
 * This file is part of the Runr package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {Api} from '@/api/Api';

/**
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
declare module 'vue/types/vue' {
    interface Vue {
        $api: Api;
    }
}
