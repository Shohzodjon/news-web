<template>
  <div>
    <div>
      <img :src="img_url" alt="news img" />
    </div>
    <div class="flex flex-col justify-between gap-5 mt-5">
      <div>
        <h3
          class="text-mainBlue text-[32px] leading-[100%] font-bold mb-[10px]"
        >
          {{ title }}
        </h3>
        <p
          :class="[
            sub_title
              ? 'text-[#485680] text-[17px] leading-[25px] font-normal'
              : 'hidden',
          ]"
        >
          {{ sub_title }}
        </p>
      </div>
      <news-type :news_type="news_type" :created_time="created_time" />
    </div>
  </div>
</template>
<script setup>
import NewsType from "./NewsType.vue";
const props = defineProps({
  img_url: String,
  title: String,
  sub_title: String,
  news_type: String,
  created_time: String,
});
</script>
