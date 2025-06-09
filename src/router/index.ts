import { createRouter, createWebHistory } from 'vue-router'

import CoursesView from '@/views/CoursesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/courses/:domain?',
      name: 'courses',
      component: CoursesView,
      children: [
        {
          path: ':courseId',
          name: 'course-details',
          component: CoursesView
        }
      ]
    },
    {
      path: '/',
      redirect: '/courses'
    }
  ]
})

export default router
