<template>
    <div class="">
        <Breadcrumb :first="[{ title: 'Trang chủ', link: '/' }]" :last="'cài đặt'" />
    </div>
    <div class="mt-2 mb-4 md:mt-4 flex flex-col gap-2 md:gap-4">
        <div class="text text-main">
            Quản lí seting website
        </div>
        <div>
            <FormInputCustom :label="'Tên đăng nhập'" type="text" v-model:modelValue="modelValue" v-model:modelError="modelError" />
            value: {{ modelValue }}
            <p>
                error: {{ modelError }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: "setting",
})


const modelValue = ref('123');
const modelError = ref('bạn hiện đang lỗi');
// const { toggleLoadingModal } = useModalStore()

// const show = () => {
//     const date = new Date()
//     console.log(date.getMonth());
//     console.log(getDatetoString(date));
// }

// const user = ref({
//     id: '',
//     name: '',
//     value: '',
// })
// const userList = ref(<any>[])
// const editValue = ref(false)
// const pathData = ref('/users')

// const getData = async () => {
//     try {
//         const data = await getFirebase('/users');
//         userList.value = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
//     } catch (error) {
//         console.error('Error loading users:', error);
//     }
// }

// onMounted(async () => {
//     getData()
// });

// const setData = () => {
//     // console.log(user.value,"Hiển thị giá trị đc nhập vào");
//     toggleLoadingModal(true)
//     if (editValue.value) {
//         updateFirebase('/users/' + user.value.id, { username: user.value.name, value: user.value.value })
//     } else {
//         setFirebase('/users/' + user.value.id, { username: user.value.name, value: user.value.value })
//     }
//     getData()
//     toggleLoadingModal(false)
//     user.value = resetForm(user.value)
// }

// const deleteData = (value: any) => {
//     toggleLoadingModal(true)
//     removeFirebase('/users/' + value)
//     getData()
//     toggleLoadingModal(false)
// }

// const editData = (id: any, name: any, value: any) => {
//     editValue.value = !editValue.value
//     user.value.id = id,
//         user.value.name = name
//     user.value.value = value
// }

</script>

<style scoped></style>