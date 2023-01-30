<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/cards/Navbar.vue";
import Footer from "@/components/cards/Footer.vue";
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
<style scoped></style>
