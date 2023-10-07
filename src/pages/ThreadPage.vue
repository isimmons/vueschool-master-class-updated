<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import PostList from './components/PostList.vue';
import sourceData from '~/data.json';
import { type Thread, Post } from '~/@types';
export type ThreadPageProps = {
  threadId: string;
};
const { threadId } = defineProps<ThreadPageProps>();

const threads = reactive<Array<Thread>>(sourceData.threads);
const posts = reactive<Array<Post>>(sourceData.posts as Array<Post>);

// leaving this here to remind me. Look into this new defineModel stuff
// don't need it for this form though.
// type FormValues = {
//   title: HTMLInputElement;
//   content: HTMLTextAreaElement;
// };
// const postFormValues = defineModel<FormValues>();
const title = ref('');
const content = ref('');

const handleFormSubmit = () => {
  // real db will generate ids and I will also need to use Omit for the Post type here
  // but for now I am adding an id myself.
  // note: just realized posts don't have a place for title. Not sure why course code includes title input in form
  // unless we add it when we move to firebase. BTW think I'll go supabase instead.

  // types are all screwed up because of trying to get typeof sourceData.posts coming straight from an imported json object
  // will have to leave it off here and figure it out
  // sourceData is not reactive so we switched to adding directly to the posts which I have cast to the correct Post type
  // so for now, this works.

  const newPostId = `blahblahblah${Math.random()}`;
  const post: Post = {
    id: newPostId,
    text: content.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId,
    userId: '18St7Q8Zi2N1SPa5ahzssq9kbyp2',
  };

  posts.push(post);
  // add to the thread object so new post will show
  thread.value?.posts.push(post.id);

  // clear form
  title.value = '';
  content.value = '';
};

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

    <form @submit.prevent="handleFormSubmit">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          v-model.trim="title"
          type="text"
          id="title"
          class="form-input"
          name="title"
        />
      </div>

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
  </div>
</template>
