<template>
  <div >
    <div class="flex flex-row-reverse mr-4">
      <button class="border-2 rounded-full px-4 py-2 bg-white focus:ring-2 mt-1">
        Add Product
      </button>
    </div>
    <TableCustom/>
  </div>
</template>

<script>
import TableCustom from "~/src/components/molecules/TableCustom.vue";
export default {
  name: "Product",
  components: {TableCustom}
}
</script>

<style scoped>

</style>