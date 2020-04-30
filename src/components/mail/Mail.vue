<template>
    <div class="mail">
        <div class="header">
            <span class="head-title">通讯录</span>
            <span class="search-add">
                <i class="iconfont icon-sousuo"></i>
                <i class="iconfont icon-tianjia"></i>
            </span>
        </div>
        <div class="main">
            <mt-index-list>
                <mt-cell-swipe
                        :key="msg.id"
                        v-for="msg in topForm">
                    <div class="mail-main-top-item">
                        <svg aria-hidden="true" class="icon icon-top">
                            <use :xlink:href="msg.icon"/>
                        </svg>
                    </div>
                    <span class="mail-top-content">
                    {{msg.title}}
                </span>
                </mt-cell-swipe>
                <mt-index-section :index= "item.Letter" :key="item.id" v-for="item in section" @click.native="mailDetails(item)">
                    <mt-cell title v-for="mail in item.sub" :key="mail.id">
                        <img :src="mail.image" class="mail-img"  style="border-radius: 5px;"/>
                        <span style="margin-left: .1rem;color: #333333">{{mail.name}}</span>
                    </mt-cell>
                </mt-index-section>
            </mt-index-list>
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
        name: "Mail",
        data() {
            return{
                topForm: [
                    {
                        icon: "#icon-xinpengyou",
                        title: "新的朋友"
                    },
                    {
                        icon: "#icon-qunliaoicon",
                        title: "群聊"
                    },
                    {
                        icon: "#icon-biaoqian",
                        title: "标签"
                    },
                    {
                        icon: "#icon-tubiaozhizuomoban",
                        title: "公众号"
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
                        icon: "#icon-tongxunlu",
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
                ],
                section: [
                    {
                        Letter: "A",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/al.jpg"),
                                name: "艾伦",
                            },
                        ],
                    },
                    {
                        Letter: "B",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/bz.jpg"),
                                name: "bilibili",
                            }
                        ]
                    },
                    {
                        Letter: "C",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/cf.jpg"),
                                name: "陈峰",
                            },
                            {
                                image: require("../../../public/imgs/tx/ch.jpg"),
                                name: "陈赫",
                            },
                            {
                                image: require("../../../public/imgs/tx/cyx.jpg"),
                                name: "陈妍希",
                            },
                        ]
                    },
                    {
                        Letter: "D",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/dl.jpg"),
                                name: "大力",
                            }
                        ]
                    },
                    {
                        Letter: "E",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/er.jpg"),
                                name: "二狗子",
                            }
                        ]
                    },
                    {
                        Letter: "H",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/hyf.jpg"),
                                name: "胡一菲",
                            }
                        ]
                    },
                    {
                        Letter: "J",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/jw.jpg"),
                                name: "建文",
                            }
                        ]
                    },
                    {
                        Letter: "L",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/lzq.jpg"),
                                name: "吕子乔",
                            },
                            {
                                image: require("../../../public/imgs/tx/c.jpg"),
                                    name: "路人王北航(葱)",
                            }
                        ]
                    },
                    {
                        Letter: "M",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/mj.jpg"),
                                name: "美嘉",
                            },
                            {
                                image: require("../../../public/imgs/tx/mmf.jpg"),
                                name: "美貌与智慧并存的菲菲姐姐",
                            }
                        ]
                    },
                    {
                        Letter: "W",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/yl.jpg"),
                                name: "万恶的资本家琳姐"
                            }
                        ]
                    },
                    {
                        Letter: "Y",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/me.jpg"),
                                name: "遗失"
                            }
                        ]
                    },
                    {
                        Letter: "Z",
                        sub: [
                            {
                                image: require("../../../public/imgs/tx/zw.jpg"),
                                name: "张伟"
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            jump(link) {
                this.$router.push({name: link});
            },
            mailDetails(value) {
                console.log(value)
            },
            // getTopForm(){
            //     axios.get('/js/mail.json').then((res) => {
            //         console.log(res.data)
            //         this.topForm = res.data.topForm
            //         this.section = res.data.section
            //         this.lists = res.data.lists
            //     })
            // }
        },
        // mounted() {
        //     this.getTopForm();
        // }
    }
</script>

<style scoped>
    @import '../../../public/css/mail.css';

    .icon {
        width: .2rem;
        height: .2rem;
        border-radius: .05rem;
        line-height: .2rem;
        vertical-align: 0.5em;
        fill: currentColor;
        overflow: hidden;
    }
    .icon-top{
        width: 100%;
        height: 100%;
        border-radius: .05rem;
    }
    .iconfont{
        font-size: .18rem;
    }
</style>