<template>
    <div class="project">
        <div class="ject_box">
            <p class="ject_txt">PROJECT</p>
            <div class="project_list">
                <div class="project_box" v-for="(list, index) in $store.state.project" :key="index">
                    <div class="pl_box">
                        <p>{{ list.name }}</p><em>{{ list.day }}</em>
                        <div class="pli" @click="project_link(index)">
                           <img :src="require(`../img/${list.name}.png`)" alt="" >
                           <span><p>VIEW PROJECT</p></span>
                        </div>
                    </div>
                    <div class="pr_box" >
                        <p class="p_people">{{ list.people }}</p>
                        <h1>개발 언어</h1>
                        <p>{{ list.stack }}</p>
                        <h1>프로젝트 설명</h1>
                        <p v-html="line(index)"></p>
                        <h1>나의 기여도</h1>
                        <p>{{ list.did }}</p>
                        <input type="button" value="view_code" @click="codelink(index)">
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
            project_link(index) {
                window.open(this.$store.state.project[index].link)
            },

            line(index) {
                return this.$store.state.project[index].goal.replace(/(?:\r\n|\r|\n)/g,"<br>");
            },
            codelink(index) {
                index == 0 ? alert('팀 프로젝트의 코드는 준비 중입니다') : window.open(this.$store.state.project[index].codelink);
            }
        },
        computed: {

        }
    }
</script>


<style>

</style>
