export const useAuthStore = defineStore('authStore', {
    state: () => ({
        userLogin: {} as any,
    }),

    getters: {
        isLoggedIn: (state) => state.userLogin.id,
    },

    actions: {

        async setUserLogin(param : any) {
            try {
                this.userLogin = param;
                // console.log(this.userLogin, 'bạn đã lưu Hồ sơ đăng nhập!');                
            } catch (error) {
                console.error('Error:', error);
            }
            
        },

        async getUsersList() {
            try {
                const data = await getFirebase('/users/list/');
                // this.menu = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
                return data ? Object.keys(data).map(key => ({ ...data[key] })) : [];
                // console.log(this.menu, 'Hiển thị menu đã get');
                
            } catch (error) {
                console.error('Error loading get:', error);
            }
        },

        async getUsersById( param : any) {
            try {
                const dataUser = await getFirebase('/users/list/'+ param );
                // this.menu = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
                // return data ? Object.keys(data).map(key => ({ ...data[key] })) : [];
                // console.log(dataUser, 'Hiển thị user đã get');
                return dataUser;
                
            } catch (error) {
                console.error('Error loading get:', error);
            }
        },

        async addUsers(param : any) {
            try {
                setFirebase('/users/list/'+ param.id, param)
            } catch (error) {
                console.error('Error loading add:', error);
            }
            
        },

        async updateUsers(param : any) {            
            try {
                updateFirebase('/user/list/'+ param.id, param)
            } catch (error) {
                console.error('Error loading update:', error);
            }
        },

        async deleteUsers(id: any) {            
            try {
                removeFirebase('/user/list/'+ id)
            } catch (error) {
                console.error('Error loading delete:', error);
            }
        },
    }
})