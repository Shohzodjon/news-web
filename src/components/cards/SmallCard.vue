<template>
  <div class="bg-[#D5DDF3] h-[1px] w-full my-5"></div>
  <div class="flex justify-between gap-[14px]">
    <div class="flex flex-col justify-between max-w-[280px]">
      <h4
        class="text-[17px] text-mainBlue font-bold line-clamp-3 leading-[20.29px]"
      >
        {{ card_title }}
      </h4>
      <news-type :news_type="news_type" :created_time="created_time" />
    </div>
    <!-- end of card text -->
    <div
      class="max-w-[86px] max-h-[86px] rounded-lg w-[86px] h-[86px] overflow-hidden"
    >
      <img
        :src="img_url"
        alt="img"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</template>
<script setup>
import NewsType from "./NewsType.vue";
const props = defineProps({
  img_url: String,
  card_title: String,
  created_time: String,
  news_type: String,
});
</script>
