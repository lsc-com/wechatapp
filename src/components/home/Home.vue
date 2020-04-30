<template>
    <div class="home">
        <div class="header">
            <span class="head-title">微信</span>
            <span class="search-add">
                <i class="iconfont icon-sousuo"></i>
                <i class="iconfont icon-tianjia"></i>
            </span>
        </div>
        <div class="main">
            <mt-cell-swipe
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
    import axios from 'axios'
    export default {
        name: "Home",
        data() {
            return {
                form: [],
                lists: []
            }
        },
        created() {
            this.rightButtons = [
                {
                    content: '删除该聊天',
                    style: {background: 'red', color: '#fff', lineHeight: '.8rem', padding: '0 .1rem'},
                    handler: () => this.$messagebox('确认删除')
                }
            ];
        },
        methods: {
            jumpToNeed(link) {
                this.$router.push({name: link});
            },
            getData() {
                axios.get('/js/home.json').then((res) =>{
                    this.form = res.data.form
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
    @import '../../../public/css/home.css';

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