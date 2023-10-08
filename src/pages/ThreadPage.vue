<script setup lang="ts">
import { reactive, computed } from 'vue';
import PostList from './components/PostList.vue';
import CreatePostForm from './components/CreatePostForm.vue';
import sourceData from '~/data.json';
import { type Thread, Post } from '~/@types';
export type ThreadPageProps = {
  threadId: string;
};
const { threadId } = defineProps<ThreadPageProps>();

const threads = reactive<Array<Thread>>(sourceData.threads);
const posts = reactive<Array<Post>>(sourceData.posts as Array<Post>);

const handleCreateNewPost = (content: string) => {
  const newPostId = `blahblahblah${Math.random()}`;
  const post: Post = {
    id: newPostId,
    text: content,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId,
    userId: '18St7Q8Zi2N1SPa5ahzssq9kbyp2',
  };

  posts.push(post);
  // add to the thread object so new post will show
  thread.value?.posts.push(post.id);
};

const thread = computed(() => {
  return threads.find((t) => t.id === threadId);
});

const threadPosts = computed(() => {
  return posts.filter((p) => p.threadId === threadId) as Post[];
});
</script>

<template>
  <div
    v-if="thread"
    class="col-large push-top"
  >
    <h1>{{ thread.title }}</h1>

    <PostList :posts="threadPosts" />

    <CreatePostForm @create-post="handleCreateNewPost" />
  </div>
</template>
