<template>
    <div class="chatIn">
        <div class="header">
            <mt-header title="">
                <router-link slot="left" to="">
                    <mt-button @click="goBack" class="head-title" icon="back">聊天信息</mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="main">
            <div class="main-user">
                <div>
                    <img :src="img" alt="">
                    <span>{{name}}</span>
                </div>
                <div>
                    <div class="main-chat-add">
                        <i class="iconfont icon-tianjia1"></i>
                    </div>
                </div>
            </div>
            <span class="find-clear"></span>
            <mt-cell-swipe>
                <div class="home-item">
                    <span class="find-item-icon">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-pengyouquan"/>
                        </svg>
                    </span>
                    <span class="find-item-title">朋友圈</span>
                    <i class="iconfont icon-you find-item-right"></i>
                </div>
            </mt-cell-swipe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatIn",
        data() {
            return {
                name: this.$route["query"]["name"],
                img: this.$route["query"]["img"],
            }
        },
        methods: {
            goBack() {
                window.history.go(-1);
            }
        }
    }
</script>

<style scoped>
    @import "../../../public/css/home.css";
    .icon-tianjia1{
        display: block;
        margin: .1rem auto;
        text-align: center;
        font-size: .4rem;
    }
    .icon {
        width: .2rem;
        height: .2rem;
        border-radius: .05rem;
        line-height: .2rem;
        vertical-align: 0.5em;
        fill: currentColor;
        overflow: hidden;
    }

    .iconfont {
        font-size: .18rem;
    }
</style>