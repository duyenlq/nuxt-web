<template>
    <div class="container"> 
        <Breadcrumb :first="[{title: 'Trang chủ',link:'/'},{title: 'Game hay',link:'/game-hay'}]" :last="'game card'" />
    </div>
    <div class="container mt-2 mb-4 md:mt-4 flex flex-col gap-2 md:gap-4">
        <div class="class">
        </div>
    </div>
</template>

<script setup lang="ts">
    const listGame = ref( 
        [
            { id: '1', title: 'Cờ caro', link: 'co-caro', img: 'banner5.jpg', menu: []},
            { id: '2', title: 'Cờ caro online', link: 'co-caro-online', img: 'banner4.jpg', menu: []},
            { id: '3', title: 'Game Pokemon', link: 'game-pk', img: 'banner3.jpg', menu: []},
        ]
    )
</script>

<style scoped>

</style>