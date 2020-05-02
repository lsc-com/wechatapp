<template>
    <div class="login">
        <div class="adv_begin" v-show="a">
            <div @click="jump()" class="adv_time"><b>{{time}}</b></div>
        </div>
        <div class="outer">
            <span class="login-title">登录</span>
            <input placeholder="请输入用户名" type="text" v-model="username"><br>
            <input placeholder="请输入密码" type="password" v-model="password"><br>
            <div class="login-btn" @click="login">登录</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {Toast} from 'mint-ui';
    import "../../public/css/login.css";

    export default {
        name: "Login",
        data() {
            return {
                name:'',
                a: true,  //控制广告显示隐藏
                time: 5,  //广告时间
                timer: null, //清除计时器
                username: '',
                password: ''
            }
        },
        methods: {
            autoPlay() {  //自动运行
                //调用play()函数
                this.timer = setInterval(this.play, 1000);
            },
            play() {  //时间自减，实现倒计时
                this.time--;
                if (this.time == 0) {
                    this.clean()
                }
            },
            jump() {  //点击跳转
                this.clean()
            },
            clean() {
                this.a = false;
                clearInterval(this.timer);
            },
            login() {
                const _this = this
                axios.post('http://rap2.taobao.org:38080/app/mock/252840/WeChat/Login',{
                    username: this.username,
                    password: this.password
                }).then((res) =>{
                    console.log(res)
                    console.log(_this.username)
                        if (res.data.token == "true"){
                            Toast({
                                message: '登录成功',
                                duration: 1000});
                            this.$router.push("/home");
                        }else {
                            Toast('用户名密码不匹配');
                        }
                })
            },
        },
        mounted() {  //生命周期钩子函数 挂载完成
            this.autoPlay();
        },
        destroyed() {
            clearInterval(this.timer);
        },
    }
</script>

<style scoped>
    input {
        margin: .2rem 0;
        height: .3rem;
        border: none;
        border-bottom: 0.01rem solid #ccc;
        width: 3.07rem;
        outline: none;
        font-size: .16rem;
    }

    .login-btn {
        height: .45rem;
        width: 3.07rem;
        line-height: .45rem;
        margin: .2rem auto;
        border-radius: 0.03rem;
        font-size: .18rem;
        color: #fff;
        background-color: #0bbe06;
    }

    .adv_begin {
        height: 100%;
        width: 100%;
        color: aliceblue;
        background: url(../../public/imgs/adv.jpg) no-repeat;
        background-size: cover;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }

    .adv_time {
        position: relative;
        float: right;
        top: 20px;
        right: 20px;
        background: #222222b0;
        padding: 5px;
        height: 30px;
        width: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
    }
</style>