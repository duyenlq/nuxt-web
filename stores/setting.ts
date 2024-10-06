export const useSettingStore = defineStore('settingStore', {
    state: () => ({
        menu: [] as any,
    }),

    actions: {
        async getMenu() {
            try {
                const data = await getFirebase('/setting/menu');
                // this.menu = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
                this.menu = data ? Object.keys(data).map(key => ({ ...data[key] })) : [];
                // console.log(this.menu, 'Hiển thị menu đã get');
                
            } catch (error) {
                console.error('Error loading get:', error);
            }
        },

        async addMenu(param : any) {
            try {
                setFirebase('/setting/menu/'+ param.id, param)
            } catch (error) {
                console.error('Error loading add:', error);
            }
            
        },

        async updateMenu(param : any) {            
            try {
                updateFirebase('/setting/menu/'+ param.id, param)
            } catch (error) {
                console.error('Error loading update:', error);
            }
        }, 

        async deleteMenu(id: any) {            
            try {
                removeFirebase('/setting/menu/'+ id)
            } catch (error) {
                console.error('Error loading delete:', error);
            }
        },       
    }
})