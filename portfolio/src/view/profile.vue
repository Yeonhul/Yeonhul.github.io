<template>
    <div class="profile">
        <div class="pro_box">
            <div class="info2" v-show="!$store.state.info_TF">
                <p class="info2_h">INFO</p>
                <div v-html="$store.state.info.info"></div>
            </div>
            <div class="inroduce">
                <p v-html="$store.state.info.file"></p>
            </div>
            <div class="skils">
                <em>SKILLS</em>
                <div class="skil_g">
                    <div class="sk_box" v-for="(s, sdex) in $store.state.skills" :key="sdex">
                        <div class="sk_img"><img :src="require(`@/img/skills/${s.name}.png`)" alt=""></div>
                        <p class="sk_txt">{{s.name}}</p>
                    </div>
                </div>
            </div>

            <div class="storage">
                <em>STORAGE</em>
                <div class="st_g">
                    <div class="st_box" v-for="(st, stdex) in $store.state.storage" :key="stdex" @click="st_click(stdex)">
                        <div class="st_img"><img :src="require(`@/img/storage/${st.name}.png`)" alt=""></div>
                        <p class="st_txt">{{st.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods : {
        st_click(index) {
            window.open(this.$store.state.storage[index].link)
        },
        resize_event() { //resize 이벤트
        },
    },
    mounted() {
        window.addEventListener('resize', this.resize_event); //resize
    },
    beforeDestory() {
    },
    

}
</script>


<style>

</style>
