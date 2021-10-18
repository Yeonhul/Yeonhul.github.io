<template>
    <div class="main_p">
        <div class="banner">
            <p>PASTEL <em> PALETTE</em></p>
            <div  class="mc_box">
                <li class="mc_li" v-for="(n, index) in 6" 
                :key="index" :style="[ style_TF ? li_class(index) : 0]"></li>
            </div>
            </div>
        <h1>오늘은 이런 색 어때요 ?</h1><p>{{ dice_txt }}</p>
        <div class="h_con">
            <div class='hex_box' v-for="(color, indexs) in day_color" :key="indexs" @click="link_c(color.hex)">
                <div class="hex_card">
                    <img :src="require(`../img/${color.hex}.png`)" alt="">
                    <p>{{ color.hex }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onErrorCaptured,
    onMounted,
    onUnmounted,
    onUpdated
} from "vue";
export default {
    data() {
        return {
            dice : "", // 랜덤 색상 변수 
            dice_box : [ 
                'red',
                'blue',
                'purple',
                'brown',
                'green',
                'beige',
                'yellow',
                'pink',
                'gray',
                'orange'
            ],
            style_TF : false, // 리랜더링 방지
        }
    },    
    methods: {
        link_c(color) {
            this.$store.commit('toss', color); 
            this.$router.push({name: 'color_list'});
        },
        li_class(index) {
            let colorData = this.$store.state.ColorList[this.$store.state.box[index]];
            return { // 예외처리
                'background-color' : colorData == undefined ? '' : colorData.hex
            }
        },
    },
    computed : {
        dice_txt() {
            return this.dice.toUpperCase();
        },
        li_color() {
            return this.$store.getters['random'];
        },  
        day_color() {
            const random = Math.floor(Math.random() * 10);//0~9
            this.dice = this.dice_box[random];
            return this.$store.state.ColorList.
            filter((x => x.tag.join().toLowerCase().includes(this.dice)))
        }
    },
    mounted() {
        window.addEventListener('load',this.li_color)
        this.style_TF = true
    },
    updated() {
    },  
    beforeDedice() {
    },
    renderTriggered({ key, target, type }) {
    },
    setup() {
        onUpdated(() =>{
            
        })
    }
}
</script>
