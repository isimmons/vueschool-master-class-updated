<script setup lang="ts">
import { reactive } from 'vue';
import type { Category, Forum } from '~/@types';
import ForumList from './ForumList.vue';
import sourceData from '~/data.json';

export type CategoryListProps = {
  categories: Array<Category>;
};
defineProps<CategoryListProps>();

const forums = reactive<Array<Forum>>(sourceData.forums);

const categoryForums = (categoryId: string) => {
  return forums.filter((f) => f.categoryId === categoryId);
};
</script>

<template>
  <div class="col-full">
    <ForumList
      v-for="category in categories"
      :key="category.id"
      :forums="categoryForums(category.id)"
      :title="category.name"
      :category-id="category.id"
    />
  </div>
</template>
