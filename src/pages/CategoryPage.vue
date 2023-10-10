<script setup lang="ts">
import { computed } from 'vue';
import ForumList from './components/ForumList.vue';
import sourceData from '~/data.json';

export type CategoryPageProps = {
  categoryId: string;
};
const { categoryId } = defineProps<CategoryPageProps>();

const category = computed(() => {
  return sourceData.categories.find((c) => c.id === categoryId);
});

const categoryForums = computed(() => {
  return sourceData.forums.filter((f) => f.categoryId === category.value?.id);
});
</script>

<template>
  <h1>{{ category?.name }}</h1>
  <ForumList
    :title="category?.name"
    :forums="categoryForums"
  />
</template>
