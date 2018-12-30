/*
 * This file is part of the BibScan for Njuko package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {EventBus} from '@/events/EventBus';
import _Vue, {PluginObject} from 'vue';

/**
 * Event bus vue plugin.
 *
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
class VueEventBus {
    public static get plugin(): PluginObject<EventBus> {
        return {
            install: (Vue: typeof _Vue, options?: EventBus): void => {
                Vue.prototype.$eventBus = options ? options : new EventBus();
            },
        };
    }
}

export default VueEventBus.plugin;
