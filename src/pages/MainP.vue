<template>
  <section class="bg-lightGrey w-full">
    <div class="container">
      <div class="flex gap-5 items-start pt-[30px]">
        <div class="flex-1 max-w-[860px] bg-white rounded-2xl p-5">
          <big-card
            :img_url="mainNews[0].img"
            :title="mainNews[0].title"
            :sub_title="mainNews[0].sub_title"
            :news_type="mainNews[0].news_type"
            :created_time="mainNews[0].created_time"
          />
          <div class="bg-[#D5DDF3] h-[1px] w-full my-[15px]"></div>
          <div class="flex gap-[18px]">
            <normal-card
              class="flex-1"
              v-for="item in spreateData"
              :key="item.id"
              :img_url="item.img"
              :title="item.title"
              :news_type="item.news_type"
              :created_time="item.created_time"
            />
          </div>
        </div>
        <!-- main -->
        <div class="flex-1 bg-white p-5 rounded-2xl">
          <header-title title="Сўнгги янгиликлар" subtitle="" />

          <small-card
            v-for="item in lastNews"
            :key="item.id"
            :card_title="item.title"
            :img_url="item.url"
            :news_type="item.sub_title"
            :created_time="item.create"
          />
          <div class="bg-[#D5DDF3] h-[1px] w-full my-5"></div>
          <div>
            <img src="@/assets/images/card_img.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import lastNews from "@/static/last_news.js";
import mainNews from "@/static/main_news.js";
import SmallCard from "@/components/cards/SmallCard.vue";
import BigCard from "@/components/cards/BigCard.vue";
import NormalCard from "@/components/cards/NormalCard.vue";
import HeaderTitle from "@/components/cards/HeaderTitle.vue";

import { ref } from "vue";

const spreateData = ref([]);

spreateData.value = mainNews.filter((item) => item.sub_title == "");
console.log(spreateData.value);
</script>
