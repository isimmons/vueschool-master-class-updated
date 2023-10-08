<script setup lang="ts">
import { ref } from 'vue';

const content = ref('');

const emit = defineEmits<{
  (e: 'create-post', content: string): void;
}>();

const handleFormSubmit = () => {
  emit('create-post', content.value);

  // clear form
  content.value = '';
};
</script>

<template>
  <form @submit.prevent="handleFormSubmit">
    <div class="form-group">
      <label for="content">Content:</label>
      <textarea
        v-model.trim="content"
        id="content"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
      ></textarea>
    </div>

    <div class="btn-group">
      <button class="btn btn-ghost">Cancel</button>
      <button
        class="btn btn-blue"
        type="submit"
        name="publish"
      >
        Publish
      </button>
    </div>
  </form>
</template>
