<template>
  <div class="flex">
    <button class="border rounded-full px-4 py-2 bg-yellow-500 text-white focus:ring-2">
      Edit
    </button>
    <button class="border rounded-full px-4 py-2 bg-red-500 text-white focus:ring-2">
      Delete
    </button>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  components: { FontAwesomeIcon}
}
</script>