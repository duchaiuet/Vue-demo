<template>
  <div class="flex">
    <h6 class="px-4 py-2 border rounded-lg focus:ring-2 ml-2 my-1 ">
      Products
    </h6>
  </div>
  <div class="grid grid-cols-4 gap-3 px-2 overflow-y-scroll h-1/2">
      <card v-for="(ele, index) in items" :key="index" :title="ele.title"
            :img="ele.img" :point="ele.point" :stars="ele.stars" :price="ele.price"/>
  </div>

</template>

<script>
import Card from "~/components/molecules/Card.vue"

export default {
  name: "Product",
  components: {Card},
  data() {
    return {
      items: [
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          point: 4.0,
          stars: 4,
          price: "199"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
          point: 5,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
        {
          title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
          img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
          point: 5.0,
          stars: 5,
          price: "599"
        },
      ]
    }
  }
}
</script>
