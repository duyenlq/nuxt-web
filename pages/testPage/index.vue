<template>
    <div class="container"> 
        <Breadcrumb :first="[{title: 'Trang chủ',link:'/'}]" :last="'tiện ích'" />
    </div>
    <div class="container mt-2 mb-4 md:mt-4 flex flex-col gap-2 md:gap-4">
        <div class="text text-main"> 
            Đây là trang Tiện Tích
        </div>
        <div class="flex flex-col md:flex-row gap-10"> 
            
        </div>
    </div>
</template>

<script setup lang="ts">
    const { toggleLoadingModal } = useModalStore()
        const getData = async () => {
        
    }
    onMounted(async () => {
        getData()
    });

    

</script>

<style scoped>

</style>