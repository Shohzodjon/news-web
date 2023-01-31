<template>
  <button
    class="w-full py-[14px] mt-5 text-[17px] leading-[20.29px] text-mainBlue font-medium bg-lightGrey rounded-md transition-all duration-300 hover:bg-[#EDEEF7]"
    :class="[btnActive ? 'bg-[#1D306826]' : '']"
    @click="toggle"
  >
    Яна юклаш
  </button>
</template>
<script setup>
import { ref } from "vue";
const btnActive = ref(false);
const toggle = () => {
  btnActive.value = !btnActive.value;
};
</script>
