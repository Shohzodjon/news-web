<template>
  <div class="flex flex-col w-max gap-[15px]">
    <div
      class="max-w-[401px] max-h-[225px] rounded-lg min-h-[220px]"
      :class="[card_style ? card_style : '']"
    >
      <img
        :src="img_url"
        alt="crd img"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div class="flex flex-col gap-[15px] justify-between">
      <h4 class="text-mainBlue text-[17px] font-bold leading-[100%]">
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
});
</script>
