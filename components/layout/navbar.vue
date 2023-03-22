<template>
  <nav class="h-14 ml-auto flex flex-col bg-white border-gray-200 px-4 lg:px-6 py-2 border-gray-300 w-full relative">
    <button type="button"
            @click=""
            class="absolute border-none left-0 ml-2 py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
      </svg>
    </button>

    <button type="button"
            class="absolute right-20 p-2 lg:py-2.5 text-gray-900 bg-white rounded-full focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
      <span class="absolute bg-red-300 text-red-800 text-xs font-medium w-2 h-2 ml-2 top-2 rounded-full"></span>
      <svg class="icon icon-tabler icon-tabler-bell-ringing rounded-full" width="22px" height="22px" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
        <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
        <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"></path>
        <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"></path>
      </svg>
    </button>
    <button type="button"
            class="absolute right-5 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full">
      <img class="rounded-full w-8 h-8" src="https://modernize-nuxtjs-free.netlify.app/images/users/avatar-1.jpg"
           alt="image description">
    </button>
  </nav>
</template>
<script>
export default {
  name: "navbar"
}
</script>