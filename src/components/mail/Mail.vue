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
                <mt-index-section :index="item.Letter" :key="item.id" v-for="item in section" @click.native="mailDetails(item)">
                    <mt-cell title>
                        <img :src="item.image" class="mail-img"  style="border-radius: 5px;"/>
                        <span style="margin-left: .1rem;color: #333333">{{item.name}}</span>
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
    import axios from 'axios'
    export default {
        name: "Mail",
        data() {
            return{
                topForm:[],
                lists: [],
                section: []
            }
        },
        methods: {
            jump(link) {
                this.$router.push({name: link});
            },
            mailDetails(value) {
                console.log(value)
            },
            getTopForm(){
                axios.get('/js/mail.json').then((res) => {
                    console.log(res.data)
                    this.topForm = res.data.topForm
                    this.section = res.data.section
                    this.lists = res.data.lists
                })
            }
        },
        mounted() {
            this.getTopForm();
        }
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