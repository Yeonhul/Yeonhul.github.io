import { createStore } from "vuex";
import info from '@/data/info.js';
import posting from '@/data/posting_list.js';
import project from '@/data/project_list.js';
import skills from '@/data/skils.js'
import storage from '@/data/storage.js'

export default createStore({
    state: {
        info : info,
        posting : posting,
        project : project,
        skills : skills,
        storage : storage,
        width_resize : 0,
        height_resize : 0,
        info_TF : true,
        app_back : 0,
        put_c : 0,
        select : 'all',
    },
    mutations: {
        resize(state) { // resize 이벤트
            state.width_resize = window.innerWidth;
            if(state.width_resize > 1023) {
                state.info_TF = true;
            }else if(state.width_resize < 1024) {
                state.info_TF = false;
            }
        },
        background(state, route) {
            switch (route) {
                case 'profile' : return state.app_back = 0, state.put_c = 0 
                case 'project' : return state.app_back = 1, state.put_c = 1
                case 'blog' : return state.app_back = 2, state.put_c = 2
            }
        },
        putE(state, index) {
            state.put_c = index
        },
    },
    actions: {
    },
    modules: {
    },
    getters : {
        posting_list(state) {
            return state.select == 'all' ? state.posting : state.posting.filter((v => v.tag == state.select.toUpperCase()))
        }
    },
});
