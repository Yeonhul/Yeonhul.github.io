<template>
    <div class="blog">
        <div class="blog_box">
            <em>Posting list</em>
            <select v-model="$store.state.select" class="select">
                <option :value="'all'" >All</option>
                <option :value="'html'">HTML</option>
                <option :value="'css'">CSS</option>
                <option :value="'javascript'">Javascript</option>
                <option :value="'scss'">SCSS</option>
                <option :value="'vue'">Vue.js</option>
            </select>
            <div class="posting_list">
                <div class="post_box" v-for="(blist, index) in posting_list" 
                :key="index" @click="links(blist.link)">
                    <img :src="require(`@/img/posting/${blist.img}.png`)" alt="">
                    <p :class="name(blist.tag)">{{ language(blist.tag) }}</p>
                    <div class="post_t">
                        <h3 v-html="line(blist.title)"></h3>
                        <h4>{{ blist.day }}</h4>
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
            line(title) {
                return title.replace(/(?:\r\n|\r|\n)/g,"<br>");
            },
            name(name) {
                return name.toLowerCase();
            },
            links(link) {
                window.open(link);
            },
            language(tag) {
                return tag =='VUE' ?  'Vue' : tag
            }
        },
        computed : {
            posting_list() {
                return this.$store.getters['posting_list'];
            }
        }
    }
</script>


<style>

</style>
