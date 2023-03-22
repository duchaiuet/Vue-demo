<template>
  <div class="flex">
    <div class="flex flex-row mr-4 w-1/2">
      <h6 class="px-4 py-2 bg-green-100 rounded-lg focus:ring-2 mt-1 ">
        Warehouse
      </h6>
    </div>
    <div class="flex flex-row-reverse mr-4 w-1/2">
      <button class="border-2 rounded-full px-4 py-2 bg-white focus:ring-2 mt-1" @click="addProduct">
        Add Product
      </button>
    </div>
  </div>

  <!-- Main modal -->
  <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl top-40 md:h-auto">
      <!-- Modal content -->
      <div class="absolute left-3/4 top-1/2 w-full bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t">
          <h3 class="text-xl font-semibold text-gray-900">
            Terms of Service
          </h3>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="defaultModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
        <!-- Modal footer -->
        <div class="flex flex-row-reverse items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
          <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
          <button data-modal-hide="defaultModal" type="button" class="mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I accept</button>
        </div>
      </div>
    </div>
  </div>



  <div class="relative shadow-md sm:rounded-lg py-2">
    <div class=" overflow-y-scroll h-1/2">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          <th v-for="(ele, index) in tableHeader" :key="index" :class="ele.class">
            {{ ele.name }}
          </th>
        </tr>
        </thead>
        <tbody class="">
        <tr class="bg-white border-b" v-for="(ele, index) in products" :key="index">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ele.productName}}
          </th>
          <td class="px-6 py-4">
            {{ele.color}}
          </td>
          <td class="px-6 py-4">
            {{ele.category}}
          </td>
          <td class="px-6 py-4">
            ${{ele.price}}
          </td>
          <td class="px-6 py-4 w-2">
            <div class="flex">
              <button class="border rounded-full px-4 py-2 bg-yellow-500 text-white focus:ring-2">
                Edit
              </button>
              <button class="border rounded-full px-4 py-2 bg-red-500 text-white focus:ring-2" @click="deleteProduct">
                Delete
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <nav class="flex items-center justify-between p-3" aria-label="Table navigation">
      <span class="text-sm font-normal text-gray-500">Showing <span class="font-semibold text-gray-900 ">1-10</span> of <span
          class="font-semibold text-gray-900">1000</span></span>
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <a href="#"
             class=" px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
            Previous
          </a>
        </li>
        <li>
          <a href="#"
             class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
        </li>
        <li>
          <a href="#"
             class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
        </li>
        <li>
          <a href="#" aria-current="page"
             class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
        </li>
        <li>
          <a href="#"
             class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</a>
        </li>
        <li>
          <a href="#"
             class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">100</a>
        </li>
        <li>
          <a href="#"
             class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ButtonGroup from "~/components/molecules/ButtonGroup.vue";
export default {
  props: {
    tableHeader: [
      {class: "px-6 py-3", name: "Product"},
      {class: "px-6 py-3", name: "Color"},
      {class: "px-6 py-3", name: "Category"},
      {class: "px-6 py-3", name: "Price"},
      {class: "px-6 py-3", name: "Action"},
    ],
    name: "",
  },
  data() {
    return {
      tableHeader: [
        {class: "px-6 py-3", name: "Product name"},
        {class: "px-6 py-3", name: "Color"},
        {class: "px-6 py-3", name: "Category"},
        {class: "px-6 py-3", name: "Price"},
        {class: "px-6 py-3", name: "Action"},
      ],
      products: [
        {productName: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "2999"},
        {productName: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "1999"},
        {productName: "Apple Watch", color: "Black", category: "Watches", price: "199"},
        {productName: "Apple iMac", color: "Silver", category: "PC", price: "2999"},
        {productName: "Apple AirPods", color: "White", category: "Accessories", price: "399"},
        {productName: "iPad Pro", color: "Gold", category: "Tablet", price: "699"},
        {productName: "Magic Keyboard", color: "Black", category: "Accessories", price: "99"},
        {productName: "Smart Folio iPad Air", color: "Blue", category: "Accessories", price: "79"},
        {productName: "AirTag", color: "Silver", category: "Accessories", price: "29"},
      ],
      actions: [
        {name: "", },
      ],
      showModal: true,
    }
  },
  components: {ButtonGroup},
  methods: {
    addProduct() {
      this.products.push({productName: "AirTag", color: "Silver", category: "Accessories", price: "29"});
    },
    deleteProduct() {
      console.log("index of: ", this.products.indexOf({productName: "AirTag"}))
      this.products.slice(this.products.indexOf({productName: "AirTag", color: "Silver", category: "Accessories", price: "29"}));
    },
  }
}


</script>
