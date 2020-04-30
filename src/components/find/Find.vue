<template>
    <div class="find">
        <div class="header">
            <span class="head-title">发现</span>
            <span class="search-add">
                <i class="iconfont icon-sousuo"></i>
                <i class="iconfont icon-tianjia"></i>
            </span>
        </div>
        <div class="main">
            <mt-cell-swipe>
                <div class="find-item">
                    <span class="find-item-icon">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-pengyouquan"/>
                        </svg>
                    </span>
                    <span class="find-item-title">朋友圈</span>
                    <i class="iconfont icon-you find-item-right"></i>
                </div>
            </mt-cell-swipe>
            <span class="find-clear"></span>
            <mt-cell-swipe
                    :key="item.id"
                    v-for="item in form"
            >
                <div class="find-item">
                    <span class="find-item-icon" style="display:block">
                        <svg aria-hidden="true" class="icon">
                            <use :xlink:href="item.icon"/>
                        </svg>
                    </span>
                    <span class="find-item-title">{{item.content}}</span>
                    <i class="iconfont icon-you find-item-right"></i>
                </div>
            </mt-cell-swipe>
            <span class="find-clear"></span>
            <mt-cell-swipe>
                <div class="find-item">
                    <span class="find-item-icon">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-xiaochengxu"/>
                        </svg>
                    </span>
                    <span class="find-item-title">小程序</span>
                    <i class="iconfont icon-you find-item-right"></i>
                </div>
            </mt-cell-swipe>
        </div>
        <div class="footer">
            <mt-tabbar>
                <mt-tab-item :id="item.id" :key="item.id" @click.native="jump(item.link)" v-for="item in lists">
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
    export default {
        name: "Find",
        data() {
            return {
                form: [
                    {
                        content: "扫一扫",
                        icon: "#icon-saoyisao"
                    },
                    {
                        content: "游戏",
                        icon: "#icon-youxi"
                    },
                    {
                        content: "搜一搜",
                        icon: "#icon-souyisou"
                    },
                    {
                        content: "附近的人",
                        icon: "#icon-fujinderen"
                    },
                    {
                        content: "购物",
                        icon: "#icon-gouwu-"
                    }
                ],
                lists: [
                    {
                        id: "tab1",
                        icon: "#icon-weixinxiaoxi",
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
                        icon: "#icon-faxian1",
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
            }
        },
        methods: {
            jump(link) {
                this.$router.push({name: link});
            },
            // getForm(){
            //     axios.get('/js/find.json').then((res) =>{
            //         this.form = res.data.form
            //         this.lists = res.data.lists
            //     })
            // }
        },
        // mounted() {
        //     this.getForm();
        // }
    }
</script>

<style scoped>
    @import '../../../public/css/find.css';

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