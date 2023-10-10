import {
  redirectOnThreadNotFound,
  redirectOnForumNotFound,
  redirectOnCategoryNotFound,
} from './navigationGuards';
import {
  HomePage,
  CategoryPage,
  ForumPage,
  ThreadPage,
  NotFoundPage,
} from '~/pages';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  {
    path: '/category/:categoryId',
    name: 'category.show',
    component: CategoryPage,
    props: true,
    beforeEnter: [redirectOnCategoryNotFound],
  },
  {
    path: '/forum/:forumId',
    name: 'forum.show',
    component: ForumPage,
    props: true,
    beforeEnter: [redirectOnForumNotFound],
  },
  {
    path: '/thread/:threadId',
    name: 'thread.show',
    component: ThreadPage,
    props: true,
    beforeEnter: [redirectOnThreadNotFound],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

export default routes;
