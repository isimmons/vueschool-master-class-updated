<script setup lang="ts">
import { humanFriendlyDate, timeDiffForHumans } from '~/helpers';

export type AppDateProps = {
  timestamp: number;
};

defineProps<AppDateProps>();
</script>

<template>
  <span :title="humanFriendlyDate(timestamp)">
    {{ timeDiffForHumans(timestamp) }}
  </span>
</template>
