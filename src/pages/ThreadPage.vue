<script setup lang="ts">
import { reactive, computed } from 'vue';
import PostList from './components/PostList.vue';
import sourceData from '~/data.json';
import { type Thread, Post } from '~/@types';
export type ThreadPageProps = {
  threadId: string;
};
const { threadId } = defineProps<ThreadPageProps>();

const threads = reactive<Array<Thread>>(sourceData.threads);
const posts = reactive<Array<Post>>(sourceData.posts as Array<Post>);

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
  </div>
</template>
