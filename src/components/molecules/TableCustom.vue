<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-2">
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
          <ButtonGroup/>
        </td>
      </tr>
      </tbody>
    </table>
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
import ButtonGroup from "~/src/components/molecules/ButtonGroup.vue";
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
      ]
    }
  },
  components: {ButtonGroup}
}


</script>
