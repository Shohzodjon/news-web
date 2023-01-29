<template>
  <div
    class="flex items-center w-max gap-[6.8px] rounded-lg py-[13.12px] pl-[21.62px] pr-5 h-12"
  >
    <base-icon name="sun_icon" />
    <span class="text-mainBlue text-[17px] font-medium">+9 °C</span>
  </div>
</template>
<script setup>
import BaseIcon from "./BaseIcon.vue";
</script>
<style scoped>
div {
  transition: all linear 0.3s;
}
div:hover {
  background: rgba(115, 124, 152, 0.1);
}
</style>
