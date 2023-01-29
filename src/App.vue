<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderTitle from "@/components/cards/HeaderTitle.vue";
import Navbar from "@/components/cards/Navbar.vue";
import Footer from "@/components/cards/Footer.vue";
</script>

<template>
  <header-title title="Hill" subtitle="Барчаси" />

  <Navbar />
  <RouterView />
  <Footer />
</template>
<style scoped></style>
