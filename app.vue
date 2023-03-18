<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue";
import SideBar from "~/components/layout/sidebar.vue";
</script>

<template>
  <div class="flex flex-row">
    <SideBar/>
    <div class="w-full">
      <Navbar/>
    </div>

  </div>
</template>
