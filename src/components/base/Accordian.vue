<template>
  <div class="rounded-lg p-6 text-white bg-gray-800 shadow-lg font-onest">
    <button
      class="w-full flex items-center justify-between"
      @click="show = !show"
    >
      <div class="inline-flex items-start space-x-4 text-lg font-semibold">
        <!-- <span>{{ icon }}</span> -->
        <p class="text-left">{{ title }}</p>
      </div>
      <ArrowRightIcon class="h-5 w-5 ml-2" />
    </button>
    <div
      v-if="show"
      class="pt-4 text-gray-200 html-wrapper"
      v-html="content"
    ></div>
  </div>
</template>

<script>
import {
  ArrowRightIcon,
  // Share2Icon
} from '@heroicons/vue/24/outline';
export default {
  components: {
    ArrowRightIcon,
  },
  props: {
    icon: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style scoped>
.html-wrapper p a {
  @apply text-primary;
}
</style>
