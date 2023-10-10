<script setup lang="ts">
import CategoryList from './components/CategoryList.vue';
import { reactive } from 'vue';
import sourceData from '~/data.json';
import { type Category } from '~/@types';
const categories = reactive<Array<Category>>(sourceData.categories);
</script>

<template>
  <h1>Welcome to the Category!</h1>
  <CategoryList :categories="categories" />
</template>
