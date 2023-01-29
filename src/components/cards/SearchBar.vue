<template>
  <div class="w-full relative">
    <label
      for="search__input"
      class="absolute top-[55%] translate-y-[-50%] left-[23px] cursor-pointer"
    >
      <base-icon name="search_icon" />
    </label>
    <input
      type="text"
      placeholder="Сайт бўйлаб қидирув..."
      id="search__input"
      autocomplete="off"
      v-model="searchVal"
      class="py-[14px] pl-[56px] placeholder:text-secondaryBlue font-medium text-[17px] w-full rounded-lg outline-[2px] outline-transparent border-none bg-lightGrey transition-all duration-300 text-mainBlue"
    />
    <base-icon
      name="close_icon"
      class="clear__input"
      :class="[searchVal.trim() ? 'block opacity-100' : '']"
      @click="removeVal"
    />
  </div>
</template>
<script setup>
import BaseIcon from "./BaseIcon.vue";
import { ref } from "vue";
const searchVal = ref("");
function removeVal() {
  searchVal.value = "";
}
</script>
<style scoped>
input:focus {
  outline-color: #0066cc;
}
</style>
<style>
.clear__input {
  position: absolute;
  right: 29px;
  top: 19px;
  cursor: pointer;
  opacity: 0;
  transition: all linear 0.3s;
  display: none;
}
</style>
