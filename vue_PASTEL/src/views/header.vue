<template>
    <div :class="['header', {'h_E': header_TF}]">
        <h1>PASTEL</h1>
        <div class="h_box">
            <input :class="['h_bt', b_class(h_dex)]" type="button" v-for="(m, h_dex) 
            in menu" :key="h_dex" :value="m" @click="m_click(m, h_dex)">
        </div>
    </div>
</template>

<script>
import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onErrorCaptured,
    onMounted,
    onUnmounted,
    onUpdated
} from "vue";
import $ from 'jquery';
export default {
    data() {
        return {
            menu : ['MAIN', 'COLOR_LIST'], //router list
            header_TF : false, // 모바일용 header 이벤트 
            b_count : 0, // 버튼 활성화 체크 
        }
    },
    methods :{
        m_click(m_name, dex) {
            this.$router.push({name : m_name.toLowerCase()})
            this.b_count = dex;
        },
        
        resize_event() { //resize 이벤트
            this.$store.commit('resize');
        },

        scroll_event() { //scrollTop 이벤트
            var sctop = $(window).scrollTop();
            if(sctop > 100 && this.$store.state.width_resize < 1024) {
                this.header_TF = true;
            }else if(sctop == 0 && this.$store.state.width_resize < 1024) {
                this.header_TF = false;
            }
        },
        b_class(dex) {
            return this.b_count == dex ? "h_E" : ""; // 최초 페이지 입장 시 route 확인 후 상태부여
        },
        load() {
            var name = this.$route.name;
            return this.$route.name == undefined ? 0 : this.b_count = this.menu.indexOf(name.toUpperCase());
        }
        

    },
    computed : {
    },
    mounted() {
        window.addEventListener('resize', this.resize_event); //resize
        window.addEventListener('scroll', this.scroll_event); //scroll
        window.addEventListener('load', this.load);
        this.$store.commit('resize');
    },
    updated() {
    },
    beforeDestory() {
    },
    watch:{ 
        '$route' (to, from) { // eslint-disable-line no-unused-vars.
            this.load() //route 가 변경 일어 날 때 마다 감지
            $('html, body').animate({scrollTop : 0});
        }
    },
    setup() {
        onUpdated(() => {
        })
    },


}

</script>

<style>
    
</style>