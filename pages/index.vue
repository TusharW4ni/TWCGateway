<script setup lang="ts">
const users = await useFetch("/api/get/users");
console.log(users);
</script>
<template>
  <div
    class="flex w-screen h-screen justify-center items-center underline bg-black text-white text-4xl font-bold"
  >
    Hello
  </div>
  <div v-if="users">{{ users }}</div>
</template>
