<template>
  <button
    :disabled="disabled"
    type="submit"
    v-bind="attrs"
    :class="[
      {
        'opacity-75 cursor-not-allowed': disabled,
      },
    ]"
    class="group relative isolate flex-none"
  >
    <span
      class="absolute inset-0 -z-10 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15"
    ></span>
    <span
      class="absolute inset-0 -z-10 rounded-md opacity-5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10"
    ></span>
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-3 inline-flex text-white/30"
      :class="loaderCss"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot />
  </button>
</template>
<script setup>
import { computed, useAttrs } from 'vue';

const attrs = useAttrs();

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  loaderCss: {
    type: String,
    default: 'h-5 w-5 text-gray-700',
  },
});
const disabled = computed(() => props.loading || attrs.disabled);
</script>
