<template>
    <div class="mailIn">
        <div class="header">
            <mt-header title="">
                <router-link slot="left" to="">
                    <mt-button @click="goBack" class="head-title" icon="back"></mt-button>
                </router-link>
                <mt-button @click="information" icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="main">
            <div class="main-mail">
                <img :src="img" class="main-mail-img">
                <div class="main-mail-right">
                    <span class="main-mail-name">{{name}}
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-nv"></use>
                        </svg>
                    </span>
                    <span class="main-mail-num">昵称：********</span>
                    <span class="main-mail-num">微信号：********</span>
                    <span class="main-mail-num">地区：********</span>
                </div>
            </div>
            <mt-cell-swipe style="border-top: 1px solid #ededed">
                <div class="home-item">
                    <span class="chat-item-title">设置备注和标签</span>
                    <i class="iconfont icon-you chat-item-right"></i>
                </div>
            </mt-cell-swipe>
            <mt-cell-swipe style="border-top: 1px solid #ededed">
                <div class="home-item">
                    <span class="chat-item-title">朋友权限</span>
                    <i class="iconfont icon-you chat-item-right"></i>
                </div>
            </mt-cell-swipe>
            <span class="mail-clear"></span>
            <mt-cell-swipe style="border-top: 1px solid #ededed">
                <div class="home-item">
                    <span class="chat-item-title">朋友圈</span>
                    <i class="iconfont icon-you chat-item-right"></i>
                </div>
            </mt-cell-swipe>
            <mt-cell-swipe style="border-top: 1px solid #ededed">
                <div class="home-item">
                    <span class="chat-item-title">更多信息</span>
                    <i class="iconfont icon-you chat-item-right"></i>
                </div>
            </mt-cell-swipe>
            <span class="mail-clear"></span>
            <mt-cell-swipe style="border-top: 1px solid #ededed;text-align: center;">
                <div @click="msgJum" class="home-item" style="color: #7b8aa8;max-width: 100%">
                    <svg aria-hidden="true" class="msg-icon">
                        <use xlink:href="#icon-xiaoxi1"></use>
                    </svg>
                    <span class="mail-item-msg">发消息</span>
                </div>
            </mt-cell-swipe>
            <mt-cell-swipe style="border-top: 1px solid #ededed;text-align: center;">
                <div class="home-item" style="color: #7b8aa8;max-width: 100%">
                    <svg aria-hidden="true" class="msg-icon" style="margin: .15rem .1rem .15rem 1.15rem;">
                        <use xlink:href="#icon-shipin"></use>
                    </svg>
                    <span class="mail-item-msg">音视频通话</span>
                </div>
            </mt-cell-swipe>

            <mt-popup
                    position="bottom"
                    style="width: 100%;border-radius: .1rem"
                    v-model="popupVisible">

                <mt-cell-swipe style="border-radius: .1rem">
                    <div
                            style="width: 100%;text-align: center;color: #303133;border-top-radius:.1rem">
                        <span class="mail-item-title">设置备注和标签</span>
                    </div>
                </mt-cell-swipe>
                <mt-cell-swipe>
                    <div class="mail-item" style="width: 100%;text-align: center;color: #303133">
                        <span class="mail-item-title">把他/她推荐给朋友</span>
                    </div>
                </mt-cell-swipe>
                <mt-cell-swipe>
                    <div class="mail-item" style="width: 100%;text-align: center;color: #303133">
                        <span class="mail-item-title">设为星标朋友</span>
                    </div>
                </mt-cell-swipe>
                <mt-cell-swipe>
                    <div class="mail-item" style="width: 100%;text-align: center;color: #303133">
                        <span class="mail-item-title">朋友权限</span>
                    </div>
                </mt-cell-swipe>
                <mt-cell-swipe>
                    <div class="mail-item" style="width: 100%;text-align: center;color: #303133">
                        <span class="mail-item-title">加入黑名单</span>
                    </div>
                </mt-cell-swipe>
                <mt-cell-swipe>
                    <div class="mail-item" style="width: 100%;text-align: center;color: #303133">
                        <span class="mail-item-title">投诉</span>
                    </div>
                </mt-cell-swipe>
                <mt-cell-swipe>
                    <div class="mail-item" style="width: 100%;text-align: center;color: #303133">
                        <span class="mail-item-title">添加到桌面</span>
                    </div>
                </mt-cell-swipe>
                <mt-cell-swipe>
                    <div class="mail-item" style="width: 100%;text-align: center;color: #303133">
                        <span class="mail-item-title">删除</span>
                    </div>
                </mt-cell-swipe>
                <span style="height: .1rem;display: block;background: #ededed"></span>
                <mt-cell-swipe>
                    <div @click="information" class="mail-item" style="width: 100%;text-align: center;color: #303133">
                        <span class="mail-item-title">取消</span>
                    </div>
                </mt-cell-swipe>
            </mt-popup>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MailIn",
        data() {
            return {
                name: this.$route["query"]["name"],
                img: this.$route["query"]["img"],
                popupVisible: false
            }
        },
        methods: {
            goBack() {
                window.history.go(-1);
            },
            information() {
                this.popupVisible = !this.popupVisible
            },
            msgJum() {
                this.$router.push({
                    name: 'Chat', query: {
                        name: this.name,
                        img: this.img,
                        content: this.$route["query"]["content"]
                    }
                });
            }
        }
    }
</script>

<style scoped>
    @import "../../../public/css/mail.css";

    .mint-header {
        background: #fff !important;
    }

    .icon {
        float: right;
        width: .2rem;
        height: .2rem;
        border-radius: .05rem;
        line-height: .2rem;
        vertical-align: 0.5em;
        fill: currentColor;
        overflow: hidden;
    }

    .msg-icon {
        width: .2rem;
        height: .2rem;
        display: block;
        float: left;
        margin: .15rem .1rem .15rem 1.3rem;
        color: #7b8aa8;
        vertical-align: 0.5em;
        fill: currentColor;
        overflow: hidden;
    }

    .iconfont {
        font-size: .18rem;
    }
</style>