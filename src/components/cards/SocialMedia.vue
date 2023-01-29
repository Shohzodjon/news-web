<template>
  <ul class="flex items-center gap-[5px]">
    <li
      v-for="item in socialLinks"
      :key="item.id"
      class="flex items-center justify-center w-[35px] h-[35px] rounded-lg"
      :class="[item.active ? 'bg-[#E3E5EA]' : '']"
      @click="() => handleClick(item.id)"
    >
      <router-link to="/"
        ><base-icon
          :name="item.name"
          :class="[item.active ? 'social_active' : '']"
      /></router-link>
    </li>
  </ul>
</template>
<script setup>
import { RouterLink } from "vue-router";
import BaseIcon from "./BaseIcon.vue";
import { ref } from "vue";

const socialLinks = ref([
  {
    id: 1,
    name: "telegram",
    active: false,
  },
  {
    id: 2,
    name: "inst_icon",
    active: false,
  },
  {
    id: 3,
    name: "face_icon",
    active: false,
  },
  {
    id: 4,
    name: "you_icon",
    active: false,
  },
  {
    id: 5,
    name: "twitter_icon",
    active: false,
  },
  {
    id: 6,
    name: "tik_icon",
    active: false,
  },
]);

const handleClick = (id) => {
  socialLinks.value.forEach((item) => {
    if (id === item.id) {
      item.active = true;
    } else {
      item.active = false;
    }
  });
};
</script>
<style scoped>
ul li {
  transition: all 0.3s linear;
}
ul li:hover {
  background: #f1f2f5;
}
ul li:nth-child(2) {
  padding-top: 2px;
}
ul li:nth-child(3) {
  padding-top: 5px;
}
.ul li:last-child {
  padding-top: 10px;
}
</style>
<style>
.social_active svg path {
  fill: #1d3068 !important;
}
</style>
