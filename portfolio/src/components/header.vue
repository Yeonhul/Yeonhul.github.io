<template>
    <div class="header">
        <div class="pro">
            <div class="plbox">
                <div class="pro_img"><img :src="require(`../img/mo.jpg`)" alt=""></div>
                <div class="pro_txt">
                    <h1>안녕하세요!</h1>
                    <p>Front_end 개발자 구현모 입니다.</p>
                </div>
            </div>
            <div v-html="$store.state.info.info" v-show="$store.state.info_TF"></div>        
        </div>
        <div :class="['h_pbox',{'hp_E2' : header_TF}]">
            <input :class="['h_put', put_E(h_index)]" type="button" 
            v-for="(m, h_index) in menu" :key="h_index" :value="m" @click="m_link(m.toLowerCase(),h_index)"> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu : [
                'Profile',
                'Project',
                'Blog',
            ],
            header_TF : false,
        }
    },
    methods : {
        m_link(dex, index) {
            var router = this.$router;
            router.push({name : dex});
            this.$store.commit('putE', index);
        },

        resize_event() { //resize 이벤트
            this.$store.commit('resize');
        },

        scroll_event() { //scrollTop 이벤트
            var sctop = $(window).scrollTop();
            var hp_off = $('.h_pbox').offset().top;
            var header_height = $('.header').height();
            
            if(hp_off <= sctop && this.$store.state.width_resize < 1024 && this.header_TF == false) {
                this.header_TF = true
            }else if(header_height >= sctop && this.$store.state.width_resize < 1024 ) {
                this.header_TF = false
            }
        },
        put_E(index) {
            return this.$store.state.put_c == index ? "h_E" : ""
        }
    },
    computed : {
    },
    mounted() { //새로고침
        $('html, body').scrollTop(0);
        window.addEventListener('resize', this.resize_event); //resize
        window.addEventListener('scroll', this.scroll_event); //scroll
        this.$store.commit('resize');
    },

    beforeDestory() {
        window.removeEventListener('resize', this.resize_event); //resize
    },
    watch:{ 
        '$route' (to, from) { 
            $('html, body').animate({scrollTop : 0});
        }
    },
}
</script>


<style>


</style>
