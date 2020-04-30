<template>
    <div class="chat">
        <mt-header title="">
            <router-link to="/home" slot="left">
                <mt-button class="head-title" icon="back">{{name}}</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="main">
            <div class="main-chat">
                <img class="main-chat-img" :src="img" alt="" width="30" height="30">
                <span class="main-chat-content">{{content}}</span>
            </div>
        </div>
        <div class="footer">
            <span class="chat-left-icon"><i class="iconfont icon-yuyin"></i></span>
            <input class="chat-mid-in" type="text" v-model="inputChat">
            <span class="chat-right-icon"><i class="iconfont icon-biaoqing1"></i></span>
            <span class="chat-right-icon"><i class="iconfont icon-tianjia"></i></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        data() {
            return{
                name: this.$route["query"]["name"],
                img: this.$route["query"]["img"],
                content: this.$route["query"]["content"],
                inputChat: ''
            }
        }
    }
</script>

<style scoped>
@import "../../../public/css/home.css";

    .icon-yuyin{
        font-size: .28rem !important;
    }
    .icon-tianjia,.icon-biaoqing1{
        font-size: .32rem !important;
        margin: 0;
    }
    .chat-right-icon{
        margin-left: .05rem;
    }
</style>