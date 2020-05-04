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
            test() {
                var allCollege = [
                    { cid: 1, cname: "信息工程学院" },
                    { cid: 2, cname: "康复学院" },
                    { cid: 3, cname: "护理学院" }
                ]
                var allGrade = [
                    { cid: 1, gid: 1, grade: 2018 },
                    { cid: 1, gid: 2, grade: 2019 },
                    { cid: 1, gid: 3, grade: 2020 },
                    { cid: 2, gid: 1, grade: 2018 },
                    { cid: 2, gid: 2, grade: 2019 },
                    { cid: 2, gid: 3, grade: 2020 },
                    { cid: 3, gid: 1, grade: 2018 },
                    { cid: 3, gid: 2, grade: 2019 },
                    { cid: 3, gid: 3, grade: 2020 }
                ]
                var allClass = [
                    { cid: 1, gid: 1, clid: 1, classes: "18物联网" },
                    { cid: 1, gid: 1, clid: 1, classes: "18生工" },
                    { cid: 1, gid: 1, clid: 1, classes: "18生信" }
                ]



                var colleges = []
                // var grades
                // var classes
                console.log(allCollege[0].cid)
                console.log(allCollege.length)
                for (var i = 0; i < allCollege.length; i++) {
                    for (var j = 0; j < allGrade.length;j++) {
                        if (allCollege[i].cid == allGrade[j].cid) {
                            var _json = {}
                            let grade = []
                            _json.cid = allCollege[i].cid
                            _json.cname = allCollege[i].cname
                            _json.grade = grade
                            grade.grade = allGrade[j].grade
                            grade.classes = []
                            colleges.push(_json)
                            for (var n = 0; n < allClass.length; n++){
                                if (allGrade[j].cid == allClass[n].cid && allGrade[j].gid == allClass[n].gid){
                                    grade.classes.push(allClass[n].classes)
                                }
                            }
                            console.log(allCollege[i].cid)
                            console.log(_json)
                        }

                    }
                }
                console.log(colleges)
            }
        },
        mounted() {  //生命周期钩子函数 挂载完成
            this.autoPlay();
            this.test()
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
        background-color: #04be02;
    }

    .adv_begin {
        height: 100%;
        width: 100%;
        color: aliceblue;
        background: url(../../public/imgs/adv.jpg) no-repeat center center;
        background-size: 100% 100%;
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