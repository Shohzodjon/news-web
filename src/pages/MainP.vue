<template>
  <section class="bg-lightGrey w-full pb-[30px]">
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
      <!-- selider section -->

      <div
        class="option_slider bg-white rounded-2xl pt-[23.5px] pb-5 pl-5 my-[30px]"
      >
        <div class="flex justify-between pr-6">
          <h3
            class="flex items-center transition-all duration-300 group-hover:underline text-2xl leading-[100%] font-bold text-mainBlue"
          >
            <base-icon name="octagon_icon" class="mr-[10px] pt-1" />
            Муҳаррир танлови
          </h3>
          <div class="swiper__btns flex items-center gap-[13px]">
            <button
              class="swiper-next w-7 h-7 rounded-lg border-[2px] border-mainBlue transition-all duration-300 hover:bg-[#737C981A]"
              :class="[prev ? 'bg-mainBlue' : '']"
              aria-label="button"
            >
              <base-icon name="cherkov" class="rotate-180" />
            </button>
            <button
              class="swiper-prev w-7 h-7 rounded-lg border-[2px] border-mainBlue transition-all duration-300 hover:bg-[#737C981A]"
              aria-label="button"
            >
              <base-icon name="cherkov" />
            </button>
          </div>
        </div>
        <div class="bg-[#D5DDF3] h-[1px] w-[98.5%] my-5"></div>
        <swiper
          :slides-per-view="4"
          :centeredSlides="true"
          :space-between="18"
          :modules="[Navigation, A11y]"
          @slideChange="onSlideChange"
          :loop="true"
          :navigation="{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }"
        >
          <swiper-slide v-for="item in sliderData" :key="item.id">
            <normal-card
              :img_url="item.img"
              :title="item.title"
              :news_type="item.news_type"
              :created_time="item.created_time"
              card_style="max-w-[360px] max-h-[202px]"
            />
          </swiper-slide>
        </swiper>
      </div>
      <!-- sport news -->
      <div class="bg-white rounded-2xl p-5 pt-[23.5px]">
        <header-title title="#Sport" subtitle="Барчаси" />
        <div class="bg-[#D5DDF3] h-[1px] w-full mt-[23.5px] mb-5"></div>
        <div class="flex gap-10">
          <div class="max-w-[820px] flex-1">
            <big-card
              :img_url="sportNews[0].img"
              :title="sportNews[0].title"
              :sub_title="sportNews[0].sub_title"
              :news_type="sportNews[0].news_type"
              :created_time="sportNews[0].created_time"
            />
          </div>

          <div class="max-w-[400px] sport__news relative">
            <small-card
              class="gap-[34px]"
              v-for="item in sports"
              :key="item.id"
              :card_title="item.title"
              :img_url="item.img"
              :news_type="item.news_type"
              :created_time="item.created_time"
            />
          </div>
        </div>
      </div>
      <!-- Maqolalar -->
      <div class="bg-white pt-[23.5px] px-5 pb-5 rounded-2xl mt-[30px]">
        <header-title title="Мақолалар" subtitle="Барчаси" />
        <div class="bg-[#D5DDF3] h-[1px] w-full mt-[23.5px] mb-5"></div>
        <div class="grid grid-cols-3 gap-x-[18px] gap-y-5">
          <div v-for="item in novelData" :key="item.id" class="max-w-[408px]">
            <normal-card
              card_style="max-w-[408px] max-h-[229px]"
              :img_url="item.img"
              :title="item.title"
              :news_type="item.news_type"
              :created_time="item.created_time"
            />
          </div>
        </div>
      </div>
      <!--  All news -->
      <div class="flex gap-5 items-start mt-[30px]">
        <div class="bg-white all_news pt-[23.5px] px-5 pb-5 rounded-2xl">
          <header-title
            title="Барча янгиликлар"
            subtitle="Барчаси"
            class="mb-[23.5px]"
          />
          <div v-for="item in allNews" :key="item.id">
            <div class="bg-[#D5DDF3] h-[1px] w-full my-5"></div>
            <normal-card
              class="flex !flex-row-reverse !justify-between gap-5"
              :img_url="item.img"
              :title="item.title"
              :news_type="item.news_type"
              :created_time="item.created_time"
              card_style="max-w-[213px] max-h-[120px] min-h-[119px] min-w-[212px]"
            />
          </div>
          <download-btn />
        </div>
        <!-- end of leftside -->
        <div class="bg-white p-5 rounded-2xl">
          <div class="w-[380px] h-[714px] bg-[#D9D9D9] rounded-lg"></div>
        </div>
      </div>

      <div
        class="option_slider bg-white rounded-2xl pt-[23.5px] pb-5 pl-5 mt-[30px]"
      >
        <div class="flex justify-between pr-6">
          <h3
            class="flex items-center transition-all duration-300 group-hover:underline text-2xl leading-[100%] font-bold text-mainBlue"
          >
            <base-icon name="octagon_icon" class="mr-[10px] pt-1" />
            Бизнес
          </h3>
          <div class="swiper__btns flex items-center gap-[13px]">
            <button
              class="swiper-next w-7 h-7 rounded-lg border-[2px] border-mainBlue transition-all duration-300 hover:bg-[#737C981A]"
              :class="[prev ? 'bg-mainBlue' : '']"
              aria-label="button"
            >
              <base-icon name="cherkov" class="rotate-180" />
            </button>
            <button
              class="swiper-prev w-7 h-7 rounded-lg border-[2px] border-mainBlue transition-all duration-300 hover:bg-[#737C981A]"
              aria-label="button"
            >
              <base-icon name="cherkov" />
            </button>
          </div>
        </div>
        <div class="bg-[#D5DDF3] h-[1px] w-[98.5%] my-5"></div>
        <swiper
          :slides-per-view="4"
          :centeredSlides="true"
          :space-between="18"
          :modules="[Navigation, A11y]"
          @slideChange="onSlideChange"
          :loop="true"
          :navigation="{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }"
        >
          <swiper-slide v-for="item in biznesData" :key="item.id">
            <normal-card :img_url="item.img" :title="item.title" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import lastNews from "@/static/last_news.js";
import sliderData from "@/static/slider_data.js";
import novelData from "@/static/novel_data.js";
import sportNews from "@/static/sport_news.js";
import biznesData from "@/static/biznes_card.js";
import allNews from "@/static/all_news.js";
import mainNews from "@/static/main_news.js";
import SmallCard from "@/components/cards/SmallCard.vue";
import BigCard from "@/components/cards/BigCard.vue";
import NormalCard from "@/components/cards/NormalCard.vue";
import BaseIcon from "@/components/cards/BaseIcon.vue";
import HeaderTitle from "@/components/cards/HeaderTitle.vue";
import DownloadBtn from "@/components/cards/DownloadBtn.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ref } from "vue";
const spreateData = ref([]);

spreateData.value = mainNews.filter((item) => item.sub_title == "");
const sports = ref([]);
sports.value = sportNews.filter((item) => item.id !== 1);
</script>
<style scoped>
.sport__news::before {
  content: "";
  width: 1px;
  height: 100%;
  background: #d5ddf3;
  position: absolute;
  top: 0;
  left: -20px;
}
</style>
<style>
.option_slider .swiper-slide {
  width: max-content !important;
}
.sport__news .card_line:first-child {
  display: none;
}
.sport__news .small__card {
  gap: 34px;
}
.all_news .card__wrapp {
  inline-size: 820px;
}
.all_news .card__wrapp h4 {
  font-size: 24px;
  line-height: 29.64px;
}
</style>
