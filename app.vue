<script>
import Navbar from "~/src/components/layout/navbar.vue";
import SideBar from "~/src/components/layout/sidebar.vue";
export default {
  name: "Main",
  components: {Navbar,SideBar}
}
</script>

<template>
  <div class="flex flex-row">
    <SideBar/>
    <div class="flex flex-col w-full">
      <Navbar/>
<!--      <NuxtLink to="/">Index</NuxtLink>-->
<!--      <NuxtLink to="/warehouse">warehouse</NuxtLink>-->
    </div>
  </div>
</template>
