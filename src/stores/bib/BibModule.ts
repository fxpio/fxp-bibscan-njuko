/*
 * This file is part of the BibScan for Njuko package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {BibModuleState} from '@/stores/bib/BibModuleState';
import {BibState} from '@/stores/bib/BibState';
import {GetterTree, Module, MutationTree} from 'vuex';

/**
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
export class BibModule<R extends BibModuleState> implements Module<BibState, R> {
    private static readonly DISTANCE_ALIASES: Record<string, string> = {
        '42 km': 'M',
        '21 km': 'SM',
    };

    public get namespaced(): boolean {
        return true;
    }

    public get state(): BibState {
        const useAlias = localStorage.getItem('bib:useAlias');

        return {
            useAlias: null === useAlias ? true : 'true' === useAlias,
        };
    }

    public get getters(): GetterTree<BibState, R> {
        return {
            getAlias() {
                return (distance: number, unit: string): string => {
                    return BibModule.DISTANCE_ALIASES[distance + ' ' + unit];
                };
            },
        };
    }

    public get mutations(): MutationTree<BibState> {
        return {
            toggleUseAlias(state: BibState, useAlias?: boolean): void {
                state.useAlias = undefined === useAlias ? !state.useAlias : useAlias;
                localStorage.setItem('bib:useAlias', state.useAlias ? 'true' : 'false');
            },
        };
    }
}