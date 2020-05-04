<template>
    <div class="search">
        <div :class="searchHeader">
            <span class="sousuo"><i class="iconfont icon-sousuo"></i></span>
            <input :class="serachClass"
                   @keyup.enter="search"
                   placeholder="搜索"
                   type="text"
                   v-model="inputValue"
            >
            <span class="del"><i @click="delInput" class="iconfont icon-quxiao del-icon" v-show="inputValue"></i></span>
        </div>
        <span @click="clear" class="clearBtn" v-show="inputValue">取消</span>
        <div class="main">
            <mt-cell-swipe style="border-top: 1px solid #ededed" v-show="inputValue">
                <div class="home-item">
                    <svg aria-hidden="true" class="icon">
                        <use xlink:href="#icon-tianjiapengyou1"/>
                    </svg>
                    <span>查找手机/QQ号：</span><span class="serach-item-title">{{inputValue}}</span>
                </div>
            </mt-cell-swipe>
            <mt-cell-swipe style="border-top: 1px solid #ededed;margin-top: .05rem" v-show="inputValue">
                <div class="home-item">
                    <svg aria-hidden="true" class="icon">
                        <use xlink:href="#icon-souyisou"/>
                    </svg>
                    <span>搜一搜：</span><span class="serach-item-title-sou">{{inputValue}}</span>
                </div>
            </mt-cell-swipe>
            <div v-show="!inputValue">
                <h6 style="color: #7b8aa8;text-align: center">搜索指定内容</h6>
                <div class="search-msg">
                    <span>朋友圈</span>
                    <span>|</span>
                    <span>文章</span>
                    <span>|</span>
                    <span>公众号</span>
                    <span>小程序</span>
                    <span>|</span>
                    <span>音乐</span>
                    <span>|</span>
                    <span>表情</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                inputValue: '',
            }
        },
        computed: {
            searchHeader: function () {
                var headerName;
                if (this.inputValue) {
                    headerName = 'search-header1'
                } else {
                    headerName = 'search-header'
                }
                return headerName
            },
            serachClass: function () {
                var serachName;
                if (this.inputValue) {
                    serachName = 'serach-input'
                } else {
                    serachName = 'serach-input1'
                }
                return serachName
            }
        },
        methods: {
            search() {
                alert(this.inputValue)
            },
            delInput() {
                this.inputValue = ''
            },
            clear() {
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped>
    @import "../../../public/css/home.css";

    .icon {
        display: block;
        float: left;
        width: .4rem;
        height: .4rem;
        line-height: .2rem;
        margin: .05rem .05rem 0 -.1rem;
        vertical-align: 0.5em;
        fill: currentColor;
        overflow: hidden;
    }
    .iconfont{
        font-size: .18rem;
    }
    .icon-sousuo {
        display: block;
        float: left;
        font-size: .20rem;
        margin-top: .1rem;
    }
    .del-icon {
        display: block;
        float: left;
        font-size: .20rem;
        margin-top: .1rem;
    }
        span{
            display: block;
            float: left;
        }
</style>