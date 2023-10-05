<script setup lang="ts">
import { ref } from 'vue';
import sourceData from '~/data.json';
import { type Thread, Post, User } from '~/@types';
const threads = ref<Array<Thread>>(sourceData.threads);
const posts = ref<Array<Post>>(sourceData.posts as Array<Post>);
const users = ref<Array<User>>(sourceData.users);

const postById = (postId: string) => {
  return posts.value.find((p) => p.id === postId);
};

const userById = (userId: string | undefined) => {
  return users.value.find((u) => u.id === userId);
};
</script>

<template>
  <div>
    <h1>Hello from the Home page Foo!</h1>
    <div
      v-for="thread in threads"
      :key="thread.id"
    >
      <h2>{{ thread.title }}</h2>
      <div
        v-for="postId in thread.posts"
        :key="postId"
      >
        <p v-if="postById(postId)">
          {{ userById(postById(postId)?.userId)?.name }}
        </p>
        <p v-if="postById(postId)">{{ postById(postId)?.text }}</p>
      </div>
    </div>
  </div>
</template>
