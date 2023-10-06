<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="col-full text-center">
    <h1>Not Found</h1>
    <RouterLink :to="{ name: 'home' }">Read some cool threads</RouterLink>
  </div>
</template>
