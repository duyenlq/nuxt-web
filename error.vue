<template>
    <div class="h-[100vh] flex justify-center w-full">
        <div class="flex gap-1 sm:gap-2 lg:gap-3 flex-col items-center justify-center"> 
            <img class="h-[60vh]" :src="`/img/error/${error.statusCode}.png`" alt="">
            <div class="w-full text-center">
                <div class= "flex flex-col gap-1 sm:gap-2">
                    <!-- <p class="text-base sm:text-lg lg:text-xl font-bold">{{ error.statusCode }}</p> -->
                    <!-- <p class="text">{{ error }}</p> -->
                    <p class="font-bold text-lg sm:text-4xl">Oops....</p>
                    <p class="text-base sm:text-lg md:text-xl font-medium">{{ error.message }}</p>
                    <p class="text mt-1">This Page doesn`t exist or was removed! We suggest you  back to home.</p>
                </div>                
            </div>
            <nuxt-link to="/">
                <button class="flex gap-0.5 bg-main sm:gap-1 items-center px-2 md:px-3 py-2 rounded-md !text-white">
                    <div class="i-tdesign-arrow-left"></div>
                    <p class="text">Quay về trang chủ</p>
                </button>
            </nuxt-link>
        </div>        
    </div>    
</template>
<script setup lang="ts">
    defineProps(['error']);    
</script>