import {
  redirectOnThreadNotFound,
  redirectOnForumNotFound,
} from './navigationGuards';
import { HomePage, ForumPage, ThreadPage, NotFoundPage } from '~/pages';

const routes = [
  { path: '/', name: 'home', component: HomePage },
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
