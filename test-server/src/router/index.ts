// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        component: () => import('@/views/docs/main-page.vue')
      }
    ],
  },
  {
    path: '/tests',
    name: 'Tests',
    component: () => import('@/views/Neo.vue'),
  },
  {
    path: '/docs',
    name: 'Neo',
    component: () => import('@/views/docs/layout.vue'),
    children: [
      {
        path: '',
        redirect: 'docs/get-started'
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/docs/about.vue')
      },
      {
        path: 'get-started',
        name: 'GetStarted',
        component: () => import('@/views/docs/get-started.vue')
      },
      {
        path: 'components',
        name: 'Components',
        component: () => import('@/views/docs/components.vue')
      },
      {
        path: 'utilities',
        name: 'Utilities',
        component: () => import('@/views/docs/utilities.vue')
      },
      {
        path: 'components',
        name: 'Components',
        component: () => import('@/views/docs/components/layout.vue'),
        redirect: '/docs/components/specifications',
        children: [
          {
            path: 'specifications',
            name: 'Specifications',
            component: () => import('@/views/docs/components.vue')
          },
          {
            path: 'button',
            name: 'Button',
            component: () => import('@/views/docs/components/docs-button.vue')
          },
          {
            path: 'dialog',
            name: 'Dialog',
            component: () => import('@/views/docs/components/docs-dialog.vue')
          },
          {
            path: 'checkbox',
            name: 'Checkbox',
            component: () => import('@/views/docs/components/docs-checkbox.vue')
          },
          {
            path: 'dropdown',
            name: 'Dropdown',
            component: () => import('@/views/docs/components/docs-dropdown.vue')
          },
          {
            path: 'textfield',
            name: 'Textfield',
            component: () => import('@/views/docs/components/docs-textfield.vue')
          },
          {
            path: 'radio',
            name: 'Radio',
            component: () => import('@/views/docs/components/docs-radio.vue')
          },
          {
            path: 'navbar',
            name: 'Navbar',
            component: () => import('@/views/docs/components/docs-navbar.vue')
          },
          {
            path: 'select',
            name: 'Select',
            component: () => import('@/views/docs/components/docs-select.vue')
          },
          {
            path: 'card',
            name: 'Card',
            component: () => import('@/views/docs/components/docs-card.vue')
          },
          {
            path: 'table',
            name: 'Table',
            component: () => import('@/views/docs/components/docs-table.vue')
          },
          {
            path: 'alert',
            name: 'Alert',
            component: () => import('@/views/docs/components/docs-alert.vue')
          },
          {
            path: 'drawer',
            name: 'Drawer',
            component: () => import('@/views/docs/components/docs-drawer.vue')
          },
          {
            path: 'sidebar',
            name: 'Sidebar',
            component: () => import('@/views/docs/components/docs-sidebar.vue')
          },
          {
            path: 'tabs',
            name: 'Tabs',
            component: () => import('@/views/docs/components/docs-tabs.vue')
          },
          {
            path: 'badge',
            name: 'Badge',
            component: () => import('@/views/docs/components/docs-badge.vue')
          },
          {
            path: 'profile',
            name: 'Profile',
            component: () => import('@/views/docs/components/docs-profile.vue')
          },
          {
            path: 'icon',
            name: 'Icon',
            component: () => import('@/views/docs/components/docs-icon.vue')
          },
          {
            path: 'step',
            name: 'Step',
            component: () => import('@/views/docs/components/docs-step.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
