<script>
import Navbar from "~/src/components/layout/navbar.vue";
import SideBar from "~/src/components/layout/sidebar.vue";
import Content from "~/src/components/layout/content.vue";
export default {
  name: "index",
  components: {Navbar,SideBar,Content}
}
</script>

<template>
  <div class="flex flex-row">
    <SideBar/>
    <div class="flex flex-col w-full">
      <Navbar/>
      <content/>
      <NuxtLink to="/warehouse">
        Warehouse (internal link that belongs to the Nuxt App)
      </NuxtLink>
    </div>
  </div>
</template>
