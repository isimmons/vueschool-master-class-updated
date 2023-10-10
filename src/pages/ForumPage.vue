<script setup lang="ts">
import { reactive, computed } from 'vue';
import ThreadList from '~/pages/components/ThreadList.vue';
import sourceData from '~/data.json';
import { type Forum, Thread } from '~/@types';

export type ForumPageProps = {
  forumId: string;
};
const { forumId } = defineProps<ForumPageProps>();

const forums = reactive<Array<Forum>>(sourceData.forums);
const threads = reactive<Array<Thread>>(sourceData.threads);

const forum = computed(() => {
  return forums.find((f) => f.id === forumId);
});

const forumThreads = computed(() => {
  return threads.filter((t) => t.forumId === forum.value?.id);
});
</script>

<template>
  <div
    v-if="forum"
    class="col-full push-top"
  >
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a
        href="#"
        class="btn-green btn-small"
        >Start a thread</a
      >
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="forumThreads" />
  </div>
</template>
