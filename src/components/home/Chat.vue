<template>
    <div class="chat">
        <div class="header">
            <mt-header title="">
                <router-link to="/home" slot="left">
                    <mt-button class="head-title" icon="back">{{name}}</mt-button>
                </router-link>
                <mt-button icon="more" slot="right" @click="information"></mt-button>
            </mt-header>
        </div>
        <div class="main" id="dialogue_box">
            <div class="main-chat" v-show="content">
                <img class="main-chat-img" :src="img" alt="" width="30" height="30" @click="friendIn">
                <span class="main-chat-content">{{content}}</span>
            </div>
            <div class="main-chat" v-for="item in filterFriend" :key="item.id">
                <img class="main-chat-img-me" :src="item.img" width="30" height="30">
                <span class="main-chat-content-me">{{item.content}}</span>
            </div>
        </div>
        <div class="footer">
            <span class="chat-left-icon" @click="yuyin = !yuyin">
                <i class="iconfont icon-yuyin1" v-show="yuyin"></i>
                <i class="iconfont icon-dazi" v-show="!yuyin"></i>
            </span>
            <input v-show="yuyin" :class="chatInput" type="text" v-model="inputChat" @keyup.enter="sended">
            <div v-show="!yuyin" :class="chatInput" style="text-align: center;background: #fff"><span style="margin-top: .08rem;display: block" @click="fail">请按住说话</span></div>
            <span class="chat-right-icon"><i class="iconfont icon-biaoqing1"></i></span>
            <span class="chat-right-icon" v-show="addIcon"><i class="iconfont icon-tianjia"></i></span>
			<div class="send-icon" v-show="sendIcon" @click="sended">发送</div>
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        name: "Chat",
        data() {
            return{
                name: this.$route["query"]["name"],
                img: this.$route["query"]["img"],
                content: this.$route["query"]["content"],
                filterFriend: [],
                chatFriend: JSON.parse(window.localStorage.getItem('chatFriend_key') || '[]'),
                inputChat: '',
				timer:'',
                yuyin: false
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
        watch: {
            chatFriend: {
                deep: true,
                handler:function (value) {
                    window.localStorage.setItem('chatFriend_key', JSON.stringify(value))
                }
            }
        },
        methods: {
            information(){
                this.$router.push({name: 'ChatIn',query: {
					name: this.name,
					img: this.img,
					content: this.$route["query"]["content"]
				}});
            },
            sended(){
                var obj = {};
                obj.name = this.name
                obj.img = require("../../../public/imgs/tx/cc.jpg");
                obj.content = this.inputChat
                this.chatFriend.push(obj);
                this.inputChat = ''
				this.timer = setInterval(this.filterFriends, 1);
            },
            friendIn() {
                this.$router.push({name: 'MailIn',query: {
					name: this.name,
					img: this.img,
					content: this.$route["query"]["content"],
				}});
            },
            filterFriends(){
                const _this = this
                let oldValue = _this.chatFriend
                var newArray = []
                for (var i = 0; i< oldValue.length; i ++){
                    if (_this.name == oldValue[i].name){
                        newArray.push(oldValue[i])
                    }
                }
                this.filterFriend = newArray
				clearInterval(this.timer);
				this.updated()
            },
			//每次页面渲染完之后滚动条在最底部
			updated(){
				this.$nextTick(function(){
					var div = document.getElementById('dialogue_box');
					div.scrollTop = 99999999999999999999999;
				})
			},
            fail() {
                Toast({
                    message: 'VIP会员专享，可选择文字聊天',
                    duration: 1000
                });
                this.updated()
            }
        },
        mounted() {
            this.timer = setInterval(this.filterFriends, 2);
            // this.timer = setInterval(this.updated, 2);
        },
		beforeDestroy() {
			clearInterval(this.timer);
		}
    }
</script>

<style scoped>
@import "../../../public/css/home.css";

    .icon-yuyin1,.icon-dazi{
        font-size: .29rem !important;
    }
    .icon-tianjia,.icon-biaoqing1{
        font-size: .32rem !important;
        margin: 0;
    }
    .chat-right-icon{
        margin-left: .05rem;
    }
    .mint-toast is-placemiddle{
        width: 70% !important;
    }
    .mint-toast-text{
        width: 70% !important;
    }
.mint-toast{
    width: 70% !important;
}
</style>