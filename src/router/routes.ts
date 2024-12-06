import HomePage from '@/pages/HomePage.vue'
import LearnMorePage from '@/pages/LearnMorePage.vue'

export const routes = [
  { 
    path: '/', 
    name: 'HomePage',
    component: HomePage
  },
  { 
    path: '/learn-more', 
    name: 'LearnMore',
    component: LearnMorePage
  },
]