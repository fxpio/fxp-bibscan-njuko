/*
 * This file is part of the BibScan for Njuko package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {DrawerModuleState} from '@/stores/drawer/DrawerModuleState';
import {EditionModuleState} from '@/stores/edition/EditionModuleState';
import {I18nModuleState} from '@/stores/i18n/I18nModuleState';
import {PrinterModuleState} from '@/stores/printer/PrinterModuleState';
import {SnackbarModuleState} from '@/stores/snackbar/SnackbarModuleState';

/**
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
export interface RootState extends DrawerModuleState, EditionModuleState, I18nModuleState,
                                   PrinterModuleState, SnackbarModuleState {
}