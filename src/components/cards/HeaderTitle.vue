<template>
  <div class="flex justify-between items-center group">
    <h3
      class="flex items-center transition-all duration-300 group-hover:underline text-2xl leading-[100%] font-bold text-mainBlue"
    >
      <base-icon name="octagon_icon" class="mr-[10px]" />
      {{ title }}
    </h3>
    <div
      class="flex gap-[13px] items-center pl-2 pr-[9px] py-2 w-max cursor-pointer transition-all duration-300 group-hover:bg-[#F1F2F5] rounded-lg"
    >
      <span
        class="text-[17px] font-medium text-mainBlue ml-[11px]"
        :class="[subtitle ? 'block' : 'hidden']"
        >{{ subtitle }}</span
      >
      <base-icon name="arrow_icon" />
    </div>
  </div>
</template>
<script setup>
import BaseIcon from "./BaseIcon.vue";
const props = defineProps({
  title: String,
  subtitle: String,
});
</script>
