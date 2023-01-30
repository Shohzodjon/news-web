<template>
  <div class="flex items-center gap-5">
    <div>
      <span
        v-if="news_type === 'Жаҳон'"
        class="text-sm text-[#003096] font-medium"
        >{{ news_type }}</span
      >
      <span
        v-else-if="news_type === 'Жамият'"
        class="text-sm text-[#FF7D25] font-medium"
        >{{ news_type }}</span
      >
      <span
        v-else-if="news_type === 'Ўзбекистон'"
        class="text-sm text-[#2DA85B] font-medium"
        >{{ news_type }}</span
      >
      <span
        v-else-if="news_type === 'Спорт'"
        class="text-sm text-[#E50029] font-medium"
        >{{ news_type }}</span
      >
    </div>
    <span class="text-sm font-medium text-greyColor">{{ created_time }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  created_time: String,
  news_type: String,
});
</script>
