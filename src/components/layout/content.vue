<template>
  <Product v-show="this.showType===1"/>
  <WareHouse v-show="this.showType===2"/>
</template>

<script>
import Product from "~/src/components/organisms/Product.vue"
import WareHouse from "~/src/components/organisms/WareHouse.vue";
export default {
  props: {showType: Number},
  components: {Product, WareHouse},

}
</script>