<template>
  <footer class="bg-white py-[30px]">
    <div class="container">
      <div class="flex items-center gap-10">
        <router-link to="/"><base-icon name="logo" /></router-link>
        <ul class="flex items-center gap-[15px]">
          <li
            v-for="item in footerLinks"
            :key="item.id"
            class="text-[17px] text-mainBlue font-medium px-5 py-[14px] rounded-lg transition-all duration-300 hover:bg-[#F1F2F5]"
            :class="[item.isActive ? 'bg-[#E3E5EA]' : '']"
            @click="() => handleClick(item.id)"
          >
            <router-link :to="item.link">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
      <!-- footer pregraph -->
      <ul class="flex gap-10 mt-[30px]">
        <li class="flex-1">
          <p class="text-sm text-secondaryBlue">
            © 2023 Platina.uz. Барча ҳуқуқлар ҳимояланган. «Platina.uz» сайтида
            жойланган маълумотлар муаллифнинг шахсий фикри. Сайтда жойланган ҳар
            қандай материалларни ёзма рухсатсиз фойдаланиш таъқиқланади.
          </p>
        </li>
        <li class="flex-1">
          <p class="text-sm text-secondaryBlue">
            Ўзбекистон Республикаси Президенти Администрацияси ҳузуридаги
            Ахборот ва оммавий коммуникациялар агентлиги томонидан 02.12.2022
            санасида №051412 сонли гувоҳнома билан ОАВ сифатида рўйхатга олинган
          </p>
        </li>
        <li class="flex-1">
          <p class="text-sm text-secondaryBlue">
            Агарда хатолик топсангиз матннинг бир қисмини белгилаб Ctrl+Enter
            тугмаларини босинг
          </p>
        </li>
      </ul>
      <div class="mt-[30px] bg-[#D5DDF3] h-[1px] mb-[10.32px]"></div>
      <div class="flex items-center justify-between">
        <social-media />
        <div class="flex items-center gap-[10px]">
          <h4
            class="rounded-[9px] bg-[#ED1C24] text-center px-[10px] py-[5px] text-[10px] font-bold text-white w-max"
          >
            REDMEDIA
          </h4>
          <p class="text-secondaryBlue text-sm">
            IT-компанияси томонидан ишлаб чиқилди
          </p>
        </div>
        <div
          class="flex items-center justify-center w-[35px] h-[35px] rounded-lg bg-lightGrey py-[11px] px-[7px]"
        >
          <span class="text-[12px] font-semibold text-secondaryBlue">18+</span>
        </div>
      </div>
    </div>
  </footer>
  <div class="mt-20"></div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import BaseIcon from "./BaseIcon.vue";
import SocialMedia from "./SocialMedia.vue";
import { ref } from "vue";
const footerLinks = ref([
  {
    id: 1,
    link: "/",
    title: "Сайт ҳақида",
    isActive: false,
  },
  {
    id: 2,
    link: "/",
    title: "Реклама",
    isActive: false,
  },
  {
    id: 3,
    link: "/",
    title: "Маҳфийлик сиёсати",
    isActive: false,
  },
]);

const handleClick = (id) => {
  footerLinks.value.forEach((item) => {
    if (item.id === id) {
      item.isActive = true;
    } else {
      item.isActive = false;
    }
  });
};
</script>
