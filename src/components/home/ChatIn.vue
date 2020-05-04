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
                <div @click="mailJum">
                    <img :src="img">
                    <span>{{name}}</span>
                </div>
                <div>
                    <div class="main-chat-add">
                        <i class="iconfont icon-tianjia1"></i>
                    </div>
                </div>
            </div>
            <mt-cell-swipe>
                <div class="home-item">
                    <span class="chat-item-title">查找聊天记录</span>
                    <i class="iconfont icon-you chat-item-right"></i>
                </div>
            </mt-cell-swipe>
            <span class="chat-clear"></span>
            <mt-cell-swipe>
                <div class="home-item">
                    <span class="chat-item-title">消息免打扰</span>
                    <mt-switch v-model="value1" class="switch-right"></mt-switch>
                </div>
            </mt-cell-swipe>
            <mt-cell-swipe>
                <div class="home-item">
                    <span class="chat-item-title">置顶聊天</span>
                    <mt-switch v-model="value2" class="switch-right"></mt-switch>
                </div>
            </mt-cell-swipe>
            <mt-cell-swipe>
                <div class="home-item">
                    <span class="chat-item-title">强提醒</span>
                    <mt-switch v-model="value3" class="switch-right"></mt-switch>
                </div>
            </mt-cell-swipe>
            <span class="chat-clear"></span>
            <mt-cell-swipe>
                <div class="home-item">
                    <span class="chat-item-title">设置当前聊天背景</span>
                    <i class="iconfont icon-you chat-item-right"></i>
                </div>
            </mt-cell-swipe>
            <span class="chat-clear"></span>
            <mt-cell-swipe>
                <div class="home-item">
                    <span class="chat-item-title">清空聊天记录</span>
                    <i class="iconfont icon-you chat-item-right"></i>
                </div>
            </mt-cell-swipe>
            <span class="chat-clear"></span>
            <mt-cell-swipe>
                <div class="home-item">
                    <span class="chat-item-title">投诉</span>
                    <i class="iconfont icon-you chat-item-right"></i>
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
                value1: false,
                value2: false,
                value3: false,

            }
        },
        methods: {
            goBack() {
                window.history.go(-1);
            },
            mailJum() {
                this.$router.push({name: 'MailIn',query: {
                        name: this.name,
                        img: this.img,
                        content: this.$route["query"]["content"]
                    }});
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
        font-size: .4rem !important;
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
    .mint-switch-core{
        height: .3rem !important;
    }
</style>