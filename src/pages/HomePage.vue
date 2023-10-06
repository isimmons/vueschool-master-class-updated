<script setup lang="ts">
import ThreadList from './components/ThreadList.vue';
import { reactive } from 'vue';
import sourceData from '~/data.json';
import { type Thread } from '~/@types';
const threads = reactive<Array<Thread>>(sourceData.threads);
</script>

<template>
  <h1>Welcome to the Forum!</h1>
  <ThreadList :threads="threads" />
</template>
