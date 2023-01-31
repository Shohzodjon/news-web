<template>
  <div class="flex flex-col w-max gap-[15px] card__wrapp group">
    <div
      class="max-w-[401px] max-h-[225px] rounded-lg min-h-[220px] overflow-hidden"
      :class="[card_style ? card_style : '']"
    >
      <img
        :src="img_url"
        alt="crd img"
        class="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
      />
    </div>
    <div class="flex flex-col gap-[15px] justify-between">
      <h4
        class="text-mainBlue text-[17px] font-bold leading-[22px] line-clamp-2 transition-all underline-offset-[3px] duration-300 group-hover:underline"
      >
        {{ title }}
      </h4>
      <news-type :news_type="news_type" :created_time="created_time" />
    </div>
  </div>
</template>
<script setup>
import NewsType from "./NewsType.vue";

const props = defineProps({
  card_style: String,
  title: String,
  news_type: String,
  created_time: String,
  img_url: String,
  title_width: String,
});
</script>
<style scoped>
.card__wrapp {
  inline-size: 408px;
  overflow-wrap: break-word;
}
</style>
