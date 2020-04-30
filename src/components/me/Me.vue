<template>
    <div class="me">
        <div class="me-main">
            <div class="main-me">
                <img class="main-me-img" src="../../../public/imgs/tx/me.jpg">
                <div class="main-me-right">
                    <span class="main-me-name">CC</span>
                    <span class="main-me-num">微信号：linshengchen00821</span>
                    <i class="iconfont icon-you find-item-right"></i>
                    <i class="iconfont icon-ico find-item-right"></i>
                </div>
            </div>
            <span class="me-clear"></span>
            <mt-cell-swipe            >
                <div class="me-item">
                    <span class="me-item-icon">
                        <svg aria-hidden="true" class="icon">
                            <use xlink:href="#icon-weixinzhifu"/>
                        </svg>
                    </span>
                    <span class="me-item-title">支付</span>
                    <i class="iconfont icon-you me-item-right"></i>
                </div>
            </mt-cell-swipe>
            <span class="me-clear"></span>
            <mt-cell-swipe
                    :key="item.id"
                    v-for="item in form"
            >
                <div class="me-item">
                    <span class="me-item-icon" style="display:block">
                        <svg aria-hidden="true" class="icon">
                            <use :xlink:href="item.icon"/>
                        </svg>
                    </span>
                    <span class="me-item-title">{{item.content}}</span>
                    <i class="iconfont icon-you me-item-right"></i>
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
    import axios from 'axios'
    export default {
        name: "Me",
        data() {
            return {
                form: [],
                lists: []
            }
        },
        methods: {
            jump(link) {
                this.$router.push({name: link});
            },
            getData(){
                axios.get('/js/me.json').then((res) =>{
                    this.form = res.data.form;
                    this.lists = res.data.lists
                })
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style scoped>
    @import '../../../public/css/me.css';

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