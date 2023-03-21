<script setup lang="ts">
import Navbar from "~/src/components/layout/navbar.vue";
import SideBar from "~/src/components/layout/sidebar.vue";
import Content from "~/src/components/layout/content.vue";
</script>

<template>
  <div class="flex flex-row">
    <SideBar/>
    <div class="flex flex-col w-full">
      <Navbar/>
      <content/>
    </div>
  </div>
</template>
