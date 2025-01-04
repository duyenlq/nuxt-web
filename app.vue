<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { toggleLoadingModal } = useModalStore()
const { getMenu } = useSettingStore()
const { setUserLogin } = useAuthStore()
toggleLoadingModal(true) 

const authCookie = useCookie('authCookie');
if(authCookie.value){
  setUserLogin(authCookie.value);
}
await useAsyncData('getMenu', ()=> getMenu())
toggleLoadingModal(false)
</script>
