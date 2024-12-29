export const useAuthStore = defineStore('authStore', {
    // state: () => ({
    // }),
    actions: {
        // menu main website
        async getUsersList() {
            try {
                const data = await getFirebase('/user/list/');
                // this.menu = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
                return data ? Object.keys(data).map(key => ({ ...data[key] })) : [];
                // console.log(this.menu, 'Hiển thị menu đã get');
                
            } catch (error) {
                console.error('Error loading get:', error);
            }
        },

        async addUsers(param : any) {
            try {
                setFirebase('/user/list/'+ param.id, param)
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