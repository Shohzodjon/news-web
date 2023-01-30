<template>
  <div class="w-max relative">
    <div
      class="w-[138px] rounded-lg bg-lightGrey py-[14px] px-5 flex items-center gap-2 h-12"
    >
      <input
        type="text"
        v-model="lang"
        readonly
        class="bg-transparent text-[17px] text-mainBlue font-medium w-[90%] border-none outline-none"
      />
      <base-icon
        name="drop_icon"
        class="lang_drop"
        :class="[show ? 'rotate-0' : '']"
        @click="handleClick"
      />
    </div>
    <ul
      class="rounded-[12px] absolute left-0 top-[58px] w-full bg-white"
      :class="[show ? 'active_drop ' : '']"
    >
      <li
        v-for="list in langLists"
        :key="list.id"
        class="py-[7px] pl-[10px] cursor-pointer text-[17px] text-mainBlue font-medium rounded-lg my-1"
        :class="[list.choose ? 'choosen_lang' : '']"
        @click="() => chooseLang(list.id, list.lang)"
      >
        {{ list.lang }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import BaseIcon from "./BaseIcon.vue";
const lang = ref("Ўзбекча");
const show = ref(false);
const handleClick = () => {
  show.value = !show.value;
};
const chooseLang = (id, language) => {
  lang.value = language;
  show.value = false;
  langLists.value.forEach((item) => {
    if (item.id == id) {
      item.choose = true;
    } else {
      item.choose = false;
    }
  });
};
const langLists = ref([
  {
    lang: "Ўзбекча",
    id: 1,
    choose: true,
  },
  {
    lang: "O’zbekcha",
    id: 2,
    choose: false,
  },
  {
    lang: "Русский",
    id: 3,
    choose: false,
  },
  {
    lang: "English",
    id: 4,
    choose: false,
  },
]);
</script>
<style scoped>
ul {
  box-shadow: rgba(24, 39, 75, 0.08) 0px 12px 28px 0px,
    rgba(24, 39, 75, 0.08) 0px 2px 14px 0px,
    rgba(24, 39, 75, 0.12) 0px 0px 0px 1px inset;
  height: 0;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all linear 0.3s;
}
ul li:first-child {
  margin-top: 10px;
}
ul li:last-child {
  margin-bottom: 10px;
}
ul li {
  transition: all linear 0.3s;
  margin-left: 10px;
  margin-right: 10px;
}

.active_drop {
  height: 190px;
  border-color: #d5ddf3;
}
ul li:hover {
  background: #f8f8ff;
  font-weight: bold;
}
.choosen_lang {
  background: #f8f8ff;
  font-weight: bold;
}
</style>
<style>
.lang_drop {
  transition: all linear 0.3s;
  transform: rotate(180deg);
  cursor: pointer;
  transform-origin: center;
}
</style>
