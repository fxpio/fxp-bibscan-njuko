<!--
This file is part of the Runr package.

(c) François Pluchino <francois.pluchino@gmail.com>

For the full copyright and license information, please view the LICENSE
file that was distributed with this source code.
-->

<template>
  <v-container>
    <v-row no-gutters justify="center" align-content="space-between">
      <v-col cols="12" sm="10" md="8" xl="6">
        <v-subheader class="primary--text">
          {{ $t('views.settings.account') }}
        </v-subheader>
        <v-card flat>
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon size="52" :color="$store.state.auth.authenticated ? 'accent' : 'grey'">account_circle</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <span v-if="$store.state.auth.authenticated">{{ $store.state.auth.fullName }}</span>
                  <span v-if="!$store.state.auth.authenticated">{{ $t('views.settings.no-account') }}</span>
                </v-list-item-title>

                <v-list-item-subtitle v-if="$store.state.auth.authenticated && $store.state.auth.email">
                  {{ $store.state.auth.email }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action v-if="!$store.state.auth.authenticated">
                <v-tooltip left eager>
                  <template v-slot:activator="{on}">
                    <v-btn
                            v-on="on"
                            outlined
                            small
                            fab
                            :color="$store.state.darkMode.enabled ? null : 'accent'"
                            ripple
                            icon
                            @click="login">
                      <v-icon>person_add</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t('views.login.title') }}</span>
                </v-tooltip>
              </v-list-item-action>

              <v-list-item-action v-if="$store.state.auth.authenticated">
                <v-tooltip left eager>
                  <template v-slot:activator="{on}">
                    <v-btn
                            v-on="on"
                            outlined
                            small
                            fab
                            :color="$store.state.darkMode.enabled ? null : 'accent'"
                            ripple
                            icon
                            @click="login">
                      <v-icon>edit</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t('edit') }}</span>
                </v-tooltip>
              </v-list-item-action>

              <v-list-item-action v-if="$store.state.auth.authenticated">
                <v-tooltip left eager>
                  <template v-slot:activator="{on}">
                    <v-btn
                            v-on="on"
                            outlined
                            small
                            fab
                            :color="$store.state.darkMode.enabled ? null : 'accent'"
                            ripple
                            icon
                            @click="$store.dispatch('auth/logout', $router.currentRoute.fullPath)">
                      <v-icon>exit_to_app</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t('logout') }}</span>
                </v-tooltip>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>

        <v-subheader class="mt-4 primary--text">
          {{ $t('views.settings.general') }}
        </v-subheader>
        <v-card flat>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ $t('views.settings.language') }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-menu eager>
                  <template v-slot:activator="{on}">
                    <div class="menu-activator" v-on="on">
                      <span>{{ selectedLanguage }}</span>
                      <v-icon>arrow_drop_down</v-icon>
                    </div>
                  </template>

                  <v-list>
                    <v-list-item
                            v-for="available in languageAvailables"
                            :key="available.code"
                            @click="$store.commit('i18n/setLocale', available.code)"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="available.label"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item-action>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ $t('views.settings.dark-mode') }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-switch hide-details v-model="darkMode"></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>

        <v-subheader class="mt-4 primary--text">
          {{ $t('menu.bibs') }}
        </v-subheader>
        <v-card flat>
          <v-list three-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ $t('views.settings.use-bib-aliases') }}</v-list-item-title>
                <v-list-item-subtitle>{{ $t('views.settings.use-bib-aliases-description') }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-switch hide-details v-model="useBibAlias"></v-switch>
              </v-list-item-action>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ $t('views.settings.start-printing-immediately') }}</v-list-item-title>
                <v-list-item-subtitle>{{ $t('views.settings.start-printing-immediately-description') }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-switch hide-details v-model="startPrintingImmediately"></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import {MetaInfo} from 'vue-meta';
  import {Component, Vue} from 'vue-property-decorator';

  /**
   * @author François Pluchino <francois.pluchino@gmail.com>
   */
  @Component({
    components: {},
  })
  export default class Settings extends Vue {
    public languageAvailables: LanguageAvailable[] = [];

    public metaInfo(): MetaInfo {
      return {
        title: this.$t('views.settings.title') as string,
      };
    }

    public created(): void {
      for (const available of Object.keys(this.$i18n.messages)) {
        this.languageAvailables.push({
          code: available,
          label: this.$t('views.settings.languages.' + available) as string,
        });
      }

      this.languageAvailables.sort((a: LanguageAvailable, b: LanguageAvailable): number => {
        if (a.label < b.label) {
          return -1;
        } else if (a.label > b.label) {
          return 1;
        }

        return 0;
      });
    }

    public get selectedLanguage(): string {
      let language = this.$store.state.i18n.locale;
      language = this.$i18n.messages[language] ? language : this.$store.state.i18n.fallback;

      return this.$t('views.settings.languages.' + language) as string;
    }

    public get darkMode(): boolean {
      return this.$store.state.darkMode.enabled;
    }

    public set darkMode(value: boolean) {
      this.$store.commit('darkMode/toggle', value);
    }

    public get useBibAlias(): boolean {
      return this.$store.state.bib.useAlias;
    }

    public set useBibAlias(value: boolean) {
      this.$store.commit('bib/toggleUseAlias', value);
    }

    public get startPrintingImmediately(): boolean {
      return this.$store.state.bib.startPrintingImmediately;
    }

    public set startPrintingImmediately(value: boolean) {
      this.$store.commit('bib/toggleStartPrintingImmediately', value);
    }

    public login(): void {
      this.$router.push({name: 'login', query: {redirect: this.$router.currentRoute.fullPath, force: '1'}});
    }
  }

  interface LanguageAvailable {
    code: string;
    label: string;
  }
</script>
