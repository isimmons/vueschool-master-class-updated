import { redirectOnThreadNotFound } from './navigationGuards';
import { HomePage } from '~/pages';
import { ThreadPage } from '~/pages';
import { NotFoundPage } from '~/pages';

const routes = [
  { path: '/', name: 'home', component: HomePage },
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
