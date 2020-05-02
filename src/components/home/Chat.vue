<template>
    <div class="chat">
        <mt-header title="">
            <router-link to="" slot="left">
                <mt-button class="head-title" icon="back" @click="goBack">{{name}}</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="information"></mt-button>
        </mt-header>
        <div class="main">
            <div class="main-chat">
                <img class="main-chat-img" :src="img" alt="" width="30" height="30">
                <span class="main-chat-content">{{content}}</span>
            </div>
            <div class="main-chat" v-for="item in chatFriend" :key="item.id">
                <img class="main-chat-img-me" :src="item.img" width="30" height="30">
                <span class="main-chat-content-me">{{item.content}}</span>
            </div>
        </div>
        <div class="footer">
            <span class="chat-left-icon"><i class="iconfont icon-yuyin"></i></span>
            <input :class="chatInput" type="text" v-model="inputChat">
            <span class="chat-right-icon"><i class="iconfont icon-biaoqing1"></i></span>
            <span class="chat-right-icon" v-show="addIcon"><i class="iconfont icon-tianjia"></i></span>
			<div class="send-icon" v-show="sendIcon" @click="send">发送</div>
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
                chatFriend: [
                ],
                inputChat: '',
            }
        },
        computed: {
            addIcon: function(){
                let value = true;
                if(this.inputChat != ''){
                    value = false;
                }
                return value
            },
            sendIcon:  function () {
                let value = false
                if(this.inputChat != ''){
                    value = true
                }
                return value
            },
            chatInput: function () {
                let chat = 'chat-mid-in'
                if(this.inputChat != ''){
                    chat = 'chat-mid-in-send'
                }
                return chat
            }
        },
        methods: {
            information(){
                this.$router.push({name: 'ChatIn',query: {
                        name: this.name,
                        img: this.img
                    }});
            },
            send(){
                var obj = {};
                obj.img = require("../../../public/imgs/tx/cc.jpg");
                obj.content = this.inputChat
                this.chatFriend.push(obj);
                this.inputChat = ''
            },
            goBack() {
                window.history.go(-1);
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