<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/eye-catching-pro');

html {
  font-family: 'Eye Catching Pro', sans-serif;
  font-size: 30px;
}

.main {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 100%;
}
@media (min-width: 480px) {
  .logo {
    width: 512px;
    height: 127px;
  }
}
</style>

<template>
  <div class="main">
    <header>
      <img
        alt="ABN AMRO - TV Show listing"
        class="logo"
        src="@/assets/abn-amro-logo.png"
      />
    </header>
    <RouterView />
</div>
</template>
