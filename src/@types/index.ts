export type User = {
  avatar: string;
  email: string;
  lastVisitAt: number;
  name: string;
  isModerator?: boolean;
  registeredAt: number;
  username: string;
  usernameLower: string;
  id: string;
  bio?: string;
  twitter?: string;
  website?: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  forums: Array<string>;
};

export type Forum = {
  categoryId: string;
  description: string;
  name: string;
  slug: string;
  id: string;
  lastPostId?: string;
  threads?: Array<string>;
};

export type Stats = {
  postsCount: number;
  threadsCount: number;
  usersCount: number;
  usersOnline: number;
};

export type Thread = {
  firstPostId: string;
  forumId: string;
  lastPostAt: number;
  lastPostId: string;
  posts: Array<string>;
  publishedAt: number;
  slug: string;
  title: string;
  userId: string;
  id: string;
  contributors?: Array<string>;
};

export type ReactionEmoji = '❤️' | '👎' | '👍' | '💩' | '😄';

export type Post = {
  edited?: {
    at: number;
    by: string;
    moderated: boolean;
  };
  reactions?: Record<ReactionEmoji, Record<string, string>>;
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
  stats: Stats;
  threads: Array<Thread>;
  posts: Array<Post>;
};
