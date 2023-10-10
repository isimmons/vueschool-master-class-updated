<script setup lang="ts">
import type { Forum } from '~/@types';

export type ForumListProps = {
  forums: Array<Forum>;
  title?: string;
  categoryId?: string;
};
defineProps<ForumListProps>();
</script>

<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <RouterLink
          v-if="categoryId"
          :to="{ name: 'category.show', params: { categoryId } }"
          >{{ title || 'Forums' }}</RouterLink
        >
        <span v-else>{{ title || 'Forums' }}</span>
      </h2>

      <div
        v-for="forum in forums"
        :key="forum.id"
        class="forum-listing"
      >
        <div class="forum-details">
          <RouterLink
            :to="{ name: 'forum.show', params: { forumId: forum.id } }"
            class="text-xlarge"
            >{{ forum.name }}</RouterLink
          >

          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p class="count">{{ forum.threads?.length || 0 }}</p>
          {{ forum.threads?.length === 1 ? 'thread' : 'threads' }}
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>
