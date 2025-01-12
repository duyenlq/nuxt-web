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
