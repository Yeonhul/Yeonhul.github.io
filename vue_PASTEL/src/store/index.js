import { createStore } from "vuex";
import ColorList from '@/views/list.js'

export default createStore({
    state: {
        width_resize : 0,
        height_resize : 0,
        TF : true,
        ColorList : ColorList,
        search : '',
        choice_r : 0,
        choice_g : 0,
        choice_b : 0,
        percent_r : 0,
        percent_g : 0,
        percent_b : 0,
        box : [],
    },
    mutations: {
        resize(state) { // resize 이벤트
            state.width_resize = window.innerWidth;
            if(state.width_resize > 1023) {
                state.TF = true;
            }else if(state.width_resize < 1024) {
                state.TF = false;
            }
        },
        change_TF(state) { // 모바일 alert 
            if(state.TF == true && state.width_resize < 1024) {
                state.TF = false;
            }else if(state.TF == false && state.width_resize < 1024) {
                state.TF = true;
            }
        },
        toss(state, hex) { // colorpage color 전달 
            state.search = hex.toLowerCase();
        },
        similar(state, num) { // 관련색상 검색 기능
            state.search = state.ColorList[num].tag[1]
        },
        choice(state, index) { //alert 색상값 전달 
            state.choice_r = state.ColorList[index].r;
            state.choice_g = state.ColorList[index].g;
            state.choice_b = state.ColorList[index].b;
        },


    },
    actions: {
    },
    modules: {

    },
    getters : {
        search(state) {
            return state.search.toLowerCase();
        },
        choice_r(state) {
            state.percent_r = (state.choice_r*100 / 
                (state.choice_r + state.choice_g + state.choice_b)).toFixed(2);
            return (state.percent_r == 'NaN') ? 0 : state.percent_r
        },
        choice_g(state) {
            state.percent_g = (state.choice_g*100 / 
                (state.choice_r + state.choice_g + state.choice_b)).toFixed(2);
            return (state.percent_g =='NaN') ? 0 : state.percent_g
        },
        choice_b(state) {
            state.percent_b = (state.choice_b*100 / 
                (state.choice_r + state.choice_g + state.choice_b)).toFixed(2);
            return (state.percent_b == 'NaN') ? 0 : state.percent_b
        },
        random(state) {
            var aa = []; 
            for (var ss = 0; ss < 6; ss++) {
                var ii = Math.floor(Math.random() * state.ColorList.length);
                if (aa.indexOf(ii) === -1) { 
                    aa.push(ii)                
                }else{ 
                    ss--
                }
            }
            return state.box = aa;
        }
    },
});
