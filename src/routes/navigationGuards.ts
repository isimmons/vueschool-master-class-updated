import type { NavigationGuard } from 'vue-router';
import sourceData from '~/data.json';

export const redirectOnThreadNotFound: NavigationGuard = (to) => {
  const threadExists = sourceData.threads.find(
    (t) => t.id === to.params.threadId
  );
  if (!threadExists)
    return {
      name: 'NotFound',
      params: { pathMatch: to.path.substring(1).split('/') },
      query: to.query,
      hash: to.hash,
    };
};

export const redirectOnForumNotFound: NavigationGuard = (to) => {
  const forumExists = sourceData.forums.find((f) => f.id === to.params.forumId);
  if (!forumExists)
    return {
      name: 'NotFound',
      params: { pathMatch: to.path.substring(1).split('/') },
      query: to.query,
      hash: to.hash,
    };
};
