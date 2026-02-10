import { App, Plugin } from 'vue';
import './index.scss';

import { NeoOptions } from 'types';
import NeoAlert from './components/NeoAlert.vue';
import NeoButton from './components/NeoButton.vue';
import NeoCard from './components/NeoCard.vue';
import NeoCheckbox from './components/NeoCheckbox.vue';
import NeoDialog from './components/NeoDialog.vue';
import NeoDrawer from './components/NeoDrawer.vue';
import NeoDropdown from './components/NeoDropdown.vue';
import NeoNavbarItem from './components/NeoNavItem.vue';
import NeoNavbar from './components/NeoNavbar.vue';
import NeoProfile from './components/NeoProfile.vue';
import NeoRadio from './components/NeoRadio.vue';
import NeoSelect from './components/NeoSelect.vue';
import NeoTextField from './components/NeoTextField.vue';
import NeoTable from './components/NeoTable.vue';
import NeoSidebar from './components/NeoSidebar.vue';
import NeoTabs from './components/NeoTabs.vue';
import NeoBadge from './components/NeoBadge.vue';
import NeoIcon from './components/NeoIcon.vue';
import NeoStep from './components/NeoStep.vue';

import 'boxicons';
import { initTheme, useTheme } from './theme';

export const NeoVue: Plugin = {
  install(app: App, options?: NeoOptions) {
    initTheme(options);

    const { theme, darkMode } = useTheme();
    app.provide('theme', theme);
    app.provide('darkMode', darkMode);

    app
      .component('neo-button', NeoButton)
      .component('neo-textfield', NeoTextField)
      .component('neo-dialog', NeoDialog)
      .component('neo-select', NeoSelect)
      .component('neo-radio', NeoRadio)
      .component('neo-checkbox', NeoCheckbox)
      .component('neo-profile', NeoProfile)
      .component('neo-dropdown', NeoDropdown)
      .component('neo-card', NeoCard)
      .component('neo-alert', NeoAlert)
      .component('neo-navbar', NeoNavbar)
      .component('neo-navbar-item', NeoNavbarItem)
      .component('neo-sidebar', NeoSidebar)
      .component('neo-drawer', NeoDrawer)
      .component('neo-table', NeoTable)
      .component('neo-tabs', NeoTabs)
      .component('neo-badge', NeoBadge)
      .component('neo-icon', NeoIcon)
      .component('neo-step', NeoStep);

    app.config.globalProperties.isMobile = window.innerWidth <= 768;
    app.config.globalProperties.isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    app.config.globalProperties.isDesktop = window.innerWidth > 1024;

    console.log('[NeoVue] - Plugin initialized!');
  },
};
