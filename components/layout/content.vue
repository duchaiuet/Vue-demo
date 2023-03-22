<template>
  <p>{{showType}}</p>
  <Product v-show="showType===1"/>
  <WareHouse v-show="showType===2"/>
</template>

<script>
import { mapState } from 'vuex'
import Product from "~/components/organisms/Product.vue"
import WareHouse from "~/components/organisms/WareHouse.vue";
export default {
  props: {showType: Number},
  data () {
    return {
      // showType: 0,
    }
  },
  computed: {
    ...mapState({
      showType: state => state.showType
    })
  },

  components: {Product, WareHouse},

}
</script>