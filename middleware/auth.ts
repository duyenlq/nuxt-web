import { useAuthStore } from "~/stores/users";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    useToast().add({title: 'Vui lòng đăng nhập', description: 'Bạn cần đăng nhập để truy cập chức năng này!', color:'red', timeout:2000});
    return navigateTo('/dang-nhap');
  }
});
