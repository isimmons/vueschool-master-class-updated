export type User = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
  forumIds: string[];
};

export type Forum = {
  id: string;
  name: string;
  description: string;
  catagoryId: string;
  threadIds: string[];
};

export type Thread = {
  id: string;
  userId: string;
  title: string;
  publishedAt: number;
};

export type Post = {
  id: string;
  userId: string;
  threadId: string;
  publishedAt: number;
  text: string;
};

export type Data = {
  users: Array<User>;
  categories: Array<Category>;
  forums: Array<Forum>;
  threads: Array<Thread>;
  posts: Array<Post>;
};

const data: Data = {
  users: [
    {
      id: 'u1',
      name: 'isimmons',
    },
  ],
  categories: [
    {
      id: 'c1',
      name: 'Chats',
      forumIds: ['f1'],
    },
  ],
  forums: [
    {
      id: 'f1',
      name: 'fishing',
      description: 'lets talk fishing',
      catagoryId: 'c1',
      threadIds: ['t1'],
    },
  ],
  threads: [
    {
      id: 't1',
      title: 'What is your favorite food?',
      publishedAt: Date.now(),
      userId: 'u1',
    },
  ],
  posts: [
    {
      id: 'p1',
      publishedAt: Date.now(),
      userId: 'u1',
      text: 'I like cheese.',
      threadId: 't1',
    },
  ],
};

export default data;
// demo basic find all by id using array.filter
export const findAllPostsById = (id: string) => {
  return data.posts.filter((p) => p.userId === id);
};

export const findPostsByThreadId = (id: string) => {
  return data.posts.filter((p) => p.threadId === id);
};

// find will only return first result matching criteria
// filter will return all matching results
export const findThreadById = (id: string) => {
  return data.threads.find((t) => t.id === id);
};

const thread = findThreadById('t1');
let posts: Array<Post> = [];
if (thread?.id) posts = findPostsByThreadId(thread.id);
console.log(posts);
