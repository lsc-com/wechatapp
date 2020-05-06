<template>
    <div class="home">
        <div class="header">
            <span class="head-title">微信</span>
            <span class="search-add">
                <router-link to="/search"><i class="iconfont icon-sousuo"></i></router-link>
                <i class="iconfont icon-tianjia"></i>
            </span>
        </div>
        <div class="main">
            <mt-cell-swipe
                    @click.native="chat(msg)"
                    :key="msg.id"
                    :right="rightButtons"
                    v-for="msg in form">
                <div class="main-item">
                    <img :src="msg.image" alt height="30" style="border-radius: 5px;" width="30"/>
                    <div class="main-item-content">
                        <span class="main-item-title">{{msg.title}}</span>
                        <span class="main-item-time">{{msg.time}}</span>
                    </div>
                    <span class="main-item-home">{{msg.content}}</span>
                </div>
            </mt-cell-swipe>
        </div>
        <div class="footer">
            <mt-tabbar>
                <mt-tab-item :id="item.id" :key="item.id" @click.native="jumpToNeed(item.link)" v-for="item in lists">
                    <span style="display: block">
                        <svg aria-hidden="true" class="icon">
                            <use :xlink:href="item.icon"/>
                        </svg>
                    </span>
                    <span class="footer-id">{{item.name}}</span>
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'
    // import {Toast} from 'mint-ui';
    export default {
        name: "Home",
        data() {
            return {
                form: [
                    {
                        title: "大力(小宝贝)",
                        content: "爱你哟宝贝！",
                        image: require("../../../public/imgs/tx/dl.jpg"),
                        time: "刚刚"
                    },
                    {
                        title: "无敌伟大的姐姐大人",
                        content: "双皮奶真的是绝了",
                        image: require("../../../public/imgs/tx/mmf.jpg"),
                        time: "刚刚"
                    },
                    {
                        title: "万恶的资本家琳姐",
                        content: "一天天就知道吃",
                        image: require("../../../public/imgs/tx/yl.jpg"),
                        time: "刚刚"
                    },
                    {
                        title: "路人王(葱)",
                        content: "就晓得些",
                        image: require("../../../public/imgs/tx/c.jpg"),
                        time: "晚上9:00"
                    },
                    {
                        title: "bilibili",
                        content: "投稿通过了哟！",
                        image: require("../../../public/imgs/tx/bz.jpg"),
                        time: "晚上8:28"
                    },
                    {
                        title: "建文",
                        content: "你真是答分几啊！",
                        image: require("../../../public/imgs/tx/jw.jpg"),
                        time: "晚上8:28"
                    },
                    {
                        title: "陈赫",
                        content: "听说你和大力在一起了？",
                        image: require("../../../public/imgs/tx/ch.jpg"),
                        time: "晚上7:20"
                    },
                    {
                        title: "陈峰",
                        content: "6啊你",
                        image: require("../../../public/imgs/tx/cf.jpg"),
                        time: "下午4:16"
                    },
                    {
                        title: "艾伦",
                        content: "昨天创作的曲子真绝了",
                        image: require("../../../public/imgs/tx/al.jpg"),
                        time: "中午12:24"
                    },
                    {
                        title: "陈妍希",
                        content: "有女朋友吗/害羞",
                        image: require("../../../public/imgs/tx/cyx.jpg"),
                        time: "早上9:42"
                    },
                    {
                        title: "张伟",
                        content: "你赢了，我不配",
                        image: require("../../../public/imgs/tx/zw.jpg"),
                        time: "昨天1:53"
                    }
                ],
                lists: [
                    {
                        id: "tab1",
                        icon: "#icon-xiaoxi",
                        name: "微信",
                        link: "Home"
                    },
                    {
                        id: "tab2",
                        icon: "#icon-tongxunlu-yigai",
                        name: "通讯录",
                        link: "Mail"
                    },
                    {
                        id: "tab3",
                        icon: "#icon-faxian3",
                        name: "发现",
                        link: "Find"
                    },
                    {
                        id: "tab4",
                        icon: "#icon-wo1",
                        name: "我",
                        link: "Me"
                    }
                ]
                // form: [],
                // lists: []
            }
        },
        created() {
            this.rightButtons = [
                {
                    content: '删除该聊天',
                    style: {background: 'red', color: '#fff', lineHeight: '.8rem', padding: '0 .1rem'},
                    handler: () =>
                        this.$messagebox('您不是VIP用户不能执行此操作')

                }
            ];
        },
        methods: {
            jumpToNeed(link) {
                this.$router.push({name: link});
            },
            chat(value){
                this.$router.push({name: 'Chat',query: {
                    name: value.title,
                    img: value.image,
                    content: value.content
                }});
            }
        }
    }
</script>

<style scoped>
    @import '../../../public/css/home.css';
    .header{
        padding: 0 .15rem;
    }
    .icon {
        width: .2rem;
        height: .2rem;
        line-height: .2rem;
        vertical-align: 0.5em;
        fill: currentColor;
        overflow: hidden;
    }
    .iconfont{
        font-size: .18rem;
    }
</style>