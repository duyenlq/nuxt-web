// const { isLoggedIn, userLogin } = storeToRefs(useAuthStore());
// export default defineNuxtRouteMiddleware((to, from) => {  
//   // console.log(to,"Hiển thị to admin");
//   // console.log(from,"Hiển thị from admin");
//   // console.log('Hiển thị role Number',Number(userLogin.role.id));
//   console.log(isLoggedIn.value,"Hiển thị isLoggedIn");
    
//   if (!isLoggedIn.value) {
//     useToast().add({title: 'Vui lòng đăng nhập', description: 'Bạn cần đăng nhập để truy cập chức năng này!', color:'red', timeout:1500});
//     sessionStorage.setItem('nextPath', to.path);
//     return navigateTo('/dang-nhap');
//   }else if( Number(userLogin.value.role.id) > 1){
//     useToast().add({title: 'Thông báo!', description: 'Bạn chưa đủ quyền để truy cập chức năng này!', color:'red', timeout:1500});
//     if(from.path){
//       return navigateTo(from.path);
//     }
//     return navigateTo('/');
//   }
// });


export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuthStore();  
  // console.log(from,"Hiển thị từ from");
  // console.log(to,"Hiển thị đến to");
  if (!isLoggedIn) {    
    useToast().add({title: 'Vui lòng đăng nhập', description: 'Bạn cần đăng nhập để truy cập chức năng này!', color:'red', timeout:1800});
    sessionStorage.setItem('nextPath', to.path);
    return navigateTo('/dang-nhap');
  }
});