<template>
  <header class="bg-white w-full pb-[8.19px]">
    <div class="container">
      <div class="w-full min-h-[219px] max-h-[220px]">
        <img
          src="@/assets/images/header_img.png"
          alt="header_img"
          class="w-full h-[220px]"
        />
      </div>
      <!-- header img -->
      <div class="flex items-center gap-5 mt-[30px]">
        <router-link to="/">
          <base-icon name="logo" class="logo_icon" />
        </router-link>
        <search-bar class="max-w-[775px]" />
        <a href="#" class="telegram__link">
          <base-icon name="telegram_icon" />
          <span class="text-[17px] text-white font-medium">@platinauzb</span>
        </a>
        <lang-dropdown />
      </div>

      <!-- subheader -->
      <div class="mt-[22px] flex items-center justify-between">
        <ul class="flex items-center gap-10">
          <li
            v-for="item in links"
            :key="item.id"
            class="text-[17px] font-semibold text-mainBlue"
          >
            <router-link :to="item.link">{{ item.title }}</router-link>
          </li>
        </ul>
        <div class="flex items-center gap-[35px]">
          <show-temprature />
          <div
            class="flex items-center gap-[10px] py-[14px] px-5 rounded-lg transition-all duration-300 hover:bg-[#F1F2F5] h-12"
          >
            <base-icon name="us_flag" />
            <p class="flex items-center text-[17px] text-mainBlue font-medium">
              USD <span class="text-[#E50029] ml-1">11318.74</span>
              <base-icon
                name="currency_rate"
                class="currency_rate ml-[5px] font-bold"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
import BaseIcon from "@/components/cards/BaseIcon.vue";
import SearchBar from "@/components/cards/SearchBar.vue";
import ShowTemprature from "@/components/cards/ShowTemprature.vue";
import LangDropdown from "@/components/cards/LangDropdown.vue";

const links = [
  {
    link: "/uz",
    title: "Ўзбекистон",
    id: 1,
  },
  {
    link: "/world",
    title: "Жаҳон",
    id: 2,
  },
  {
    link: "/social",
    title: "Жамият",
    id: 3,
  },
  {
    link: "/conculition",
    title: "Таҳлил",
    id: 4,
  },
  {
    link: "/sport",
    title: "Спорт",
    id: 5,
  },
  {
    link: "/media",
    title: "Медиа",
    id: 6,
  },
];
</script>
<style scoped>
.telegram__link {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #34aadf;
  width: max-content;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all linear 0.3s;
  height: 48px;
}
</style>
<style>
.currency_rate svg path {
  stroke: #e50029;
}
</style>
