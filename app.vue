<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { toggleLoadingModal } = useModalStore()
const { getMenu } = useSettingStore() 
toggleLoadingModal(true)    
await useAsyncData('getMenu', ()=> getMenu())
toggleLoadingModal(false)
</script>
