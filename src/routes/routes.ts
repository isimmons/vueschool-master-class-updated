import { HomePage } from '~/pages';
import { ThreadPage } from '~/pages';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  {
    path: '/thread/:threadId',
    name: 'thread.show',
    component: ThreadPage,
    props: true,
  },
];

export default routes;
